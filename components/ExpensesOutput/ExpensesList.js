import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    // return <Text>{itemData.item.description}</Text> //Tai sao lai co item vi no da duoc cho san bang FlatList
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({expenses}) {
    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
}
export default ExpensesList;