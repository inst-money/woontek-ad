<template>
  <div class="services" id="serives">
    <div class="title">服务范畴</div>
    <div class="list">
      <div class="service-wrapper" v-for="(item, index) in list" :key="index">
        <div class="service">
          <div class="service-title">{{ item.title }}</div>
          <!-- <img :src="item.logo" alt="" class="service-svg"> -->
          <div class="service-desc">{{ item.desc }}</div>
          <div class="service-btn">Read More</div>
          <!-- <div class="service-svg"></div> -->

        </div>
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
          title: "定制化程序化广告方案",
          desc: "程序化技术利用更细致的目标定位和实时数据，根据用户画像定向投放，分析超过20亿的活跃客户数据。确保广告在对的时间显示给最具潜力的购买者，从而到达最佳利润点。",
          logo: require("@/assets/svg/a.png")
        },
        {
          title: "Google ads搜索广告优化服务",
          desc: "Google Search Ads (谷歌搜索广告) 推广战略的部署与实施。定期进行搜索广告和关键词的更新和管理，线上用户发掘，竞价与人群调整，“再营销 (Remarketing) ”追踪式图像广告的优化和运营。",
          logo: require("@/assets/svg/b.png")
        },
        {
          title: "网页设计与搭建服务",
          desc: "制作与广告高度匹配的单页转化型网站/着陆页(含SSL安全证书)，专为达成转化或收集销售线索而设计。网页可植入多媒体素材与表格机制，并嵌入周全的用户行为与转化追踪系统。页面收集到的用户信息可同步至多种知名CRM系统。",
          logo: require("@/assets/svg/c.png")
        },
        {
          title: "社交媒体广告",
          desc: "将广告投放至Facebook、Instagram、WhatsApp、Messengers等社交媒体平台，触及特定的目标人群。和展示广告类似，用于品牌推广、新产品推广和再营销（Remarkeing）。",
          logo: require("@/assets/svg/d.png")
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  // border: 1px solid red;
  .title {
    font-size: 50px;
    font-weight: bold;
    color: rgb(112, 80, 0);
  }

  .list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;

    .service-wrapper {
      width: 50%;
      padding: 20px;
      box-sizing: border-box;

      &:nth-child(1),
      &:nth-child(4) {
        .service {
          background-color: rgb(255, 234, 182);
        }
      }

      &:nth-child(2),
      &:nth-child(3) {
        .service {
          background: rgb(246, 202, 165);
        }
      }

      &:nth-child(1) {

        .service {
          background-repeat: no-repeat;
          background-position: calc(100%) 100%;
          background-image: url("~@/assets/svg/a.png");
          background-size: 420px auto
        }

      }

      &:nth-child(2) {
        .service {
          background-repeat: no-repeat;
          background-position: calc(100%) 100%;
          background-image: url("~@/assets/svg/b.png");
          background-size: 340px auto;
        }
      }

      &:nth-child(3) {
        .service {
          background-repeat: no-repeat;
          background-position: calc(100%) 100%;
          background-image: url("~@/assets/svg/c.png");
          background-size: 420px auto;
        }
      }

      &:nth-child(4) {
        .service {
          background-repeat: no-repeat;
          background-position: calc(100%) 100%;
          background-image: url("~@/assets/svg/d.png");
          background-size: 440px auto;
        }
      }

      .service {
        // width: 100%;
        padding: 120px 40px;
        min-height: 540px;
        box-sizing: border-box;
        // transition: all 2s;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;
        position: relative;

        &:hover {
          .service-btn {
            display: flex;
          }
        }

        .service-svg {
          width: 300px;
          height: 300px;
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
          // border: 1px solid #fff;
        }


        .service-title {
          font-size: 26px;
          font-weight: bold;
          transition: all 0.2s;
          margin-bottom: 40px;
        }

        .service-desc {
          margin-bottom: 40px;
          width: 400px;
          font-size: 15px;
          transition: all 0.2s;
        }

        .service-btn {
          margin-top: 40px;
          width: 151px;
          height: 40px;
          color: #fff;
          background: #000;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          display: none;
          transition: all 0.2s;
        }
      }
    }
  }
}</style>
