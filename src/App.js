import './App.css';
import { useEffect, useState } from 'react';
import ShowRecipe from './ShowRecipe';
import ButtonCuisin from './ButtonCuisin';

function App() {
  const MY_ID ="e34b6443";
  const MY_KEY="251763638b08ba28acdeeb586487a4e6";
  const [wordSubmitted, setWordSubmitted] = useState('avocado');
  const [myRecipe, setMyRecipe] = useState([]);
  const [mySearch, setMySearch] = useState('');
  const [myFilteredFull, setMyFilteredFull] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
        const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data = await responce.json();
        setMyRecipe(data.hits);
        setMyFilteredFull(data.hits);
    }
    getRecipe()}, 
    [wordSubmitted]
  );

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  const choseCouisin = (searchTerm) => {
    if (searchTerm !== "")  
      {const mdlRecipe = myRecipe.map (element => (
      element.recipe.cuisineType.includes(searchTerm)? element : null
      ));
      const newRecipe = mdlRecipe.filter(item => (item != null))
      setMyFilteredFull(newRecipe);
      }
    else setMyFilteredFull(myRecipe);
  }

  return (
    <div>
      <div className='mainImg'>
      </div>
      <div className='cont'> 
        <h1>Find a recipe</h1>
      </div>
        <form className='cont' onSubmit = {finalSearch}>  
          <input onChange={myRecipeSearch} vaue = {mySearch}></input>
          <button>find</button>
        </form>
      <div className='cont'>
        <ButtonCuisin filterCuisin = {choseCouisin}/>
      </div>
      <div className='cont'> 
        {myFilteredFull.map((element, index) => (
          <ShowRecipe key = {index} anyRecipe = {element}/>
        ))}
      </div>
    </div>
  );
}

export default App;