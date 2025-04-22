import userData from "../src/userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./FriendsList.json";
import FriendList from "./components/FriendsList/FriendsList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionsHistory/TransactionsHistory";

import "./App.css";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
