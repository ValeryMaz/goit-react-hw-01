import clsx from "clsx";
import css from "../FriendsList/FriendsList.module.css";

import FriendListItem from "../FriendsListItem/FriendsListItem";

export default function FriendList({ friends }) {
  return (
    <div className={clsx(css.containerList)}>
      <ul className={clsx(css.ul)}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={clsx(css.friendsListItem)}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
}
