<template>
  <div class="whatisdigitpush">

    <div class="card">
      <div class="title">什么是数字广告投放</div>
      <div class="desc">
        数字化又称作程序化广告（Programmatic Advertising）<br/>
        是指广告主通过广告交易所，从受众匹配的角度由程序自 <br/>
        动化完成展示类广告的采买和投放，并实时反馈投放分析 <br/>
        的一种广告投放方式，实现了整个数字广告的自动化。 <br/>
      </div>
      <div class="details">
        <div class="detail">
          <div class="icon"></div>
          <div class="text">Target <br/>Audience</div>
        </div>
        <div class="detail">
          <div class="icon"></div>
          <div class="text">Intelligent <br/>Interaction</div>
           </div>
        <div class="detail">
          <div class="icon"></div>
          <div class="text">Achieve <br/> Effect</div>
           </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {

};

</script>

<style lang="scss" scoped>
.whatisdigitpush{
  max-width: 1889px;
  margin: 0 auto;
  height: 798px;
  background-image: url('~@/assets/images/what-is-digit-push-bg.jpg');
  background-size: 100% 100%;
  position: relative;
  .card{
    position: absolute;
    width: 611px;
    height: 417px;
    top: 140px;
    right: 60px;
    background: rgba(255,234,182,.9);
    padding: 40px;
    .title{
      font-size: 38px;
      font-weight: bold;
      color: #000;
    }
    .desc{
      margin-top: 40px;
      font-size: 16px;
    }
    .details{
      margin-top: 120px;
      display: flex;

      .detail{
        display: flex;
      justify-content: center;
      align-items: center;
        margin-right: 40px;
        .icon{
          width: 32px;
          height: 32px;
          background-size: 100% 100%;
          margin-right: 10px;

        }
        .text{
          font-size: 14px;
          font-weight: bold;

        }
        &:nth-child(1){
          .icon{
            background-image: url('~@/assets/svg/details-a.svg');

          }
        }
        &:nth-child(2){
          .icon{
            background-image: url('~@/assets/svg/details-b.svg');
            
          }
        }
        &:nth-child(3){
          .icon{
            background-image: url('~@/assets/svg/details-c.svg');
            
          }
        }
      }
    }

  }
}

</style>
