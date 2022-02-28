import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";

const useStyle = makeStyles({
  componant: {
    height: "70vh",
    width: "40vw",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "25px 35px",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: "12px",
    fontWeight: 400,
  },
  loginbtn: {
    background: " #fb641b",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    border: "none",
    color: "#fff",
  },
  requestotp: {
    border: "none",
    lineHeight: "180%",
    textAlign: "center",
    color: "#2874f0",
    backgroundColor: " #fff",
    marginTop: "16px",
  },
  TextField: {
    color: " #2874f0",
    fontWeight: 600,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 1.4,
    paddingTop: 60,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    marginTop: 10,
    fontWeight: 600,
    lineHeight: 0,
  },
});
const initialvalue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: `Looks like you're new here`,
    subHeading: ` Sign up with your mobile number to get started`,
  },
};
const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValues = {
  firstname: "",
  password: "",
};
const LoginDialog = ({ open, setOpen, setAccount }) => {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialvalue.login);
  };
  const classes = useStyle();
  const [account, toggleAccount] = useState(initialvalue.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [login]);

  const togglefunction = () => {
    toggleAccount(initialvalue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      setError(true);
      return;
    }
    handleClose();
    setAccount(login.username);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.componant}>
        <div style={{ display: "flex" }}>
          <div className={classes.image}>
            <p style={{ fontSize: 28, fontWeight: 500 }}>{account.heading}</p>
            <p style={{ marginTop: 20 }}>{account.subHeading}</p>
          </div>
          {account.view === "login" ? (
            <div className={classes.login}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter your username"
              />
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter your password"
              />
              {error && (
                <Typography classname={classes.error}>
                  Invalid Username or Password
                </Typography>
              )}
              <p className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </p>
              <Button
                variant="contained"
                onClick={() => loginUser()}
                className={classes.loginbtn}
              >
                Login
              </Button>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  lineHeight: 1.4,
                }}
                className={classes.text}
              >
                OR
              </p>
              <Button variant="contained" className={classes.requestotp}>
                Request OTP
              </Button>
              <p onClick={() => togglefunction()} className={classes.TextField}>
                New to Flipkart? Create an account
              </p>
            </div>
          ) : (
            <div className={classes.login}>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter the first name"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter your lastname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter your username"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter your email"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter your password"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter your phone"
              />
              <Button
                variant="contained"
                onClick={() => signupUser()}
                className={classes.loginbtn}
              >
                SignUp
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default LoginDialog;
