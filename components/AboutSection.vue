<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="text-center">
            <v-col>
              <h1 class="display-3 font-weight-bold">About</h1>
            </v-col>
          </v-row>
          <v-row class="text-left ma-6">
            <!-- プロフィールアイコン -->
            <v-col justify="center" align="center" class="col-12 col-md-6 my-1">
              <v-img
                :src="require('~/assets/img/profileIcon.png')"
                :lazy-src="require('~/assets/img/profileIcon.png')"
                class="profile-icon"
              />
            </v-col>
            <!-- プロフィール説明 -->
            <v-col class="col-12 col-md-6 my-1">
              <v-row>
                <v-col cols="12">
                  <v-row
                    v-for="(profile, i) in profiles"
                    :key=i
                  >
                    <v-col class="col-4">
                      <p>
                        {{ profile.title }}
                      </p>
                    </v-col>
                    <v-col class="col-8">
                      <p>
                        {{ profile.value }}
                      </p>
                    </v-col>
                  </v-row>
                  <p
                    v-for="(greetText, i) in greetTexts"
                    :key=i
                  >
                    {{ greetText }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <!-- SNSリンク -->
          <v-row>
            <v-col>
              
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    profiles:[
      {
        title: "名前",
        value: "西出　文滉",
      },
      {
        title: "活動拠点",
        value: "東京",
      },
      {
        title: "好きなもの",
        value: "服、猫、温泉、筋トレ、綺麗な景色、阪神タイガース",
      },
      {
        title: "事業内容",
        value: "web制作、スマホアプリ開発、デザイン関連",
      }
    ],
    greetTexts:[
      "上記事業内容以外にも、オンライン家庭教師として、子供の教育に携わっています。",
      "ご興味ある方はお気軽に問い合わせください。"
    ],
  })
};
</script>

<style lang="scss">
.profile-icon {
  border-radius: 50%;
  height: 400px;
  width: 400px;
}

section {
  position: relative;
}
</style>
