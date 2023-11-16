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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr style={{ marginTop: '20px' }}></hr>
      <hr style={{ marginTop: '20px' }}></hr>
      <Statistics items={data} />
      <hr style={{ marginTop: '20px' }}></hr>
      <hr style={{ marginTop: '20px' }}></hr>
      <Friendlist friendlist={friendsData} />
      <hr style={{ marginTop: '20px' }}></hr>
      <hr style={{ marginTop: '20px' }}></hr>
      <Transactions items={transactions} />
      <hr style={{ marginTop: '20px' }}></hr>
      <hr style={{ marginTop: '20px' }}></hr>
    </>
  );
};
export default App;
