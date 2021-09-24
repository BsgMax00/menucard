import {ProductLine} from "./ProductLine";

export function ProductCategory(props) {
    const {category} = props;
    return <div className="productLine">
        <div>
            <h2>{category.name}</h2>
            {category.products.map(p => <ProductLine product={p} key={p.name}/>)}
        </div>
    </div>
}