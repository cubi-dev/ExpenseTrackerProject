import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

// Create Dummy Data
// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     description: 'Mua quan ao',
//     amount: 59.99,
//     date: new Date('2021-12-19'),
//   },
//   {
//     id: 'e2',
//     description: 'Tra tien dien',
//     amount: 89.29,
//     date: new Date('2022-01-05'),
//   },
//   {
//     id: 'e3',
//     description: 'Tra tien nuoc',
//     amount: 5.99,
//     date: new Date('2021-12-01'),
//   },
//   {
//     id: 'e4',
//     description: 'Mua tui xach cho vo',
//     amount: 14.99,
//     date: new Date('2022-02-19'),
//   },
//   {
//     id: 'e5',
//     description: 'Mua tui xach CK cho vo',
//     amount: 18.59,
//     date: new Date('2022-02-18'),
//   },
//   {
//     id: 'e6',
//     description: 'Tra tien dien',
//     amount: 89.29,
//     date: new Date('2022-01-05'),
//   },
//   {
//     id: 'e7',
//     description: 'Tra tien nuoc',
//     amount: 5.99,
//     date: new Date('2021-12-01'),
//   },
//   {
//     id: 'e8',
//     description: 'Mua tui xach cho vo',
//     amount: 14.99,
//     date: new Date('2022-02-19'),
//   },
//   {
//     id: 'e9',
//     description: 'Mua tui xach CK cho vo',
//     amount: 18.59,
//     date: new Date('2022-02-18'),
//   },
// ];

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;
  //Kiem tra xem co du lieu hay khong de hien thi
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
