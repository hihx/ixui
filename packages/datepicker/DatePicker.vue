<template>
  <div class="ix-datepicker"
       :class="[showPopup ? 'no_event' : '',
           infocus ? 'infocus' : '',
           size ? 'ix-' + size : '',
           is_range ? 'is_range' : '',
           is_dates ? 'is_dates' : '']" :title="is_dates ? dates_label : ''">
    <i class="ix-icon-calendar"></i>
    <span class="ix-datepicker_label no_event" :class="{placeholder:!thisValue[0]}" v-if="is_dates">{{dates_label}}</span>
    <input ref="txt" class="ix-datepicker_input" v-model="thisValue[0]"
           :name="name" :disabled="disabled"
           :placeholder="is_range ? startPlaceholder : placeholder" v-popover:pop
           @focus="onfocus" @blur="onblur"/>
    <i slot="prefix" v-if="is_range">{{rangeSeparator}}</i>
    <input class="ix-datepicker_input" v-model="thisValue[1]"
           v-if="is_range" :name="name" :disabled="disabled"
           :placeholder="endPlaceholder" v-popover:pop
           @focus="onfocus" @blur="onblur"/>
    <a v-show="clearable && thisValue[0]" class="ix-icon-error" @click.stop="clear" title="清空"></a>
    <ix-popover ref="pop" class-name="ix-datepicker_pop" :width="is_range ? '620px' : '300px'" :visible.sync="showPopup" padding="10px" :setTarget="$el">
      <div class="ix-datepicker_bar flex" v-if="show_time">
        <div class="flex f1">
          <ix-input v-model="inputValue[0]" size="small" class="f1" :placeholder="placeholder" :disabled="clickRange == 1"></ix-input>
          <ix-timepicker v-model="timeValue[0]" size="small" :disabled="clickRange == 1"></ix-timepicker>
        </div>
        <i class="ix-icon-arrow-right" v-if="is_range"></i>
        <div class="flex f1" v-if="is_range">
          <ix-input v-model="inputValue[1]" size="small" class="f1" :placeholder="placeholder" :disabled="clickRange == 1"></ix-input>
          <ix-timepicker v-model="timeValue[1]" size="small" :disabled="clickRange == 1"></ix-timepicker>
        </div>
      </div>
      <div class="ix-datepicker_view">
        <div class="f1" v-for="(item, i) in calendarList" :key="i">
          <div class="ix-datepicker_bar flex" v-show="show_datepane">
            <template v-if="i == 0">
              <a class="ix-link ix-icon-double-arrow-left" @click="to('L_Y')"></a>
              <a class="ix-link ix-icon-arrow-left" @click="to('L_M')"></a>
            </template>
            <div v-if="show_ympane" class="f1 center">
              <a class="ix-link" v-text="item.month.format('yyyy年')" @click="to_ym(0)"></a>
              <a class="ix-link" v-text="item.month.format('MM月')" @click="to_ym(1)"></a>
            </div>
            <label v-else class="f1 center" v-text="item.month.format('yyyy年MM月')"></label>
            <template v-if="calendarList && i == calendarList.length-1">
              <a class="ix-link ix-icon-arrow-right" @click="to('R_M')"></a>
              <a class="ix-link ix-icon-double-arro-right" @click="to('R_Y')"></a>
            </template>
          </div>
          <datePane @select="calendarSelectBase(arguments, i)" ref="dp" v-model="item.value"
                    :showDate.sync="item.month" v-show="show_datepane"></datePane>
          <ymPane v-if="show_ympane" ref="ymp" v-model="item.value"
                  :showDate.sync="item.month" :y-visible.sync="yVisible" :m-visible.sync="mVisible" :multiple="is_range"
                  @select="ymChange" @changeYear="to()"></ymPane>
        </div>
      </div>
      <div class="ix-datepicker_qt flex" v-if="is_range">
        <div>
          <ix-button size="medium" v-for="(item, i) in pickerOptions" :key="i" v-text="item.text" @click="itemClick(item)" group="0"></ix-button>
        </div>
        <i class="f1"></i>
        <ix-button type="primary" @click="save" size="medium" :disabled="clickRange == 1" v-show="has_time || type == 'dates'">确定</ix-button>
      </div>
    </ix-popover>
  </div>
</template>

<script>
import datepicker from "./datepicker";

export default {
  ...datepicker
}
</script>
