<script setup lang="ts">
import { useExpressionStore } from '@/stores/expression'
import { Expression } from '@/types/expression'
import { computed, ref } from '@vue/reactivity'

const resultIsLoading = ref(false)
const resultExp = ref({} as Expression)

const expression1 = computed(() => {
  const expressionStore = useExpressionStore()

  const expression = expressionStore.expression1

  if (!expression) return {} as Expression

  return expression
})

const expression2 = computed(() => {
  const expressionStore = useExpressionStore()

  const expression = expressionStore.expression2

  if (!expression) return {} as Expression

  return expression
})

const canGenerate = computed(() => {
  if (typeof expression2.value.id !== 'string') return false

  return true
})

const sleep = (milSec: number) =>
  new Promise((resolve) => setTimeout(resolve, milSec))

const generateExp = async () => {
  resultIsLoading.value = true

  await sleep(3000)

  resultIsLoading.value = false

  const expressionStore = useExpressionStore()

  resultExp.value = expressionStore.resultExpression
}
</script>

<template>
  <v-container>
    <v-row class="align-center h-100">
      <v-col cols="12" md="3">
        <v-card variant="outlined">
          <v-card-title>
            {{ expression1.name }}
          </v-card-title>
          <v-card-text class="d-flex align-center">
            <v-img :src="expression1.image" width="300" height="300"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="1" class="d-flex align-center">
        <v-card class="w-100">
          <v-card-text class="text-center">
            <v-icon icon="mdi-plus"></v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card variant="outlined">
          <v-card-title>
            {{ expression2.name }}
          </v-card-title>
          <v-card-text class="d-flex align-center">
            <v-img :src="expression2.image" width="300" height="300"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="1" class="d-flex align-center">
        <v-card
          class="w-100"
          @click="generateExp()"
          :class="canGenerate ? 'bg-orange text-white active' : ''"
        >
          <v-card-text class="text-center">
            <v-icon icon="mdi-equal"></v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card variant="outlined">
          <div
            v-if="resultIsLoading"
            class="d-flex justify-center align-center"
            style="height: 400px"
          >
            <v-progress-circular
              indeterminate
              color="primary"
              size="200"
              width="10"
            ></v-progress-circular>
          </div>
          <div v-else>
            <v-card-title>
              {{ resultExp.name }}
            </v-card-title>
            <v-card-text class="d-flex align-center">
              <v-img :src="resultExp.image" width="400" height="400"></v-img>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.active {
  border: 1px solid orange;
}
</style>
