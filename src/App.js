import React from 'react';
import Bag1 from './assets/bag_1.png';
import Bag2 from './assets/bag_2.png';
import Bag3 from './assets/bag_3.png';
import Bag4 from './assets/bag_4.png';
import Brand from './assets/brand.png';
import Story from './assets/our_story.png';
import Menu from './Menu';
import Product from './Product';
import Tile from './Tile';
import './App.css';

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Menu
                    label="to the collection"
                />
                <Menu
                    label="shop all bags"
                />
                <Menu
                    label="pre-orders"
                    disableButton
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
            <footer>
                <Tile
                    title="THE BRAND"
                    >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Tile>
                <Tile
                    img={Brand}
                />
                <Tile
                    img={Story}
                />
                <Tile
                    title="THE STORY"
                    >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



