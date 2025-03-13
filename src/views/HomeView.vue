<script setup>
import './HomeView.scss'
import ProjectHeader from '../components/ProjectHeader/ProjectHeader.vue'
import ProjectLogo from '../components/ProjectLogo/ProjectLogo.vue'
import ProjectNav from '../components/ProjectNav/ProjectNav.vue'
import SocialMedia from '../components/SocialMedia/SocialMedia.vue'
import SvgIcon from '../components/SvgIcon/SvgIcon.vue'
</script>

<template>
  <ProjectHeader>
    <ProjectLogo />
    <ProjectNav />
    <SocialMedia />
    <SvgIcon name="menu" width="32" height="32" />
  </ProjectHeader>
</template>
