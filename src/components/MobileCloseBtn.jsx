import styles from "../style/MobileCloseBtn.module.css";

const MobileCloseBtn = ({ toggleMenu, isOpen }) => {
  return (
    <label onClick={toggleMenu} style={{ cursor: "pointer" }}>
      <div className={styles.hamburger}>
        <span
          className={`${styles.bar} ${styles.bar1} ${
            isOpen ? styles.translateX40 : ""
          }`}
        />
        <span
          className={`${styles.bar} ${styles.bar2} ${
            isOpen ? styles.rotate45 : ""
          }`}
        />
        <span
          className={`${styles.bar} ${styles.bar3} ${
            isOpen ? styles.rotateNeg45 : ""
          }`}
        />
        <span
          className={`${styles.bar} ${styles.bar4} ${
            isOpen ? styles.translateXNeg40 : ""
          }`}
        />
      </div>
    </label>
  );
};

export default MobileCloseBtn;
