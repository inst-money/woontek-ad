<template>
  <div class="home">
    <div >
      <!-- style="{
      d:1;
      width: 100%;
      top: 0;
      left:0;
      position: absolute;
      }" -->
      <Header></Header>
    </div>

    <div class="main">
      <Banner></Banner>
      <AreYouIn></AreYouIn>
      <Solutions></Solutions>
      <Services></Services>
      <ForYou></ForYou>
      <WhatIsDigitPush></WhatIsDigitPush>
      <Advantages></Advantages>
      <WhyBeSelected></WhyBeSelected>
      <Intro></Intro>
      <DisplayType></DisplayType>
      <!-- <MultipleLayer></MultipleLayer> -->
      <WithUs></WithUs>
      <Steps></Steps>
      <ContactUs></ContactUs>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


import Banner from './components/Banner.vue';

import AreYouIn from './components/AreYouIn.vue';
import Solutions from './components/Solutions.vue';
import Services from './components/Services.vue';

import ForYou from './components/ForYou.vue';
import WhatIsDigitPush from './components/WhatIsDigitPush.vue';
import ContactUs from './components/ContactUs.vue';
import Advantages from './components/Advantages.vue';
import WhyBeSelected from './components/WhyBeSelected.vue';
import Intro from './components/Intro.vue';
import DisplayType from './components/DisplayType.vue';
// import MultipleLayer from './components/MultipleLayer.vue';
import WithUs from './components/WithUs.vue';
import Steps from './components/Steps.vue';

export default {
  components: {
    Header,
    Footer,
    Banner,
    AreYouIn,
    Solutions,
    Services,
    ForYou,
    Advantages,
    WhyBeSelected,
    Intro,
    DisplayType,

    // MultipleLayer,
    WithUs,
    Steps,
    ContactUs,
    WhatIsDigitPush,

  },
  data() {
    return {

    };
  },
};

</script>

<style lang="scss" scoepd>
.home {
  .main{
    // min-height: 100vh;
  }
}
</style>
