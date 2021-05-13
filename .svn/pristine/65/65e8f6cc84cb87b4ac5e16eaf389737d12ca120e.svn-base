<template>
    <div class="ix-table" :class="{'ix-border': border}">
      <slot></slot>
      <div class="ix-table_head" ref="table_head">
        <TableHead ref="th_main" :tdWidth="tdWidth" :thead="thead"
                   @clickItemMul="clickItemMul" @sort-change="dataSort" @filter-change="filterChange"></TableHead>
      </div>
      <div class="ix-table_body" ref="table_body" :style="height_style">
        <TableBody ref="tb_main" :tdWidth="tdWidth" :tbody="tbody" :thead_width_diff="thead_width_diff"
                   @hover="hoverItem" @clickItem="clickItem" @clickItemMul="clickItemMul"></TableBody>
      </div>
      <div class="ix-table_foot" ref="table_foot">
        <TableFoot :tdWidth="tdWidth" :tfoot="tfoot"></TableFoot>
      </div>
      <div class="ix-table_fixed_left" ref="fixed_left" :class="{'is-scroll-end': leftScrollEnd}" v-if="hasFixedLeft">
        <div class="ix-table_head">
          <TableHead ref="th_left" :tdWidth="tdWidth" :thead="thead"
                     @clickItemMul="clickItemMul" @sort-change="dataSort" @filter-change="filterChange"></TableHead>
        </div>
        <div class="ix-table_body" :style="height_style" ref="fixed_left_body">
          <TableBody ref="tb_left" :tdWidth="tdWidth" :tbody="tbody" thead_width_diff="0"
                     @hover="hoverItem" @clickItem="clickItem" @clickItemMul="clickItemMul"></TableBody>
        </div>
        <div class="ix-table_foot">
          <TableFoot :tdWidth="tdWidth" :tfoot="tfoot"></TableFoot>
        </div>
      </div>
      <div class="ix-table_fixed_right" ref="fixed_right" :class="{'is-scroll-end': rightScrollEnd}" v-if="hasFixedRight">
        <div class="ix-table_head">
          <TableHead ref="th_right" :tdWidth="tdWidth" :thead="thead"
                     @clickItemMul="clickItemMul" @sort-change="dataSort" @filter-change="filterChange"></TableHead>
        </div>
        <div class="ix-table_body" :style="height_style" ref="fixed_right_body">
          <TableBody ref="tb_right" :tdWidth="tdWidth" :tbody="tbody" thead_width_diff="0"
                     @hover="hoverItem" @clickItem="clickItem" @clickItemMul="clickItemMul"></TableBody>
        </div>
        <div class="ix-table_foot">
          <TableFoot :tdWidth="tdWidth" :tfoot="tfoot"></TableFoot>
        </div>
      </div>
      <div class="ix-table__fixed-right-patch" ref="fixed_patch"></div>
    </div>
</template>

<script>
  import table from "./table";

  export default {
    ...table
  }
</script>
