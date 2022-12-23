import * as React from 'react'

import { UpdateUserDocinDB } from '../../utils/firebase.utils';

/** instead of using 4 different useSate values for the 4 inputs
 *  we will use an object. This Object will be the default for useState
 *  and the value for formFields (see below) */
const defaultFormFields = {
    imageUrl: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phone: '',
}

const FormItem =({stateOfRequest, userDetails} )=>{

    const [formFields, setFormFields] = React.useState(defaultFormFields);
    /** destructuring of the 4 values and setting them as constants in formFields.
     * in order to know which of these values changes, we have set the name of the formfield. */
    const { imageUrl, firstName, lastName, birthDate, email, phone } = formFields;
    const date = new Date();
    const dateAndTime = date.toLocaleString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }); 
    const profileUpdated = dateAndTime;


    const updateImageUrl = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                imageUrl: imageUrl,
                profileUpdated: profileUpdated,
              })
            .catch((error) => {
                console.error('Update encountered an error', error)
            });

        resetFormFields();
        } catch(error) {
          console.error('FirstName creation encountered an error', error)
        }

    }
    const updateFirstname = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                firstName: firstName,
                profileUpdated: profileUpdated,
              })
            .catch((error) => {
                console.error('Update encountered an error', error)
            });
        resetFormFields();
        } catch(error) {
          console.error('FirstName creation encountered an error', error)
        }
    }
    const updateLastname = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                lastnameName: lastName,
                profileUpdated: profileUpdated,
              })
            .catch((error) => {
                console.error('Update encountered an error', error)
            });
        resetFormFields();
        } catch(error) {
          console.error('FirstName creation encountered an error', error)
        }
    }
    const updateBirthDate = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                birthDate: birthDate,
                profileUpdated: profileUpdated,
              })
            .catch((error) => {
                console.error('Update encountered an error', error)
            });
        resetFormFields();
        } catch(error) {
          console.error('FirstName creation encountered an error', error)
        }
    }
    const updateEmail = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                email: email,
                profileUpdated: profileUpdated,
              })
            .catch((error) => {
                console.error('Update encountered an error', error)
            });
        resetFormFields();
        } catch(error) {
          console.error('FirstName creation encountered an error', error)
        }
    }
    const updatePhone = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                phone: phone,
                profileUpdated: profileUpdated,
              })
            .catch((error) => {
                console.error('Update encountered an error', error)
            });
        resetFormFields();
        } catch(error) {
          console.error('FirstName creation encountered an error', error)
        }
    }

    /** in order to know which of these values change, we have set the name of the formfield,
     *  which will come through the event.
     *  the value that gets typed in to the formfield gets passed in to value={the appropriate variable} of
     *  the formFields variables */
    const handleChange = (event) => {
        const { name, value} = event.target;
        // calls the setter function 
        setFormFields({...formFields, [name]: value })
    }
    
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    return (

        <section className="formItem">
            <form className="formItem__card" onSubmit={updateImageUrl} >
                    <input 
                    type="file" 
                    accept="image/*"
                    className="formItem__card__input"
                    onChange={handleChange} 
                    value={imageUrl} 
                    name="imageUrl" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateFirstname} >
                    <input 
                    type="text" 
                    className="formItem__card__input"
                    // placeholder={firstName}
                    onChange={handleChange} 
                    value={firstName} 
                    name="firstName" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateLastname} >
                    <input 
                    type="text" 
                    className="formItem__card__input"
                    // placeholder={lastName}
                    onChange={handleChange} 
                    value={lastName} 
                    name="lastName" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateBirthDate} >
                    <input 
                    type="date" 
                    className="formItem__card__input"
                    // placeholder={birthDate}
                    onChange={handleChange} 
                    value={birthDate} 
                    name="birthDate" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateEmail} >
                    <input 
                    type="email" 
                    className="formItem__card__input"
                    // placeholder={email}
                    onChange={handleChange} 
                    value={email} 
                    name="email" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updatePhone} >
                    <input 
                    type="number" 
                    className="formItem__card__input"
                    // placeholder={phone}
                    onChange={handleChange} 
                    value={phone} 
                    name="phone" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
        </section>

    )

}

export default FormItem;