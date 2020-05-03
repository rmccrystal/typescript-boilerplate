<template>
  <div class="status-bar">
    <span
      class="status-bar-item"
      style="margin-left: 0; font-family: monospace; background-color: #16825d;">
      timeout.network v2.0.0</span>
    <span class="status-bar-item">{{ time }}</span>
    <span class="status-bar-item" style="float: right;">
      <span v-if="runningAttacks > 0">Running attacks: {{ runningAttacks }}</span>
      <span v-else>No running attacks</span>
    </span>
    <span class="status-bar-item" style="float: right;">
      <span v-if="attackNodesOnline > 0">Attack nodes online: {{ attackNodesOnline }}</span>
      <span v-else>No attack nodes online</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "StatusBarComponent",
  props: ["runningAttacks", "attackNodesOnline"],
  methods: {
    getTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = ("0" + date.getSeconds()).slice(-2);
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return hours + ":" + minutes + ":" + seconds + " " + ampm;
    }
  },
  data: function() {
    return {
      time: this.getTime()
    };
  },
  created() {
    setInterval(() => {
      this.time = this.getTime();
    }, 100);
  }
};
</script>

<style scoped>
.status-bar {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #007acc;
  height: 1.3em;
  line-height: 1.3em;
}
.status-bar-item {
  margin-left: 2em;
  margin-right: 2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family: Segoe WPC, Segoe UI, sans-serif;
  font-size: smaller;
  color: #fff;
  float: left;
}
</style>
