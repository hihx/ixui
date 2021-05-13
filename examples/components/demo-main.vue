<template>
    <div class="demo-main">
      <div class="demo-leftbar">
        <h1></h1>
        <ix-scrollpanel height="calc(100% - 65px)">
          <router-link class="demo-l-a" v-for="(item, i) in list" :key="i" :to="item.path" v-text="item.meta.title"></router-link>
        </ix-scrollpanel>
      </div>
      <div class="demo-rightview">
        <router-view/>
      </div>
    </div>
</template>

<script>
    export default {
      name: "demo-main",
      data () {
          return {
            list: null
          }
      },
      created () {
        this.init()
      },
      methods: {
        init () {
          this.list = this.$router.options.routes[0].children
        }
      }
    }
</script>

<style lang="less">
  @import "../assets/css/var.less";
  .demo-main{
    width: 940px;
    margin: 0 auto;
    padding-left: 200px;
    .demo-leftbar{
      width: 200px;
      border-right: 1px solid @theme-low;
      height: 100%;
      position: fixed;
      top: 0;
      left: 50%;
      margin-left: -570px;
      font-size: 14px;
      >h1{
        position: relative;
        height: 65px;
        background: url('../assets/logo.png') 10% center no-repeat;
        background-size: 60% auto;
      }
      .demo-l-a{
        display: block;
        padding: 10px;
        color: #666;
        &:hover, &.router-link-exact-active,&.router-link-active{
          color: @theme;
        }
      }
    }
    .demo-rightview{
      padding: 20px;
      box-sizing: border-box;
      width: 100%;
    }
  }
  body, html, .demo-leftbar{
    height: 100%;
  }
</style>
