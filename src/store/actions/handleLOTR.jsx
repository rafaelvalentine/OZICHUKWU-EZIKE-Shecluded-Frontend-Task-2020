import type from '../type'
import { HTTP } from '../../api/index'

const {  LOTR_DATA  } = type

const handleSetCharacters = payload => ({
  type: LOTR_DATA,
  payload
})


 

export const handleFetchCharacters = () => dispatch => {
  return HTTP().lotrApi()
    .get(`/character`)
    .then(res => {
      let result = res.data.docs
      dispatch(handleSetCharacters({data: result}))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}