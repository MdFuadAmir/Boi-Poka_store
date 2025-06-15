import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [success,setSuccess] = useState(false);
  const [errorMassage,setErrorMassage] = useState('');
  const [showPassword,setShowPassword] = useState(false);

  const handleRegister = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMassage('');
    setSuccess(false);
  
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      setSuccess(true);
      console.log(result.user);
      // email veryfication
      sendEmailVerification(auth.currentUser)
      .then(()=>{
        console.log("verification email send");
      });
      // update profile
      const profile = {
        displayName: name,
        email:email,
        password: password,
      }
      updateProfile(auth.currentUser,profile)
      .then(()=>{
        console.log('use profile update');
      })
      .catch(error=>{
        console.log(error);
    })


    })
    .catch((error) =>{
      const errorMessage = error.message;
      setErrorMassage(errorMessage);
      setSuccess(false)
      console.log(errorMessage);
    })
  }
  
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
          <button onClick={()=> setShowPassword(!showPassword)} className="btn btn-xs absolute right-5 bottom-7">{showPassword ? <FaEyeSlash/> : <FaEye/> }</button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
          {
            errorMassage && <p className="text-red-600">{errorMassage}</p> 
          }
          {
            success && <p className="text-green-400">Successfully user created</p>
          }
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};
export default Register;