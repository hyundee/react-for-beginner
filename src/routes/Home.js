import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./Home.module.css";

const Home = () => {
  const [Loading, setLoading] = useState(true);
  const [Movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {Movies.map((movie) => (
            <MovieList
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
