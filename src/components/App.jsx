//Component Import
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
//Data Import
import transactions from '../data/transactions.json'
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
//Style
import { GlobalStyle } from "../style/GlobalStyle";
import { Layaout } from "../style/Layout";
export const App = () => {
  return (
    <Layaout>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layaout>
  );
};