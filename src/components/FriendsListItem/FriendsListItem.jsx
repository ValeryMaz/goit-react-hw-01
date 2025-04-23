export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="90" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
