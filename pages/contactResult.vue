<template>
  <v-row>
    <v-col class="text-center">
      <v-row>
        <v-col>
          <h1 class="animation-text display-3 font-weight-bold">
            Thank You !
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            お問合せありがとうございます。<br>
            下記内容で受付いたしました。
          </p>
          <p class="font-weight-bold">名前：</p>
          <p>{{ name }}</p>
          <p class="font-weight-bold">問い合わせ：</p>
          <p>{{ message }}</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ContactResultPage',
  data() {
    return {
      name: "",
      message: ""
    }
  },
  created() {
    // queryStringsから受け取った値をdataへ
    this.name = this.$route.query.name;
    this.message = this.$route.query.message;
  },
  mounted() {
    const el = document.querySelector('.animation-text');
    const str = el.innerHTML.trim().split("");
    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span data-text="${curr}">${curr}</span>`;
    }, "");
  }
}
</script>

<style lang="scss">
.animation-text span {
  position: relative;
  display: inline-block;
  // margin: 0 -.05em;
  color: white;
}
.animation-text span::after {
  position: absolute;
  top: 0;
  left: 0;
  content: attr(data-text);
  color: yellow;
  opacity: 0;
  transform: scale(1.5);
  animation: animation 3s infinite;
}

@for $i from 2 through 11 {
  .animation-text span:nth-child(#{$i})::after {
      animation-delay: $i * 0.1s;
  }
}

@keyframes animation {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  75% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
  25% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
