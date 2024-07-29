import './App.css';
import MainPage from './page/mainPage/MainPage';
import TodoPage from './page/todoPage/TodoPage';
import PokemonPage from './page/pokemonPage/PokemonPage';
import FormPage from './page/formPage/FormPage';
import Fetch from './page/Fetch/Fetch';
import FormAxios from './page/formAxios/FormAxios';

function App() {
    return (
        <div className='wrapper'>
            {/*<MainPage/>*/}
            {/*<TodoPage/>*/}
            {/*<PokemonPage/>*/}
            {/*<FormPage/>*/}
            <FormAxios/>
            {/*<Fetch/>*/}
        </div>

    );
}


export default App;

