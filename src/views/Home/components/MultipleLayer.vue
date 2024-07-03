<template>
  <div class="multiple-layer">
    <div class="title">最全面的广告资源</div>
    <div class="sub-title"> 超过200+可竞标品牌媒体网站</div>
    <div class="desc">涵盖市面上95%以上的各种格式广告位</div>
    <div class="layer-wrap">
      <div class="layer">
        <div class="item" v-for="(item, index) in layerA" :key="index"></div>
      </div>
    </div>
    <div class="layer-wrap">
      <div class="layer">
        <div class="item" v-for="(item, index) in layerB" :key="index"></div>

      </div>
    </div>
    <div class="layer-wrap">
      <div class="layer">
        <div class="item" v-for="(item, index) in layerC" :key="index"></div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      layerA: [1, 2, 3, 4, 4, 5, 6, 7, 8],
      layerB: [1, 2, 3, 4, 4, 5, 6, 7, 8],
      layerC: [1, 2, 3, 4, 4, 5, 6, 7, 8],
    };
  },

};

</script>

<style lang="scss" scoped>
.multiple-layer {
  background-color: #fff;
  height: 825px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    margin-top: 65px;

    font-size: 50px;
    color: rgb(255, 191, 35);
    font-weight: bold;
  }

  .sub-title {
    margin-top: 5px;
    font-size: 30px;
    font-weight: bold;

  }

  .desc {
    margin-top: 15px;
    font-size: 14px;
  }
  .layer-wrap {
    width: 50%;
    margin: 0 auto;
    overflow: hidden;

    .layer {
      width: 100vw;
      margin-top: 30px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      height: 140px;

      .item {
        width: 126px;
        height: 126px;
        margin: 10px;
        background: lightblue;
        border: 1px solid red;
        &:hover{
          opacity: .8;
        }
      }
    }
  }


}</style>
