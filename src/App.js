import React from 'react';
import Menu from "./Menu";
import './App.css';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Menu
                    label="to the collection"
                    logmessage="to the collection"
                />
                <Menu
                    label="shop all bags"
                    logmessage="shop all bags"
                />
                <Menu
                    label="pre-orders"
                    disableButton
                    logmessage="pre-orders"
                />
            </nav>
        </>
    );
}

export default App;



