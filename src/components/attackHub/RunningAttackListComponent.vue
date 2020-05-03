<template>
  <div class="attack-list">
    <RunningAttackItemComponent
      v-for="(attack, key) in runningAttacks"
      :key="key"
      :attack="attack"
    />
  </div>
</template>

<script>
import RunningAttackItemComponent from "./RunningAttackItemComponent";
export default {
  name: "RunningAttackListComponent",
  components: { RunningAttackItemComponent },
  props: ["runningAttacks"]
};
</script>

<style scoped></style>
