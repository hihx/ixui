<template>
  <table>
    <colgroup>
      <col v-for="(item, i) in tdWidth" :key="i" :width="item"></col>
    </colgroup>
    <tfoot>
      <tr v-for="(tr, i) in tfoot" :key="i">
        <td v-for="(td, j) in tr" v-html="td"></td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
    export default {
      name: "ix-table-foot",
      props: {
        tdWidth: null,
        tfoot: null
      },
      data () {
        return {
        }
      },
      watch: {
      },
      computed: {
      },
      mounted() {
      },
      beforeDestroy() {
      },
      methods: {
      }
    }
</script>
