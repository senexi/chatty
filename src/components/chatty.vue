<template>
  <v-container fluid>
    <v-layout column align-start>
    </v-layout>
    <chat :title="title" :url="url"/>
    <v-slide-y-transition mode="out-in">
      
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Chat from './chat.vue'
export default {
  components: {
    'chat': Chat
  },
  props: ['url', 'title']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.speech-bubble {
	position: relative;
	background: #8ecf16;
  min-width: 100px;
  max-width: 200px;
  min-height: 100px;
	border-radius: .4em;
  padding: 20px;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-right-color: #8ecf16;
	border-left: 0;
	border-bottom: 0;
	margin-top: -10px;
	margin-left: -20px;
}
</style>
