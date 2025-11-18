import { Link } from "react-router";

export default function Lobby() {
  return (
    <>
      <div>Lobby</div>
      <Link to="/party/travel">Travel</Link>
      <Link to="/party/porn">Porn</Link>
      <Link to="/party/car">Car</Link>
    </>
  );
}
