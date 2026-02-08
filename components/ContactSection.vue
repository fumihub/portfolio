<template>
  <section align="center" justify="center">
    <v-container id="contact" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="text-center ma-6">
            <v-col>
              <h1 class="text-h2 font-weight-bold">Contact</h1>
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
                    variant="outlined"
                  />
                </div>
                <div>
                  <v-textarea
                    v-model="inputMessage"
                    counter
                    label="Message"
                    :rules="messageRules"
                    variant="outlined"
                  />
                </div>
              </form>
              <v-btn
                variant="outlined"
                block
                @click="textCheck">
                Send
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nameRules = [
  value => !!value || 'Required.',
]

const messageRules = [
  value => !!value || 'Required.',
  value => (value && value.length <= 200) || 'Max 200 characters',
]

const inputName = ref("")
const inputMessage = ref("")

const textCheck = () => {
  if (inputName.value.length === 0 && inputMessage.value.length === 0) {
    alert("NameとMessageを埋めてください。")
  }
  else if (inputName.value.length === 0) {
    alert("Nameを埋めてください。")
  }
  else if (inputMessage.value.length === 0) {
    alert("Messageを埋めてください。")
  }
  else if (inputMessage.value.length >= 200) {
    alert("Messageは200文字以内で入力してください。")
  }
  else {
    router.push({
      path: "/contactResult",
      query: { name: inputName.value, message: inputMessage.value },
    })
  }
}
</script>

<style lang="scss">
#contact {
  max-width: 1260px;
}
</style>
