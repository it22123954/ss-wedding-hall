import styles from "./Depth5Frame.module.css";

const Depth5Frame = ({ depth7Frame0, coordinator, startingAtLkr1500000 }) => {
  return (
    <div className={styles.depth5Frame0}>
      <div className={styles.depth6Frame0}>
        <img
          className={styles.depth7Frame0}
          loading="lazy"
          alt=""
          src={depth7Frame0}
        />
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth7Frame01}>
          <div className={styles.coordinator}>{coordinator}</div>
        </div>
        <div className={styles.depth7Frame1}>
          <div className={styles.startingAtLkr1}>{startingAtLkr1500000}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
