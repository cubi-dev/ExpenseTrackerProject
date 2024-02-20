import { createContext, useReducer } from "react";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "Mua quan ao",
//     amount: 59.99,
//     date: new Date("2024-2-8"),
//   },
//   {
//     id: "e2",
//     description: "Tra tien dien",
//     amount: 89.29,
//     date: new Date("2024-2-9"),
//   },
//   {
//     id: "e3",
//     description: "Tra tien nuoc",
//     amount: 5.99,
//     date: new Date("2024-2-10"),
//   },
//   {
//     id: "e4",
//     description: "Mua tui xach cho vo",
//     amount: 14.99,
//     date: new Date("2024-2-11"),
//   },
//   {
//     id: "e5",
//     description: "Mua tui xach CK cho vo",
//     amount: 18.59,
//     date: new Date("2022-02-18"),
//   },
//   {
//     id: "e6",
//     description: "Tra tien dien",
//     amount: 89.29,
//     date: new Date("2022-01-05"),
//   },
//   {
//     id: "e7",
//     description: "Tra tien nuoc",
//     amount: 5.99,
//     date: new Date("2021-12-01"),
//   },
//   {
//     id: "e8",
//     description: "Mua tui xach cho vo",
//     amount: 14.99,
//     date: new Date("2022-02-19"),
//   },
//   {
//     id: "e9",
//     description: "Mua tui xach CK cho vo",
//     amount: 18.59,
//     date: new Date("2022-02-18"),
//   },
// ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();

      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatetableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updatetableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
