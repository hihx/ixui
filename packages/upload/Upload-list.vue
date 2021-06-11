<template>
  <ul class="ix-upload_list">
    <transition-group name="slide-fade">
      <li class="ix-upload_list_li flex" v-for="(item, i) in $parent.thisFiles" :key="item.fid" @mouseenter="item.hover = true" @mouseleave="item.hover = false">
        <slot :file="item">
          <img class="ix-upload_list_img" :src="item.url" @click="$parent.$emit('preview', item)"/>
          <i class="ix-icon-pic"></i>
          <a class="ix-upload_list_lbl f1" v-text="item.name" @click="$parent.$emit('preview', item)"></a>
          <span class="ix-upload_list_btns">
            <a class="ix-icon-viewlarger" @click="$parent.$emit('preview', item)" v-show="is_pic"></a>
            <a class="ix-icon-error ix-error" @click="$parent.removeFile(item)"></a>
          </span>
        </slot>
        <i class="ix-icon-warning-fill ix-error" v-show="item.uploaded == -1"></i>
        <a class="ix-icon-success ix-success" v-show="success_visible(item)"></a>
        <transition name="fade">
          <ix-progress :showText="false" :percentage="item.uploaded" v-show="item.uploaded != 100"></ix-progress>
        </transition>
      </li>
    </transition-group>
  </ul>
</template>
<script>
  export default {
    name: "ix-upload-list",
    computed: {
      is_pic () {
        return this.$parent.listType == 'picture-card'
      },
      success_visible () {
        return (item) => {
          return item.uploaded == 100 && (this.is_pic || !item.hover)
        }
      }
    }
  }
</script>
