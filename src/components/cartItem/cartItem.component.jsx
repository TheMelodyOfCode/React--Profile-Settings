
const CartItem =({stateOfRequest, userDetails}  )=>{

    const { firstName, lastName, birthDate, email, phone, imgLocation } = userDetails;

        // replace image function
        const replaceImage = (error) => {
        //replacement of broken Image
        error.target.src = "img/uploadProfilePic.jpg"
        }

    return (
        <section className="cardItem">
            <div className="cardItem__card">
                <img className="cardItem__card__img" onError={replaceImage} src={imgLocation} alt="blogItem Card Js" />
                {/* <img className="cardItem__card__img" src="img/uploadProfilePic.jpg" alt="blogItem Card Js" /> */}
                    <h5 className="cardItem__card__title" >Firstname: </h5>
                    <h5 className="cardItem__card__content" > {firstName}</h5>
                    <h5 className="cardItem__card__title" >Lastname: </h5>
                    <h5 className="cardItem__card__content" > {lastName}</h5>
                    <h5 className="cardItem__card__title" >Birth Date: </h5>
                    <h5 className="cardItem__card__content" > {birthDate}</h5>
                    <h5 className="cardItem__card__title" >Email:</h5>
                    <h5 className="cardItem__card__content" >{email}</h5>
                    <h5 className="cardItem__card__title" >Phone:</h5>
                    <h5 className="cardItem__card__content" >{phone}</h5>
            </div>
        </section>
    )

}

export default CartItem;