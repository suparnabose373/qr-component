import React from 'react';
import './qrComponent.scss';
import imageQrCode from '../assets/image-qr-code.png';

function QRComponent() {
  return (
    <div className="QRComponent">
      <img src={imageQrCode} alt="image-qr-code" className="image-qr-code" />
      <p className="qr-heading">Improve your front-end skills by building projects</p>
      <p className="qr-subheading">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}

export default QRComponent;
