import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInUser, signInWithGoogle , singInWithGithub, singInWithTwitter , signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);

        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("googled");
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((res) => {
        console.log(res.user);

        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("googled");
  };

  const handleTwitterSignIn = () => {
    singInWithTwitter()
      .then((res) => {
        console.log(res.user);

        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("twitted");
  };


  const handleGithubSignIn = () => {
    console.log('github')
    singInWithGithub()
    .then( res => {
      console.log(res.user)
    })
    .catch(err => console.error(err))

  }
  



  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);

        e.target.reset();
        navigate("/");
      })
      .catch((err) => console.error(err));

    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-6 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-between">
          <div>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost ml-4">
              Google
            </button>
          </div>
          <div>
            <button onClick={handleGithubSignIn} className="btn btn-ghost ml-4">
              Github
            </button>
          </div>
          <div>
            <button onClick={handleFacebookSignIn} className="btn btn-ghost ml-4">
              Facebook
            </button>
          </div>
          <div>
            <button onClick={handleTwitterSignIn} className="btn btn-ghost ml-4">
              Twitter
            </button>
          </div>
          </div>
          <p className="text-center mb-4">
            New Here? Please{" "}
            <Link className="text-violet-700 " to={"/register"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
