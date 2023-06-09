import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes} from './route/Route';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page></Page></Layout>}></Route>
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
