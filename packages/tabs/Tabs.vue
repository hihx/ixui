<template>
    <div class="ix-tabs"
            :class="[tabPosition ? 'ix-'+tabPosition : null]">
      <div class="ix-tabs-bar">
        <i class="ix-tabs-bar-selected" :style="bar_dir"></i>
        <a @click="onclick(item, i, $event)" v-for="(item, i) in datas" :key="i" :class="{selected: thisValue == item.name}" :ref="'tabsBar_'+item.name">
          <i v-if="item.icon" class="ix-icon" :class="item.icon"></i>
          {{item.label}}
          <i class="ico-close ix-icon-close" v-show="closable || item.closable" @click.stop="$emit('tab-edit', item.name, 'remove')"></i></a>
      </div>
      <div class="ix-tabs-content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import {checkSlotChange} from '#/util'
    export default {
      name: "ix-tabs",
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
        value: {
          type: [String],
          default: ''
        },
        tabPosition: { default: 'top' },
        closable: Boolean
      },
      data () {
        return {
          datas: null,
          thisValue: this.value,
          bar_dir: {width: null, height: null, left: null, top: null}
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.update()
        })
      },
      computed: {
      },
      watch: {
        value (nv) {
          if (nv != this.thisValue) {
            this.thisValue = nv
            this.calc_bar()
          }
        }
      },
      methods: {
        onclick (item, i, $event) {
          this.thisValue = item.name
          this.calc_bar()
          this.$emit('change', this.thisValue)
          this.$emit('tab-click', $event.currentTarget, $event)
        },
        calc_bar () {
          this.$nextTick(()=>{
            let _selectA = this.$refs[`tabsBar_${this.thisValue}`][0]
            if (this.tabPosition == 'top') {
              this.bar_dir.width = _selectA.offsetWidth + 'px'
              this.bar_dir.left = _selectA.offsetLeft + 'px'
            } else {
              this.bar_dir.height = _selectA.offsetHeight + 'px'
              this.bar_dir.top = _selectA.offsetTop + 'px'
            }
          })
        },
        // 更新数据后调用
        update () {
          checkSlotChange(this, 'datas', 'ix-tabpane').then(__=>{
            this.calc_bar()
          }).catch(__=>{
            this.bar_dir.width = this.bar_dir.height = '0px'
          })
        },
      },
      updated() {
        this.update()
      }
    }
</script>
