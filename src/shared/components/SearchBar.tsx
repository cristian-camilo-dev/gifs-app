import style from "@/GifsApp.module.css";

interface SearchBarProps {
  type: string;
  placeholder: string;
  buttonText: string;
}

export const SearchBar = ({
  type,
  placeholder,
  buttonText,
}: SearchBarProps) => {
  return (
    <div className={style.searchContainer}>
      <input type={type} placeholder={placeholder} />
      <button>{buttonText}</button>
    </div>
  );
};
