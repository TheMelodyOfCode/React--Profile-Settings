
import * as React from 'react'

import BgVideo from "./components/bg-video/bg-video.component";
import Header from "./components/header/header.component";
import CardItems from "./components/cardItems/cardItems.component";
import { getSingleDocfromDB } from './utils/firebase.utils';
import { ErrorBoundary } from 'react-error-boundary';

function App() {

  React.useEffect(()=>{ 
    const getCardItem = async ()=> {
            const userInfo = await getSingleDocfromDB()
            window.localStorage.setItem('imgLocation', `"${userInfo.imgLocation}"`, )
            window.localStorage.setItem('firstName', `"${userInfo.firstName}"`, )
            window.localStorage.setItem('lastName', `"${userInfo.lastName}"`, )
            window.localStorage.setItem('birthDate', `"${userInfo.birthDate}"`, )
            window.localStorage.setItem('phone', `"${userInfo.email}"`, )
            window.localStorage.setItem('email', `"${userInfo.phone}"`, )
    };
    getCardItem()
},[]);

function ErrorFallback({error, resetErrorBoundary,}) {
  return (
    <section className="cardItem">
      <div className="cardItem__card">
          <img className="cardItem__card__img" src='img/error.png'  alt='error' />
          <h5 className="cardItem__card__title" >Error: </h5>
          <h5 className="cardItem__card__content" > {error.message}</h5>

      </div>
  </section>
  )
}

  return (
        <>
        <main className="container">
          <BgVideo />
          <Header />
          <ErrorBoundary FallbackComponent={ErrorFallback}  > 
              <CardItems />
          </ErrorBoundary>
        </main>
        </>
  );
}

export default App;
