import styles from "../style";
import { stern, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={stern} alt="stern" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 md:text-[18px] xs:text-[12px]`}>
            <span className="text-white"></span>Keine Wartezeiten auf{" "}
            <span className="text-white">Prüfungstermine</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] xs:text-[45px] xs:mt-10">
            Fahrschule{" "}
            <span className="text-gradient">Turbo</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className="font-poppins font-semibold ss:text-[30px] text-[52px] ss:mt-[-40px] xs:mt-[-10px] text-white ss:leading-[100.8px] leading-[75px] w-full xs:text-[25px]">
          Berlin Donaustraße
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 xs:mt-4  xs:text-[14px] md:text-[24px] sm:text-[24px] `}>
        Unser Team begleitet dich mit Erfahrung und einer bewährten 
        Lernmethodik auf deinem Weg zum Führerschein. Dabei gehen wir 
        individuell auf deine Stärken ein und unterstützen dich Schritt 
        für Schritt – von der ersten Fahrstunde bis zur erfolgreichen Prüfung.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="fahrschule" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
