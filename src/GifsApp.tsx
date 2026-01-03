import style from "./GifsApp.module.css";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader />
      {/*Search*/}
      <div className={style.searchContainer}>
        <input type="text" placeholder="Buscar Gifs" />
        <button>Buscar</button>
      </div>

      {/*Previous Searches*/}
      <div className={style.previousSearches}>
        <h2>Busquedas Anteriores</h2>
        <ul className={style.previousSearchesList}>
          <li>Gatos</li>
          <li>Perros</li>
          <li>Memes</li>
        </ul>
      </div>

      {/*Gifs*/}
      <div className={style.gifsContainer}>
        {mockGifs.map((gif) => (
          <div key={gif.id} className={style.gifCard}>
            <img
              src={gif.url}
              alt={gif.title}
              width={gif.width}
              height={gif.height}
            />
            <p>{gif.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
