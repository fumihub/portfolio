<template>
  <v-card class="cover-slide">
    <div class="card">
      <v-img v-bind:src="src" v-bind:lazy-src="src" />
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
    class ScrollObserver {
      constructor(els, cb, options) {
          this.els = document.querySelectorAll(els);
          const defaultOptions = {
              root: null,
              rootMargin: "0px",
              threshold: 0,
              once: true
          };
          this.cb = cb;
          this.options = Object.assign(defaultOptions, options);
          this.once = this.options.once;
          this._init();
      }

      _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };

        this.io = new IntersectionObserver(callback.bind(this), this.options);
        
        this.els.forEach(el => this.io.observe(el));
      }

      destory() {
          this.io.disconnect();
      }
    }

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.cover-slide', cb);
    console.log(so)
  },
  methods:{
    htmlText(msg){
      if( msg !== "" ){
        return msg.replace(/\r?\n/g, '<br>')
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
