<script setup lang="ts">
import { Expression } from '@/types/expression'
import { useExpressionStore } from '@/stores/expression'
import { expressions } from '@/assets/expression'

const addExpression = (expression: Expression) => {
  const expressionStore = useExpressionStore()

  const expression1 = expressionStore.expression1
  const expression2 = expressionStore.expression2

  if (Object.keys(expression1).length === 0) {
    expressionStore.addExpression1(expression)
  } else if (Object.keys(expression2).length === 0) {
    expressionStore.addExpression2(expression)
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="expression in expressions">
        <v-card @click="addExpression(expression)">
          <v-card-text>
            <v-img :src="expression.image"></v-img>
          </v-card-text>
          <v-card-text>
            {{ expression.name }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
