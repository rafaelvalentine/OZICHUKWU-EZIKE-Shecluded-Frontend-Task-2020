import type from '../type'

const { LOADING } = type

const handleSetPageLoader = payload => ({
  type: LOADING,
  payload
})

export const handlePageLoader = results => dispatch => {
  dispatch(handleSetPageLoader(results))
}