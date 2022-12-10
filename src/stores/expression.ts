import { defineStore } from 'pinia'
import { Expression } from '@/types/expression'
import { expressions } from '@/assets/expression'

type ExpressionFunc = (param: number) => number

interface ExpDiff {
  expression: Expression
  diff: number
}

export const useExpressionStore = defineStore('expression', {
  state: () => ({
    expression1: {} as Expression,
    expression2: {} as Expression,
    resultExpression: {} as Expression,
  }),
  actions: {
    addExpression1(expression: Expression) {
      this.expression1 = expression
    },
    addExpression2(expression: Expression) {
      this.expression2 = expression

      this.resultExpression = calculateResult(
        this.expression1,
        this.expression2
      )
    },
    refresh() {
      this.expression1 = {} as Expression
      this.expression2 = {} as Expression
    },
  },
})

const calculateResult = (exp1: Expression, exp2: Expression) => {
  const expFunc1 = exp1.func
  const expFunc2 = exp2.func

  const resultExp = minDiffExp(expFunc1, expFunc2)

  return resultExp
}

const minDiffExp = (func1: ExpressionFunc, func2: ExpressionFunc) => {
  const minDiff = expDiffs(func1, func2).reduce(
    (expDiff1: ExpDiff, expDiff2: ExpDiff) =>
      expDiff1.diff < expDiff2.diff ? expDiff1 : expDiff2
  )

  return minDiff.expression
}

const expDiffs = (func1: ExpressionFunc, func2: ExpressionFunc) => {
  const expDiffs: ExpDiff[] = []

  for (const expression of expressions) {
    const diff = funcDiff(compositeFunc(func1, func2), expression.func)

    const expDiff: ExpDiff = {
      expression: expression,
      diff: diff,
    }

    console.log(expDiff)

    expDiffs.push(expDiff)
  }

  return expDiffs
}

const funcDiff = (func1: ExpressionFunc, func2: ExpressionFunc) => {
  let diff = 0

  for (let param = 0; param < 50; param++) {
    diff += Math.abs(func1(param) - func2(param))
  }

  return diff
}

const compositeFunc = (func1: ExpressionFunc, func2: ExpressionFunc) => {
  return (param: number) => {
    return func1(func2(param))
  }
}
