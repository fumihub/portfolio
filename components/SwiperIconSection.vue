<template>
  <section align="center" justify="center">
    <v-container id="swiperIcon" fluid>
      <div class="example-3d">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="(item,i) in items"
            :key="i"
          >
            <v-img :src="item.src" :lazy-src="item.src" class="grey lighten-2" />
          </swiper-slide>
        </swiper>
      </div>
    </v-container>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'SwiperExample3dCoverFlow',
    title: '3D Coverflow effect',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          loop: false,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        },
        items: [
          /* src を v-bind によって変数バインドさせたい場合は
              そのままパス文字列が出力されてしまう。
              回避するために「require()」で囲む
          */ 
          {
            src: require('~/assets/img/mypicture1.png'),
          },
          {
            src: require('~/assets/img/mypicture2.png'),
          },
          {
            src: require('~/assets/img/mypicture3.png'),
          },
          {
            src: require('~/assets/img/mypicture4.png'),
          },
          {
            src: require('~/assets/img/mypicture5.png'),
          },
          {
            src: require('~/assets/img/mypicture6.png'),
          },
        ],
      }
    }
  }
</script>

<style lang="scss">
#swiperIcon {
  max-width: 1260px;
}

.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 250px;
    text-align: center;
    font-weight: bold;
    background-position: center;
    background-size: cover;
  }
}
</style>