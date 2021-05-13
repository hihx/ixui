<template>
  <div class="ix-timepicker">
    <ix-input v-model="thisValue" :name="name" :disabled="disabled" :placeholder="placeholder" :clearable="clearable"
              @focus="show"
              :class="[showPopup ? 'no_event' : '', size ? 'ix-' + size : '']">
    </ix-input>
    <div class="ix-popover ix-timepicker_pop" v-show="showPopup">
      <div class="ix-scrollpanel flex">
        <div class="center">
          <div class="ix-timepicker_scrollV">
            <a v-for="(item, i) in hhList" v-text="item" :class="{selected: selectValues[0] == item}" @click="change(0, item)"></a>
          </div>
        </div>
        <div class="ix-timepicker_hh center">
          <div class="ix-timepicker_scrollV">
            <a v-for="(item, i) in mmList" v-text="item" :class="{selected: selectValues[1] == item}" @click="change(1, item)"></a>
          </div>
        </div>
        <div class="center">
          <div class="ix-timepicker_scrollV">
            <a v-for="(item, i) in ssList" v-text="item" :class="{selected: selectValues[2] == item}" @click="change(2, item)"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {checkMouseUp} from "#/util";
  import IxInput from '../input'
export default {
  name: 'ix-timepicker',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {IxInput},
  props: {
    value: {
      type: [String],
      default: '00:00:00'
    },
    placeholder: {
      type: String,
      default: '请选择日期'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    readonly: Boolean,
    size: String,
    clearable: {
      type: Boolean,
      default: false
    },
    popVisible: false
  },
  data () {
    return {
      // 是否展开下拉
      showPopup: false,
      thisValue: this.value,
      hhList: null,
      mmList: null,
      ssList: null,
      selectValues: ['','','']
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.mouseup)
  },
  watch: {
    value: {
      handler (nv, ov) {
        this.thisValue = nv
        this.toFormat()
      }
    },
    popVisible (v) {
      this.showPopup = v
    }
  },
  computed: {

  },
  methods: {
    init () {
      this.toFormat()
      let mm = [];
      let hh = [];
      let ss = [];
      for (let i = 0; i < 60; i++) {
        if (i < 24) hh.push(i < 10 ? '0' + i : i)
        mm.push(i < 10 ? '0' + i : i)
        ss.push(i < 10 ? '0' + i : i)
      }
      this.hhList = hh
      this.mmList = mm
      this.ssList = ss
    },
    // 点其他空白收起菜单, 仅horizontal
    mouseup (e) {
      if (checkMouseUp(e, 'ix-timepicker')) {
        this.showPopup = false;
      }
    },
    change (i, v) {
      this.selectValues[i] = v
      this.thisValue = this.selectValues.join(':')
      this.$emit('change', this.thisValue)
    },
    toFormat () {
      if (this.thisValue) {
        let arr = this.thisValue.split(':')
        this.selectValues[0] = arr[0];
        this.selectValues[1] = arr[1];
        this.selectValues[2] = arr[2];
      } else {
        this.selectValues[0] = this.selectValues[1] = this.selectValues[2] = '';
      }
    },
    show () {
      this.showPopup = true;
      // this.$emit('update:popVisible', true)
      window.removeEventListener('mouseup', this.mouseup)
      window.addEventListener('mouseup', this.mouseup)
    }
  }
}
</script>
