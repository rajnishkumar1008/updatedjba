import Link from 'next/link';
import React from 'react';
Link

const SingleBanner = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <div>
      <Link href="/"><img src='/img/banner/single-bnner.png' alt='banner' /></Link>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleBanner;
