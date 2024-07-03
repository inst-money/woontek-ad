<template>
  <div class="whybeselected" id="whybeselected">
    <div class="title">为什么选择数字化投放</div>
    <div class="desc">我们帮助您轻松使用时代前沿的广告推广方式</div>

    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item-icon" :class="item.icon"></div>
        <div class="item-title">{{ item.title }}</div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </div>
    <div class="button-wrap">
      <div class="button">了解更多</div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '自定义目标客户',
          desc: '按照您提供的客户画像，定位，分类，并推送唯一符合要求的人群面前，避免无效广告。',
          icon: 'why-b',
        },
        {
          title: '智能连接潜在客户',
          desc: '程序化广告只推送给符合需求的浏览者，大大节约了您的广告投入成本的同时也避免让不同目标的消费者对您广告产生免疫，潜移默化强化了品牌格调。',
          icon: 'why-d',
        },
        {
          title: '成千上万网站同时曝光',
          desc: '您不再需要奔走于各个网站和公众号之间，购买一成不变的广告位，程序化广告可以将您的消息同时推送到成百上千个符合您需求的网站上，而价格比您在一两家网站购买的广告位还要优惠。',
          icon: 'why-c',
        },
        {
          title: '实时追踪广告互动',
          desc: '哪些网站的客户更多的浏览了您的信息，哪个城市的用户点击了您的广告，类似这样的互动都被追踪并记录下来，您可以根据这些数据随时随地提调整广告策略, 敏捷配合市场，实现最佳效果。',
          icon: 'why-a',
        },
      ],

    };
  },

};

</script>

<style lang="scss" scoped>
.whybeselected {
  padding: 120px;

  .title {
    font-size: 50px;
    color: rgba(112, 80, 0, 1);
    font-weight: bold;
  }

  .desc {
    margin-top: 20px;
    font-size: 16px;
  }

  .list {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 40px;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 80px;

      .item-title {
        font-weight: bold;
        font-size: 22px;
        width: 230px;
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;

      }


      .item-desc {
        width: 230px;
        font-size: 16px;
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        line-height: 1.8;
      }

      .item-icon {
        width: 302px;
        height: 302px;
        background-size: 100% 100%;

        @media screen and (max-width: 1440px) {
          // .item-icon {
            width: 202px;
            height: 202px;
          // }
        }

        &.why-a {

          background-image: url(~@/assets/images/why-a.png);
        }

        &.why-b {

          background-image: url(~@/assets/images/why-d.png);
        }

        &.why-c {

          background-image: url(~@/assets/images/why-c.png);
        }

        &.why-d {

          background-image: url(~@/assets/images/why-b.png);
        }
      }
    }
  }

  .button-wrap {
    width: 100%;

    .button {
      margin: 0 auto;
      width: 240px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      color: #fff;
      border-radius: 8px;
      margin-top: 80px;
      cursor: pointer;
    }
  }
}
</style>
