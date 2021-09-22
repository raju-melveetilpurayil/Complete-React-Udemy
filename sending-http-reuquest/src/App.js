import React,{useState,useEffect,useCallback}  from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);




const fetchMovieHandler=useCallback(async()=>{
  setIsLoading(true);
  setIsError(null);
  try
  {
    const response =await fetch("https://reactfoodapp-v1-default-rtdb.europe-west1.firebasedatabase.app/movies.json");
    
    if(!response.ok){
      throw new Error('Something went wrong...!!!');
    }
    const data= await response.json();
    
    const loadedMovies=[];
    for(const key in data){
      loadedMovies.push({
        id:key,
        title:data[key].title,
        openingText:data[key].openingText,
        releaseDate:data[key].releaseDate
      })
    }
    setMovies(loadedMovies);
  }catch(err)
  {
    setIsError(err.message);
  }
  finally
  {
    setIsLoading(false);
  }
},[]);

useEffect(()=>{fetchMovieHandler();},[fetchMovieHandler]);

let content=<p>Found no movies..!!!</p>;
if(movies.length>0){
      content=<MoviesList movies={movies} />;
}
if(isError){
  content=<p>{isError}</p>;
}
if(isLoading){
  content=<p>Loading....</p>;
}
const addMovieHandler=async (movie)=> {
  const response=await fetch("https://reactfoodapp-v1-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
  {
    method:'POST',
    body:JSON.stringify(movie),
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data=await response.json();
  console.log(data);
}
  return (
    <React.Fragment>
       <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
