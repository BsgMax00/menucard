import './App.css';
import {CATEGORIES_DATA} from "./data/data";
import {ProductCategory} from "./components/ProductCategory";

function App() {
    return (
        <div className="">
            <h1>Menu</h1>
            {CATEGORIES_DATA.map(c => <ProductCategory category={c} key={c.name}/>)}
        </div>
    );
}

export default App;