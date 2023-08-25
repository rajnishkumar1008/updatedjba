import React, { useState } from 'react';
import Link from 'next/link';
import ProductDetailsnew from '../../components/ecommerce/ProductDetailsnew';
import SingleBanner from '../../components/elements/SingleBanner';
import Head from "next/head";
// import Breadcrumb from '../../components/layout/Breadcrumbjs';

const Slug = ({slug,productdetailsdata,productrelatedcategorydata,puritydata,attributedata}) => {
    const[productdetailData] = useState(productdetailsdata)
    const[purityData] = useState(puritydata);
    const[attributeData] = useState(attributedata) ;
    const[product_name] = useState(productdetailsdata[0]['product_name'])
    const[productRelatedData] = useState(productrelatedcategorydata)
    return (
        <>
           <Head>
      <title>{product_name} | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
          <div className='page-header breadcrumb-wrap'>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/"> 
                            Home
                         
                        </Link>
                        <span>Product</span>
                        <span>{product_name}</span>
                    </div>
                </div>
            </div>
            {productdetailData && productdetailData.length >= 0 && (
              <ProductDetailsnew productData={productdetailData} relatedproduct={productRelatedData} purity={purityData} attribute={attributeData}/>
            )}
           
            <SingleBanner />
{/* <ProductMainDetails /> */}
        </>
    );
}

export default Slug;
export async function getServerSideProps(context) {
  try{
    let slug = context.query.slug;
    const productdetailsres = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/product/details/`+slug);
    const purityres = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/all/purity`);
    const attributeres = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/all/attribute`);
    const puritydata = await purityres.json();
    const attributedata = await attributeres.json();
    const productdetailsdata = await productdetailsres.json();
    const productlength =productdetailsdata.length;
    if(productlength >=1)
  {
    const productcategory = productdetailsdata[0]['product_category'];
    const productrelatedcategoryres = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/category/`+productcategory);
    const productrelatedcategorydata = await productrelatedcategoryres.json();
    return { props: { slug ,productdetailsdata,productrelatedcategorydata,puritydata,attributedata} };
  }
  else{
    return{
      notFound:true,
     };
  }
  }
  catch (err) {
    console.log(err);
  }
    
    
  }
