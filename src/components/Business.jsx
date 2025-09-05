import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dein Weg zum Führerschein in Berlin-Neukölln
      </h2>
      <p className={`${styles.paragraph} max-w-full mt-5`}>
Die Fahrschule Turbo in Berlin-Neukölln (Donaustraße 101) begleitet dich zuverlässig 
auf deinem Weg zum Führerschein. Wir bieten Unterricht in Deutsch, Arabisch, Türkisch 
und Englisch, damit sich jeder bei uns wohlfühlt und optimal lernen kann. Unsere Fahrstunden 
sind flexibel planbar – perfekt, wenn du Ausbildung, Studium oder Job unter einen Hut bringen musst. Mit einer 
modernen Ausstattung und einem top Fuhrpark sorgen wir dafür, dass du praxisnah 
und komfortabel lernst. Und auch der Theorieunterricht macht bei uns Spaß – verständlich, 
interaktiv und abwechslungsreich gestaltet. Komm vorbei und überzeuge dich selbst – wir 
bringen dich sicher und erfolgreich ans Ziel!
      </p>
    </div>
  </section>
);

export default Business;
