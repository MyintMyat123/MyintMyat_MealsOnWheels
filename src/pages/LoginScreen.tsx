import { FunctionComponent } from "react";
import FrameComponent11 from "../components/FrameComponent1";
import FrameComponent1 from "../components/FrameComponent";
import styles from "./LoginScreen.module.css";

const LoginScreen: FunctionComponent = () => {
  return (
    <div className={styles.loginScreen}>
      <section className={styles.loginScreenInner}>
        <div className={styles.frameParent}>
          <FrameComponent11 />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <form className={styles.frameForm}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.welcomeBackParent}>
                        <h2 className={styles.welcomeBack}>Welcome Back</h2>
                        <b className={styles.login}>Login</b>
                      </div>
                    </div>
                    <div className={styles.textbox12}>
                      <div className={styles.email}>Email</div>
                    </div>
                    <div className={styles.textbox13}>
                      <div className={styles.password}>Password</div>
                    </div>
                  </div>
                  <div className={styles.button49Wrapper}>
                    <div className={styles.button49}>
                      <div className={styles.login1}>Login</div>
                    </div>
                  </div>
                </form>
              </div>
              <img
                className={styles.image45Icon}
                loading="lazy"
                alt=""
                src="/image-45@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
      <FrameComponent1 />
    </div>
  );
};

export default LoginScreen;
