import logo from '~/tiktok-logo.png';
import './App.css';
import Button from './components/Button';
function App() {
    return (
        <div className="App">
            <Button />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>TIKTOK CLONE</p>
                <a className="App-link" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    Truy cập Tiktok
                </a>
            </header>
        </div>
    );
}

export default App;
