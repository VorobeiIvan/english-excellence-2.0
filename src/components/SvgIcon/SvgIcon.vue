<script setup>
import spriteUrl from '../../assets/icons/svg-sprite.svg'
import './SvgIcon.scss'

defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <svg :class="['svg-icon', className]" :width="width" :height="height">
    <use :xlink:href="`${spriteUrl}#icon-${name}`" />
  </svg>
</template>
