import style from "@/GifsApp.module.css";

interface CustomHeaderProps {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: CustomHeaderProps) => {
  return (
    <div className={style.contentCenter}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
