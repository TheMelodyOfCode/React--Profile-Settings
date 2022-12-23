
const CartItem =()=>{

    return (
        <section className="cardItem">
            <div className="cardItem__card">
                <img className="cardItem__card__img" src="img/uploadProfilePic.jpg" alt="blogItem Card Js" />
                    <h5 className="cardItem__card__title" >Firstname: </h5>
                    <h5 className="cardItem__card__content" > John</h5>
                    <h5 className="cardItem__card__title" >Lastname: </h5>
                    <h5 className="cardItem__card__content" > Doe</h5>
                    <h5 className="cardItem__card__title" >Birth Date: </h5>
                    <h5 className="cardItem__card__content" > 12.12.1299</h5>
                    <h5 className="cardItem__card__title" >Email:</h5>
                    <h5 className="cardItem__card__content" >john@doe.com</h5>
                    <h5 className="cardItem__card__title" >Phone:</h5>
                    <h5 className="cardItem__card__content" >0190-666666</h5>
            </div>
        </section>
    )

}

export default CartItem;