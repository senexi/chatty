<template>
    <div v-bind:class="{ 'bubble-left': direction === 'left', 'bubble-right': direction === 'right'}">
        <div class="author">{{ author }}</div>
        <div v-bind:class="{ 'speech-bubble-left': direction === 'left', 'speech-bubble-right': direction === 'right'}" >
            <slot></slot>
        </div>
        <div class="timestamp">{{ d }}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      d: new Date()
    }
  },
  props: ['author', 'direction']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bubble-left {
  float: left;
}

.bubble-right {
  float: right;
}

.author {
  font-size: 0.75rem;
}

.timestamp {
  font-size: 0.75rem;
}

.speech-bubble-left {
  position: relative;
  background: #8ecf16;
  min-width: 100px;
  max-width: 200px;
  min-height: 70px;
  border-radius: 0.4em;
  padding: 20px;
}

.speech-bubble-left:after {
  content: "";
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

.speech-bubble-right {
  position: relative;
  background: #00aabb;
  min-width: 100px;
  max-width: 200px;
  min-height: 70px;
  border-radius: 0.4em;
  padding: 20px;
}

.speech-bubble-right:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #00aabb;
  border-right: 0;
  border-bottom: 0;
  margin-top: -10px;
  margin-right: -20px;
  margin: 5;
}
</style>