import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchMoviesApi } from "../features/createMoviesSlice";
import TMDB_API from "../utilities/constant/movieServices";
import { fetchTrailerApi } from "../features/createMovieTrailer";

export default function Browse() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { movies } = useSelector((store) => store.movie);
  const { trailer } = useSelector((store) => store.trailer);

  useEffect(() => {
    dispatch(fetchMoviesApi());
    dispatch(fetchTrailerApi(466420));
  }, [dispatch]);

  return (
    <div className=" text-center">
      <h1>Hey there this is minhaj!</h1>
    </div>
  );
}
