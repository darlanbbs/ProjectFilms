
import { BrowserRouter,Routes,Route } from 'react-router-dom'


import {NavBarTop} from './Components/NavBarTop'


import {Home} from './Pages/Home'
import { Movie } from './Pages/Movie'
import {Search} from './Pages/Search'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarTop/>
       <Routes>
         <Route path='*' element={<Home/>}/>
         <Route path="movie/:id" element={<Movie />} />
         <Route path="search" element={<Search />} />
         <Route path="search/movie/:id" element={<Movie />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
