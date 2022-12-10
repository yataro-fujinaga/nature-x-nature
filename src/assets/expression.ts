import himawariImage from '@/assets/himawari.jpg'
import doorCloserImage from '@/assets/door-closer.jpg'
import cubicFuncImage from '@/assets/cubic_function.jpg'
import logFuncImage from '@/assets/log.webp'
import sprintImage from '@/assets/spring.webp'
import eclipseImage from '@/assets/eclipse.jpg'
import horyujiImage from '@/assets/horyuji.jpg'
import romanesukoImage from '@/assets/romanesuko.jpg'
import matubokkuriImage from '@/assets/matubokkuri.jpg'
import sinhImage from '@/assets/sinh.png'
import clothoidImage from '@/assets/clothoid.jpg'
import paragliderImage from '@/assets/paraglider.jpeg'
import { Expression } from '@/types/expression'

export const expressions: Expression[] = [
  {
    id: 'door-closer',
    name: 'ドアクローザー',
    category: 'artifact',
    image: doorCloserImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param
      return Math.exp(-param) * Math.cos(rad)
    },
  },
  {
    id: 'himawari',
    name: 'ひまわり',
    category: 'nature',
    image: himawariImage,
    func: (param: number) => {
      return param * param - param - 1
    },
  },
  {
    id: 'romanesuko',
    name: 'ロマネスコ',
    category: 'nature',
    image: romanesukoImage,
    func: (param: number) => {
      return 2 * (param * param - param - 1)
    },
  },
  {
    id: 'matsubokkuri',
    name: '松ぼっくり',
    category: 'nature',
    image: matubokkuriImage,
    func: (param: number) => {
      return -1 * (param * param - param - 1)
    },
  },
  {
    id: 'cubic',
    name: '三次関数',
    category: 'function',
    image: cubicFuncImage,
    func: (param: number) => {
      return param * param * param - param
    },
  },
  {
    id: 'log',
    name: '対数関数',
    category: 'function',
    image: logFuncImage,
    func: (param: number) => {
      if (param === 0) return 0

      if (param < 0) param = -param

      return Math.log(param)
    },
  },
  {
    id: 'spring',
    name: 'バネ',
    category: 'artifact',
    image: sprintImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param

      return Math.cos(rad)
    },
  },
  {
    id: 'eclipse',
    name: '楕円関数',
    category: 'function',
    image: eclipseImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param

      return param * Math.sin(rad)
    },
  },
  {
    id: 'horyuji',
    name: '法隆寺',
    category: 'artifact',
    image: horyujiImage,
    func: (param: number) => {
      return param * param - 2 * param - 1
    },
  },
  {
    id: 'sinh',
    name: '双曲線関数（sinh）',
    category: 'function',
    image: sinhImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param

      return Math.sinh(rad)
    },
  },
  {
    id: 'clothoid',
    name: '道路',
    category: 'artifact',
    image: clothoidImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param

      let sum = 0

      for (let i = 0; i <= param; i++) {
        sum += Math.cos((i * rad ** 2) / 2)
      }

      return sum
    },
  },
  {
    id: 'paraglider',
    name: '空気抵抗',
    category: 'nature',
    image: paragliderImage,
    func: (param: number) => {
      const rad = (Math.PI / 180) * param

      return Math.cos(rad) * Math.exp(-param) + Math.cos(rad)
    },
  },
]
