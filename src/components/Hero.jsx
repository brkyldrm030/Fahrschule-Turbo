import styles from "../style";
import { stern, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion"; // ⬅️ NEU

const Hero = () => {
  return (
    // ⬇️ motion.section statt section: sanftes Einblenden beim Scrollen
    <motion.section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ⬇️ Linke Spalte: leicht versetzt einblenden */}
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 animate-ping"></span>
          <p className={`${styles.paragraph} ml-2 md:text-[18px] xs:text-[12px]`}>
            <span className="text-white"></span>Freie{" "}
            <span className="text-white">Prüfungstermine</span><br />
            <span className="text-white">WhatsApp: 0176 20351162 </span> 
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
      </motion.div>

      {/* ⬇️ Rechte Spalte (Bild): leicht von unten + kleine Verzögerung */}
      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <img src={robot} alt="fahrschule" className="w-[100%] h-[100%] relative z-[5]" />
      </motion.div>

      {/* ⬇️ CTA unten: Fade */}
      <motion.div
        className={`ss:hidden ${styles.flexCenter}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <GetStarted />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
