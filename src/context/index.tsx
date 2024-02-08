import { FC, createContext, useEffect, useState } from "react";
import { DataType, MyContextType } from "../types";

const MyContext = createContext<MyContextType | any>(null);

export const MyContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredEpisodes, setFilteredEpisodes] = useState<DataType[]>([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/episode/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);
  console.log(data);

  useEffect(() => {
    if (searchTerm !== "") {
      setFilteredEpisodes(
        data.filter((user) => user.name.includes(searchTerm))
      );
    }
  }, [data, searchTerm]);

  return (
    <MyContext.Provider
      value={{ data, setSearchTerm, searchTerm, filteredEpisodes }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
