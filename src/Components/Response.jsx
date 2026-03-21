import React from 'react'

const Response = ({ recipe }) => (
  <div className='response-output'>{recipe || 'Add ingredients and generate a recipe to see it here.'}</div>
)

export default Response
