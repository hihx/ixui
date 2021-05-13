<template>
  <div>
    <slot name="header"></slot>
    <slot :row="{}"></slot>
  </div>
</template>

<script>
    export default {
      name: "ix-table-column",
      props: {
        prop: {
          type: String,
          default: ''
        },
        label: {
          type: String,
          default: ''
        },
        width: {
          type: [Number, String],
          default: null
        },
        fixed: Boolean,
        type: {
          type: String,
          default: ''
        },
        sortable: Boolean,
        formatter: null,
        filter: Boolean
      }
    }
</script>
