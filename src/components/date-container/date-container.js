import "./date-container.css";

function DataContainer(props) {
  return (
    <div className="due-date">
      <p className="dueDate">due Date</p>
      <p>{props.dueDate.toLocaleDateString()}</p>
    </div>
  );
}

export default DataContainer;
