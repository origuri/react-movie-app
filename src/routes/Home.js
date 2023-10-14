import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  // loading 스크린
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async는 Promise 객체를 반환 받는거 아닌가?
  // fetch는 Promise 객체를 리턴하고 이 Promise 객체가 Response 객체를 리턴하는 구조임.
  const getMovies = async () => {
    // await로 두번 감싼 형태로 안에 fetch를 먼저 실행하고 그 뒤에 json() 메소드 실행
    const jsonData = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    // 이건 api 데이터 구조가 이렇게 되어 있어서 복잡해보이는 것.
    setMovies(jsonData.data.movies);
    setLoading(false);
  };

  // 첫 렌더링 시에 getMovies 함수만 호출해주면 됨.
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie, index) => (
            <Movie
              key={index}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
