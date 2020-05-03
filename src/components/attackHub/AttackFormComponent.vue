<template>
  <div class="attack-form-container">
    <form id="attack-form" @submit.prevent="$emit('onSubmit')">
      <div class="form-group">
        <label for="ip-input" class="attack-form-label">addr</label>
        <input
          v-model="data.ip"
          type="text"
          class="form-control"
          name="ip"
          id="ip-input"
          placeholder="Enter IP"
        />
      </div>
      <div class="form-group row">
        <div class="col-sm">
          <label for="time-input" class="attack-form-label">time</label>
          <input
            v-model="data.time"
            type="text"
            class="form-control"
            id="time-input"
            placeholder="Enter Time"
          />
        </div>
        <div class="col-sm">
          <label for="port-input" class="attack-form-label">port</label>
          <input
            v-model="data.port"
            type="text"
            class="form-control"
            id="port-input"
            placeholder="Enter Port"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="type-input" class="attack-form-label">mthd</label>
        <select
          :value="data.method"
          v-model="data.method"
          id="type-input"
          class="form-control"
          form="attack-form"
        >
          <option v-for="(method, index) in attackMethods" :value="method" :key="index">{{ method }}</option>
        </select>
      </div>
      <input
        type="submit"
        class="btn btn-primary btn-block button"
        name="startAttack"
        value="Start Attack"
        id="start-attack-button"
        :disabled="startAttackButtonDisabled"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AttackFormComponent",
  props: ["data", "attackMethods", "startAttackButtonDisabled"]
};
</script>

<style scoped>
  @import "../../assets/fonts/sailec.css";
  .attack-form-label {
    font-family: monospace;
    font-size: larger;
  }
  .button {
    font-family: Sailec,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: bold;
    background-color: #0069ff;
    font-size: 16px;
    transition: 0.25s
  }
  .button:focus {
    background-color: #1633ff;
  }
</style>
