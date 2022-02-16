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
              <v-app-bar-nav-icon @click.stop="rightDrawer = !rightDrawer" />
              <v-btn icon @click.stop="miniVariant = !miniVariant">
              </v-btn>
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
      mini: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss">

</style>

<style scoped>
.mylogo {
  height: 50px;
  width: 100px;
}
</style>
