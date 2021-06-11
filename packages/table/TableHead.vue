<template>
  <table>
    <colgroup>
      <col v-for="(item, i) in tdWidth" :key="i" :width="item"></col>
    </colgroup>
    <thead>
    <tr v-for="(item, i) in thead" :key="i">
      <th v-for="(child, j) in item" :key="j" v-if="Object.keys(child).length > 0" :rowspan="child.rowspan" :colspan="child.colspan" :class="{is_filter: child.is_filter}">
        <ix-checkbox v-if="child.type == 'selection'" v-model="checkedItem" @change.native="checkboxChange">&nbsp;</ix-checkbox>
        <i v-else-if="child.type == 'expand'"></i>
        <TableCell v-else :cell="child">
          <span class="ix-caret-wrapper" v-if="child.sortable">
            <i class="ix-sort-caret asc" :class="{active: child.order == 'asc'}" @click="toSort(child, 'asc')"></i>
            <i class="ix-sort-caret desc" :class="{active: child.order == 'desc'}" @click="toSort(child, 'desc')"></i>
          </span>
          <span class="ix-caret-wrapper ix-caret-filter" v-if="child.filter">
            <a class="ix-icon-arrow-down" @click="openFilter($event, j)"></a>
            <ix-popover :ref="'filter_pop'+j" className="ix-table_filter_pop">
              <template v-if="has_filter(child)">
                <ix-checkbox v-for="(f, fi) in $parent.filterList[child.prop].list"
                            v-model="$parent.filterList[child.prop].checkedItems" :key="fi" :label="f" @change.native="changeFilter(child)">{{f}}</ix-checkbox>
              </template>
            </ix-popover>
          </span>
        </TableCell>
      </th>
    </tr>
    </thead>
  </table>
</template>

<script>
    import TableCell from "./table-cell";

    export default {
      name: "ix-table-head",
      components: {TableCell},
      props: {
        tdWidth: null,
        thead: null
      },
      data () {
        return {
          checkedItem: false,
          openFilterIndex: -1,
        }
      },
      computed: {
        // 该列是否配置了过滤器
        has_filter () {
          return (child) => {
            return child.filter&&this.$parent.filterList&&this.$parent.filterList[child.prop]
          }
        }
      },
      methods: {
        // 触发回调： 多选
        checkboxChange () {
          this.$emit('clickItemMul', 'all', this.checkedItem)
        },
        /**
         * 点击排序按钮时
         * @param child 当前触发节点
         * @param order 顺序：desc / asc
         */
        toSort (child, order) {
          this.clearSort()
          child.order = order
          this.$emit('sort-change', child)
        },
        // 清除其他列的排序状态
        clearSort (child) {
          this.thead.forEach(v => v.forEach(c => c.order = null))
        },
        // 显示可筛选项弹出框
        openFilter ($event, j) {
          this.openFilterIndex = j
          this.$refs['filter_pop'+j][0].show($event.target)
        },
        // 进行筛选时
        changeFilter (child) {
          child.is_filter = this.$parent.filterList[child.prop].checkedItems.length > 0
          this.$emit('filter-change')
        }
      }
    }
</script>
