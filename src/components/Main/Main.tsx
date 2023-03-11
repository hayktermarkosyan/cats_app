import React from "react";
import styles from "./Main.module.css";

interface MainProps {
  cats?: ICat[];
}

const Main = ({ cats }: MainProps) => (
  <div className={styles.main}>
    {cats?.map((cat) => (
      <div key={cat.id} className={styles.cat_div}>
        <img src={cat.url} className={styles.cat_image} alt="" />
      </div>
    ))}
  </div>
);

export default Main;
