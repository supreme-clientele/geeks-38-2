// src/App.js
import React from 'react';
import './App.css';
import MainPage from './page/mainPage/MainPage';
import TodoPage from './page/todoPage/TodoPage';
import PokemonPage from './page/pokemonPage/PokemonPage';
import FormPage from './page/formPage/FormPage';
import PokemonFormPage from './components/pokemonFormPage/PokemonFormPage';

function App() {
    return (
        <div className='wrapper'>
            {/*<MainPage/>*/}
            {/*<TodoPage/>*/}
            {/*<PokemonPage/>*/}
            {/*<FormPage/>*/}
            <PokemonFormPage />
        </div>
    );
}

export default App;
