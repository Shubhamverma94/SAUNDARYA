import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState([]);
  const getdata = async () => {
    fetch(`https://sephora-clone.herokuapp.com/users`)
      .then((d) => d.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);


  const handleChange = (e) => {

    localStorage.setItem("user", JSON.stringify(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  const navigate = useNavigate();
  const responseSuccessGoogle = (response) => {
    console.log(response.profileObj, response.tokenId);
    setUser(response.profileObj, response.tokenId);
    // localStorage.setItem("user", JSON.stringify(response.profileObj));
    navigate("/");
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };
  const componentClicked = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response.name, response.email, response.picture.data.url);
    setUser(response.name, response.email, response.picture.data.url);
    // localStorage.setItem("user", JSON.stringify(response.name));
    navigate("/");
  };
  useEffect(() => {
    console.log("useState", user);
  }, [responseSuccessGoogle]);

  return (
    <>
      <div
        style={{
          border: "2px solid gray",
          width: "30%",
          height: "550px",
          margin: "auto",
          marginTop: "20px"
        }}
      >
        <h1>Login </h1>

        <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
          <br />

          <input
            type="email"
            name="email"

            placeholder="Email or Phone Number"
            style={{ padding: "10px", margin: "10px", width: "260px" }}
          />
          <br />

          <input
            type="text"
            name="name"
            onChange={handleChange}
            style={{ padding: "10px", margin: "10px", width: "260px" }}
            placeholder="Username"
          />
          <br />

          <input
            placeholder="Enter the password"
            type="password"
            name="password"


            style={{ padding: "10px", margin: "10px", width: "260px" }}
          />
          <br />
          <br></br>
          <Link to={`/`}>
            <Button
              style={{
                backgroundColor: "rgb(255,51,153)",
                border: "none",
                width: "90%",
              }}
              color="primary"
              variant="contained"
              value="Submit"
            >
              {" "}
              Continue{" "}
            </Button>
          </Link>
          <br></br>
          <br></br>
        </form>

        <br></br>
        {/* <GoogleLogin
          clientId="783084545362-nbv5flob7ak19200jqvmr33fb3og95ri.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          expectcssClass="google-button"
          cookiePolicy={"single_host_origin"}
          style={{ backgroundColor: "rgb(25,118,210)" }}
        /> */}
        <br></br>
        {/* <FacebookLogin
          appId="397198822046839"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          expectcssClass="facebook-button"
          icon="fa-facebook"
          textButton="Login with Facebook"
          style={{ backgroundColor: "rgb(25,118,210)" }}
        /> */}
      </div>
    </>
  );
};


export default Login;