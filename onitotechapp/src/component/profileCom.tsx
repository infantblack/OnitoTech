// import {useNavigate } from "react-router-dom";
import styles from "./styles.module.scss"
import Button from "@mui/material/Button";

const ProfileComponent = () => {

  return (
    <>
    <div className={styles.welcome}>
      <div>
        <Button className={styles.btn} variant="contained" color="primary">
          <span className={styles.grtng}>Profile Page</span>{" "}
        </Button>
      </div>
    </div>
  </>
);
}
export default ProfileComponent;
