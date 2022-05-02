import React from 'react';
import Bag1 from './assets/bag_1.png';
import Bag2 from './assets/bag_2.png';
import Bag3 from './assets/bag_3.png';
import Bag4 from './assets/bag_4.png';
import Menu from "./Menu";
import Product from "./Product";
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
            <main>
                <Product
                    label="Best seller"
                    img={Bag1}
                    title="The handy bag"
                    price="400,-"
                />
                <Product
                    label="Best seller"
                    img={Bag2}
                    title="The stylish bag"
                    price="250,-"
                />
                <Product
                    label="New collection"
                    img={Bag3}
                    title="The simple bag"
                    price="300,-"
                />
                <Product
                    label="New collection"
                    img={Bag4}
                    title="The trendy bag"
                    price="150,-"
                />
            </main>
        </>
    );
}

export default App;



