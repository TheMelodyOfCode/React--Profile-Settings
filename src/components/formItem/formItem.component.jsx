

const FormItem =()=>{

    return (

        <section className="formItem">
            <form className="formItem__card" >
                    <input 
                    type="file" 
                    accept="image/*"
                    className="formItem__card__input"
                    // value="image"
                    name="image" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" >
                    <input 
                    type="text" 
                    className="formItem__card__input"
                    placeholder="Firstname"
                    // value="Firstname"
                    name="Firstname" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" >
                    <input 
                    type="text" 
                    className="formItem__card__input"
                    placeholder="Lastname"
                    // value="Lastname"
                    name="Lastname" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" >
                    <input 
                    type="date" 
                    className="formItem__card__input"
                    placeholder="Birth Date"
                    // value="Birth Date"
                    name="Birth Date" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" >
                    <input 
                    type="email" 
                    className="formItem__card__input"
                    placeholder="John@doe.com"
                    // value="email"
                    name="email" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" >
                    <input 
                    type="number" 
                    className="formItem__card__input"
                    placeholder="Phone"
                    // value="phone"
                    name="phone" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
        </section>

    )

}

export default FormItem;