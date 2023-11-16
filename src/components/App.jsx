import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import friendsData from '../data/friends.json';
import transactions from '../data/transactions.json';
import Friendlist from './Friendlist/Friendlist';
import Transactions from './Transactions/Transactions';

const App = () => {
  return (
    <>
      <hr style={{ marginTop: '20px' }}></hr>
      <h1>TASK 1 - Profile</h1>
      <hr style={{ marginTop: '20px' }}></hr>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr style={{ marginTop: '20px' }}></hr>
      <h1>TASK 2 - Statistics</h1>
      <hr style={{ marginTop: '20px' }}></hr>
      <Statistics items={data} />
      <hr style={{ marginTop: '20px' }}></hr>
      <h1>TASK 3 - Friendlist</h1>
      <hr style={{ marginTop: '20px' }}></hr>
      <Friendlist friendlist={friendsData} />
      <hr style={{ marginTop: '20px' }}></hr>
      <h1>TASK 4 - Transactions History</h1>
      <hr style={{ marginTop: '20px' }}></hr>
      <Transactions items={transactions} />
    </>
  );
};
export default App;
