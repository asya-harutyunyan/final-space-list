import { FC, useContext } from "react";
import classes from "./index.module.css";
import { DataType } from "../../types";
import EpisodeCard from "../EpisodeCard";
import MyContext from "../../context";

type EpisodesFullListProps = {};

const EpisodesFullList: FC<EpisodesFullListProps> = () => {
  const { data } = useContext(MyContext);

  return (
    <div>
      <ul className={classes.episodes_list}>
        {data.map((user: DataType) => (
          <EpisodeCard key={user.id} item={user} id={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default EpisodesFullList;
