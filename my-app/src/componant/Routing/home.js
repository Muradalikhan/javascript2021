import { Link } from "react-router-dom";


function Home() {
 
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">SAervices</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/profile/123">Profile</Link>
        </li>
      </ul>

    
    </>
  );
}
export default Home;