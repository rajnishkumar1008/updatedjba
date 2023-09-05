import Image from "next/image";

const PromoBannerFour = () => {
  return (
    <div className='jab-prom-banner-four'>
      <div className='left'>
      {/* <img src='/img/shop/dimond.png' alt='prom-banner' /> */}
      <Image src='/img/shop/dimond.png' alt='prom-banner' width={314} height={234} />
      </div>
      <div className='center'>
      <h3>DIAMOND COLLECTION</h3>
      <p>Explore among various shapes and cuts</p>
      </div>
      <div className='right'>
        <a href='#' className='btn btn-lg' >Explore Now</a>
      </div>
     
  </div>
    
  );
}

export default PromoBannerFour;
