<template>
  <div class="home text-white">
    <homeSection />
    <aboutSection />
    <servicesSection />
    <skillsSection />
    <portfolioSection />
    <contactSection />
  </div>
</template>

<script setup>
import homeSection from "@/components/home_page/homeSection.vue";
import aboutSection from "@/components/home_page/aboutSection.vue";
import servicesSection from "@/components/home_page/servicesSection.vue";
import skillsSection from "@/components/home_page/skillsSection.vue";
import portfolioSection from "@/components/home_page/portfolioSection.vue";
import contactSection from "@/components/home_page/contactSection.vue";
</script>
