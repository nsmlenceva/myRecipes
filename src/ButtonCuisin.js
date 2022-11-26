function ButtonCuisin ({filterCuisin}) {
    return (
        <div className="contfilterpart">
            <div>
                <h3>Cuisin Type</h3>
            </div>
            <div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('mexican')} id="radio-1" type="radio" name="radio" value="1"/>
                    <label for="radio-1">Mexican</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('american')} id="radio-2" type="radio" name="radio" value="2"/>
                    <label for="radio-2">American</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('mediterranean')} id="radio-3" type="radio" name="radio" value="3"/>
                    <label for="radio-3">Mediterranean</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('world')} id="radio-4" type="radio" name="radio" value="4"/>
                    <label for="radio-4">World</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('british')} id="radio-5" type="radio" name="radio" value="5"/>
                    <label for="radio-5">British</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('south american')} id="radio-6" type="radio" name="radio" value="6"/>
                    <label for="radio-6">South American</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('italian')} id="radio-7" type="radio" name="radio" value="7"/>
                    <label for="radio-7">Italian</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('central europe')} id="radio-8" type="radio" name="radio" value="8"/>
                    <label for="radio-8">Central Europe</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('french')} id="radio-9" type="radio" name="radio" value="9"/>
                    <label for="radio-9">French</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('chinese')} id="radio-10" type="radio" name="radio" value="10"/>
                    <label for="radio-10">Chinese</label>
                </div>
                <div class="form_radio_btn">
                    <input onClick={() => filterCuisin('')} id="radio-11" type="radio" name="radio" value="11"/>
                    <label for="radio-11">All</label>
                </div> 
               
            </div>
        </div>
    )
}
export default ButtonCuisin;