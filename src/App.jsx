import { navbar } from "./app.module.scss";
import { Outlet, Link } from "react-router-dom";
const App = () => {

  return (
    <>
      <nav className={navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chartJs2">chartJs2</Link>
          </li>
          <li>
            <Link to="/D3js">D3js</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default App;