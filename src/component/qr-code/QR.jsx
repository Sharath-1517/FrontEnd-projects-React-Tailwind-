import React from 'react';

const QR = () => {
  return (
    <section className="flex min-h-full justify-center items-center bg-light-gray font-qr">

      <div className="flex-col justify-center items-center min-h-full m-3 p-6 rounded-2xl bg-white max-w-sm">
        <img src="images/qr/qr-img.png" alt="Blue background and a QR-code on it" className='rounded-xl'/>
      <h1 className="text-dark-blue mt-5 px-1 font-700 text-2xl text-center">Improve your front-end skills by building projects</h1>
      <p className="text-dark-blue mt-4 mb-6 font-100 text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
      </div>
    </section>
  )
}

export default QR;
