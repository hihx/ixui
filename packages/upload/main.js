import Upload from "./Upload";
import UploadList from "./Upload-list";
import {ajax} from './ajax'

class FileData {
  constructor(file, uploaded) {
    this.fid = new Date().getTime()
    this.name = file && file.name
    this.raw = file
    this.uploaded = uploaded ? 100 : 0
    this.hover = false
    this.url = file ? URL.createObjectURL(file) : null
  }
}

export default {
  name: "ix-upload",
  props: {
    action: {
      type: String,
      default: null
    },
    headers: {
      type: String,
      default: null
    },
    multiple: Boolean,
    data: {
      type: Object,
      default: null
    },
    name: {
      type: String,
      default: 'file'
    },
    'withCredentials': String,
    'showFileList': {
      type: Boolean,
      default:true
    },
    drag: Boolean,
    accept: {
      type: String,
      default: null
    },
    'beforeUpload':{
      type: Function,
      defalut: null
    },
    'beforeRemove':{
      type: Function,
      defalut: null
    },
    // text/picture/picture-card
    'listType':{
      type: String,
      default: 'text'
    },
    'autoUpload': {
      type: Boolean,
      default:true
    },
    'fileList': {
      type: Array,
      default: null
    },
    'httpRequest': {
      type: Function,
      default: ajax
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: null
    }
  },
  provide() {
    return {
      rootUpload: this
    };
  },
  data () {
    return {
      thisFiles: null
    }
  },
  render () {
    const upload = <Upload>{this.$slots.trigger || this.$slots.default}</Upload>
    const data = {
      class: [
        this.disabled ? 'disabled' : '',
        'ix-upload_list_' + this.listType
      ]
    }
    const uploadList = this.showFileList ? (<UploadList>{
      (props) => {
        if (this.$scopedSlots.file) {
          return this.$scopedSlots.file({
            file: props.file
          });
        }
      }
    }</UploadList>) : null

    return (
      <div {...data}>
        {this.listType == 'picture-card' ? uploadList : null}
        {this.$slots.trigger ? [upload, this.$slots.default] : upload}
        {this.$slots.tip}
        {this.listType == 'picture-card' ? null : uploadList}
      </div>
    )
  },
  mounted() {
    if (this.fileList) {
      const list = []
      this.fileList.forEach(f => {
        list.push(Object.assign(new FileData(null, 100), f))
      })
      this.thisFiles = list
    }
  },
  methods: {
    addFile (file) {
      if (!this.thisFiles) this.thisFiles = []
      const f = new FileData(file)
      this.thisFiles.push(f)
      return f
    },
    removeFile (file) {
      const func_remove = () => {
        if (file.ajax) file.ajax.abort()
        file.ajax = null
        file.raw = null
        this.thisFiles.splice(this.thisFiles.indexOf(file), 1)
      }
      if (this.beforeRemove != null) {
        const result = this.beforeRemove(file, this.thisFiles)
        if (result && result.then) {
          result.then(() => {
            func_remove();
          }, () => {});
        }
      }
      else func_remove()
    },
    post (file) {
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file.raw,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, file);
        },
        onSuccess: res => {
          this.handleSuccess(res, file);
        },
        onError: err => {
          this.handleError(err, file);
        }
      }
      file.ajax = this.httpRequest(options)
      if (file.ajax && file.ajax.then) {
        file.ajax.then(options.onSuccess, options.onError);
      }
    },
    handleProgress(ev, file) {
      file.uploaded = ev.percent || 0
      this.$emit('progress', ev.percent, file, file.raw)
    },
    handleSuccess(res, file) {
      file.uploaded = 100
      this.$emit('success', res, file, this.thisFiles || [])
      this.$emit('change', file, this.thisFiles || [])
    },
    handleError(err, file) {
      file.uploaded = -1
      this.$emit('error', err, file, this.thisFiles || [])
      this.$emit('change', file, this.thisFiles || [])
    },
    clearFiles () {
      this.abort()
      this.thisFiles = null
    },
    abort () {
      this.thisFiles.forEach(f => {
        if (f.ajax) f.ajax.abort()
      })
    },
    submit () {
      this.thisFiles.forEach(f => {
        if (f.uploaded > -1 && f.uploaded < 100) this.post(f)
      })
    }
  }
}
