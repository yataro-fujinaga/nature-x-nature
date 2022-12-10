interface Expression {
  id: string
  name: string
  image: string
  category: string
  func: (param: number) => number
}

export { Expression }
