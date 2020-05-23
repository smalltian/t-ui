// 导入组件
import message from './message'

// 定义组件容器
const components = [
  message
]

// 定义install方法
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 具体组件
  message
}