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
            class="col-12 col-sm-4">
              <v-card style="width: 100%">
                <v-img v-bind:src="item.src" v-bind:lazy-src="item.src" />
                <h1 class="my-3">{{ item.title }}</h1>
              </v-card>
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
export default {
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
section {
  position: relative;
}

</style>
