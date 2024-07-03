<template>
  <div class="areyouin">
    <div class="title">您的企业是否还经历着</div>
    <div class="list">
      <TroubleCard
        v-for="item in arr"
        :key="item.title"
        :title="item.title"
        :logo="item.logo"
        :desc="item.desc"
      >
      </TroubleCard>
    </div>
  </div>
</template>

<script>
import TroubleCard from './TroubleCard.vue';

export default {
  components: {
    TroubleCard,
  },
  data() {
    return {
      arr: [
        {
          title: '无效广告',
          desc: '营销费用打水漂，广告和促销做了不少，但是效果平平',
          logo: require('@/assets/images/icon/a.png'),
        },
        {
          title: '单量少',
          desc: '试过各种方法，无奈业绩效率   一直没有显著提升',
          logo:  require('@/assets/images/icon/b.png'),
        },
        {
          title: '客流量少',
          desc: '开拓新客无从下手，找不到精准客群',
          logo:  require('@/assets/images/icon/c.png'),
        },
        {
          title: '知名度低',
          desc: '品牌名称打不响。行业龙头垄断。没机会展示优势',
          logo:  require('@/assets/images/icon/d.png'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.areyouin {
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  justify-content: center;
  align-items: center;
  background: rgba(247,245,245,1);
  padding: 60px;
  .title {
    font-size: 38px;
    color: rgb(112, 80, 0);
  }

  .list {
    display: flex;
    margin-top: 40px;
    // flex-direction: column;
  }
}
</style>
