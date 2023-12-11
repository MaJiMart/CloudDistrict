import { Link } from "react-router-dom";


export const Item = ({ id, first_name, avatar}) => {
  return (
    <div key={id} className="cards">
      <img src={avatar} className="cardPic" alt="imagen golosina card" />
      <h3>{first_name}</h3>
      <div className="card-footer">
        <Link to={`/detalle/${id}`}>
          <button className="btnDetalle">Detail</button>
        </Link>
      </div>
    </div>
  );
};