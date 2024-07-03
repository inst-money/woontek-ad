<template>
  <div class="steps" id="contact-us">
    <div class="title">广告投放流程</div>
    <div class="sub">免费咨询，定制服务，专业顾问，伴您启航</div>

    <div class="list">
      <div class="item">
        <div class="number">1</div>
        <div class="text">竞品分析</div>
        <div class="step a"></div>
      </div>
      <div class="item">
        <div class="number">2</div>
        <div class="text">方案制定</div>
        <div class="step b"></div>
      </div>
      <div class="item">
        <div class="number">3</div>
        <div class="text">执行发布</div>
        <div class="step c"></div>
      </div>
      <div class="item">
        <div class="number">4</div>
        <div class="text">数据追踪</div>
        <div class="step d"></div>
      </div>
      <div class="item">
        <div class="number">5</div>
        <div class="text">持续优化</div>
        <div class="step e"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};

</script>

<style lang="scss" scoped>
.steps {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    margin-top: 40px;
    font-size: 50px;
    font-weight: bold;

  }

  .desc {
    margin-top: 40px;
    font-size: 18px;

  }

  .list {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .item {
      .step{
        width: 37px;
        height: 40px;
        position: absolute;
        // border: 1px solid red;
        background-size: 100% 100%;
        position: absolute;
        top: calc(50% - 20px);
        left: 56px;
        &.a{
          background-image: url(~@/assets/svg/step-a.svg);
        }
        &.b{
          background-image: url(~@/assets/svg/step-b.svg);
        }
        &.c{
          background-image: url(~@/assets/svg/step-c.svg);
        }
        &.d{
          background-image: url(~@/assets/svg/step-d.svg);
        }
        &.e{
          background-image: url(~@/assets/svg/step-e.svg);
        }
        // &.f{
        //   background-image: url(~@/assets/svg/step-f.svg);
        // }
      }
      &:last-child{
        &::after{
          display: none;
        }
      }
      width: 238px;
      position: relative;
      &::after{
        content: "";
        display: block;
        width: 32px;
        height: 60px;
        background-size: 100% 100%;
        // background-color: red;
        transform: rotate(90deg);
        position: absolute;
        background-image: url(~@/assets/svg/more.svg);
        right: 60px;
        bottom: calc(50% - 20px);
      }
      .number {
        font-size: 90px;
        font-weight: bolder;
        color: #ffeab6;
      }

      .text {
        font-size: 20px;
        font-weight: bold;

      }
    }
  }
}</style>
