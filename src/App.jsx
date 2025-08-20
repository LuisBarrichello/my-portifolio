import { Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import Home from './pages/Home/Home';
import BackToTopButton from './components/common/Buttons/BackToTopButton';
import ThemeSwitcher from './components/common/ThemeSwitcher/ThemeSwitcher';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <div className="fixed bottom-5 right-5 flex flex-col items-center gap-y-4 z-50">
                <ThemeSwitcher />
                <BackToTopButton />
            </div>
        </>
    );
}

export default App;
