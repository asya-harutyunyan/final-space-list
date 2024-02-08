import React, { FC, useContext } from "react";
import EpisodeCard from "../EpisodeCard";
import { DataType } from "../../types";
import classes from "./index.module.css";
import MyContext from "../../context";

type FilteredListProps = {};

const FilteredList: FC<FilteredListProps> = () => {
  const { filteredEpisodes } = useContext(MyContext);
  return (
    <div>
      <ul className={classes.episodes_list}>
        {filteredEpisodes.map((user: DataType) => (
          <EpisodeCard key={user.id} item={user} id={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
