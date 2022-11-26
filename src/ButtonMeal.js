function ButtonMeal({filterMeal}) {
    return(
        <div  className="contfilterpart">
            <div>
                <h3>Meal Type</h3>
            </div>
            <div>
                <div class="form_radio_btn_meal">
                    <input onClick={() => filterMeal('lunch/dinner')} id="radio-1meal" type="radio" name="radiomeal" value="1" />
                    <label for="radio-1meal">Lunch/Dinner</label>
                </div>
                
                <div class="form_radio_btn_meal">
                    <input className="change" onClick={() => filterMeal('breakfast')} id="radio-2meal" type="radio" name="radiomeal" value="2"/>
                    <label for="radio-2meal">Breakfast</label>
                </div>
                
                <div class="form_radio_btn_meal">
                    <input className="change" onClick={() => filterMeal('snack')} id="radio-3meal" type="radio" name="radiomeal" value="3"/>
                    <label for="radio-3meal">Snack</label>
                </div>

                <div class="form_radio_btn_meal">
                    <input className="change" onClick={() => filterMeal('brunch')} id="radio-4meal" type="radio" name="radiomeal" value="4"/>
                    <label for="radio-4meal">Brunch</label>
                </div>
                
                <div class="form_radio_btn_meal">
                    <input className="change" onClick={() => filterMeal('')} id="radio-5meal" type="radio" name="radiomeal" value="5"/>
                    <label for="radio-5meal">All</label>
                </div>

                {/* <button className="change" onClick={() => filterMeal('lunch/dinner')}>Lunch/Dinner</button>
                <button className="change" onClick={() => filterMeal('breakfast') }>Breakfast</button>
                <button className="change" onClick={() => filterMeal('snack')}>Snack</button>
                <button className="change" onClick={() => filterMeal('brunch') }>Brunch</button>
                <button className="change" onClick={() => filterMeal('') }>All</button> */}
                
            </div>
        </div>
    )
}

export default ButtonMeal;