function ButtonMeal({filterMeal}) {
    return(
        <div  className="contfilterpart">
            <div>
                <h3>Meal Type</h3>
            </div>
            <div>
                <button className="change" onClick={() => filterMeal('lunch/dinner')}>Lunch/Dinner</button>
                <button className="change" onClick={() => filterMeal('breakfast') }>Breakfast</button>
                <button className="change" onClick={() => filterMeal('snack')}>Snack</button>
                <button className="change" onClick={() => filterMeal('brunch') }>Brunch</button>
                <button className="change" onClick={() => filterMeal('') }>All</button>
                
            </div>
        </div>
    )
}

export default ButtonMeal;