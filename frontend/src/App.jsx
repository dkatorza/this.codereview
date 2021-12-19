import { Route,Routes } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (

    <section className='app-general'>
      <header>
        <h1>hello there</h1>
      </header>
      <main>
        <h1>this is main</h1>
        <Routes>
            {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
          </Routes>
      </main>
    </section>
 
  );
}

export default App;
