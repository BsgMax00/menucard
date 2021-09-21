import logo from './logo.svg';
import './App.css';
import {PRODUCTS_DATA} from "./data/data";

function ProductLine(props){
    const{product} = props;
    return <div className="productLine">
        <div>{product.name}</div>
        <div>{product.price} euro</div>
    </div>
}

function App() {
  return (
      <div>
        <h1>Menu</h1>
            <ProductLine product = {PRODUCTS_DATA[0]}/>
            <ProductLine product = {PRODUCTS_DATA[1]}/>
            <ProductLine product = {PRODUCTS_DATA[2]}/>
            <ProductLine product = {PRODUCTS_DATA[3]}/>
            <ProductLine product = {PRODUCTS_DATA[4]}/>
      </div>
  );
}

export default App;
