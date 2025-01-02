import type { MetaFunction } from "@remix-run/node";
import styles from "./style/star-bg.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Trang chủ | GDVNPS" },
    {
      name: "description",
      content:
        "GDVNPS là một dự án Geometry Dash Private Server (GDPS) dành cho cộng đồng người chơi Geometry Dash tại Việt Nam",
    },
  ];
};

export default function Index() {
  return (
    <div className={styles["star-bg"]}>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
      <div className={styles["star-bg__obj"]}></div>
    </div>
  );
}
