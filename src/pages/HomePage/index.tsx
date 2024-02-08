import { FC, useContext } from "react";
import MyContext from "../../context";
import classes from "./index.module.css";
import FilteredList from "../../components/FilteredEpisodesList";
import EpisodesFullList from "../../components/EpisodesFullList";

type EpisodesListProps = {};

const EpisodesList: FC<EpisodesListProps> = () => {
  const { searchTerm, setSearchTerm } = useContext(MyContext);

  return (
    <div className={classes.container}>
      <h1>Final Space episodes list</h1>
      <div className={classes.input_container}>
        <label>Search episode by name</label>
        <input
          placeholder="Search episode"
          className={classes.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {searchTerm !== "" ? <FilteredList /> : <EpisodesFullList />}
    </div>
  );
};

export default EpisodesList;
