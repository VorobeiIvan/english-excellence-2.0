<script setup>
import './SocialMedia.scss'
import SvgIcon from '../SvgIcon/SvgIcon.vue'
import { socialItems } from '../constants.js'
</script>

<template>
  <ul class="social-media">
    <li v-for="(item, index) in socialItems" :key="index" class="social-media-item">
      <a class="social-media-link" :href="item.link" target="_blank" rel="noopener noreferrer">
        <SvgIcon :name="item.text" width="28" height="28" class="social-media-icon" />
      </a>
    </li>
  </ul>
</template>
