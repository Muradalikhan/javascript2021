import "../../amazon.css";
import logo from "../../asset/img/logo.png";
function Navbar1() {
  return (
    <>
      <div className="container-fluid bg-dark text-white p-3 custom-class">
        <div className="row">
          <div className="col-md-1 col-sm-2">
            <img src={logo} width="120px" height="40px" alt="logo" />
          </div>
          <div className="col-md-1 col-sm-2">
            <span className="text-secondary small">Delivery</span> Pakistan
          </div>
          <div className="col-sm-6">
            <form class="container-fluid">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1">
                  <div className="dropdown">
                    <button className="dropbtn">
                      <span style={{ fontSize: "14px", color: "black" }}>
                        Beauty
                      </span>
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span class="input-group-text" id="basic-addon1">
                  Search
                </span>
              </div>
            </form>
          </div>
          <div className="col-md-1 col-sm-2">
            <div className="dropdown">
              <button className="dropbtn bg-dark">
                <span style={{ fontSize: "14px" }}> Drop down</span>
              </button>
              <div className="dropdown-content">
                <table>
                  <tr>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                    <td>
                      <a href="#">Link 1</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-2">
            <div className="dropdown">
              <button className="dropbtn bg-dark">
                <span style={{ fontSize: "14px" }}> Account and list</span>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-2">
            <div className="dropdown">
              <button className="dropbtn bg-dark">
                <span style={{ fontSize: "14px" }}> Account and list</span>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="col-1 col-sm-1"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
