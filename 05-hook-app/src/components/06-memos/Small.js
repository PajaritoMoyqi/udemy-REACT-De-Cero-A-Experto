import React from 'react'

export const Small = React.memo(({value}) => {

  console.log('또 호출되었다.')

  return (
      <small> {value} </small>
  )
})