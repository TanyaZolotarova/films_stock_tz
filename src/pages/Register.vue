<script setup>
import RegistrationForm from '@/features/RegistrationForm.vue';
</script>

<template>
    <div class='container'>
      <RegistrationForm/>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
</style>
