import { Link } from 'react-router-dom';

const App = ({ children }) => (
  <>
    <h1 className="p-5">Aung Myint Myat Oo</h1>

    <nav className="nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
    </nav>
    {children}
    <p className="text-center text-xs tracking-widest text-gray-400">&copy; 2021 agmyintmyatoo</p>
  </>
);

export default App;