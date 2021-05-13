<template>
    <div class="ix-tabpane" :class="{disabled:disabled, selected: $parent.thisValue == name}">
      <slot></slot>
    </div>
</template>

<script>
    export default {
      name: "ix-tabpane",
      props: {
        icon: String,
        disabled: Boolean,
        label: String,
        name: String
      },
      data () {
        return {
        }
      },
    }
</script>
