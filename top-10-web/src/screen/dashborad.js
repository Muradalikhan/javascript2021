import { Link } from "react-router-dom";


function Dashboard() {

    return (
        <>
            <ul>
                <li><Link to='/amazon'>Amazon</Link></li>
                <li> <Link to='/argos'>Argos</Link></li>


            </ul>
        </>
    )
}

export default Dashboard