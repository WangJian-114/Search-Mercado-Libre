import './products.scss';
const product = ({result}) => {
    const { title, price, thumbnail, permalink } = result; 
    return (  
        <>
            <div className="card">
                <img src={thumbnail}  className="img-product" alt="imagen producto"/>
                <div className="info-card">
                    <p className="price">${price} </p> 
                    <p>{title}</p>
                    <a 
                        target="_blank"
                        className="btn-buy"
                        href={permalink} rel="noreferrer"
                    >
                    Comprar</a>
                </div>
            </div>     
        </>
    );
}
 
export default product;