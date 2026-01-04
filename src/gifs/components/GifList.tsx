import style from "@/GifsApp.module.css";
import type { Gif } from "@/mock-data/gifs.mock";

interface GifListProps {
  gifs: Gif[];
}

export const GifList = ({ gifs }: GifListProps) => {
  return (
    <div className={style.gifsContainer}>
      {gifs.map((gif) => (
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
  );
};
