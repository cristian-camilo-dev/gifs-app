import { GifList } from "./gifs/components/GifList";
import { PreviousSarches } from "./gifs/components/PreviousSarches";
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
      <GifList gifs={mockGifs} />
    </>
  );
};
