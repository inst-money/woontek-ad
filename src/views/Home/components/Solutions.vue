<template>
  <div class="solutions" id="solution">
    <div class="title">解决方案</div>
    <div class="desc">
      经过多年的积累， 我们团队尽心设计了两套数字广告投放方案，匹配您的不同需求，助您解决广告投放问题
    </div>
    <div class="two-side">
      <div class="side one">
        <div class="side-card">
          <div class="side-title">战略投放</div>
          <div class="side-desc">
            为您的企业品牌提供长期的数字营销策略规划与实施，以数据为驱动，对广告活动进行持续优化和改进，力求进准推送企业形象，产品和服务至潜在客户，最终达到品牌形象提升，提高用户转化率，进而提高销售额。
          </div>
          <div class="side-btn">Learn More</div>
        </div>
      </div>
      <div class="side two">
        <div class="side-card">
          <div class="side-title">迅捷投放</div>
          <div class="side-desc">
            为您的产品或者活动进行短期爆发式的刷屏级投放，迅速地将信息通过多渠道在目标群体间扩散，以达到消息在极短的时间内迅捷传播的效果。
          </div>
          <div class="side-btn">Learn More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.solutions {
  padding: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    font-weight: bold;
    color: rgba(112, 80, 0, 1);
    font-size: 50px;
  }
  .desc {
    margin-top: 40px;
    width: 560px;
    text-align: center;
    font-size: 20px;
  }
  .two-side {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    .side {
      flex-grow: 1;
      width: 758px;
      height: 574px;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &.one {
        background-image: url(~@/assets/images/side-b.jpg);
        background-size: 100% 80%;
        background-repeat: no-repeat;
        background-color: #1e2f5d;
      }
      &.two {
        background-image: url(~@/assets/images/side-a.jpg);
        background-size: 100% 100%;
      }
      .side-card {
        background: #fff;
        width: 60%;
        height: 60%;
        padding: 80px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        &:hover {
          width: 70%;
          height: 70%;
          transition: all 0.4s;
          .side-title {
          }
          .side-desc {
          }
          .side-btn {
            display: block;
          }
        }
        .side-title {
          font-size: 44px;
          color: rgb(153, 110, 0);
        }
        .side-desc {
          font-size: 16px;
          line-height: 1.6;
          text-align: center;
          width: 300px;
          color: rgb(112, 80, 0);
          margin-top: 20px;
        }
        .side-btn {
          width: 142px;
          height: 40px;
          margin-top: 20px;
          border: 1px solid #996e00;
          background: #ffffff;
          font-size: 14px;
          letter-spacing: 0.1em;
          color: #996e00;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px;
          display: none;
        }
      }
    }
  }
}
</style>
