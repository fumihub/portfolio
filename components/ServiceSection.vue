<template>
  <section align="center" justify="center">
    <v-container id="service" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="text-center ma-6">
            <v-col>
              <h1 class="text-h2 font-weight-bold">Service</h1>
            </v-col>
          </v-row>
          <v-row class="text-center ma-6 service-row">
            <v-col
              v-for="(item, i) in items"
              :key="i"
              class="col-12 col-sm-4 service-col">
              <SlideInCard
                :src="item.src"
                :title="item.title"
                :text="item.text"
                btn1=""
                btn2=""
                url1=""
                url2=""
                :text-show="true"
                :btn-show="false"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const items = [
  {
    src: '/portfolio/img/webSite.png',
    title: "Web制作",
    text: `お客様のご要望をヒアリングし、目的に応じたサイトを作成いたします。
          VueやNuxtなどモダンなフレームワークを使用して制作いたします。`,
  },
  {
    src: '/portfolio/img/smartphone.png',
    title: "アプリ開発",
    text: `お客様のご要望をヒアリングし、希望に沿ったAndroidスマホアプリの作成をいたします。
          JavaまたはKotlinを使用して、開発いたします。`,
  },
  {
    src: '/portfolio/img/design.png',
    title: "デザイン",
    text: `お客様の想いを形にするために、ヒアリングとすり合わせを繰り返し、デザインを作成いたします。
          UI、UXに富んだデザインを提案します。`,
  },
]
</script>

<style lang="scss">
#service {
  max-width: 1260px;
}
// cardのサイズを合わせる
.service-col {
  display: flex;
  align-items: stretch;
}
</style>
