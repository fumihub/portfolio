<template>
  <v-app>
    <v-navigation-drawer
      v-model="rightDrawer"
      :rail="miniVariant"
      fixed
      app
      location="right"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col class="4">
              <v-img
                src="/portfolio/img/mylogo.png"
                lazy-src="/portfolio/img/mylogo.png"
                class="mylogo"
              />
            </v-col>
            <v-col align="end" justify="end" class="8">
              <v-spacer />
              <v-app-bar-nav-icon @click="routeChange(); rightDrawer = !rightDrawer" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const miniVariant = ref(false)
const rightDrawer = ref(false)
const items = ref([])

const routeChange = () => {
  // アイテム配列初期化
  items.value = []
  
  // 遷移先追加
  if (route.path === '/') {
    items.value.push({
      icon: 'mdi-animation',
      title: 'WorkDetail',
      to: '/workDetail',
    })
  }
  else if (route.path === '/workDetail') {
    items.value.push({
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    })
  }
  else if (route.path === '/contactResult') {
    items.value.push(
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-animation',
        title: 'WorkDetail',
        to: '/workDetail',
      }
    )
  }
}

// ルート変更を監視
watch(() => route.path, () => {
  routeChange()
}, { immediate: true })
</script>

<style lang="scss">
.mylogo {
  height: 50px;
  width: 100px;
}
</style>
