<script setup lang="ts">
import { ref } from 'vue'
import { expressions } from '@/assets/expression'
import { useExpressionStore } from '@/stores/expression'
import { Expression } from '@/types/expression'

const tab = ref('flower')

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

const expInCategory = (category: { id: string; label: string }) => {
  return expressions.filter((expression) => {
    return expression.category === category.id
  })
}

const categories = [
  {
    id: 'flower',
    label: '花・植物',
  },
  {
    id: 'phenomenon',
    label: '自然現象',
  },
  {
    id: 'animal',
    label: '動物',
  },
  {
    id: 'artifact',
    label: '人工物',
  },
]
</script>

<template>
  <div class="bg-teal">
    <v-container>
      <v-row>
        <v-tabs v-model="tab" bg-color="teal" :grow="true">
          <v-tab v-for="category in categories" :value="category.id">{{
            category.label
          }}</v-tab>
        </v-tabs>
      </v-row>
    </v-container>
  </div>
  <div>
    <v-window v-model="tab">
      <v-container>
        <v-row>
          <v-col>
            <v-window-item v-for="category in categories" :value="category.id">
              <v-container>
                <v-row>
                  <v-col cols="3" v-for="expression in expInCategory(category)">
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
            </v-window-item>
          </v-col>
        </v-row>
      </v-container>
    </v-window>
  </div>
</template>

<style scoped></style>
