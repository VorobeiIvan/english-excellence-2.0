<script setup>
import ProjectLogo from '../ProjectLogo/ProjectLogo.vue'
import ProjectNav from '../ProjectNav/ProjectNav.vue'
import SocialMedia from '../SocialMedia/SocialMedia.vue'
import SvgIcon from '../SvgIcon/SvgIcon.vue'
import ProjectBtn from '../ProjectBtn/ProjectBtn.vue'

import './ProjectHeader.scss'
</script>

<template>
  <header class="header">
    <ProjectLogo />
    <ProjectNav />
    <SocialMedia />
    <ProjectBtn name="burger" type="button" class="header-btn">
      <SvgIcon name="menu" width="32" height="32" class="header-btn-icon" />
    </ProjectBtn>
  </header>
</template>
