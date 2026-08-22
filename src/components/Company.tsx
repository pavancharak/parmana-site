import styles from "./Company.module.css";
import { FigureLabel } from "./FigureLabel";
import pavanPhoto from "../assets/pavan.jpg";
import mohinderPhoto from "../assets/mohinder.png";
import abhignaPhoto from "../assets/abhigna.jpg";

const TEAM = [
  {
    photo: pavanPhoto,
    name: "Pavan Dev Singh Charak",
    role: "CEO & System Architect",
  },
  {
    photo: mohinderPhoto,
    name: "Mohinder Singh Charak",
    role: "Co-founder & Policy Advisor",
  },
  {
    photo: abhignaPhoto,
    name: "K Venkata Abhigna",
    role: "Head of Partnerships",
  },
];

export function Company() {
  return (
    <section className={styles.section} id="company">
      <div className={styles.inner}>
        <FigureLabel n="07" title="About us" />

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              AI is moving from helping people to doing work on their
              behalf. We believe businesses should be able to embrace
              that change without giving up control.
            </p>

            <p>
              We are building Parmana for businesses that want to give
              AI more responsibility while keeping a clear say over
              what it can actually do.
            </p>
          </div>

          <div className={styles.team}>
            {TEAM.map((member) => (
              <div className={styles.member} key={member.name}>
                <img
                  className={styles.photo}
                  src={member.photo}
                  alt={member.name}
                />

                <span className={styles.name}>{member.name}</span>
                <span className={styles.role}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}