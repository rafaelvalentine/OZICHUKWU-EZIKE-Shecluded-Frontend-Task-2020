const initialState = {
  data:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'CAT_DATA':
    return { ...state, ...payload }

  default:
    return state
  }
}
