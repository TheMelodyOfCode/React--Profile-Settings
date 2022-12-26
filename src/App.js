
import * as React from 'react'

import BgVideo from "./components/bg-video/bg-video.component";
import Header from "./components/header/header.component";

import CardItems from "./components/cardItems/cardItems.component";
import { getSingleDocfromDB } from './utils/firebase.utils';

function App() {

  const [stateOfRequest, setStateOfRequest] = React.useState({
    status: 'idle',
    error: null,
    message: '',
  })
  const [userDetails, setUserDetails] =  React.useState({})
// console.log(userDetails)

  React.useEffect(()=>{ 
    setStateOfRequest({status: 'pending', error: null})
    const getCardItem = async ()=> {
            const userInfo = await getSingleDocfromDB()
            console.log(userInfo)
            setUserDetails(userInfo);
            window.localStorage.setItem('imgLocation',  userInfo.imgLocation,);
            window.localStorage.setItem('firstName',  userInfo.firstName,);
            window.localStorage.setItem('lastName',  userInfo.lastName,);
            window.localStorage.setItem('birthDate',  userInfo.birthDate,);
            window.localStorage.setItem('email',  userInfo.email,);
            window.localStorage.setItem('phone',  userInfo.phone,);
            setStateOfRequest({status: 'resolved'})
          // console.log(userInfo.imgLocation)       
    };
    getCardItem()

}, []);

  return (
    <main className="container">
        <BgVideo />
        <Header />
        {/* <CartItem stateOfRequest={stateOfRequest} userDetails={userDetails} /> */}
        <CardItems stateOfRequest={stateOfRequest} userDetails={userDetails}  />
    </main> 
  );
}

export default App;
