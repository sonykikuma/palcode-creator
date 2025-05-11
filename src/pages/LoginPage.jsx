// import { useState } from "react";
// import { auth } from "../firebase";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// // import { getAuth } from "firebase/auth";

// // const auth = getAuth();
// // auth.languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // auth.useDeviceLanguage();
// const LoginPage = () => {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);

// //   import { getAuth, RecaptchaVerifier } from "firebase/auth";

// // const auth = getAuth();
// // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
// //   'size': 'invisible',
// //   'callback': (response) => {
// //     // reCAPTCHA solved, allow signInWithPhoneNumber.
// //     onSignInSubmit();
// //   }
// // });
//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha",
//       {
//         size: "invisible",
//         callback: () => handleSendOTP(),
//       },
//       auth
//     );
//   };

// //   import { getAuth, RecaptchaVerifier } from "firebase/auth"; to Use the reCAPTCHA widget

// // const auth = getAuth();
// // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

// const handleSendOTP = async () => {
//     setupRecaptcha();
//     const appVerifier = window.recaptchaVerifier;
//     try {
//       const result = await signInWithPhoneNumber(auth, phone, appVerifier);
//       setConfirmationResult(result);
//       alert("OTP sent!");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     try {
//       await confirmationResult.confirm(otp);
//       alert("Phone authenticated!");
//     } catch (err) {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <div className="card p-4">
//       <h3>OTP Login</h3>
//       <input
//         className="form-control my-2"
//         placeholder="+911234567890"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//       <button className="btn btn-primary" onClick={handleSendOTP}>
//         Send OTP
//       </button>
//       <div id="recaptcha"></div>
//       {confirmationResult && (
//         <>
//           <input
//             className="form-control my-2"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button className="btn btn-success" onClick={handleVerifyOTP}>
//             Verify OTP
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default LoginPage;

import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container", // ✅ ID of the container div
        {
          //   size: "invisible",
          size: "normal",

          callback: (response) => {
            console.log("reCAPTCHA solved", response);
            // You can trigger OTP send here if needed
          },
        }
        // auth
      );
    }
  };

  const handleSendOTP = async () => {
    setupRecaptcha(); // make sure it's set before calling signIn
    const appVerifier = window.recaptchaVerifier;
    try {
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent!");
    } catch (err) {
      console.error("OTP Error:", err);
      alert(err.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("Phone authenticated!");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="card p-4">
      <h3>OTP Login</h3>
      <input
        className="form-control my-2"
        placeholder="+911234567890"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSendOTP}>
        Send OTP
      </button>
      {/* ✅ Must match the ID used in RecaptchaVerifier */}
      <div id="recaptcha-container"></div>

      {confirmationResult && (
        <>
          <input
            className="form-control my-2"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleVerifyOTP}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
