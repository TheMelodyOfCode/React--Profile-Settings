
import * as React from 'react'

import BgVideo from "./components/bg-video/bg-video.component";
import Header from "./components/header/header.component";
import CartItem from "./components/cartItem/cartItem.component";
import FormItem from "./components/formItem/formItem.component";
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
            setUserDetails(userInfo)
            setStateOfRequest({status: 'resolved'})    
    };
    getCardItem()

}, []);

  return (
    <main className="container">
        <BgVideo />
        <Header />
        <CartItem stateOfRequest={stateOfRequest} userDetails={userDetails} />
        <FormItem stateOfRequest={stateOfRequest} userDetails={userDetails}  />
    </main> 
  );
}

export default App;
