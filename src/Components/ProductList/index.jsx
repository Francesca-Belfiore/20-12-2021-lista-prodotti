import styles from "./ProductList.module.scss";

const ProductList = (props) => {

    const data = props.data;

    return (
        <div className={styles.productList}>    
            <h3>{data.title}</h3>
            <p>{data.price} $</p>
            <p>{data.description}</p>
            <img src={data.image} alt="product" />
        </div>
    )
}

export default ProductList;