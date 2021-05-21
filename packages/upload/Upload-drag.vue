<template>
  <div class="ix-upload-drag" :class="{ 'is-dragover': dragover }"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="dragover = false">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "ix-upload-drag",
    inject: ['rootUpload'],
    data() {
      return {
        dragover: false
      };
    },
    methods: {
      onDragover() {
        if (!this.rootUpload.disabled) {
          this.dragover = true
        }
      },
      onDrop (e) {
        if (this.rootUpload.disabled) return;
        const accept = this.rootUpload.accept;
        this.dragover = false;
        if (!accept) {
          this.$emit('file', e.dataTransfer.files);
          return;
        }
        this.$emit('file', [].slice.call(e.dataTransfer.files).filter(file => {
          const { type, name } = file;
          const extension = name.indexOf('.') > -1
            ? `.${ name.split('.').pop() }`
            : '';
          const baseType = type.replace(/\/.*$/, '');
          return accept.split(',')
            .map(type => type.trim())
            .filter(type => type)
            .some(acceptedType => {
              if (/\..+$/.test(acceptedType)) {
                return extension === acceptedType;
              }
              if (/\/\*$/.test(acceptedType)) {
                return baseType === acceptedType.replace(/\/\*$/, '');
              }
              if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
                return type === acceptedType;
              }
              return false;
            });
        }));
      }
    }
  }
</script>
