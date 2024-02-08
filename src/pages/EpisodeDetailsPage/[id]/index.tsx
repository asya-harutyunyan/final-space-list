import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./index.module.css";
import { DataType } from "../../../types";
import { FaArrowRight } from "react-icons/fa";

type DetailsPageProps = {};

const DetailsPage: FC<DetailsPageProps> = () => {
  const params = useParams();

  const [episodeData, setEpisodeDate] = useState<DataType | any>({});

  useEffect(() => {
    fetch(`https://finalspaceapi.com/api/v0/episode/${params.id}`)
      .then((res) => res.json())
      .then((json) => setEpisodeDate(json))
      .catch((error) => console.log("Error fetching details, error", error));
  }, [params.id]);

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.link}>
        Go to episodes page <FaArrowRight />
      </Link>
      <p className={classes.name}>{episodeData.name}</p>
      <div className={classes.flex}>
        <div>
          <img
            src={episodeData.img_url}
            alt="Episode"
            width={500}
            height={400}
          />
        </div>
        <div>
          <p className={classes.text}>
            Release time- <span>{episodeData.air_date}</span>
          </p>
          <p className={classes.text}>
            {" "}
            Director- <span>{episodeData.director}</span>
          </p>
          <p className={classes.text}>
            Writer- <span>{episodeData.writer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
