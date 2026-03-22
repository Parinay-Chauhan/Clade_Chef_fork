import React, { useState } from 'react'
import Api from './Api'
import { getRecipeFromGemini } from './ai.js'

const Labal = () => {
  
  const [ingredient, setingredient] = useState([])
  const [recipe, setrecipe] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const value = formData.get('ingredients')?.trim()
    if (!value) return

    setingredient((prev) => [...prev, value])
    event.currentTarget.reset()
  }

  const TrueIngredient = ingredient.map((ele, index) => (
    <li key={index}>{ele}</li>
  ))

  async function getrecipe() {
    const recipeMarkdown = await getRecipeFromGemini(ingredient)
    setrecipe(recipeMarkdown)
  }

  return (
    <>
      <form onSubmit={handleClick} className='Labal-con'>
        <input className='Labal-input' name='ingredients' type='text' maxLength={45} placeholder='e.g. oregano' />
        <button className='Labal-bitton'>+ Add ingredients</button>
      </form>
      <h2 className='ing-h'>Ingredients on hand:</h2>
      <ul className='unorder'>
        {TrueIngredient}
      </ul>
      <Api ingredients={ingredient} recipe={recipe} getrecipe={getrecipe} setrecipe={setrecipe} />
    </>
  )
}

export default Labal
