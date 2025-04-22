import clsx from "clsx";
import css from "../FriendsList/FriendsList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.containerList)}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={clsx(css.friendsListItem)}>
          <img src={avatar} alt="Avatar" width="90" />
          <p className={clsx(css.ul, css.friendsListNames)}>{name}</p>
          <p className={clsx(css.isOnline, !isOnline && css.isOffline)}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
}
