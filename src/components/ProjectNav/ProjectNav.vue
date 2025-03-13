<script setup>
import './ProjectNav.scss'
import { navItems } from '../constants'
</script>

<template>
  <ul class="header-nav">
    <li v-for="(item, index) in navItems" :key="index" class="header-nav-item">
      <a class="header-nav-link" :href="item.link">{{ item.text }}</a>
    </li>
  </ul>
</template>
