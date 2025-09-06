import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] border-2 border-opacity-10 border-yellow-300`} id="Kontakt">
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} flex flex-col items-center justify-center md:text-[24px] xs:text-[18px] animate-pulse`}>🚦Hol dir deinen Führerschein!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       <span className="text-xl text-white font-semibold">Fahrschule <span className="text-yellow-500">Turbo</span></span> <br />
       Donaustraße 101 <br />
        12043 Berlin <br />
        Tel: 030 56821280 <br />
        E-Mail: Info@fahrschuleturbo.de
      </p>
    </div>
  </section>
);

export default CTA;
