<template>
    <div class="ix-pagination" :class="{hide: hideOnSinglePage && thisPage <= 1}">
      <label class="ix-pagination_total" v-if="total && layout.includes('total')">共{{total}}条</label>
      <ix-select v-if="layout.includes('sizes')" v-model="thisPageSize" @change="handleSizeChange" size="small">
        <ix-option v-for="(item, i) in pageSizes" :key="i" :label="item">{{item}}条/页</ix-option>
      </ix-select>
      <a v-if="layout.includes('prev')" class="ix-icon-arrow-left" :class="{disabled:!can_prev}" @click="gotoPrev"></a>
      <div v-show="to_start">
        <a class="ix-pagination_page" @click="goto(1)">1</a>
        <a class="ix-pagination_page" @click="goto(thisPage - pagerCount)">...</a>
      </div>
      <div class="ix-pagination_pager" v-if="layout.includes('pager')">
        <a v-for="(p, i) in pageNumList" :key="i" v-text="p" class="ix-pagination_page" :class="{selected: p == thisPage}" @click="goto(p)"></a>
      </div>
      <div v-show="to_end">
        <a class="ix-pagination_page" @click="goto(thisPage + pagerCount)">...</a>
        <a class="ix-pagination_page" @click="goto(total_page)" v-text="total_page"></a>
      </div>
      <a v-if="layout.includes('next')" class="ix-icon-arrow-right" :class="{disabled:!can_next}" @click="gotoNext"></a>
      <div v-if="layout.includes('jumper')" class="ix-pagination_jumper flex">
        前往 <ix-input type="number" v-model="thisPage" size="small"></ix-input> 页
      </div>
      <slot></slot>
    </div>
</template>

<script>
import ixSelect from '../select'
import ixOption from '../option'
import ixInput from '../input'
    export default {
      name: "ix-pagination",
      components: {ixSelect, ixOption, ixInput},
      props: {
        'pageSize': {
          type: Number,
          default: 10
        },
        // total, sizes, prev, pager, next, jumper
        'layout': {
          type: String,
          default: 'prev, pager, next, jumper, total'
        },
        'total': {
          type: Number,
          default: 0
        },
        'pageCount': {
          type: Number,
          default: 0
        },
        'currentPage':{
          type: Number,
          default: 0
        },
        'pageSizes': {
          type: Array,
          default: () => [10, 30, 50, 100]
        },
        'disabled': Boolean,
        'hideOnSinglePage': Boolean,
        'pagerCount': {
          type: Number,
          default: 6
        }
      },
      data () {
        return {
          thisPage: this.currentPage || 1,
          total_page: this.pageCount,
          thisPageSize: this.pageSize,
          to_start: false,
          to_end: false,
          pageNumList: null
        }
      },
      computed: {
        can_prev () {
          return this.thisPage > 1
        },
        can_next () {
          return this.thisPage < this.total_page
        },
      },
      watch: {
        currentPage (nv, ov) {
          if (nv !== this.thisPage) {
            this.thisPage = nv
            this.calcPager()
          }
        },
        total (nv, ov) {
          if(nv != ov){
            this.calcTotalPage()
            this.calcPager()
          }
        },
        pageCount (nv, ov) {
          if(nv != this.total_page){
            this.calcTotalPage(nv)
            this.calcPager()
          }
        },
        pageSize (nv, ov) {
          if(nv != ov){
            this.thisPageSize = nv
            this.calcTotalPage()
            this.calcPager()
          }
        }
      },
      mounted() {
        if (!this.total_page && this.total) this.calcTotalPage()
        this.calcPager()
      },
      methods: {
        calcTotalPage (nv) {
          this.total_page = nv || Math.ceil(this.total / this.thisPageSize) || 1
          if (this.thisPage > this.total_page) this.thisPage = this.total_page
        },
        calcPager () {
          const nums = [];
          const t = this.total_page || 1;
          const p = this.thisPage || 1;
          let s = 0;
          let n = 1;
          const L = Math.floor(this.pagerCount / 2)
          const R = Math.ceil(this.pagerCount / 2)
          if(t > this.pagerCount){
            s = p - L <= 0 ? 0 : p - L;
            n = p + R >= t ? t : p + R;
            if(n - s < this.pagerCount){
              if(p + R >= t) s = s - (this.pagerCount - (n - s));
              else if(p - L <= 0) n = n + (this.pagerCount - (n - s));
            }
          }else{
            n = t;
          }
          for(let i = s; i < n; i++){
            nums.push(i+1);
          }
          this.to_start = this.thisPage > L && s > 1;
          this.to_end = this.total_page - this.thisPage > R && n < t;
          this.pageNumList = nums;
        },
        goto (p) {
          if(p < 1 || p > this.total_page || isNaN(p)){
            return;
          }
          this.handleCurrentChange(p)
        },
        // 下页
        gotoNext () {
          if (this.thisPage == this.total_page) return;
          this.handleCurrentChange(this.thisPage + 1)
        },
        // 上页
        gotoPrev () {
          if(this.thisPage == 1) return;
          this.handleCurrentChange(this.thisPage - 1)
        },
        handleSizeChange () {
          this.calcTotalPage()
          this.calcPager()
          this.$emit('size-change', this.thisPageSize)
        },
        handleCurrentChange (page) {
          if (this.total_page === 0) return
          this.thisPage = page
          this.calcPager()
          this.$emit('update:current-page', page)
          this.$emit('current-change', page)
        }
      }
    }
</script>
