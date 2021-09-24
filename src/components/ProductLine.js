export function ProductLine(props) {
    const {product} = props;
    return <div className="productLine">
        <div>{product.name}<span className="productSize">{product.size ? " - " + product.size + "cl" : ""}</span>
            <div className="note">{product.note ? product.note : ""}</div>
        </div>
        <div>{product.price}&euro;</div>
    </div>
}