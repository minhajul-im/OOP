import { useEffect } from "react";

export default function MovieHeader({ movieId }) {
  useEffect(() => {
    getFetchTrilar(movieId);
  }, []);
  const getFetchTrilar = async (id) => {
    try {
      const response = await fetch(`
      https://api.themoviedb.org/3/movie/${id}/videos`);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movieId);
  return <div>hellolsdjflksdjflkdsfjksdjf</div>;
}
