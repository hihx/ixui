
<script>
import uploadDrag from './Upload-drag'
  export default {
    name: "ix-upload",
    components: {uploadDrag},
    data () {
      return {
      }
    },
    render () {
      const data = {
        class: 'ix-upload',
        on: {
          "click": this.handleClick
        }
      }
      return (
        <div {...data}>
          {this.$parent.drag ? <uploadDrag on-file={this.uploadFiles}>{this.$slots.default}</uploadDrag> : this.$slots.default}
          <input class="ix-upload_input" type="file" ref="input" name={this.$parent.name} on-change={this.handleChange} multiple={this.$parent.multiple} accept={this.$parent.accept}/>
        </div>
      )
    },
    methods: {
      handleClick () {
        if (!this.$parent.disabled) {
          this.$refs.input.value = null
          this.$refs.input.click()
        }
      },
      handleChange (event) {
        this.uploadFiles(event.target.files)
      },
      uploadFiles (files) {
        if (!files || files.length == 0) return
        if (this.$parent.limit && (this.$parent.thisFiles.length >= this.$parent.limit)) {
          this.$parent.$emit('exceed', files, this.$parent.thisFiles || [])
          return
        }
        files = Array.prototype.slice.call(files);
        files.forEach(f => {
          const file = this.$parent.addFile(f)
          if (this.$parent.autoUpload) this.upload(file)
        })
        this.$parent.$emit('change', files, this.$parent.thisFiles || [])
      },
      upload (file) {
        if (this.$parent.beforeUpload != null) {
          const result = this.$parent.beforeUpload(file.raw)
          if (result && result.then) {
            result.then(processedFile => {
              const fileType = Object.prototype.toString.call(processedFile);

              if (fileType === '[object File]' || fileType === '[object Blob]') {
                if (fileType === '[object Blob]') {
                  processedFile = new File([processedFile], file.raw.name, {
                    type: file.raw.type
                  });
                }
                for (const p in file) {
                  if (file.hasOwnProperty(p)) {
                    processedFile[p] = file[p];
                  }
                }
                this.$parent.post(processedFile);
              } else {
                this.$parent.post(file);
              }
            }, () => {
              this.$parent.removeFile(file);
            });
          } else if (result !== false) {
            this.$parent.post(file);
          } else {
            this.$parent.removeFile(file);
          }
        } else this.$parent.post(file)
      }
    }
  }
</script>
