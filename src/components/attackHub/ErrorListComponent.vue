<template>
    <div class="error-list">
      <div class="alert alert-danger" role="alert"
           v-for="(error, index) in errors"
            :key="index">
        {{ error }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ErrorListComponent",
        props: ['errors']
    }
</script>

<style scoped>

</style>
