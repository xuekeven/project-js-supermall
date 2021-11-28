// mixin：“混入”

// 基础
// 混入（mixin）提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以
// 包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

// 选项合并
// 1. 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
// 比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
// 2. 同名钩子函数（生命周期函数）将合并为一个数组，因此都将被调用。
// 另外，混入对象的钩子（生命周期）将在组件自身钩子（生命周期）之前调用。
// 3. 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。
// 两个对象键名冲突时，取组件对象的键值对。Vue.extend() 也使用同样的策略进行合并。

// 全局混入
// 1. 混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，
// 它将影响每一个之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。
// 2. 请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 （包括第三方组件）。大多数情况下，
// 只应当应用于自定义选项。推荐将其作为插件发布，以避免重复应用混入。

// 自定义选项合并策略
// 自定义选项将使用默认策略，即简单地覆盖已有值。如果想让自定义选项以自定义逻辑合并，
// 可以向 Vue.config.optionMergeStrategies 添加一个函数。

import { debounce } from "./utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh : null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50)
    this.itemImgListener = () => this.newRefresh()
    this.$bus.$on('itemImgLoad',this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenShowBackTop(position){
      // 判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}
