import clsx from "clsx";
import css from "../Profile/Profile.module.css";
export default function Profile({ username, tag, avatar, location, stats }) {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.containerOne)}>
        <img src={avatar} alt="User avatar" className={clsx(css.img)} />
        <p className={clsx(css.userName)}>{username}</p>
        <p className={clsx(css.userTag)}>@{tag}</p>
        <p className={clsx(css.userLocation)}>{location}</p>
      </div>

      <ul className={clsx(css.ul, css.userList)}>
        <li className={clsx(css.userListItem)}>
          <span className={clsx(css.listText)}>Followers</span>
          <span className={clsx(css.listText)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.userListItem)}>
          <span className={clsx(css.listText)}>Views</span>
          <span className={clsx(css.listText)}>{stats.views}</span>
        </li>
        <li className={clsx(css.userListItem)}>
          <span className={clsx(css.listText)}>Likes</span>
          <span className={clsx(css.listText)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
