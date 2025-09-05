import { apple, roadmap, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={roadmap} alt="roadmap" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dein Weg zum Führerschein
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In 5 einfachen Schritten von der Anmeldung bis zur praktischen Prüfung – schnell, strukturiert und erfolgreich mit der Fahrschule Turbo.
      </p>
    </div>
  </section>
);

export default Billing;
