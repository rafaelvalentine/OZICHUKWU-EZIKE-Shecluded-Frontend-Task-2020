const initialState = {
  loading:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOADING':
    return { ...state, ...payload }

  default:
    return state
  }
}
