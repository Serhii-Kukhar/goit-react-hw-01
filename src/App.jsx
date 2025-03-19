import './App.css'
import userData from '../src/userData.json'
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
      <FriendList />
    </>
  );
};


export default App;