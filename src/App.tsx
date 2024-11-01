
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter  } from 'react-router-dom';

import './App.css'
import Home from './Views/Home';
import Countryinfo from './Views/Countryinfo';

const routes = [
  { path: '/', component: <Home /> },
  { path: '/details', component: <Countryinfo /> },
];
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
