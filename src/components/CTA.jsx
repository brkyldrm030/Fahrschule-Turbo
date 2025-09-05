import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} id="Kontakt">
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} flex flex-col items-center justify-center`}>🚦Hol dir deinen Führerschein!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       <span className="text-xl text-white font-semibold">Fahrschule Turbo</span> <br />
       Donaustraße 101 <br />
        12043 Berlin <br />
        Tel: 030 56821280 <br />
        E-Mail:
      </p>
    </div>
  </section>
);

export default CTA;
