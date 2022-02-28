<template>
  <v-card class="cover-slide">
    <div class="card">
      <v-img v-bind:src="src" v-bind:lazy-src="src" @load="load()"  />
      <h1 class="my-3">{{ title }}</h1>
      <v-card-text
        v-show="textShow">
        <p class="text-left" v-html="htmlText(text)"></p>
      </v-card-text>
      <v-btn
        v-show="btnShow"
        outlined
        class="ma-3"
        :href="url1">
        {{ btn1 }}
      </v-btn>
      <v-btn
        v-show="btnShow"
        outlined
        class="ma-3"
        :href="url2"
        >
        {{ btn2 }}
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props:{
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    btn1: {
      type: String,
      required: true
    },
    btn2: {
      type: String,
      required: true
    },
    url1: {
      type: String,
      required: true
    },
    url2: {
      type: String,
      required: true
    },
    textShow: {
      type: Boolean,
    },
    btnShow: {
      type: Boolean,
    },
  },
  data: () => ({
  }),
  mounted() {
  },
  methods:{
    load () {
      // 画像がダウンロードされてからスクロールを監視
      const els = document.querySelectorAll('.cover-slide');
    
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
        once: true
      };
      
      const cb = function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            if(options.once) {
              observer.unobserve(entry.target);
            }
          }
        });
      };

      // InterSectionObserverをインスタンス化
      const io = new IntersectionObserver(cb, options);
      // 「cover-slide」クラスの要素を監視
      els.forEach(el => io.observe(el));
    },
    htmlText(msg){
      if( msg !== "" ){
        return msg.replace(/\r?\n/g, '<br>');
      }
    }
  }
};
</script>

<style lang="scss">

.cover-slide {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 100%;
    bottom: 0;
    background-color: #eaebe6;
  }

  &.inview {
    &::after {
      animation: kf-cover-slide 1.5s ease-in-out 0.5s forwards;
    }
  }
}

@keyframes kf-cover-slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}

.card {
  opacity: 0;

  .inview & {
    opacity: 0;
    animation: kf-card 1.5s ease-in-out 0.5s forwards;
  }
}

@keyframes kf-card {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
}
</style>
