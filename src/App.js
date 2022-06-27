import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Media from './pages/Media';
import Design from './pages/Design';
import Setting from './pages/Setting';
import NoPage from './pages/NoPage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/media' element={<Media />} />
                    <Route path='/design' element={<Design />} />
                    <Route path='/setting' element={<Setting />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
