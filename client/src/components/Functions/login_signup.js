import axios from "axios";
import { useDispatch } from "react-redux";
import { setID } from "../../Redux/action";
import { saveData } from "../../utils/localStorage";

const backendUrl = "https://faballeyclonebackend.onrender.com";

// Accessing redux store
// const userId = useSelector((state) => state.userId);
// const dispatch = useDispatch();

export const signup = (formValues) => {
  try {
    axios
      .post(`${backendUrl}/users/signup`, formValues)
      .then((res) => {
        console.log("res", res, res.data);
        let message = res.data.message;
        alert(message);
        saveData("userId", res.data.userId);
      })
      .catch((error) => {
        let message = error.response.data.message;
        let errors = error.response.data.errors;
        if (errors != null && errors.length > 0) {
          alert("Invalid Email or Password");
        } else if (message) {
          alert(message);
        }
      });
  } catch (error) {
    console.log("Error", error);
  }
};

export const login = (formValues) => {
  try {
    axios
      .post(`${backendUrl}/users/login`, formValues)
      .then((res) => {
        console.log("res", res, res.data);
        let message = res.data.message;
        alert(message);
        console.log("setting id", res.data.userId);
        saveData("userId", res.data.userId);
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
      });
  } catch (error) {
    console.log("Error", error);
  }
};
