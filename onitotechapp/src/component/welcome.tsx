import React from "react";
import {useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"
import Button from "@mui/material/Button";

const WelcomePage = () => {
  const navigate = useNavigate();
  // const [next,setNext] = useState(false);
  // console.log(next,"next======")
  return (
    <>
      <div className={styles.welcome}>
        <div onClick={()=>navigate("/profile")}>
          <Button className={styles.btn} variant="contained" color="primary">
            <span className={styles.grtng}>Welcome</span>{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
export default WelcomePage;
