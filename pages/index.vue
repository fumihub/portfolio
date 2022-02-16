<template>
  <v-app>
    <v-main class="pt-0">
      <v-row>
        <v-col align="center" justify="center">
          <h1 class="display-3 font-weight-bold">Portfolio</h1>
        </v-col>
      </v-row>
      <SwiperIconSection />
      <AboutSection />
      <ServiceSection />
      <WorkSection />
      <ContactSection />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
