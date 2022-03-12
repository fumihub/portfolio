<template>
  <section id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="text-center ma-6">
            <v-col>
              <h1 class="display-3 font-weight-bold">Contact</h1>
            </v-col>
          </v-row>
          <v-row class="text-center ma-6">
            <!-- 問い合わせフォーム -->
            <v-col>
              <form>
                <div>
                  <v-text-field
                    v-model="inputName"
                    class="ma-3"
                    label="Name"
                    :rules="nameRules"
                    hide-details="auto"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div>
                  <v-textarea
                    v-model="inputMessage"
                    counter
                    label="Message"
                    :rules="messageRules"
                    outlined
                  ></v-textarea>
                </div>
              </form>
              <v-btn
                outlined
                block
                @click="textCheck">
                send
              </v-btn>
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
    nameRules: [
      value => !!value || 'Required.',
    ],
    messageRules: [
      value => !!value || 'Required.',
      value => (value && value.length <= 200) || 'Max 500 characters',
    ],
    inputName: "",
    inputMessage: "",
  }),
  methods: {
    textCheck (event){
      if (this.inputName.length === 0 && this.inputMessage.length === 0) {
        alert("NameとMessageを埋めてください。")
      }
      else if (this.inputName.length === 0) {
        alert("Nameを埋めてください。")
      }
      else if (this.inputMessage.length === 0) {
        alert("Messageを埋めてください。")
      }
      else if (this.inputMessage.length >= 200) {
        alert("Messageは200文字以内で入力してください。")
      }
      else {
        this.$router.push({
          path: "/contactResult",
          query: { name: this.inputName, message: this.inputMessage},
        });
      }
    }
  }
};
</script>


<style lang="scss">

</style>