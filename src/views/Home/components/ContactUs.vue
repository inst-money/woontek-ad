<template>
  <div class="contact-us">
    <div class="top">
      <img class="logo" :src="logo" alt="">
      <div class="logo-text">Communicate. Collaborate. Create.</div>
    </div>

    <!-- <div class="title">
      Contact
    </div> -->

    <!-- <div class="desc"> 7883 Taschereau, Suite 100, Brossard, QC, J4Y 1A4</div> -->

    <!-- <div class="group">
      <div class="item">
        <div class="sub-title"> General Inquiries:</div>
        <div class="desc"> </div>
      </div>
      <div class="item">
        <div class="sub-title"> General Inquiries Tel:</div>
        <div class="desc"> </div>
      </div>
    </div> -->

    <!-- <div class="group">
      <div class="item">
        <div class="sub-title"> Sales:</div>
        <div class="desc"></div>
      </div>

    </div> -->

  </div>
</template>

<script>
import imgSrc from '@/assets/images/logo.png';

export default {
  data() {
    return {
      logo: imgSrc,
    };
  },

};

</script>

<style lang="scss" scoped>
.contact-us {
  display: grid;
  width: 100%;
  height: 180px;
  background: #ffbf23;
  padding: 20px 120px;
  box-sizing: border-box;
  .top{
    width: 329px;
    height: 128px;
    position: relative;
    .logo{
      width: 329px;
      height: 128px;
    }
    .logo-text{
      position: absolute;
      font-size: 14px;
      font-weight: bolder;
      bottom:0;
      right: -40px;

    }
  }
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    font-weight: bold;

  }
  .group{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .item{
      font-size: 16px;
      font-weight: bold;
      margin-right: 120px;
      .sub-title{

      }
      .desc{

      }

    }
  }
}
</style>
