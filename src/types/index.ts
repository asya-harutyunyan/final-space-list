export type DataType = {
  id: number;
  name: string;
  air_date: string;
  director: string;
  writer: string;
  characters: string[];
  img_url: string;
};

export type MyContextType = {
  data: DataType[];
  setSearchTerm: () => void;
  filteredEpisodes: DataType[];
  searchTerm: string;
};
