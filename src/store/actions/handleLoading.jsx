import type from '../type'

const { LOADING } = type

const handleSetPageLoader = payload => ({
  type: LOADING,
  payload
})

export const handlePageLoader = results => dispatch => {
  console.log(results)
  dispatch(handleSetPageLoader(results))
}