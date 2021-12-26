import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PopoverHandler } from "./cmps/popover/PopoverHandler";
import { ProjectsHeader } from "./cmps/ProjectsHeader";
import { routes } from "./routes";

function App() {
  return (
    <section className='app-general'>
      <header>
        <ProjectsHeader />
      </header>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
        <PopoverHandler />
      </main>
    </section>
  );
}

export default App;
