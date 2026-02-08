<template>
  <section align="center" justify="center">
    <v-container id="swiperIcon" fluid>
      <div class="example-3d">
        <Swiper
          :modules="modules"
          :effect="'coverflow'"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }"
          :loop="false"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          class="swiper"
        >
          <SwiperSlide
            v-for="(item, i) in items"
            :key="i"
          >
            <v-img :src="item.src" :lazy-src="item.src" class="grey-lighten-2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const modules = [EffectCoverflow, Autoplay]

const items = [
  {
    src: '/portfolio/img/mypicture1.png',
  },
  {
    src: '/portfolio/img/mypicture2.png',
  },
  {
    src: '/portfolio/img/mypicture3.png',
  },
  {
    src: '/portfolio/img/mypicture4.png',
  },
  {
    src: '/portfolio/img/mypicture5.png',
  },
  {
    src: '/portfolio/img/mypicture6.png',
  },
]
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