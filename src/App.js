import logo from './logo.svg';
import './App.css';

function ProductLine(props){
    const{productName} = props;
    const{productCost} = props;
    return <div>{productName} {productCost}</div>
}

function App() {
  return (
      <div>
        <h1>Menu</h1>
        <ProductLine productName = "Cola" productCost = "1€"/>
        <ProductLine productName = "Water" productCost = "1€"/>
        <ProductLine productName = "Bier" productCost = "1€"/>
        <ProductLine productName = "Wijn" productCost = "2€"/>
      </div>
  );
}

export default App;
