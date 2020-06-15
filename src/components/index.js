import Vue from 'vue'
// import { camelToKebab } from '@/utils'

// 拖拉组件
// import VueDnd from 'awe-dnd'
// element 组件 + 自定义全局组件
// import PanelHeading from './PanelHeading'
// import Mod from './Mod'
// import ListLoading from './ListLoading'
// import ActionSheet from './ActionSheet'
// import PopoverRight from './PopoverRight'
import {
  Upload,
  Form,
  FormItem,
  Input,
  Button,
  Menu,
  Tree,
  Submenu,
  Switch,
  MenuItem,
  MenuItemGroup,
  TimePicker,
  Tooltip,
  Table,
  Tag,
  TableColumn,
  Message,
  MessageBox,
  Row,
  Col,
  Card,
  ButtonGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Scrollbar,
  DatePicker,
  Popover,
  Pagination,
  Dialog,
  Badge,
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Tabs,
  TabPane,
  Autocomplete,
  Transfer,
  Carousel,
  CarouselItem,
  // cascader
} from 'element-ui'

const components = {
  Select,
  Option,
  OptionGroup,
  InputNumber,
  Upload,
  Form,
  FormItem,
  Input,
  Button,
  Menu,
  Tree,
  Submenu,
  Switch,
  MenuItem,
  MenuItemGroup,
  TimePicker,
  Tooltip,
  Table,
  TableColumn,
  Row,
  Col,
  // VueDnd,
  Card,
  ButtonGroup,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Scrollbar,
  DatePicker,
  Popover,
  Pagination,
  Badge,
  Tabs,
  Tag,
  TabPane,
  Autocomplete,
  Transfer,
  Carousel,
  CarouselItem,
  // cascader   // Cannot read property 'install' of undefined
}
Object.values(components).forEach(i => {
  Vue.use(i)
  console.log(i)
})
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$prompt = MessageBox.prompt

export const component = {
  // PanelHeading,
  // Mod,
  // ListLoading,
  // PopoverRight,
  // ActionSheet
}
// Object.entries(component).forEach(([k, v]) => Vue.component(camelToKebab(k), v))
