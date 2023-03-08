import React from 'react';

const QR = () => {
  return (
    <section className="flex h-full justify-center items-center bg-light-gray font-qr">
      <div className="p-25px max-w-sm border rounded-2xl bg-white">
        <img src="images/qr/qr-img.png" alt="Blue background and a QR-code on it" className='rounded-xl'/>
      <h1 className="font-700  mt-5 text-dark-blue text-center text-2rem px-2">Improve your front-end skills by building projects</h1>
      <p className="text-dark-blue font-400 text-center px-4 my-5">Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
      </div>
    </section>
  )
}

export default QR;
