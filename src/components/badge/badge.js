import "./badge.css";

function Badge(props) {
  return (
    <div className="badge">
      <p className="status">{props.status}</p>
    </div>
  );
}

export default Badge;
