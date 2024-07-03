<template>
  <div class="advantage">
    <div class="title">程序化投放4大优势</div>
    <div class="list">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="well-icon"  :class="item.icon"></div>
        <div class="well-title">{{ item.title }}</div>
        <div class="well-desc">{{ item.desc }}</div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '全球广告资源',
          desc: '覆盖超过40+广告交易所',
          icon: 'well-a',
        },
        {
          title: '算法技术',
          desc: '智能全自动RTB算法',
          icon: 'well-b',
        },
        {
          title: '精准投放',
          desc: '算法驱动广告智能投放',
          icon: 'well-c',
        },
        {
          title: '大数据资源',
          desc: '广告素材数据点采集',
          icon: 'well-d',
        },
      ],

    };
  },

};

</script>

<style lang="scss" scoped>
.advantage{
  height: 401px;
  background-color: rgba(255,234,182,.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title{
    font-weight: bold;
    font-size: 38px;
    color: rgba( 112,80,0,1)
  }
  .list{
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    .item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .well-title{
        margin-top: 10px;
        font-size: 20px;
    font-weight: bold;

      }
      .well-desc{
        margin-top: 10px;
        font-size: 16px;
      }
      .well-icon{
        width: 50px;
        height: 50px;
        background-size: 100% 100%;
        fill:#FFBF23;

        &.well-a{
          background-image: url('~@/assets/svg/well-a.svg')
        }
        &.well-b{
          background-image: url('~@/assets/svg/well-b.svg')
        }
        &.well-c{
          background-image: url('~@/assets/svg/well-c.svg')
        }
        &.well-d{
          background-image: url('~@/assets/svg/well-d.svg')
        }
      }
    }
  }
}
</style>
