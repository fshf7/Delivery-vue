import { reactive } from 'vue'
import { restArray } from '../constants/rests'
import { goodArray } from '../constants/goods'

export const store = reactive({
  isOpen: false,
  rests: restArray,
  goods: goodArray,
  toggleMOdal(value) {
    this.isOpen = value
  }
})