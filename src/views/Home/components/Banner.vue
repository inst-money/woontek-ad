<template>
  <div class="banner">
    <div class="comp">
      <div class="title">
        一站式
        <br>
        数字广告投放
      </div>
      <div class="sub-title">致力于让数字营销效率更高，让品牌更强大</div>
      <div class="desc">打造以客户为中心的数字营销策略，迎合广告活动目标和需求，专注于全方位数据驱动的数字营销方案，并发掘您的无限的商业潜力。</div>
      <div class="btn">想了解更多</div>
      <div class="more3">
        <div class="more-item">数据安全</div>
        <div class="more-item">精准投放</div>
        <div class="more-item">海量曝光</div>
      </div>

    </div>
    <img class="img" :src="img" alt="">

  </div>
</template>

<script>
import img from '@/assets/images/mv2.jpg';

export default {
  data() {
    return {
      img,
    };
  },

};

</script>

<style lang="scss" scoped>
.banner{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  .comp{
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .title{
      font-size: 58px;
      font-weight: 500;
    }
    .sub-title{
      margin-top: 20px;
      font-weight: 500;
      font-size: 20px;
    }
    .desc{
      margin-top: 20px;
      font-weight: normal;
      font-size: 20px;

    }
    .btn{
      margin-top: 10px;
      background: #000;
      color:#fff;
      font-size: 14px;
      padding: 10px;
      border-radius: 5px;
    }
    .more3{
      margin-top: 30px;
      display: flex;
      .more-item{
        margin-right: 30px;
      }
    }

  }

  .img {
  width: 600px;
  height: 556px;
  object-fit: cover;
}
}

</style>
