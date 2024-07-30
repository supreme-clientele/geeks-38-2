import React, { useEffect, useState } from 'react';
import classes from './PokemonCard.module.css';

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonData(data);
        };

        fetchPokemonData();
    }, [pokemon.url]);

    const handleMoreInfoClick = () => {
        // логика для отображения подробной информации
        alert(`Подробнее о ${pokemon.name}`);
    };

    return (
        <div className={classes.card}>
            {pokemonData && (
                <>
                    <img
                        src={pokemonData.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        className={classes.image}
                    />
                    <h3 className={classes.name}>{pokemon.name}</h3>
                    <button className={classes.moreInfoButton} onClick={handleMoreInfoClick}>
                        Подробнее
                    </button>
                </>
            )}
        </div>
    );
};

export default PokemonCard;
