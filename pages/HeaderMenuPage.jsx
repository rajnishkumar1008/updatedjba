import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import AppURL from './api/AppUrl';
export default function HeaderMenuPage({menucategorydata}) {
    const [menuData,setMenuData] = useState([menucategorydata]);
  return (
    <div>
        { menuData.length >=0 &&(
            <Header menuData/>
        )}
      
    </div>
  );
}
export const getServerSideProps = async (context) => {
    try {
     
      const menucategoryres = await fetch(AppURL.headermenu);
      const menucategorydata = await menucategoryres.json();
      
      return {
        props: {menucategorydata},
      };
    } catch (err) {
      console.log(err);
      return {
        props: {
          data: false,
        },
      };
    }
  };