import React, { useEffect, useState } from 'react';
import classes from './Pokemon.module.scss';


const Pokemon = ({pokemon}) => {
    const [pokemonOne, setPokemonOne] = useState({})
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)
    console.log(pokemonOne?.abilities?.map(value=> value.ability.name));
    // pokemonOne.abilities.map(ability=>ability.name)
    const getApi =async () => {
        setLoading(true)
        try {
            const response = await fetch(pokemon.url)
            const data= await response.json()
            console.log(data,'data');
            return data
        }
        catch(e) {
            console.log(e.message());
        }
        finally {
            setLoading(false)
        }

    }
    useEffect(()=> {
        getApi().then((data)=>setPokemonOne(data))
    },[])

    const handleShow = () => {
        setShow(prev=> !prev)
    }
    return (
        <>
            <div className={classes.item}>
                {
                    loading ?
                        <div>Loading</div>
                        :
                        <>
                            <div className={classes.info}>
                                <img src={pokemonOne?.sprites?.other?.dream_world?.front_default} alt="pokemon"/>
                                <p>{pokemon?.name}</p>
                                <button onClick={handleShow}>подробнее</button>
                            </div>
                        </>
                }
            </div>
            {
                show && <div className={classes.itemM}>
                    <div className={classes.info}>
                    <img src={pokemonOne.sprites.other.dream_world.front_default} alt="pokemon"/>
                    <p>Abilities: {pokemonOne?.abilities?.map(value=> value.ability.name).join(', ')}</p>
                    <p>{pokemon?.name}</p>
                    <p>{pokemon?.name}</p>
                </div>
                </div>
            }
        </>


    );
};

export default Pokemon;