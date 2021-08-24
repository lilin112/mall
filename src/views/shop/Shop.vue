<template>
  <div class="wrapper">
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元运费券'
    }
    return { item }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
.search{
  margin:.2rem 0 .16rem;
// font-size: 14px;
// color: #333333;
// line-height: 16px;
background:red;
}

</style>
