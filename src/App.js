
import Expense from './component/Expense'
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      location: "Bangalore",
      amount: 94.12,
      date: new Date(2023, 10, 27),
    },
    {
      id: "e2",
      location: "Delhi",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      location: "Chennai",

      amount: 294.67,
      date: new Date(2021, 11, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      location: "Kerala",

      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        <Expense
          expenses={expenses} >
        </Expense >
      }
    </div>
  );
}

export default App;