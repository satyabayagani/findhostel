const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_1344/v1584015222/Website/CMS-Uploads/y19psopwedii5fn8azni.jpg"
              className="d-block w-100"
              alt="Unavailable"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_1344/v1580397952/Website/CMS-Uploads/ny7dpkkafzja2umejthb.jpg"
              className="d-block w-100"
              alt="Unavailable"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1633501345/Website/CMS-Uploads/pzobhtpub64yanffhtng.jpg"
              className="d-block w-100"
              alt="Unavailable"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1633501377/Website/CMS-Uploads/l9f3vgpspy3yqg437yjx.jpg"
              className="d-block w-100"
              alt="Unavailable"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="intro mt-4">
        <p className="display-4 ms-4 my-auto">
          The Art of Meeting Your <br />
          Highest Expectations
        </p>
        <img
          src="https://discovertemplate.com/wp-content/uploads/2020/09/Hospitality-Services-Animated-GIF-Icon-pack.gif"
          alt=""
        />
      </div>
      <div className="intro">
        <img
          src="https://cdn.dribbble.com/users/1144645/screenshots/4004782/hotel.gif"
          alt=""
        />
        <p className="display-4 ms-4 my-auto">
          What are you waiting for? <br />
          Lets search a home away <br /> from home
        </p>
        {/* <button className="display-4 bg-transparent inbtn" onClick={changePage}>search</button> */}
      </div>
    </div>
  );
};

export default Home;
