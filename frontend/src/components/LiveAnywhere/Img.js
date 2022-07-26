export const Img = ({loc, name, rating, type, color, price}) => {
    return (
      <div className="container" style={{margin: '20px'}}>
        <img src={loc} alt="" className="img" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-right-circle-fill icon"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
        <div className="detail">
          <div className="name">
            {name}
          </div>
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill star-icon" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            {rating}
          </div>
          <div className="type">
            {type}
          </div>
          <div className="color">
            {color}
          </div>
          <div className="price">
            <b className="price_val">{price}</b>
            per day
          </div>
        </div>
      </div>
    );
};