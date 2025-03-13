<script setup>
import './ProjectNav.scss'
import { navItems } from '../constants'
</script>

<template>
  <ul class="header-nav">
    <li v-for="(item, index) in navItems" :key="index" class="header-nav__item">
      <a class="header-nav__link" :href="item.link">{{ item.text }}</a>
    </li>
  </ul>
</template>
