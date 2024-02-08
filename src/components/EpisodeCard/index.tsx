import { FC } from "react";
import classes from "./index.module.css";
import { DataType } from "../../types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

type EpisodeCardProps = {
  item: DataType;
  id: number;
};

const EpisodeCard: FC<EpisodeCardProps> = ({ item, id }) => {
  return (
    <>
      <li className={classes.episode}>
        <p className={classes.text}>{item.name}</p>
        <img src={item.img_url} alt="Episode" width={320} height={220} />
        <p className={classes.text}>{item.air_date}</p>
        <Link to={`/details/${id}`} className={classes.link}>
          See details <FaArrowRight />
        </Link>
      </li>
    </>
  );
};

export default EpisodeCard;
