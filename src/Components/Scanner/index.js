import React from "react";
import Scanner from "react-webcam-qr-scanner";

const ScannerComponent = (props) => {
//   const handleDecode = (result) => {
//     // alert('Tu QR fue: ', result.data);
//     // alert("Tu QR: ", result.data)\
//     // alert("Escaneado con exito!!!")

//     // scanner_result = result.data
//     //  scanner_result = window.localStorage.setItem('currentQR', JSON.stringify(result.data))
// } 
// //   scanner_result = String(handleDecode);

const decode = (result) => {
    console.log(result);
    window.location.href = result.data;
}
const scannerLoader  = (mode) => {
    console.log( mode);
}



  return (
          <Scanner 
            className="some-classname"
            onDecode={decode}
            onScannerLoad={scannerLoader}
            constraints={{ 
              audio: false, 
              video: { 
                facingMode: "environment" 
              } 
            }}
            // captureSize={{ width: 200, height: 200 }}
          />



  );
}

export default ScannerComponent;