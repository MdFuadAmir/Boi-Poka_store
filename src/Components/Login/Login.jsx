import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useRef, useState } from "react";


const Login = () => {
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const emailRef = useRef();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch((error) =>{
            console.log(error);
            setUser(null);
        })
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch((error) =>{
            console.log(error);
            setUser(null);
        })
    }
    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log("sign out");
            setUser(null);
        })
        .catch((error) =>{
            console.log(error);

        })
    }
    const handleLogin = e =>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      signInWithEmailAndPassword(auth,email,password)
      .then(result =>{
        console.log(result.user);
      })
      .catch(error =>{
        console.error(error.massage);
      })
    }
    const handleForgetPassword = () =>{
      const email = emailRef.current.value;
      if(!email){
        alert('please provide a valid email address');
      }else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
          alert('reset email sent, please check your email');
        })
        .catch(()=>{

        })
      }
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content">
    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label onClick={handleForgetPassword} className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
            {
                user ? <button onClick={handleGoogleSignOut} className="btn">Log Out</button> :<>
                <button onClick={handleGoogleSignIn} className="btn">Log in</button>
                <button onClick={handleGithubSignIn} className="btn">Log With Github</button>
                </> 
            }
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="photo" />
                </div>
            }
        </div>

      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;