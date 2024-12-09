import { useEffect, useState } from "react";
import Character from "../components/Character";

function Navepage(props) {
  return(
    <header className="d-flex justify-content-between  aling-items-center">
      <p> Page: {props.page}</p>
      <button className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1) }
      
      >
       Page: {props.page + 1}
      </button>
    </header>
  )
}

function CharacterList() {
    const [characters, setCharacters] = useState([])
     const [page, setPage] = useState(1)
    useEffect(() =>{
      async function fetcheData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setCharacters(data.results); 
    }
  
    fetcheData();
    }, [page]);

    return (
        <div className="container">
          {/* cambiar de pagina  */}
          
          <Navepage page={page} setPage={setPage}/>


          <div className="row">
          {characters.map((character) => {
             return (
              <div className="col-md-4" key={character.id}>
                 <Character  character={character}/>
              </div>
            );
            })
        }
          </div>
        </div>
    );
}


export default CharacterList;

