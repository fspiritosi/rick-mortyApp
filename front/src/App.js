import { useState, useEffect } from 'react'
import { Routes, Route, Outlet, useLocation, useNavigate  } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Details/Detail.jsx'
import Nav from './components/NavBar/Nav'
import Error from './components/Error/Error'
import Form from './components/Form/Form.jsx'
import Favorite from './components/Favorites/Favorites'


function App () {

  const navigate = useNavigate();
  const location = useLocation();
  
  const username = 'fspiritosi@gmail.com';
  const password = 'masha0911';

  const [characters, setCharacters] = useState([]);
  
  const [access, setAccess] = useState(false);

  
  function login (userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }else{
      alert('usuario o contraseña incorrecto')
    }
  }  


  const onSearch = (character) =>{
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }



  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      {location.pathname!== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/home' 
          element={
            <Cards
              characters={characters}
              onClose={onClose}
            />
          }
        />
        <Route path='/about' element={<About/>} />
        <Route path='/favorites' element={<Favorite/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>     
      <Outlet/>
    </div>
  )
}

export default App
