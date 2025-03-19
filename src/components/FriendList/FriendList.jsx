import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map (({id, avatar, name, isOnline}) => (
                <li key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    )
}

export default FriendList;
