
import './CardProduct.css';

const CardProduct = () => {
    return(
        <>
        <div className='divCardContainer'>
            <figure>
                <img src="https://via.placeholder.com/200" alt="" />
                <span></span>
            </figure>
            <div className='divCardInfo'>
                <h2>Product</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni provident sunt modi necessitatibus id at, velit debitis laboriosam harum ullam animi facere odit in vero architecto cupiditate fuga temporibus.</p>
                <p className='cardPrice'>R$3,50</p>
            </div>
            <div className='cardCountContainer'>
                <p>1</p>
                <div className='divCount'>
                    <p className='more'>+</p>
                    <p className='less'>-</p>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
}

export default CardProduct;