const initialState = {
  loading:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOADING':
    return { ...state, 
      loading: payload }

  default:
    return state
  }
}
