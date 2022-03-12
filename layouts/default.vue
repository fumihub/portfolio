<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="rightDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :right="right"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col class="4">
              <v-img
                :src="require('~/assets/img/mylogo.png')"
                :lazy-src="require('~/assets/img/mylogo.png')"
                class="mylogo"
              />
            </v-col>
            <v-col  align="end" justify="end" class="8">
              <v-spacer />
              <v-app-bar-nav-icon @click="routeChange()" @click.stop="rightDrawer = !rightDrawer" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      mini: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    routeChange(){
      // アイテム配列初期化
      this.items.splice(0);
      // 遷移先追加
      if (this.$route.path === '/') {
        this.items.push(
          {
            icon: 'mdi-animation',
            title: 'WorkDetail',
            to: '/workDetail',
          },
        );
      }
      else if (this.$route.path === '/workDetail') {
        this.items.push(
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/',
          },
        );
      }
      else if (this.$route.path === '/contactResult') {
        this.items.push(
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/',
          },
          {
            icon: 'mdi-animation',
            title: 'WorkDetail',
            to: '/workDetail',
          },
        );
      }
    }
  }
}
</script>

<style lang="scss">
.mylogo {
  height: 50px;
  width: 100px;
}
</style>
