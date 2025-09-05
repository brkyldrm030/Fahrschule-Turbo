import { apple, roadmap, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={roadmap} alt="roadmap" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} xs:text-[24px]`}>
        Dein Weg zum Führerschein
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 xs:text-[14px] md:text-[16px] `}>
        In 5 einfachen Schritten von der Anmeldung bis zur praktischen Prüfung – schnell, strukturiert und erfolgreich mit der Fahrschule Turbo.
      </p>
    </div>
  </section>
);

export default Billing;
