import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainimg from "./images/news-main.png";
import item1 from "./images/item1.png";
import item2 from "./images/item2.png";
import item3 from "./images/item3.png";
import item4 from "./images/item4.png";
import item5 from "./images/item5.png";
import item6 from "./images/item6.png";

import NewsItem from "./news-item/news-item";
import style from "./news.module.scss";

export default function News() {
  return (
    <>
      <Header />
      <div className={style.news + " " + "container"}>
        <div className={style.header}>
          <h2>Новости</h2>
          <span>18.10.2024</span>
        </div>
        <img className={style.newsmain} src={mainimg} alt="main" />
        <div>
          <div className={style.mainheader}>
            <h3>Опасность открытых люков</h3>
            <span>Новость обновлена 1 час назад</span>
          </div>
        </div>
        <NewsItem
          src={item1}
          title={"Предупреждён — значит вооружён"}
          time={"2 часа"}
        />
        <NewsItem
          src={item2}
          title={"Заменили на новые крышки люков"}
          time={"2 часа"}
        />
        <NewsItem
          src={item3}
          title={"Что делать если увидели люк?"}
          time={"3 часа"}
        />
        <NewsItem
          src={item4}
          title={"Обнаружили новый люк"}
          time={"4 часа"}
        />
        <NewsItem
          src={item5}
          title={"Проблема остается открытой"}
          time={"5 часов"}
        />
        <NewsItem
          src={item6}
          title={"Елe живой, никого не волнует"}
          time={"5 часов"}
        />
      </div>
      <Footer />
    </>
  );
}
