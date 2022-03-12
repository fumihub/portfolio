<template>
  <section id="work">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="text-center ma-6">
            <v-col class="col-12">
              <h1 class="display-3 font-weight-bold">Work</h1>
            </v-col>
          </v-row>
          <v-row class="text-center ma-6">
            <v-col
            v-for="(item, i) in items"
            :key=i
            class="col-12 col-sm-4 work-col">
              <slide-in-card
                :src="item.src"
                :title="item.title"
                text=""
                btn1=""
                btn2=""
                url1=""
                url2=""
                :text-show="false"
                :btn-show="false"
                ></slide-in-card>
            </v-col>
          </v-row>
          <v-btn
            outlined
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

<script>
import SlideInCard from "./SlideInCard";
export default {
  components: {
    SlideInCard
  },
  data: () => ({
    items:[
      /* src を v-bind によって変数バインドさせたい場合は
          そのままパス文字列が出力されてしまう。
          回避するために「require()」で囲む
      */ 
      {
        src: require('~/assets/img/pigLeadIcon.png'),
        title: "PigLead",
      },
      {
        src: require('~/assets/img/enneagramIcon.png'),
        title: "enneagram",
      },
      {
        src: require('~/assets/img/beautySalonFreelanceIcon.png'),
        title: "美容師フリーランス名鑑",
      },
    ],
  })
};
</script>

<style lang="scss">
// cardのサイズを合わせる
.work-col {
  display: flex;
  align-items: stretch;
  & side-in-card {
    display: flex;
  }
}
</style>
