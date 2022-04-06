import "./App.css";
import { Link } from "react-router-dom";

function MembersOnlyView(props) {
  return (
    <div className="MembersOnlyView">
      <div className="linkback">
        <h2>
          <Link to={`/businesses/9`}>Back to your profile</Link>
        </h2>
      </div>
      <h1>MembersOnlyView</h1>
    </div>
  );
}

export default MembersOnlyView;
