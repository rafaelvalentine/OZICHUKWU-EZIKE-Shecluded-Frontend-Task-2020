const initialState = {
  data:[
  ],
  paginationCount: 0, 
  paginationLimit: 0, 
  paginationPage: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'CAT_DATA':
    return { ...state, 
      ...payload 
    }

  default:
    return state
  }
}
