import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovieDetail = async () => {
    const jsonData = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // 사용하기 편하게 여기까지 넣음.
    setDetail(jsonData.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <div>
            <div>
              <img src={detail.medium_cover_image} alt="a" />
            </div>
            <div>
              <h3>{detail.description_intro}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
