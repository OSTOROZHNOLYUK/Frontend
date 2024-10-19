import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import steps from "./steps.png";
import Step from "./steps/steps";

const Application = () => {
  return (
    <>
      <Header />
      <h1 className="map_title">Оставьте заявку об открытом люке</h1>
      <p className="map_text"> Всего 3 шага – заполнение займет пару минут!</p>
      <img src={steps} alt="steps" width="100%" />
      <Step />
      <Footer />
    </>
  );
};
export default Application;
