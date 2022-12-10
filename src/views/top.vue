<script setup lang="ts">
import NavBar from '@/components/Navbar.vue'
import Expression from '@/components/Expression.vue'
import Calculation from '@/components/Calculation.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <NavBar />
  <v-main>
    <Calculation />
    <Expression />
  </v-main>
  <Footer />
</template>
