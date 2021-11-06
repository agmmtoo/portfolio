import { Link } from 'react-router-dom';
import Moon from './components/DarkModeSwitch';

const App = ({ children }) => (
  <>
    <div className="flex">
      <h1 className="flex-grow p-2 lg:p-5 text-transparent bg-clip-text bg-gradient-to-tl from-emerald-500 to-cyan-500">Aung Myint Myat Oo</h1>
      <Moon />
    </div>
    <nav >
      <div className="nav-bar">
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
      </div>
    </nav>
    {children}
    <p className="text-center text-xs tracking-widest text-gray-400">&copy; 2021 agmyintmyatoo</p>
  </>
);

export default App;