import { FETCHED_ALL_PRODUCTS, ADD_PRODUCT } from '../actions/products'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_PRODUCTS:
      return action.payload

      case ADD_PRODUCT:
    	  return [...state, action.payload]


    default:
      return state
  }
}
