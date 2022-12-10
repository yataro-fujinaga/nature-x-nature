import himawariImage from '@/assets/himawari.jpg'
import doorCloserImage from '@/assets/door-closer.jpg'
import { Expression } from '@/types/expression'

export const expressions: Expression[] = [
  {
    id: 'door-closer',
    name: 'ドアクローザー',
    category: 'artifact',
    image: doorCloserImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param
      return Math.tan(rad)
    },
  },
  {
    id: 'himawari',
    name: 'ひまわり',
    category: 'flower',
    image: himawariImage,
    func: (param: number) => {
      return param * param
    },
  },
]
