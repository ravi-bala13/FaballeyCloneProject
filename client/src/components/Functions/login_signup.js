import axios from "axios";
import { useDispatch } from "react-redux";
import { setID } from "../../Redux/action";
import { saveData } from "../../utils/localStorage";

const backendUrl = "https://faballeyclonebackend.onrender.com";

// Accessing redux store
// const userId = useSelector((state) => state.userId);
// const dispatch = useDispatch();

export const signup = (formValues, setIsLoading) => {
  try {
    setIsLoading(true);
    axios
      .post(`${backendUrl}/users/signup`, formValues)
      .then((res) => {
        let message = res.data.message;
        alert(message);
        saveData("userId", res.data.userId);

        let tem = formValues.email.split("@");

        saveData("userName", tem[0]); //saving name in local storage
        // settiing  loginSuccess to true to make the login box hide
        // setLoginSuccess(1);
        setIsLoading(false);
      })
      .catch((error) => {
        let message = error.response.data.message;
        let errors = error.response.data.errors;
        if (errors != null && errors.length > 0) {
          alert("Invalid Email or Password");
        } else if (message) {
          alert(message);
        }
        setIsLoading(false);
      });
  } catch (error) {
    console.log("Error", error);
  }
};

export const login = (formValues, setLoginSuccess, setIsLoading) => {
  try {
    setIsLoading(true);
    axios
      .post(`${backendUrl}/users/login`, formValues)
      .then((res) => {
        let message = res.data.message;
        alert(message);
        saveData("userId", res.data.userId);

        let tem = formValues.email.split("@");
        saveData("userName", tem[0]); //saving name in local storage
        // settiing  loginSuccess to true to make the login box hide
        setLoginSuccess(1);
        setIsLoading(false);
        // dispatch(setID(res.data.userId));
      })
      .catch((error) => {
        let message = error.response.data.message;
        let errors = error.response.data.errors;
        if (errors != null && errors.length > 0) {
          alert("Invalid Email or Password");
        } else if (message) {
          alert(message);
        }
        setIsLoading(false);
      });
  } catch (error) {
    console.log("Error", error);
    setIsLoading(false);
  }
};
