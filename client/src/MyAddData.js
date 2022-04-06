import "./App.css";

function MyAddData(props) {
  let a = props.a;
  // let bus = props.businesses[0];
  return (
    <div className="MyAddData">
      <div className="card mb-3" key={a.id}>
        <div className="card-body">
          <h5 className="card-title">{a.adtitle}</h5>
          <hr></hr>
          <h6 className="card-subtitle mb-2">{a.joblocation}</h6>

          <h6 className="card-subtitle mb-2 text-muted">{a.adfield}</h6>

          <h6 className="card-subtitle mb-2 text-muted">
            Contract Length: {a.contractlength}
          </h6>
          <br></br>
          <h6 className="card-subtitle mb-2 text-muted">
            Ad Closing Date: {a.adclosingdate}
            <hr></hr>
          </h6>
          <br></br>
          <p className="card-text">{a.adinfo.substring(0, 100)}...</p>
          {/* <ModalDisplay a={props.a} businesses={props.businesses} /> */}
        </div>
      </div>
    </div>
  );
}

export default MyAddData;
