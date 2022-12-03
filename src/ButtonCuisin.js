function ButtonCuisin ({filterCuisin}) {
    return (
        <div >
                <h3>Cuisin Type</h3>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin("mexican")} id="radio-1" type="radio" name="radio" value="1"/>
                    <label htmlFor="radio-1">Mexican</label>
                </div> 
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('american')} id="radio-2" type="radio" name="radio" value="2"/>
                    <label htmlFor="radio-2">American</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('mediterranean')} id="radio-3" type="radio" name="radio" value="3"/>
                    <label htmlFor="radio-3">Mediterranean</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('world')} id="radio-4" type="radio" name="radio" value="4"/>
                    <label htmlFor="radio-4">World</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('british')} id="radio-5" type="radio" name="radio" value="5"/>
                    <label htmlFor="radio-5">British</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('south american')} id="radio-6" type="radio" name="radio" value="6"/>
                    <label htmlFor="radio-6">South American</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('italian')} id="radio-7" type="radio" name="radio" value="7"/>
                    <label htmlFor="radio-7">Italian</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('central europe')} id="radio-8" type="radio" name="radio" value="8"/>
                    <label htmlFor="radio-8">Central Europe</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('french')} id="radio-9" type="radio" name="radio" value="9"/>
                    <label htmlFor="radio-9">French</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('chinese')} id="radio-10" type="radio" name="radio" value="10"/>
                    <label htmlFor="radio-10">Chinese</label>
                </div>
                <div className="form_radio_btn">
                    <input onClick={() => filterCuisin('')} id="radio-11" type="radio" name="radio" value="11"/>
                    <label htmlFor="radio-11">All</label>
                </div>  
        </div>
    )
}
export default ButtonCuisin;