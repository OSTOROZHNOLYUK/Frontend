import Button from "../Button/Button";
import style from "./MenuButton.module.scss"

export default function MenuButton({ name }) {
  return (
    <Button>
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className={style.rect} width="45" height="45" rx="22.5" fill="#F75307" />
        <mask
          id="mask0_1716_2776"
          maskUnits="userSpaceOnUse"
          x="7"
          y="7"
          width="31"
          height="31"
        >
          <rect x="7.5" y="7.5" width="30" height="30" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1716_2776)">
          <path
            d="M11.875 29.5433V27.6686H33.125V29.5433H11.875ZM11.875 23.4377V21.5627H33.125V23.4377H11.875ZM11.875 17.3317V15.457H33.125V17.3317H11.875Z"
            fill="#FCFBFA"
          />
        </g>
      </svg>
    </Button>
  );
}
