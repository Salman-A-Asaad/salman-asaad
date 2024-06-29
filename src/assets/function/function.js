import toast from "react-hot-toast";
import { firstColor } from "../../Style/index";
const checkEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    toast.success("EX : example@gmail.com", {
      style: {
        border: `1px solid ${firstColor}`,
        padding: "16px",
        color: firstColor,
      },
      duration: 4000,
      icon: "👉",
    });
    toast.error("Invalid  email");
    return false;
  }
  return true;
};
export default checkEmail;
