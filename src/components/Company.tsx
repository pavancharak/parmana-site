import styles from "./Company.module.css";
import { FigureLabel } from "./FigureLabel";
import pavanPhoto from "../assets/pavan.jpg";
import mohinderPhoto from "../assets/mohinder.png";
import abhignaPhoto from "../assets/abhigna.jpg";

const TEAM = [
  { photo: pavanPhoto, name: "Pavan", role: "CEO & System Architect" },
  { photo: mohinderPhoto, name: "Mohinder Singh Charak", role: "Co-founder & Policy Advisor" },
  { photo: abhignaPhoto, name: "Venkata Abhigna", role: "Head of Partnerships" },
];

export function Company() {
  return (
    <section className={styles.section} id="company">
      <div className={styles.inner}>
        <FigureLabel n="07" title="Company" />
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              Parmana is built by people who've spent their careers building the products companies run
              on, and watching what happens when access and authorization aren't designed carefully. We
              kept watching businesses find out what went wrong only after it had already happened, and
              decided that was backwards.
            </p>
            <p>
              We exist to build the checkpoint instead, infrastructure that keeps working no matter
              what's asking to act, or how capable it gets. A person, a program, or something newer than
              either. The gate holds either way.
            </p>
          </div>
          <div className={styles.team}>
            {TEAM.map((member) => (
              <div className={styles.member} key={member.name}>
                <img className={styles.photo} src={member.photo} alt={member.name} />
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
