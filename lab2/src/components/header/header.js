import { NavLink } from "react-router-dom";

let Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">React Lab</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><NavLink className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/"}>Home</NavLink></li>
                        <li class="nav-item"><NavLink end className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/profile"}>Profile</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/details/1111"}>User Details</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/error"}>Error</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;