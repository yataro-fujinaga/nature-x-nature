<script setup lang="ts">
import { useExpressionStore } from '@/stores/expression'

const refreshExpression = () => {
  const expressionStore = useExpressionStore()

  expressionStore.refresh()
}
</script>

<template>
  <v-app-bar class="w-100" color="teal-darken-3">
    <v-container>
      <v-row>
        <v-col>
          <span class="font-weight-bold">Nature x Nature</span>
        </v-col>
        <v-spacer></v-spacer>
        <!-- <v-col class="text-right">
          <v-btn @click="refreshExpression" icon="mdi-refresh"></v-btn>
        </v-col> -->
      </v-row>
    </v-container>
  </v-app-bar>
</template>
