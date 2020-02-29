import React from 'react'
import * as Form from '../../themes/style/Form'


export const SelectAlt = ({ name, children, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
    </Form.MainLabelContainerAlt>
  )
}
