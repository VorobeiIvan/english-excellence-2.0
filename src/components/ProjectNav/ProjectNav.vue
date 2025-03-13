<script setup>
import './ProjectNav.scss'
import { navItems } from '../constants'
</script>

<template>
  <ul class="nav">
    <li v-for="(item, index) in navItems" :key="index" class="nav-item">
      <a class="nav-link" :href="item.link">{{ item.text }}</a>
    </li>
  </ul>
</template>
