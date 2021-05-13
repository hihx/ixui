<template>
    <button class="ix-button" @click="$emit('click', $event)" :disabled="disabled" :type="nativeType"
            :class="[
         size ? 'ix-'+size : null,
         type ? 'ix-'+type : null,
         plain ? 'ix-plain' : null,
         round ? 'ix-round' : null,
         circle ? 'ix-circle' : null,
         group ? 'ix-group ix-group-'+group : null]">
      <i v-if="icon || loading" class="ix-icon" :class="loading ? 'ix-icon-loading' : icon"></i>
      <slot></slot>
    </button>
</template>

<script>
    export default {
      name: "ix-button",
      props: {
        icon: String,
        disabled: Boolean,
        type: {
          type: String,
          default: 'default'
        },
        size: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        group: String,
        loading: Boolean,
        nativeType: {
          type: String,
          default: 'button'
        }
      }
    }
</script>
