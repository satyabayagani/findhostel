import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
//useState for state management
  const [data, setData] = useState([]);
  const [srch, setSrch] = useState([]);
  const [ind , setVal]=useState();
//Initialisng data
  useEffect(() => {
    axios
      .get("http://localhost:3200/hostels")
      .then((hData) => {
        setData(hData.data);
        setSrch(hData.data);
      })
      .catch((err) => console.log("error in retrieving data"));
  }, []);
//Search fuctionality
  const searc = () => {
    let inp = document.getElementById("inp").value;
    let x = data.filter((obj) =>
    obj.Name.toLowerCase().indexOf(inp.toLowerCase()) !== -1 ? obj : undefined
    );
    if (x.length !== 0) setSrch(x);
    else setSrch(data);
  };

  const indVal = (val)=>{
    setVal(val)
  };

  const confirmBook = (index) => {
    let copy = [...data];
    copy[index]["change"] = !copy[index]["change"];
    setData(copy);
    setSrch(copy);
    axios.put(`http://localhost:3200/hostels/${index+1}/`,copy[index])
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

    
  };
  return (
    <div>
    {/* search bar */}
      <div className="text-center">
        <p className="display-4">Explore hostels in your locality to stay</p>
        <div className="input-group text-center w-25 mx-auto">
          <span className="input-group-text bg-white" id="basic-addon1">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            id="inp"
            className="form-control d-inline border-0"
            onChange={() => searc()}
            placeholder="Search..."
          />
        </div>
      </div>
    {/* display hostels  */}
      <div className="hstl">
        {srch.map((obj, index) => (
          <div key={index} className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={obj.image}
                  className="img-fluid rounded-start"
                  alt="Unavailable"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{obj.Name}</h5>
                  <p className="card-text">Address: {obj.Address}</p>
                  <p className="card-text">Rent: {obj.Rent}</p>
                  <p className="card-text">Rating : {obj.rating}/5 </p>
                  <p className="card-text">Contact : {obj.Contact} </p>
                  {!data[index]["change"] && (
                    <button
                    className="btn btn-success float-end bt"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() => indVal(index)}
                  >
                    Book
                  </button>
                  )}
                  {data[index]["change"] && (
                    <button className="btn btn-secondary float-end bt" disabled>
                      Booked
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    {/* modal to confirmBooking */}
      <div
        className="modal fade"
        id="exampleModal1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Confirm Booking
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img className="w-100" src="https://www.hotel-board.com/picture/scool-hostel-bordeaux-centre-hotel-10156030.jpg" alt="Unavailable" />
              <p>We provide the following services:</p>
              <ul>
                <li>Comfortable and inviting common areas</li>
                <li>Plenty of clean, functional bathrooms, Laundry facilities or service</li>
                <li>Free Wi-Fi and breakfast</li>
                <li>Hostel events and activities</li>
                <li>Pool</li>

              </ul>
              For any queries, please contact through given details.
              {<button
                      className="btn btn-success ms-auto d-block mt-4"
                      onClick={() => confirmBook(ind)}
                      data-bs-dismiss="modal"
                    >
                      Book
                    </button>}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
