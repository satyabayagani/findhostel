import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3200/users")
      .then((res) => {
        let user = res.data.find((userObj) =>
          userObj.email === event.target.email.value ? userObj : undefined
        );
        if (user === undefined)
          alert(`user with email ${event.target.email.value} doesn't exist`);
        else {
          if (user.password !== event.target.pass.value)
            alert(`Incorrect Password`);
          else {
            props.log(user.uname);
            navigate("/");
          }
        }
        event.target.email.value = "";
        event.target.pass.value = "";
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={login}>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text text-info">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="pass"
            required
          />
        </div>
        <div className="text-center">
          <span className="me-2">Not a User?</span>{" "}
          <span className="text-info reg" onClick={() => register()}>
            Register here
          </span>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
