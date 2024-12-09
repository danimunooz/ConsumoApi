import { useState } from "react";

function SearchBar({onSearch}) {
    const [query, setQuery] = useState('') // almacena el texto ingresado 
    
    const handLesSearch = (e) =>{ //  Esto es para que no se recargue la pagina 
        e.preventDefault();
        onSearch(query);
    };
    return( //se crea un formulario que ejecuta el handele y se actualiza cada vez que el usuario se registra
        <form className="form" onSubmit={handLesSearch} style={{marginBottom: '2px'}}>
            <input
                type='text'
                placeholder='Buscar pelicula'
                value={query}
                onChange={(e) => setQuery(e.target.value)} //actualiza el estado del texto
                style={{width: '80%', padding:'10px'}}
            />
            <button type="submit" style={{padding: '10px'}}>Buscar</button>
        </form>
    )
}


export default SearchBar;