import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchMoviesApi } from "../features/createMoviesSlice";

export default function Browse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies } = useSelector((store) => store.movie);

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, [dispatch]);

  // console.log(movies?.results);

  return (
    <div className=" text-center">
      <h1>Hey there this is minhaj!</h1>
    </div>
  );
}
