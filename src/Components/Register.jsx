import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form"

const Register = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // const onSubmit = (data) => console.log(data)

  const { createUser } = useContext(AuthContext);
  
  
  const handleRegister = (data) => {
    
    // e.preventDefault();
    const name = data.name;
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log(name, email, password);
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-6 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                // required
                {...register("name", { required: true })}
              />
              
            </div>
            {errors.name && <span className="text-red-500">Name is required</span>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
                
              />
            </div>
            {errors.email && <span className="text-red-500">Email is required</span>}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
                
              />
            </div>
            {errors.password && <span className="text-red-500">Password is required</span>}



            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Already have an account? Please{" "}
            <Link className="text-violet-700 " to={"/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
