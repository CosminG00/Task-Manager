import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-3",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2022, 6, 13),
    },
  ];
  return (
    <div className="app-container">
      {data.map((item) => (
        <TaskCard
          name={item.name}
          id={item.id}
          status={item.status}
          dueDate={item.dueDate}
        />
      ))}
      {/* <TaskCard name={data[2].name} id={data[2].id} status={data[2].status} />
      <TaskCard name={data[2].name} id={data[2].id} status={data[2].status} />
      <TaskCard name={data[2].name} id={data[2].id} status={data[2].status} /> */}
    </div>
  );
}

export default App;
