import React, { useEffect, useState } from 'react';
import PokemonLIst from '../../components/pokemonLIst/PokemonLIst';
import classes from './PokemonPage.module.css';


const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    console.log(pokemonList);
    const getApi =async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data= await response.json()
        return data.results
    }

    useEffect(()=> {
        getApi().then((data)=>setPokemonList(data))
    },[])
    return (
        <div className={classes.wrapper}>
           <PokemonLIst pokemonList={pokemonList}/>
        </div>
    );
};

export default PokemonPage;