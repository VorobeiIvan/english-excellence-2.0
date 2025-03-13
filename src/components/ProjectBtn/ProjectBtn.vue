<script setup>
import './ProjectBtn.scss'

defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button :class="['btn', className]" :type="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>
