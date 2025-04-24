import clsx from "clsx";
import css from "../FriendsListItem/FriendsListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={clsx(css.friendsListNames)}>{name}</p>
      <p className={clsx(css.isOnline, !isOnline && css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
