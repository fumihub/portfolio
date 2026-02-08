<template>
  <section align="center" justify="center">
    <v-container id="work" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="text-center ma-6">
            <v-col class="col-12">
              <h1 class="text-h2 font-weight-bold">Work</h1>
            </v-col>
          </v-row>
          <v-row class="text-center ma-6">
            <v-col
              v-for="(item, i) in items"
              :key="i"
              class="col-12 col-sm-4 work-col">
              <SlideInCard
                :src="item.src"
                :title="item.title"
                text=""
                btn1=""
                btn2=""
                url1=""
                url2=""
                :text-show="false"
                :btn-show="false"
              />
            </v-col>
          </v-row>
          <v-btn
            variant="outlined"
            block
            class="ma-3"
            to="/workDetail">
            Work詳細
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const items = [
  {
    src: '/portfolio/img/pigLeadIcon.png',
    title: "PigLead",
  },
  {
    src: '/portfolio/img/enneagramIcon.png',
    title: "enneagram",
  },
  {
    src: '/portfolio/img/beautySalonFreelanceIcon.png',
    title: "美容師フリーランス名鑑",
  },
]
</script>

<style lang="scss">
#work {
  max-width: 1260px;
}
// cardのサイズを合わせる
.work-col {
  display: flex;
  align-items: stretch;
  & side-in-card {
    display: flex;
  }
}
</style>
