const CarDetailImages = ({ car }) => {
  return (
    <div className="car-detail__images">
      <div className="car-detail__images-left">
        <img src={car.image} alt={car.name} />
      </div>
      <div className="car-detail__images-right">
        <img src={car.image} alt={car.name} />
        <img src={car.image} alt={car.name} />
        <img src={car.image} alt={car.name} />
        <img src={car.image} alt={car.name} />
      </div>
    </div>
  );
};

export default CarDetailImages;