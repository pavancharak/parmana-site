import styles from "./Company.module.css";
import { FigureLabel } from "./FigureLabel";
import pavanPhoto from "../assets/pavan.jpg";
import mohinderPhoto from "../assets/mohinder.png";
import abhignaPhoto from "../assets/abhigna.jpg";

const TEAM = [
  { photo: pavanPhoto, name: "Pavan Dev Singh Charak", role: "CEO & System Architect" },
  { photo: mohinderPhoto, name: "Mohinder Singh Charak", role: "Co-founder & Policy Advisor" },
  { photo: abhignaPhoto, name: "K Venkata Abhigna", role: "Head of Partnerships" },
];

export function Company() {
  return (
    <section className={styles.section} id="company">
      <div className={styles.inner}>
        <FigureLabel n="07" title="Company" />

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              Parmana builds infrastructure for a world where AI agents can
              act directly on behalf of organizations. Our focus is not on
              making AI more capable, but on ensuring organizations retain
              deterministic authority over what AI is allowed to execute.
            </p>

            <p>
              We built Parmana around a simple principle: the organization
              should remain the final authority over execution. The AI may
              generate the action, but Parmana provides the control point that
              determines whether that action can become real.
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