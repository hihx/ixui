import ixButton from './button/index.js';
import ixInput from './input/index.js';
import ixSelect from './select/index.js';
import ixOption from './option/index.js';
import ixScrollpanel from './scrollpanel/index.js';
import ixPopover from './popover/index.js';
import ixRadio from './radio/index.js';
import ixCheckbox from './checkbox/index.js';
import ixDialog from './dialog/index.js';
import ixMessageBox from './messagebox/index.js';
import ixMessage from './message/index.js';
import ixLoading from './loading/index.js';
import ixLink from './link/index.js';
import ixInputNumber from './inputnumber/index.js';
import ixTabs from './tabs/index.js';
import ixTabPane from './tabpane/index.js';
import ixAlert from './alert/index.js';
import ixMenu from './menu/index.js';
import ixMenuItem from './menuitem/index.js';
import ixMenuSub from './menusub/index.js';
import ixMenuGroup from './menugroup/index.js';
import ixSwiper from './swiper/index.js';
import ixCalendar from './calendar/index.js';
import ixDatepicker from './datepicker/index.js';
import ixTimepicker from './timepicker/index.js';
import ixTable from './table/index.js';
import ixTableColumn from './tableColumn/index.js';
import ixTree from './tree/index.js';
import ixPagination from './pagination/index.js';
import ixProgress from './progress/index.js';
import ixSwitch from './switch/index.js';
import ixSlider from './slider/index.js';
import ixTooltip from './tooltip/index.js';
import ixRow from './row/index.js';
import ixCol from './col/index.js';
import ixUpload from './upload/index.js';

import less from './theme-default/src/index.less'

const components = [
  ixRow,
  ixCol,
  ixButton,
  ixInput,
  ixSelect,
  ixOption,
  ixScrollpanel,
  ixPopover,
  ixRadio,
  ixCheckbox,
  ixDialog,
  ixMessageBox,
  ixMessage,
  ixLoading,
  ixLink,
  ixInputNumber,
  ixTabs,
  ixTabPane,
  ixAlert,
  ixMenu,
  ixMenuItem,
  ixMenuSub,
  ixMenuGroup,
  ixSwiper,
  ixDatepicker,
  ixCalendar,
  ixTimepicker,
  ixTable,
  ixTableColumn,
  ixTree,
  ixPagination,
  ixProgress,
  ixSwitch,
  ixSlider,
  ixTooltip,
  ixUpload
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  // MetaInfo.install(Vue)
  Vue.prototype.$alert = ixMessageBox.alert
  Vue.prototype.$confirm = ixMessageBox.confirm
  Vue.prototype.$prompt = ixMessageBox.prompt
  Vue.prototype.$message = ixMessage
  Vue.prototype.$loading = ixLoading
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
