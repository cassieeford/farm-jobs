import "./App.css";
// import ModalDisplay from "./Modal";

function CompanyPopUp(props) {
  let a = props.a;
  // let bus = props.businesses[0];
  let bid = a.businessesId;
  // console.log("bus", props.businesses);
  let companies = props.businesses.find((comp) => comp.id === bid);
  console.log("companies", companies);

  return (
    <div className="CompanyPopUp">
      <div className="card mb-3" key={a.id}>
        <div className="card-body">
          <h5 className="card-title">{a.adtitle}</h5>
          <hr></hr>
          {/* <h6 className="card-subtitle mb-2">{a.joblocation}</h6> */}

          <h6 className="card-subtitle mb-2 text-muted">{a.adfield}</h6>

          <h6 className="card-subtitle mb-2 text-muted">
            Contract Length: {a.contractlength}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Ad Closing Date: {a.adclosingdate}{" "}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Contract Start Date: {a.contractstartdate}{" "}
          </h6>
          <hr></hr>
          <br></br>
          <p className="card-text">{a.adinfo}</p>
          <hr></hr>
          <h6 className="card-subtitle mb-2 text-muted">
            Company: {companies.name}{" "}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Contact Name: {companies.contactname}{" "}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Contract Number: {companies.contactnum}{" "}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Contact Email: {companies.contactemail}{" "}
          </h6>
          {/* <ModalDisplay a={props.a} businesses={props.businesses} /> */}
        </div>
      </div>
    </div>
  );
}

export default CompanyPopUp;
