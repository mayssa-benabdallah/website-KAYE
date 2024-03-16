// components/AboutText.js

import React from 'react';
import Image from "next/image";

const AboutText = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center'>
    <div className='flex justify-center'>
      <Image
        width={280}
        height={120}
        alt='NextUI hero Image'
        src='/images/hero/appstore.png'
        className='shadow-lg rounded-xl'
      />
    </div>
    <div className='flex justify-center'>
      <Image
        width={280}
        height={120}
        alt='NextU Image'
        src='/images/hero/googleplay.png'
        className='shadow-lg rounded-xl'
      />
    </div>
  </div>
  );
};

export default AboutText;
