import {Section} from "./Section";
import {Card} from "./Card";


export function Product(props) {
    const {product} = props;
    return <Card title={product.name} extraClassName="menu">
        <div>{product.price} &euro;</div>
        <div>{product.size && `size: ${product.size} cl`}</div>
        <div>{product.note && `note: ${product.note}`}</div>
        <div>category: {product.category}</div>
    </Card>;
}

export function MenuCard(props) {
    const {products, title} = props;
    return <Section title={title}>
        {products.map(p => <Product key={p.id} product={p}/>)}
    </Section>;
}