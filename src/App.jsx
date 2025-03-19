import './App.css'
import userData from '../src/userData.json'
import friends from '../src/friends.json'
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};


export default App;