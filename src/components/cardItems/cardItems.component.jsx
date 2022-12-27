import * as React from 'react'

import { UpdateUserDocinDB } from '../../utils/firebase.utils';
import { useLocalStorageState } from '../../utils/syncLocalStorage';

const defaultFormFields = {
    userFirstName: '',
    userLastName: '',
    userBirthDate: '',
    userEmail: '',
    userPhone: '',
}
const initialInfo = 'check connection or refresh';

const defaultFile = {
    fileName: '',
    imgLocation: '',
}

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

const CardItems =()=>{

  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const {firstName, lastName, birthDate, email, phone } = formFields;
  const [file, setFile] = React.useState(defaultFile);
  const {fileName, imgLocation} = file;
  const inputRef = React.useRef();

  /* State for local  */
  const [localImage, setLocalImage] = useLocalStorageState('imgLocation', initialInfo )
  const [localFirstName, setLocalFirstName] = useLocalStorageState("firstName", initialInfo )
  const [localLastName, setLocalLastName] = useLocalStorageState('lastName', initialInfo )
  const [localBirthDate, setLocalBirthDate] = useLocalStorageState('birthDate', initialInfo )
  const [localEmail, setLocalEmail] = useLocalStorageState('email', initialInfo )
  const [localPhone, setLocalPhone] = useLocalStorageState('phone', initialInfo )


    const updateProfilePic = async (event)=>{
        event.preventDefault();
        try {
            await UpdateUserDocinDB({
                fileName: fileName,
                imgLocation: imgLocation,
                profileUpdated: profileUpdated,
              }).then(
                setLocalImage(imgLocation),
              )
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
              }).then(
                setLocalFirstName(firstName),
              )
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
                lastName: lastName,
                profileUpdated: profileUpdated,
              }).then(
                setLocalLastName(lastName),
              )
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
              }).then(
                setLocalBirthDate(birthDate),
              )
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
              }).then(
                setLocalEmail(email),
              )
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
              }).then(
                setLocalPhone(phone),
              )
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
    

    const handlePicChange = (e) =>{
        if (!e.target.files) {
            return;
          }
        console.log(e.target.files[0].name);
        const fileName = e.target.files[0].name;
        const imgLocation = URL.createObjectURL(e.target.files[0])
        setFile({fileName, imgLocation});

    } 
    
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleUploadClick = () => {
        // redirect the click event onto the hidden input element
        inputRef.current?.click();
      };
    // replace image function
    const replaceImage = (error) => {
      //replacement of broken Image
      error.target.src = "img/uploadProfilePic.jpg"
      }

    return (
        <>
          <section className="formItem">
            <form className="formItem__card" onSubmit={updateProfilePic} >
                      {/* custom button to select and upload a file */}
                    <button 
                    className="formItem__card__input" 
                    onClick={handleUploadClick}>
                        {imgLocation ? `${fileName}` : 'Click to select'}
                    </button>
                    <input 
                    type="file" 
                    accept="image/*"
                    className="formItem__card__input"
                    onChange={handlePicChange} 
                    name='file'
                    ref={inputRef}
                    style={{ display: 'none' }}
                    />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateFirstname} >
                    <input 
                    type="text" 
                    className="formItem__card__input"
                    onChange={handleChange} 
                    placeholder={localFirstName}
                    value={firstName} 
                    name="firstName"
                    maxlength="25" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateLastname} >
                    <input 
                    type="text" 
                    className="formItem__card__input"
                    onChange={handleChange} 
                    placeholder={localLastName}
                    value={lastName} 
                    name="lastName"
                    maxlength="25" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateBirthDate} >
                    <input 
                    type="date" 
                    className="formItem__card__input"
                    onChange={handleChange}
                    value={birthDate} 
                    name="birthDate" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updateEmail} >
                    <input 
                    type="email" 
                    className="formItem__card__input"
                    onChange={handleChange} 
                    placeholder={localEmail} 
                    value={email} 
                    name="email" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
            <form className="formItem__card" onSubmit={updatePhone} >
                    <input 
                    type="number" 
                    className="formItem__card__input"
                    onChange={handleChange} 
                    placeholder={localPhone} 
                    value={phone} 
                    name="phone" />
                <button className="formItem__card__btn" type="submit" >Save</button> 
            </form>
        </section>

        <section className="cardItem">
            <div className="cardItem__card">
                <img className="cardItem__card__img" onError={replaceImage} src={localImage} alt="Card-Item" />
                <h5 className="cardItem__card__title" >Firstname: </h5>
                <h5 className="cardItem__card__content" > {localFirstName}</h5>
                <h5 className="cardItem__card__title" >Lastname: </h5>
                <h5 className="cardItem__card__content" > {localLastName}</h5>
                <h5 className="cardItem__card__title" >Birth Date: </h5>
                <h5 className="cardItem__card__content" > {localBirthDate}</h5>
                <h5 className="cardItem__card__title" >Email:</h5>
                <h5 className="cardItem__card__content" >{localEmail}</h5>
                <h5 className="cardItem__card__title" >Phone:</h5>
                <h5 className="cardItem__card__content" >{localPhone}</h5>
            </div>
        </section>
        </>
    )

}

export default CardItems;