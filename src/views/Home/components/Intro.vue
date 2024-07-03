<template>
  <div class="intro" id="intro">
    <div class="tabs">
      <div class="tab" :class="{ 'active': currentTabIndex === index }" v-for="(tab, index) in tabList" :key="index"
        @click="changeTab(index)"> {{ tab.title }}</div>
    </div>
    <div class="display">
      <div class="left">
        <div class="title"> {{ displayItem.title }}</div>
        <div class="desc">{{ displayItem.desc }}</div>
        <div class="line"></div>
        <div class="features">
          <div class="feature" v-for="(feature, i) in displayItem.list" :key="'d' + i">
            •{{ feature }}
          </div>
        </div>
      </div>
      <div class="right" :class="displayItem.img"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTabIndex: 0,
      tabList: [
        {
          title: 'GOOGLE SEARCH ADS',
        },
        {
          title: 'DISPLAY',
        },
        {
          title: '视频广告',
        },
        {
          title: 'NATIVE',
        },
        {
          title: '语音广告',
        },
        {
          title: '智能电视 （CTV）',
        },
        {
          title: '户外屏幕广告',
        },
      ],
      displayList: [
        {
          title: 'Search Ads',
          desc: 'Google搜索广告是最常见的广告类型，使用google搜索时展现到搜索结果前面的广告。',
          list: [
            'Google以及搜索合作网络（如AOL）的搜索结果中看到的广告',
            '广告形式：主要是文字和链接',
            '营销目标：商品销售、网站流量等',
            '适合长期投放，转化率高',
            '常见于网站和手机App中',
          ],
          img: 'a',
        },
        {
          img: 'b',
          title: 'Display',
          desc: '​最常见的广告显示形式',
          list: [
            '也被称为Banner，图片或者横幅广告',
            '市面上数量最大的广告形式',
            '价格便宜',
            '适合长期投放',
            '常见于网站和手机App中',
          ],
        },
        {
          img: 'c',
          title: '视频广告',
          desc: '提升品牌形象最好的手段之一',
          list: [
            '用户定向手段类似于语音广告',
            '适合标记用户，吸引用户点击',
            '对品牌提升效果显著',
            '适合展示企业实力，打造高端品牌形象时投放',
            `常见形式：
\n
Native – 在文章中间，进入视野时播出
\n
In-App – App中，全屏播出
\n
In-Stream – 嵌在其他视频中播出`,
            '制作成本高，显示价格是Display的 5-8倍',
          ],
        },
        {
          img: 'd',
          title: 'Native',
          desc: '软广告，更容易被点击',
          list: [
            '显示形式更像是网页的一部分',
            '“不像广告的广告”',
            '适合有B2B行业，向潜在用户推送行业知识，并赢得信任和点击',
            '更容易吸引点击，进而标记用户',
            '价格略高于Display',
          ],
        },
        {
          img: 'e',
          title: '语音广告',
          desc: '年来备受欢迎的新广告形式',
          list: [
            '过注册用户的使用习惯，更准确的定位/识别用户',
            '适合标记用户',
            '用户避无可避（无法跳过）',
            '沉浸式的，更容易洗脑用户',
            '常见情景：健身，驾车，跑步，做饭',
            '常见渠道：播客软件，电台软件，车载电台，音乐软件',
            '适合密集型推广或旺季推广的时候参差投放',
            '价格是Display的 4-7倍',
          ],
        },
        {
          img: 'f',
          title: '电视广告',
          desc: '提升品牌形象最好的手段之一',
          list: [
            '感官性强，视频或动画，以图、文、声、像的形式，传送多感官的信息',
            '适合标记用户，受众数量可跟踪监测',
            '对品牌提升效果显著',
            '适合展示企业实力，打造高端品牌形象时投放',
            '制作成本高，显示价格是Display的 5-8倍',
          ],
        },
        {
          img: 'g',
          title: '户外屏幕',
          desc: '提升品牌形象最好的手段之一',
          list: [
            '零距离覆盖目标商圈，实现高覆盖率',
            '能全方位、直接地让受众人群感受，从而有效地传达信息来引导消费',
            '展示“高端”品牌价值，对品牌提升效果显著',
            '聚合化目标人群',
          ],
        },

      ],
    };
  },
  computed: {
    displayItem() {
      return this.displayList[this.currentTabIndex];
    },

  },
  methods: {
    changeTab(index) {
      this.currentTabIndex = index;
    },
  },

};

</script>

<style lang="scss" scoped>
.intro {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 669px;
  flex-direction: column;

  .tabs {
    width: 1390px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .tab {
      flex-grow: 1;
      letter-spacing: 2px;
      font-size: 15px;
      background-color: #FFFFFF;
      border-bottom: 3px solid #C7C7C7;
      padding: 27px 20px;
      font-size: 15px;
      transform: all .2s;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active,
      &:hover {
        border-bottom: 3px solid #000;
      }

    }
  }

  .display {
    width: 1390px;
    padding: 60px 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    height: 100%;
    min-height: 400px;
    position: relative;

    .left {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      .title {
        font-weight: bold;
        color: #E69213;
        font-size: 50px;
      }

      .desc {
        margin-top: 30px;
        font-size: 16px;
        width: 389px;

      }

      .line {
        margin-top: 30px;
        width: 155px;
        height: 8px;
        background: rgb(255, 191, 35);
      }

      .features {
        width: 389px;
        margin-top: 60px;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .feature {
          font-size: 16px;
          line-height: 1.5;
        }
      }

    }

    .right {
      width: 400px;
      height: 400px;
      // border: 1px solid red;
      margin-left: 240px;
      background-size: 100% 100%;

      &.a {
        width: 542px;
        height: 328px;
        background-image: url(~@/assets/images/display/a.webp);
      }

      &.b {
        width: 600px;
        height: 337px;
        // background-image: url(~@/assets/images/display/b.webp);
      }

      &.c {
        width: 656px;
        height: 369px;
        // background-image: url(~@/assets/images/display/c.webp);
      }

      &.d {
        width: 625px;
        height: 351px;
        // background-image: url(~@/assets/images/display/d.webp);
      }

      &.e {
        width: 625px;
    height: 351px;
        // background-image: url(~@/assets/images/display/e.webp);
      }

      &.f {
        width: 570px;
    height: 428px;
        // background-image: url(~@/assets/images/display/f.webp);
      }
      &.g {
        width: 712px;
        height: 535px;
        // background-image: url(~@/assets/images/display/g.webp);
      }

    }

  }
}</style>
