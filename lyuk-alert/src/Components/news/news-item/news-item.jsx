import style from "./news-item.module.scss";

export default function NewsItem({src, title, time}) {
  return (
    <a href="#" className={style.item}>
      <img src={src} />
      <div>
        <h4>{title}</h4>
        <span>Новость обновлена {time} назад</span>
      </div>
    </a>
  );
}
