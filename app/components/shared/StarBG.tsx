import styles from "~/style/star-bg.module.css";

export function StarBG({ ...props }) {
  return (
    <div className={styles["star-bg"]} aria-hidden="true" {...props}>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className={styles["star-bg__obj"]}></div>
      ))}
    </div>
  );
}
