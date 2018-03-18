<template>
    <div style="max-width: 700px;">
    <v-layout column justify-center align-center>
      <v-subheader>{{ title }}</v-subheader>
    </v-layout>
    <v-container
      id="chat-container"
      style="max-height: 400px"
      class="scroll-y"
    >
      <div v-for="(message, key) in messages" :key="key">
          <v-layout>
            <v-flex class="message">
              <chatbubble v-bind:id="message.text" :author="message.author" :direction="message.direction">{{message.text}}</chatbubble>
            </v-flex>
          </v-layout>
      </div>
      <div id="conversationEnd" />
    </v-container>
    <v-layout column align-center>
        <v-text-field
          name="input-7-1"
          label="Message"
          v-model="newMessage"
          v-on:keyup.enter="send()"
        ></v-text-field>
      </v-layout>
  </div>
</template>

<script>
import ChatBubble from './chatbubble.vue'
import axios from 'axios'

let observer = 0
export default {
  data () {
    return {
      newMessage: '',
      easing: 'easeInOutCubic',
      messages: []
    }
  },
  props: ['title', 'url'],
  components: {
    'chatbubble': ChatBubble
  },
  methods: {
    send: function () {
      console.log('send message: ' + this.newMessage)
      this.messages.push({
        author: 'Me',
        text: this.newMessage,
        direction: 'right'
      })
      var postRequest = {
        message: this.newMessage
      }
      axios.post(this.url, postRequest)
      .then(response => {
        this.messages.push({
          author: this.title + ' Bot',
          text: response.data,
          direction: 'left'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
      this.newMessage = ''
    }
  },
  mounted () {
    let chatcontainer = document.getElementById('chat-container')
    observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
          let end = document.getElementById('conversationEnd')
          end.scrollIntoView(true)
        }
      })
    })
    var config = { attributes: true, childList: true, characterData: true }
    observer.observe(chatcontainer, config)
  },
  beforeDestroy () {
    console.log('Mounted destroyed')
    observer.disconnect()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
    padding: 0.75rem;
}
</style>