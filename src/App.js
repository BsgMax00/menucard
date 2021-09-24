import logo from './logo.svg';
import './App.css';
import {PRODUCTS_DATA} from "./data/data";

function ProductSize(props){
    const{product} = props;
    return <span className="productSize"> - {product.size}cl</span>
}

function ProductLine(props){
    const{product} = props;
    return <div>
        <div className="productLine">
            <div>{product.name}<ProductSize product = {product}/></div>
            <div>{product.price}&euro;</div>
        </div>
        <div className="note">{product.note}</div>
    </div>
}

function App() {
  return (
      <div>
        <h1>Menu</h1>
          {PRODUCTS_DATA.map(p => <ProductLine product={p}/>)}
      </div>
  );
}

export default App;
