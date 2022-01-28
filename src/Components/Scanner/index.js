import React from "react";
import Scanner from "react-webcam-qr-scanner";

const ScannerComponent = (props) => {
const scanner_result = 'GO'
  const handleDecode = (result) => {
    // alert('Tu QR fue: ', result.data);
    console.log(result.data);
    // alert("Tu QR: ", result.data)
    window.location.href = result.data;

    // scanner_result = result.data
//  scanner_result = window.localStorage.setItem('currentQR', JSON.stringify(result.data))
  } 
//   scanner_result = String(handleDecode);

  const handleScannerLoad = (mode) => {
    console.log( mode);
    
  }

  return (
          <Scanner 
            className="some-classname"
            onDecode={handleDecode}
            onScannerLoad={handleScannerLoad}
            constraints={{ 
              audio: false, 
              video: { 
                facingMode: "environment" 
              } 
            }}
            captureSize={{ width: 200, height: 200 }}
          />



  );
}

export default ScannerComponent;