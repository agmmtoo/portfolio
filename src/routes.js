import { Routes, Route } from 'react-router-dom';

// wrapper with header bar
import App from './App';

// pages
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Error404 from './components/pages/Error404';

import BlogPostDetail from './components/BlogPostDetail';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/blog' element={<Blog />} exact />
            <Route path='/blog/:title' element={<BlogPostDetail />} exact />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
);

export default AppRoutes;