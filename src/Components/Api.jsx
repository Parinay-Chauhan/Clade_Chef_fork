import React from 'react'
import Response from './Response'
const Api = (props) => {
  return (
    <div>
    { props.ingredients?.length>0?
    <div className="gen-recipe-con">
      <div className="gen-recipe-info">
        <h4 style={{marginBottom:20}}>Ready for a recipe?</h4>
        <p style={{color:'grey'}}>Genrate a recipe from your list of ingredients.</p>
      </div>
      <div className="gen-recipe-button">
        <button onClick={props.getrecipe} className='get'>Get a recipe</button>
      </div>
    </div>: null }

    <Response recipe={props.recipe} />
    </div> 
  )
}

export default Api
