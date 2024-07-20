import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Pagination from '../../components/pagination/Pagination';
import classes from './PokemonPage.module.css';

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getApi = async (page) => {
        const offset = (page - 1) * 12; // 12 покемонов на страницу
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`);
        const data = await response.json();
        return data.results;
    };

    useEffect(() => {
        getApi(currentPage).then((data) => setPokemonList(data));
    }, [currentPage]);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className={classes.pageContainer}>
            <h1 className={classes.header}>Pokemon</h1>
            <div className={classes.line}></div>
            <div className={classes.container}>
                {pokemonList.map(pokemon => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                ))}
            </div>
            <Pagination prev={handlePrev} next={handleNext} page={currentPage}/>
        </div>
    );
};

export default PokemonPage;
