import "./App.css";

function Home() {
  return (
    <div className="Home">
      <div className="home-image-container">
        <img className="home-image" src="images/wheat-field.jpg" alt="image" />
        {/* <div className="image-text">Farm Jobs</div> */}
      </div>

      <div class="card text-center">
        <div className="home-cards">
          <div className="card-deck mt-3">
            <div className="card bg-light text-white">
              <img
                className="card-img"
                src="images/wheat.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <a
                  className="nav-link active"
                  aria-current="true"
                  href="./jobs"
                >
                  <h5 className="card-title-home">Job Board</h5>
                </a>
              </div>
            </div>
            <div className="card bg-dark text-white">
              <img
                className="card-img"
                src="images/grapes.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <a
                  className="nav-link active"
                  aria-current="true"
                  href="./contractors"
                >
                  <h5 className="card-title-home">Contractors</h5>
                </a>
              </div>
            </div>
            <div className="card bg-light text-white">
              <img
                className="card-img"
                src="images/tractor-green.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <a
                  className="nav-link active"
                  aria-current="true"
                  href="./leasing"
                >
                  <h5 className="card-title-home">Equipment For Lease</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form class="row mt-5 align-items-center">
        <div class="col-8 align-items-center">
          <label class="visually-hidden" for="inlineFormInputGroupUsername">
            <h3>Join Our Mailing List</h3>
          </label>
          <div class="input-group">
            <div class="input-group-text">@</div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Username"
            />
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="inlineFormSelectPref">
            We'll never share your email with anyone else.
          </label>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
