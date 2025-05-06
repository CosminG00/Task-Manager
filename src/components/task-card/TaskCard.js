import "./task-card.css";
import Badge from "../badge/badge";
import DataContainer from "../date-container/date-container";

function TaskCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="content">
        <p>{props.name}</p>
      </div>
      <div className="footer">
        <DataContainer dueDate={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
