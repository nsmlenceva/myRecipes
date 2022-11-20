function ShowRecipe({anyRecipe}) {
    return(
        <div className="contrecipe">
          
            <div className="contcard">
           
                <img src = {anyRecipe.recipe.image} width="240px" height="240px"/>
               
                <div className="prodInfo">
                    <div className="descr">
                        
                                {anyRecipe.recipe.cuisineType.map((cuisin, id) => (
                                    <p className="kurs" key = {id}>{cuisin} cuisin</p>
                                ))}   
                        
                     
                                {anyRecipe.recipe.mealType.map((meal, id) => (
                                    <p className="kurs meal" key = {id}>{meal}</p>
                                ))}   
                         
                        </div>
                        <h2>{anyRecipe.recipe.label}</h2>
                        <h4>Ingredients:</h4>
                        {anyRecipe.recipe.ingredientLines.map((ingr,id) =>(
                            <p key = {id}>{ingr}</p>

                        ))} 
                    </div>
                </div>

        </div>
    )
}

export default ShowRecipe;