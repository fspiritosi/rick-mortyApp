import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Details/Detail.jsx'
import Nav from './components/NavBar/Nav'
import Error from './components/Error'
import Form from './components/Form/Form.jsx'
import { Routes, Route, Outlet, useLocation, useNavigate  } from 'react-router-dom'

function App () {

  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const username = 'fspiritosi@gmail.com';
  const password = 'masha0911'

  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
      } else {
          window.alert('No hay personajes con ese ID');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  function login (userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }else{
      alert('usuario o contraseña incorrecto')
    }
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
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>     
      <Outlet/>
    </div>
  )
}

export default App
