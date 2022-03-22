<template>
  <v-row>
    <v-col class="text-center">
      <v-row>
        <v-col>
          <h1 class="animation-text display-3 font-weight-bold">
            Work Detail
          </h1>
        </v-col>
      </v-row>
      <v-row
      v-for="(item, i) in items"
      :key=i
      class="text-center ma-6">
        <v-col align="center" justify="center">
          <slide-in-card
            :src="item.src"
            :title="item.title"
            :text="item.text"
            btn1="GitHub"
            btn2="work"
            :url1="item.githubURL"
            :url2="item.workURL"
            :text-show="true"
            :btn-show="true"
            class="workCard"
            ></slide-in-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import SlideInCard from "../components/SlideInCard";
export default {
  name: 'WorkDetail',
  components: {
    SlideInCard,
  },
  data() {
    return {
      items:[
        /* src を v-bind によって変数バインドさせたい場合は
            そのままパス文字列が出力されてしまう。
            回避するために「require()」で囲む
        */ 
        {
          src: require('~/assets/img/pigLeadIcon.png'),
          title: "PigLead",
          text: `■アプリ概要
                PigLeadは、スケジュール管理と家計簿を合体させた画期的なAndroidアプリです。
                近年、マネーフォワードなどの家計簿アプリの登場で家計簿アプリが使われる機会が多くなりました。
                また、スケジュール管理も紙のスケジュール帳からスケジュール管理アプリへ移行する人が多くなっています。
                そんな中、予定の管理はスケジュール管理アプリで、お金の入出金管理は家計簿アプリで、というように2つのアプリを併用している人がほとんどだと思います。
                なぜ、予定がある日には必ずと言っていいほどお金の入出金が伴うのに、2つのアプリで管理を分けているのだろうと考えました。
                そこで、スケジュールとお金の入出金を1つのアプリで管理でき、予定とお金の入出金が紐づくようにしたいという考えから生まれたのがPigLeadです。
                PigLeadでは、スケジュール管理と家計簿記入をアプリ内で完結することができます。
                
                ■担当範囲
                アイデアから、UIデザイン、ロジック開発までを担当`,
          githubURL: "https://github.com/fumihub/PigLead",
          workURL: "https://play.google.com/store/apps/details?id=com.non_name_hero.calenderview",
        },
        {
          src: require('~/assets/img/enneagramIcon.png'),
          title: "enneagram",
          text: `■Webアプリ概要
                エニアグラムとは、自分の内なる性格を知るためのツールです。
                3つの質問の回答から9つのタイプに分け、そのタイプごとの特徴や陥りやすいパターン、その対処法を知るために、エニアグラムを活用します。
                そのエニアグラム診断をゲーム感覚でできるように、各タイプを動物に当てはめてキャラクター化し、どの動物が当たるかというガチャ要素を取り入れ、ただ診断するだけでなく楽しめるWebアプリを作成しました。
                また自分の性格を宝箱と考え、その宝箱(性格)を開く(知る)ために鍵(質問)を集めていく(答えていく)というコンセプトのもと作っていますので、そのコンセプトも感じ取っていただけたらなと思います。
                
                ■担当範囲
                お客様からアイデアをいただき、UIデザインとロジック開発を担当`,
          githubURL: "https://github.com/fumihub/enneagram",
          workURL: "https://fumihub.github.io/enneagram/",
        },
        {
          src: require('~/assets/img/beautySalonFreelanceIcon.png'),
          title: "美容師フリーランス名鑑",
          text: `■Webサイト概要
                美容師フリーランス名鑑とは、フリーランス美容師が集まるプラットフォームサイトです。
                フリーランス美容師の方には、自身の説明、メニューなどを登録していただき、実際に利用するユーザーの方は登録不要で利用できる形式となります。
                現在、フリーランスで活動する美容師が増えてきているのですが、仕事のもらい方は主に友人からの紹介などアナログな手法に限られています。
                そういった課題を解決するために、フリーランス美容師を検索できるプラットフォームを作ることで、フリーランス美容師の方には、仕事をいただく手段の一つを提供し、ユーザーの方には、フリーランス美容師という新たな選択肢を与えることができると考え、美容師フリーランス名鑑を作成することになりました。
                <span style=font-weight:bold;color:red;>***鋭意作成中***</span>
                
                ■担当範囲
                お客様からアイデアをいただき、UIデザインとロジック開発を担当`,
          githubURL: "https://github.com/fumihub/beautySalonFreelance",
          workURL: "",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.workCard {
  width: 100%;
  max-width: 500px;
}
</style>
