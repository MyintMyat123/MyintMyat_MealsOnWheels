import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.container9Wrapper, className].join(" ")}>
      <footer className={styles.container9}>
        <div className={styles.frameParent}>
          <div className={styles.button14Wrapper}>
            <div className={styles.button14}>
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={styles.container5Parent}>
            <div className={styles.container5}>
              <img
                className={styles.image2Icon}
                alt=""
                src="/image-2-1@2x.png"
              />
              <div className={styles.frameGroup}>
                <div className={styles.mealsOnWheelWrapper}>
                  <b className={styles.mealsOnWheel}>Meals On Wheel</b>
                </div>
                <div className={styles.merryMeal}>Merry Meal</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.button13Wrapper}>
                  <div className={styles.button13}>
                    <div className={styles.about}>About</div>
                  </div>
                </div>
                <b className={styles.donate}>Donate</b>
              </div>
            </div>
          </div>
          <div className={styles.getMealsWrapper}>
            <b className={styles.getMeals}>Get Meals</b>
          </div>
        </div>
        <div className={styles.container9Inner}>
          <div className={styles.frameDiv}>
            <div className={styles.termsWrapper}>
              <b className={styles.terms}>Terms</b>
            </div>
            <div className={styles.joinVolunteerWrapper}>
              <b className={styles.joinVolunteer}>Join Volunteer</b>
            </div>
            <b className={styles.becomePartner}>Become Partner</b>
            <div className={styles.contactWrapper}>
              <b className={styles.contact}>Contact</b>
            </div>
          </div>
        </div>
        <div className={styles.container9Child}>
          <div className={styles.frameParent1}>
            <div className={styles.quickMailWrapper}>
              <b className={styles.quickMail}>Quick Mail</b>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.certificateSafetyParent}>
                  <b
                    className={styles.certificateSafety}
                  >{`Certificate & Safety`}</b>
                  <div className={styles.policyWrapper}>
                    <b className={styles.policy}>Policy</b>
                  </div>
                </div>
                <div className={styles.button8}>
                  <div className={styles.yourEmailTo}>
                    Your email to get contact...
                  </div>
                </div>
              </div>
              <div className={styles.button11}>
                <div className={styles.submit}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent1;
