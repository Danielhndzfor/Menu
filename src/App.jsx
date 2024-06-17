import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>
                    Copyright © ColimasTacos&Papas
                </p>
            </footer>
        </>
    );
}

export default App;
