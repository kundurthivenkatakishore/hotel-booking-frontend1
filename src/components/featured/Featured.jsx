import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-booking.herokuapp.com/api/hotels/countByCity?cities=Hyderabad,Bangalore,Mumbai"
  );

  

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A_typical_charminar_evening.jpg/680px-A_typical_charminar_evening.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/photos/bangalore-or-bengaluru-picture-id1382384282?b=1&k=20&m=1382384282&s=170667a&w=0&h=hsjsp5jAfD24ucu_BZXw4Oy-K0Eg717xMg0Bl25UW7o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
