<template>
  <div class="container attack-container">
    <h1 class="monospaced-heading site-title black-box"><span>timeout</span></h1>
    <AttackFormComponent
      class="mb-3"
      :data="attackFormData"
      :attackMethods="attackMethods"
      :start-attack-button-disabled="startAttackButtonDisabled"
      @onSubmit="startAttackFromForm()"
    />
    <div class="error-container" v-if="errors.length > 0">
      <hr />
      <h4 class="monospaced-heading black-box mb-3"><span>error</span></h4>
      <ErrorListComponent :errors="errors" />
    </div>
    <div class="running-attacks-container" v-if="runningAttacks.length > 0">
      <hr />
      <h4 class="monospaced-heading black-box mb-3"><span>running attacks</span></h4>
      <RunningAttackListComponent :running-attacks="runningAttacks" />
    </div>
  </div>
</template>

<script>
import ErrorListComponent from "./attackHub/ErrorListComponent";
import AttackFormComponent from "./attackHub/AttackFormComponent";
import RunningAttackListComponent from "./attackHub/RunningAttackListComponent";
import AttackService from "../AttackService";
export default {
  name: "AttackHubComponent",
  components: { RunningAttackListComponent, AttackFormComponent, ErrorListComponent },
  data: function() {
    return {
      errors: [],
      attackFormData: {
        ip: "",
        port: "80",
        time: "60",
        method: "TCP"
      },
      allAttacks: [],
      attackMethods: ["TCP", "UDP", "TEST"],
      startAttackButtonDisabled: false
    };
  },
  created() {
    this.updateRunningAttacksFromServer();
  },
  computed: {
    runningAttacks() {
      return this.allAttacks.filter(attack => {
        return attack.running;
      });
    }
  },
  methods: {
    updateRunningAttacksFromServer() {
      AttackService.getRunningAttacks().then((attacks) => {
        this.allAttacks = attacks;
      });
    },
    startAttackFromForm() {
      this.startAttackButtonDisabled = true;
      AttackService.startAttack(
        this.attackFormData.ip,
        this.attackFormData.port,
        this.attackFormData.time,
        this.attackFormData.method
      ).then((out) => {
        if (out.errors) {
          this.errors = out.errors;
        } else {
          this.errors = [];
          this.allAttacks.push(out.attack);
        }
        this.startAttackButtonDisabled = false;
      });
    }
  }
};
</script>
<style scoped>
.monospaced-heading {
  font-family: monospace;
  text-align: center;
}
.black-box > span {
  background: black;
  color: white;
  padding: 0.3em;
  transition: 0.3s;
}
.black-box > span:hover {
  padding: 0.4em;
}
.attack-container {
  margin-top: 5%;
  max-width: 60rem;
}
</style>
