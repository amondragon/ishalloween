import { DateTime } from "luxon";
import "./App.css";

function App() {
  const currentDateTime = DateTime.local();
  const halloweenDay = DateTime.fromObject({ month: 10, day: 31 });
  const isHalloween =
    currentDateTime.hasSame(halloweenDay, "month") &&
    currentDateTime.hasSame(halloweenDay, "day");

  const daysUntilHalloween = Math.floor(
    halloweenDay.diff(currentDateTime, "days").days
  );

  return (
    <div className="body">
      <h1>Is today halloween? </h1>
      <h1>{isHalloween ? "YES!" : "NO"}</h1>
      <h1>{daysUntilHalloween} days until Halloween!</h1>
    </div>
  );
}

export default App;
