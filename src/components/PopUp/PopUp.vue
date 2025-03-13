<script setup>
import './PopUp.scss'
</script>

<template>
  <!-- <div v-if="isOpen" class="pop-up" @click="onOutsideClick"> -->
  <div class="pop-up">
    <div class="pop-up-content">
      <slot></slot>
    </div>
  </div>
</template>
