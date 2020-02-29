const initialState = {
  data:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOTR_DATA':
    return { ...state, ...payload }

  default:
    return state
  }
}
