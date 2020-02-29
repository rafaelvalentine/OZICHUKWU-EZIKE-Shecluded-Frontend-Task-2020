import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'
import { Wrapper } from './styles'

const index = props => {
  console.log(props);
  return (
    <Fragment>
       {props.loading ? <Wrapper>
        <Loader
          type='MutatingDots'
          color='#FD8A25'
          height={100}
          width={100}
        />
      </Wrapper> : null}
    </Fragment>
  )
}

export default index
