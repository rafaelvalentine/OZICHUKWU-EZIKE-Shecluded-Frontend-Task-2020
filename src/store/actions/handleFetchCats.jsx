import type from '../type'
import { HTTP } from '../../api/index'
// import { handleError } from '../../lib'

const {  CAT_DATA  } = type

const handleSetCats = payload => ({
  type: CAT_DATA,
  payload
})


 

export const handleFetchCats = params => dispatch => {
  return HTTP()
    .get(`/`, {params})
    .then(res => {
      let result = res.data
      const header = res.headers
      const paginationCount = Number(header['pagination-count'])
      const paginationLimit= Number(header['pagination-limit'])
      const paginationPage = parseInt(header['pagination-page'])
      dispatch(handleSetCats({data: result, paginationCount, paginationLimit, paginationPage}))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}