import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "About us screen" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Donate screen" to the project
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "Register screen" to the project
  }, []);

  const onButton1ContainerClick = useCallback(() => {
    // Please sync "Register screen" to the project
  }, []);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.image2Parent}>
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <div className={styles.mealsOnWheelsParent}>
          <a className={styles.mealsOnWheels}>Meals On Wheels</a>
          <div className={styles.merryMeal}>Merry Meal</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frame} onClick={onFrameContainerClick}>
              <a className={styles.home}>Home</a>
            </div>
            <div className={styles.frame1} onClick={onFrameContainer1Click}>
              <a className={styles.about}>About</a>
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <a className={styles.contact}>Contact</a>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frame2} onClick={onFrameContainer2Click}>
              <a className={styles.donate}>Donate</a>
            </div>
            <div className={styles.frame3} onClick={onFrameContainer12Click}>
              <a className={styles.getMeal}>Get Meal</a>
            </div>
          </div>
          <div className={styles.button1Wrapper}>
            <button className={styles.button1}>
              <a className={styles.login}>Login</a>
            </button>
          </div>
          <div className={styles.button1Container}>
            <div className={styles.button11} onClick={onButton1ContainerClick}>
              <a className={styles.register}>Register</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent11;
