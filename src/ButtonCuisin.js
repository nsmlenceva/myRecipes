function ButtonCuisin ({filterCuisin}) {
    return (
        <div className="contfilterpart">
            <div>
                <h3>Cuisin Type</h3>
            </div>
            <div>
                <button className="change" onClick={(e) => filterCuisin(e, 'mexican')}>Mexican</button>
        
                <button className="change" onClick={(e) => filterCuisin(e, 'american') }>American</button>
                <button className="change" onClick={(e) => filterCuisin(e, 'mediterranean')}>Mediterranean</button>
                {/* <button className="change" onClick={() => filterCuisin('world')}>World</button>
                <button className="change" onClick={() => filterCuisin("british")} >British</button>      
                <button className="change" onClick={() => filterCuisin('south american')}>South american</button>
                <button className="change" onClick={() => filterCuisin("italian")}>Italian</button>   
                <button className="change" onClick={() => filterCuisin('central europe')}>Central europe</button>
                <button className="change" onClick={() => filterCuisin("french")}>French</button>      
                <button className="change" onClick={() => filterCuisin('chinese')}>Chinese</button>
                <button className="change" onClick={() => filterCuisin("")}>All</button>   */}
            </div>
        </div>
    )
}
export default ButtonCuisin;