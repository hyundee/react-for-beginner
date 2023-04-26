import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

const Detail = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [Detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            coverImg={Detail.large_cover_image}
            title={Detail.title_long}
            year={Detail.year}
            rating={Detail.rating}
            download={Detail.download_count}
            desc={Detail.description_intro}
            genres={Detail.genres}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
