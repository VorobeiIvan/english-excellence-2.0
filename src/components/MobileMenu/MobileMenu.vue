<script setup>
import PopUp from '../PopUp/PopUp.vue'
import ProjectBtn from '../ProjectBtn/ProjectBtn.vue'
import ProjectNav from '../ProjectNav/ProjectNav.vue'
import SocialMedia from '../SocialMedia/SocialMedia.vue'

import './MobileMenu.scss'
</script>

<template>
  <PopUp>
    <ProjectBtn name="close" type="button" class="close-btn" />
    <ProjectNav />
    <SocialMedia />
  </PopUp>
</template>
