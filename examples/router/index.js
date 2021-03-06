

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'demomain',
      component: () => import('@/components/demo-main.vue'),
      redirect: '/hello',
      children: [
        {
          path: '/hello',
          name: 'hello',
          component: () => import('@/docs/hello.md'),
          meta: {title: '安装'}
        },
        {
          path: '/icon',
          name: 'icon',
          component: () => import('@/docs/icon.md'),
          meta: {title: 'Icon 图标'}
        },
        {
          path: '/button',
          name: 'button',
          component: () => import('@/docs/button.md'),
          meta: {title: 'Button 按钮'}
        },
        {
          path: '/link',
          name: 'link',
          component: () => import('@/docs/link.md'),
          meta: {title: 'Link 文字链接'}
        },
        {
          path: '/input',
          name: 'input',
          component: () => import('@/docs/input.md'),
          meta: {title: 'Input 文本框'}
        },
        {
          path: '/select',
          name: 'select',
          component: () => import('@/docs/select.md'),
          meta: {title: 'Select 选择器'}
        },
        {
          path: '/radio',
          name: 'radio',
          component: () => import('@/docs/radio.md'),
          meta: {title: 'Radio 单选框'}
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: () => import('@/docs/checkbox.md'),
          meta: {title: 'CheckBox 多选框'}
        },
        {
          path: '/scrollpanel',
          name: 'scrollpanel',
          component: () => import('@/docs/scrollpanel.md'),
          meta: {title: 'ScrollPanel 滚动面板'}
        },
        {
          path: '/popover',
          name: 'popover',
          component: () => import('@/docs/popover.md'),
          meta: {title: 'Popover 弹出框'}
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: () => import('@/docs/dialog.md'),
          meta: {title: 'Dialog 对话框'}
        },
        {
          path: '/messagebox',
          name: 'messagebox',
          component: () => import('@/docs/messagebox.md'),
          meta: {title: 'MessageBox 弹框'}
        },
        {
          path: '/message',
          name: 'message',
          component: () => import('@/docs/message.md'),
          meta: {title: 'Message 消息提示'}
        },
        {
          path: '/loading',
          name: 'loading',
          component: () => import('@/docs/loading.md'),
          meta: {title: 'Loading 加载'}
        },
        {
          path: '/inputnumber',
          name: 'inputnumber',
          component: () => import('@/docs/inputnumber.md'),
          meta: {title: 'InputNumber 计数器'}
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: () => import('@/docs/tabs.md'),
          meta: {title: 'Tabs 标签页'}
        },
        {
          path: '/alert',
          name: 'alert',
          component: () => import('@/docs/alert.md'),
          meta: {title: 'Alert 警告'}
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('@/docs/menu.md'),
          meta: {title: 'Menu 导航菜单'}
        },
        {
          path: '/swiper',
          name: 'swiper',
          component: () => import('@/docs/swiper.md'),
          meta: {title: 'Swiper 轮播图'}
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: () => import('@/docs/calendar.md'),
          meta: {title: 'Calendar 日历'}
        },
        {
          path: '/datepicker',
          name: 'datepicker',
          component: () => import('@/docs/datepicker.md'),
          meta: {title: 'DatePicker 日期选择器'}
        },
        {
          path: '/table',
          name: 'table',
          component: () => import('@/docs/table.md'),
          meta: {title: 'Table 表格'}
        },
        {
          path: '/tree',
          name: 'tree',
          component: () => import('@/docs/tree.md'),
          meta: {title: 'Tree 树形控件'}
        },
        {
          path: '/pagination',
          name: 'pagination',
          component: () => import('@/docs/pagination.md'),
          meta: {title: 'Pagination 分页'}
        },
        {
          path: '/progress',
          name: 'progress',
          component: () => import('@/docs/progress.md'),
          meta: {title: 'Progress 进度条'}
        },
        {
          path: '/switch',
          name: 'switch',
          component: () => import('@/docs/switch.md'),
          meta: {title: 'Switch 开关'}
        },
        {
          path: '/slider',
          name: 'slider',
          component: () => import('@/docs/slider.md'),
          meta: {title: 'Slider 滑块'}
        },
        {
          path: '/tooltip',
          name: 'tooltip',
          component: () => import('@/docs/tooltip.md'),
          meta: {title: 'Tooltip 文字提示'}
        },
        {
          path: '/layout',
          name: 'layout',
          component: () => import('@/docs/layout.md'),
          meta: {title: 'Layout 布局'}
        },
        {
          path: '/upload',
          name: 'upload',
          component: () => import('@/docs/upload.md'),
          meta: {title: 'Upload 上传'}
        },
      ]
    }
  ]
})
