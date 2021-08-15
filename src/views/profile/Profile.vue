<template>
  <div id="profile">
    <NavBar class="nav-bar"><div slot="center">我的档案</div></NavBar>
    <UserInfo/>
    <AccountInfo/>
    <NormalListView :list-data="orderList"/>
    <NormalListView :list-data="serviceList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalListView from './childComps/NormalListView'

export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data() {
    return {
      orderList: [
        {icon: 'message.svg', info: '消息'},
        {icon: 'vip.svg', info: '会员卡'},
        {icon: 'pointer.svg', info: '积分商城'},
      ],
      serviceList: [
        {icon: 'cart.svg', info: '我的订单'},
        {icon: 'shopping.svg', info: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
