import styles from "../../styles/Home.module.css";

//sacar el ejemplo del corazon desde acá https://codepen.io/mapk/pen/ZOQqaQ
export const FavoriteCharacter = ({ checkCharacter, characterSelected }) => {
  let colorFill;
  /*uncheck color: ##6D696D - check color: #F837D8*/
  !characterSelected ? (colorFill = "#6D696D") : (colorFill = "#F837D8");
  return (
    <div className={styles.flexbox} onClick={checkCharacter}>
      <div className={styles.fav_btn}>
        <span
          className={
            styles.favme
          } /*{styles.dashicons} {styles.dashicons_heart}*/
        ></span>
      </div>
      <div>
        <button>
          <svg width="22px" height="22px" fill="none" viewBox="0 0 22 22">
            <path
              d="M6.5 2c1.86 0 3.505.923 4.5 2.337A5.5 5.5 0 0121 7.5c0 3.498-2.39 6.624-4.546 8.762a29.584 29.584 0 01-3.025 2.604c-.533.4-1.08.781-1.64 1.134h-1.561s-1.274-.81-1.638-1.07a26.864 26.864 0 01-3.036-2.525C3.38 14.295 1 11.172 1 7.5A5.5 5.5 0 016.5 2z"
              fill={colorFill}
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
