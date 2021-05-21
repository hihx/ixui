# Upload 上传
----
### 基础用法

<div class="demo-block">
  <ix-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  @preview="handlePreview"
  @remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  @exceed="handleExceed"
  accept="*.jpg"
  :file-list="fileList">
    <ix-button size="small" type="primary">点击上传</ix-button>
    <div slot="tip" class="ix-upload_tip">只能上传jpg/png文件，且不超过500kb</div>
  </ix-upload>
</div>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        imageUrl: '',
        disabled: false,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>

::: demo
```html
<ix-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  @preview="handlePreview"
  @remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  @exceed="handleExceed"
  accept="*.jpg"
  :file-list="fileList">
  <ix-button size="small" type="primary">点击上传</ix-button>
  <div slot="tip" class="ix-upload_tip">只能上传jpg/png文件，且不超过500kb</div>
</ix-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
```
:::

### 用户头像上传
使用 `before-upload` 限制用户上传的图片格式和大小。
<div class="demo-block">
  <ix-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    @success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="ix-icon-add-select avatar-uploader-icon"></i>
  </ix-upload>
</div>

<style>
  .avatar-uploader .ix-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .ix-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

::: demo
```html
<ix-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  @success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="ix-icon-add-select avatar-uploader-icon"></i>
</ix-upload>

<style>
  .avatar-uploader .ix-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .ix-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
```
:::

### 照片墙
使用 `list-type` 属性来设置文件列表的样式。
<div class="demo-block">
<ix-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  @preview="handlePictureCardPreview"
  @remove="handleRemove">
  <i class="ix-icon-add-select"></i>
</ix-upload>
<ix-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</ix-dialog>
</div>

::: demo
```html
<ix-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  @preview="handlePictureCardPreview"
  @remove="handleRemove">
  <i class="ix-icon-add-select"></i>
</ix-upload>
<ix-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</ix-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
```
:::

### 文件缩略图
使用 `scoped-slot` 去设置缩略图模版。
<div class="demo-block">
<ix-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="ix-icon-add-select"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="ix-upload_list_img"
        :src="file.url" alt="" @click="handlePictureCardPreview(file)"
      >
      <span class="ix-upload_list_btns">
        <span
          @click="handlePictureCardPreview(file)"
        >
          <i class="ix-icon-viewlarger"></i>
        </span>
        <span
          v-if="!disabled"
          @click="handleDownload(file)"
        >
          <i class="ix-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          @click="handleRemove(file)"
        >
          <i class="ix-icon-ashbin"></i>
        </span>
      </span>
    </div>
</ix-upload>
<ix-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</ix-dialog>
</div>

::: demo
```html
<ix-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
  <i slot="default" class="ix-icon-add-select"></i>
  <div slot="file" slot-scope="{file}">
    <img
      class="ix-upload_list_img"
      :src="file.url" alt="" @click="handlePictureCardPreview(file)"
    >
    <span>
        <span
          @click="handlePictureCardPreview(file)"
        >
          <i class="ix-icon-viewlarger"></i>
        </span>
        <span
          v-if="!disabled"
          @click="handleDownload(file)"
        >
          <i class="ix-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          @click="handleRemove(file)"
        >
          <i class="ix-icon-ashbin"></i>
        </span>
      </span>
  </div>
</ix-upload>
<ix-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</ix-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### 图片列表缩略图
使用 `list-type` 属性来设置文件列表的样式。
<div class="demo-block">
<ix-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  @preview="handlePreview"
  @remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <ix-button size="small" type="primary">点击上传</ix-button>
  <div slot="tip" class="ix-upload_tip">只能上传jpg/png文件，且不超过500kb</div>
</ix-upload>
</div>

::: demo
```html
<ix-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  @preview="handlePreview"
  @remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <ix-button size="small" type="primary">点击上传</ix-button>
  <div slot="tip" class="ix-upload_tip">只能上传jpg/png文件，且不超过500kb</div>
</ix-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### 拖拽上传
使用 `list-type` 属性来设置文件列表的样式。
<div class="demo-block">
<ix-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="ix-icon-upload"></i>
  <div class="ix-upload_text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="ix-upload_tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</ix-upload>
</div>

::: demo
```html
<ix-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="ix-icon-upload"></i>
  <div class="ix-upload_text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="ix-upload_tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</ix-upload>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|action|	必选参数，上传的地址|	string	|—|	—|
|headers	|设置上传的请求头部|	object	|—	|—|
|multiple	|是否支持多选文件|	boolean|	—|	—|
|data	|上传时附带的额外参数|	object	|—	|—|
|name	|上传的文件字段名	|string	|—	|file|
|with-credentials	|支持发送 cookie 凭证信息|	boolean|	—	|false|
|show-file-list	|是否显示已上传文件列表|	boolean	|—|	true|
|drag	|是否启用拖拽上传|	boolean|	—	|false|
|accept	|接受上传的文件类型（thumbnail-mode 模式下此参数无效）|	string|	—|	—|
|before-upload|	上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。	|function(file)|	—	|—|
|before-remove|	删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。|	function(file, fileList)|	—|	—|
|list-type|	文件列表的类型|	string	|text/picture/picture-card	|text|
|auto-upload	|是否在选取文件后立即进行上传|	boolean|	—	|true|
|file-list	|上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]|	array	|—	|[]|
|http-request	|覆盖默认的上传行为，可以自定义上传的实现|	function	|—	|—|
|disabled|	是否禁用|	boolean	|—	|false|
|limit|	最大允许上传个数	|number	|—|	—|

### Slot
| name      | 说明    |
|---------- |-------- |
|trigger	|触发文件选择框的内容|
|tip	|提示说明文字|

### Events 回调函数
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
|preview|	点击文件列表中已上传的文件时的钩子	|function(file)	|—|	—|
|remove	|文件列表移除文件时的钩子	|function(file, fileList)|	—|	—|
|success	|文件上传成功时的钩子	|function(response, file, fileList)	|—|	—|
|error	|文件上传失败时的钩子|	function(err, file, fileList)	|—	|—|
|progress|	文件上传时的钩子|	function(event, file, fileList)|	—|	—|
|change|	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用	|function(file, fileList)|	—|	—|
|exceed	|文件超出个数限制时的钩子	|function(files, fileList)|	—	|-|

### Methods
| 方法名      | 说明    | 参数    |
|---------- |-------- |-------- |
|clearFiles	|清空已上传的文件列表（该方法不支持在 before-upload 中调用）|	—|
|abort|	取消上传请求	|（ file: fileList 中的 file 对象 ）|
|submit	|手动上传文件列表|	—|
