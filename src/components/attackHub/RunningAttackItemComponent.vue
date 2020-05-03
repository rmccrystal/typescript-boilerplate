<template>
  <div class="alert" :class="buttonDisabled ? ['alert-info'] : ['alert-primary']" role="alert">
    {{ attack.method }} attack to {{ attack.ip }}:{{ attack.port }} with
    {{ attack.timeLeft }} seconds left
    <button href="#" class="close" aria-label="close" @click="stop" :disabled="buttonDisabled">×</button>
  </div>
</template>

<script>
import AttackService from "../../AttackService";

export default {
  name: "RunningAttackItemComponent",
  props: ["attack"],
  data: function() {
    return {
      buttonDisabled: false
    };
  },
  methods: {
    stop() {
        this.buttonDisabled = true;
      AttackService.stopAttack(this.attack.id).then(output => {
        if(output.success) {
            this.attack['running'] = false;
        } else {
            // Handle error
            console.log(output);
        }
      });
    }
  }
};
</script>

<style scoped></style>
