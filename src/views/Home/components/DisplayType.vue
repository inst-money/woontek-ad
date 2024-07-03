<template>
  <div class="display-type">

    <div class="left">
      <div class="title"> Display广告形式</div>
      <div class="desc">展示广告的成功需要策划、创意、优化等多维度协作， Wootek则是您的不二伙伴。</div>


      <div class="p">- 根据logo、标题、产品图片、价格等信息，并生成广告直接展示产品</div>

      <div class="p">- 支持200+种尺寸版本的平面广告</div>
      <div class="p">- 适用于电商网站再营销，提醒顾客完成交易</div>
      <div class="p">- 适用于推广特定促销活动，如满减、包邮等。也可进行品牌宣传</div>
      <div class="p">- 全渠道覆盖，可投放谷歌合作平台上95%+的网站</div>

      <div class="button">了解更多</div>
    </div>
    <img :src="require('@/assets/images/display-type-bg.png')" alt="" class="right">
  </div>
</template>

<script>
export default {

};

</script>

<style lang="scss" scoped>
.display-type {
  height: 767px;
  background: rgb(247, 245, 245);
  display: flex;
  justify-content: center;
  align-items: center;

  .left {
    display: flex;
    justify-content: center;
    align-items:  flex-start;
    flex-direction: column;
    .title {
      color: rgba(153, 110, 0, 1);
      font-size: 38px;
    }

    .desc {
      width: 400px;
      margin-top: 40px;
      font-size: 16px;
      margin-bottom: 40px;
    }
    .p{
      width: 400px;
      margin-top: 16px;
      font-size: 16px;
      line-height: 1.5;
    //   &:first-child{
    //   margin-top: 40px;
    //  }
    }
    .button{
      margin-top: 40px;
      width: 240px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items:  center;
    background: #000;
    color: #fff;
    font-size: 16px;
    border-radius: 8px;

    }
  }

  .right {
    width: 787px;
    height: 443px;

  }

}</style>
