import { PreviousSarches } from "./gifs/components/PreviousSarches";
import style from "./GifsApp.module.css";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte los mejores gifs"
      />

      <SearchBar type="text" placeholder="Buscar gifs..." buttonText="Buscar" />
      <PreviousSarches previousSearches={["Gatos", "Perros", "Memes"]} />

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
