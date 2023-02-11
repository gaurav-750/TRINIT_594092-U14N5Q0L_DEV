import React, { useEffect, useState } from 'react'
import Preloader from '../components/preloader/Preloader';
import Background from '../Home/background'
import Hero from '../Home/hero'
import Apli from "../Home/aplli";
import Testi from "../Home/testimonial";
import Footer from "../components/preloader/footer";

import Req from "../Home/requirements";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="w-full h-[110vh]">
      <Hero />
      {/* <Req/> */}
      <Apli/>
      <Testi/>
      <Background />
      <Footer/>
      {/* <Req/> */}
    </div>
  );
}

export default Home