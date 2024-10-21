import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Step from "./steps/steps";
import "./application.scss";

const Application = () => {
  return (
    <>
      <Header />
      <div className="title">
        <h1 className="apply_title">Оставьте заявку об открытом люке</h1>
        <p className="apply_text">Всего 3 шага – заполнение займет пару минут!</p>
      </div>
      <Step />
      <Footer />
    </>
  );
};
export default Application;
