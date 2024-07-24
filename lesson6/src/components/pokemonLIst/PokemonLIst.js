import React from 'react';
import Pokemon from '../pokemon/Pokemon';


const PokemonLIst = ({pokemonList}) => {
    return (
        <div>
            {
                pokemonList.map(pokemon=> <Pokemon pokemon={pokemon}/> )
            }
        </div>
    );
};

export default PokemonLIst;