const initialState = {
  loading:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'LOADING':
    console.log(payload);
    return { ...state, 
      loading: payload }

  default:
    return state
  }
}
