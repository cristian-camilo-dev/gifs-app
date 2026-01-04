import style from "@/GifsApp.module.css";

interface PreviousSarchesProps {
  previousSearches: string[];
}

export const PreviousSarches = ({ previousSearches }: PreviousSarchesProps) => {
  return (
    <div className={style.previousSearches}>
      <h2>Busquedas Anteriores</h2>

      <ul className={style.previousSearchesList}>
        {previousSearches.map((search, index) => (
          <li key={index} className={style.previousSearchesItem}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
