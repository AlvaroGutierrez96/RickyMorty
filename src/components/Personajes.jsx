import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Personajes = () => {
     const [personajes, setPersonajes] = useState([]);
     const url = "https://rickandmortyapi.com/api/character"

     useEffect (() => {
         axios(url).then((response) => {
            setPersonajes(response.data.results);
         })
         
        },[])
  return (
    <>
        {personajes && personajes.map(personaje => {
            return(
             <>
             
                <div key={personaje.id}>
                    <h1>{personaje.name}</h1>
                    <img src={personaje.image} alt={personaje.name}/>
                </div>
            </>
            )
        })
        }
    </>
  )
}

export default Personajes;