<template>
  <table ref="table_main">
    <colgroup>
      <col v-for="(item, i) in tdWidth" :key="i" :width="head_width(item, i)"></col>
    </colgroup>
    <tbody>
    <tr v-for="(tr, i) in tbody" :key="i"
        @mouseenter="mouseenter(i)"
        @mouseleave="mouseleave"
        @click="clickItem(i)"
        :class="{hover: hoverIndex == i, selected: is_selected(i), hide: !tr.filter_visible || (!tr.tree_visible&&tr.is_tree)}">
      <td v-for="(child, j) in tr.list" :class="child.className" :colspan="child.colspan" :rowspan="child.rowspan">
        <ix-checkbox v-if="child.type == 'selection'" v-model="checkedItems" :label="i" @change.native="changeItem">&nbsp;</ix-checkbox>
        <a v-else-if="child.type == 'expand'" class="ix-icon-arrow-right" :class="{'is-reverse90': tr.expand_visible}" @click="openExpand(tr, child, i)"></a>
        <TableCell v-else :formatter="child.formatter || formatter" :cell="child">
          <template slot="prepend">
            <i class="ix-icon-arrow-right" style="opacity: 0" v-if="tr.is_tree&&j==0"></i>
            <a v-if="$parent.td_is_tree(child, j)" class="ix-icon-arrow-right" :class="{'is-reverse90': tr.tree_visible, 'ix-icon-loading':tr.loading_tree}" @click="openTree(tr, child, i)"></a>
          </template>
        </TableCell>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import TableCell from './table-cell'
  import IxCheckbox from "../checkbox";
  import BodyTR from "./class/BodyTR";
    export default {
      name: "ix-table-body",
      components: {TableCell, IxCheckbox},
      props: {
        tdWidth: null,
        tbody: null,
        thead_width_diff: 0
      },
      data () {
        return {
          hoverIndex: -1,
          checkedItems: []
        }
      },
      computed: {
        head_width () {
          return (item, i) => {
            return parseFloat(item) - (this.tdWidth && this.tdWidth.length == i + 1 ? this.thead_width_diff : 0)
          }
        },
        is_selected () {
          return (i) => {
            return this.$parent.highlightCurrentRow&&this.$parent.selectedRows&&this.$parent.selectedRows.includes(i)
          }
        }
      },
      methods: {
        mouseenter (i) {
          this.$emit('hover', i)
        },
        mouseleave () {
          this.$emit('hover', -1)
        },
        setHover (i) {
          this.hoverIndex = i
        },
        clickItem (i) {
          this.$emit('clickItem', i)
        },
        changeItem () {
          this.$emit('clickItemMul', null, this.checkedItems)
        },
        formatter (row, i) {
          return row.type == 'index' ? row.$index + 1 : row[row.prop]
        },
        // 点击展开行
        openExpand (tr, child, i) {
          if (tr.expand_visible) {
            // 已经展开，关闭
            this.tbody.splice(i + 1, 1)
            tr.expand_visible = false
          } else {
            // 展开
            tr.expand_visible = true
            this.tbody.splice(i + 1, 0, new BodyTR([{slot: child.slot, colspan: this.tbody[0].list.length, className:'expand'}]))
          }
        },
        // 点击展开树形
        openTree (tr, child, i) {
          this.$parent.openTree(tr, child, i)
        }
      }
    }
</script>
