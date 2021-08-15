<template>
  <div id="category">
    <NavBar class="category-nav">
      <template #center>分类</template>
    </NavBar>
    <div class="content">
      <CategoryMenu :categories='categories' @selectItem='selectItem'></CategoryMenu>
      <CategoryContent :subcategories="showSubcategory"></CategoryContent>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import CategoryMenu from './childComps/CategoryMenu'
import CategoryContent from './childComps/CategoryContent'

import { getCategory, getSubcategory, getCategoryDetail } from 'network/category';


export default {
  components: {
    NavBar,
    CategoryMenu,
    CategoryContent
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      itemIndex: -1
    }
  },
  created() {
    // 获取数据
    this.getCategory()
    // this.getSubcategory()
  },  
  activated() {
  },
  computed: {
    showSubcategory() {
      if (this.itemIndex === -1) return {}
      return this.categoryData[this.itemIndex].subcategories
    },
    showCategoryDetail() {
      if (this.itemIndex === -1) return []
      return this.categoryData[this.itemIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list;
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        this.getSubcategories(0)
      })
    },
    getSubcategories(index) {
      this.itemIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this.getCategoryDetail('pop')
        this.getCategoryDetail('sell')
        this.getCategoryDetail('new')
      })
    },
    getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.itemIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.itemIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    selectItem(index) {
      this.getSubcategories(index);
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 93px);
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>