import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Personajes from '../../components/Personajes';


const Galeria = () => {
    const [counter, setCounter] = useState(1);

    const url = `https://rickandmortyapi.com/api/character?page=${counter}`;

    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        axios(url)
          .then(res => {
                    setPersonaje(res.data.results)
                } 
          )
    }, [url])  

    const nextPage = () => {
            setCounter(counter + 1) 
    }

    const previousPage = () => {
            setCounter(counter - 1)  
    }

    
return (
    <div>
        <div>
            <button onClick = {nextPage} counter = {counter} nextPage={nextPage} previousPage={previousPage}/>
        </div>
        <ul>
            { personaje && personaje.map(personaje => {
                return (
                    <div key = {personaje.id}>
                         <Personajes
                        personaje= {personaje} /> 
                    </div>
                )
            })}
        </ul>
        <div>
            <button onClick={previousPage} counter = {counter} nextPage={nextPage} previousPage={previousPage}/>
        </div>
    </div>
  )
}


export default Galeria;