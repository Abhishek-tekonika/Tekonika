import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MobileAppDev = (): JSX.Element => {
  return(
    <>
      <Header />
      <div style={{margin:'auto', minHeight: '500px'}}>
        MOBILE PAGE HERE
      </div>
      <Footer />
    </>
  )
}

export default MobileAppDev;