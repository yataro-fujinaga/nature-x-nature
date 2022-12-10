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
        <v-col class="d-flex align-center">
          <div>
            <span class="font-weight-bold">Nature x Nature</span>
          </div>
        </v-col>
        <v-col class="text-right">
          <v-btn
            @click="refreshExpression"
            icon="mdi-refresh"
            color="red-darken-4"
          ></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
