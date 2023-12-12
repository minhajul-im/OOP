import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchMoviesApi } from "../features/createMoviesSlice";
import MovieHeader from "../components/moviesRelated/MovieHeader";

export default function Browse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies } = useSelector((store) => store.movie);

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, [dispatch]);

  const { id } = movies?.results[0];
  // console.log(movies?.results);

  return (
    <div className=" text-center">
      <MovieHeader movieId={id} />
      <h1>Hey there this is minhaj!</h1>
    </div>
  );
}
