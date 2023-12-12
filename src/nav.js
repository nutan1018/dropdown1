import {Dropdown} from "react-bootstrap";

const MyHeader = () =>{



  
  return(
    <div>
    <header className="bg">
        <div className="d-flex flex-row">
        <h5 className="m-3 p1"><i className="bi bi-basket3-fill"></i> Shopping Shala</h5>
     
        <ul className="nolist d-flex flex-row gap-4 mt-3 font">
            <li>

              <Dropdown>
                <Dropdown.Toggle className="nodesign" id="dropdown-basic">
                  Electronics
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-menu">
                  <Dropdown.Item href="Action">Televisions</Dropdown.Item>
                  <Dropdown.Item href="Action">Washing Machines</Dropdown.Item>
                  <Dropdown.Item href="Action">Laptops</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </li>
              <li>
              <Dropdown>
                <Dropdown.Toggle className="nodesign" id="dropdown-basic">
                Kitchen Utensils
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-menu">
                  <Dropdown.Item href="Action">Crockery</Dropdown.Item>
                  <Dropdown.Item href="Action">Dishes</Dropdown.Item>
                  <Dropdown.Item href="Action">Bowls</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </li>
              <li>
              <Dropdown>
                <Dropdown.Toggle className="nodesign" id="dropdown-basic">
                Groceries
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-menu">
                  <Dropdown.Item href="Action">Bakery Products</Dropdown.Item>
                  <Dropdown.Item href="Action">Vegitables</Dropdown.Item>
                  <Dropdown.Item href="Action">Fruits</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </li>
              <li>
              <Dropdown>
                <Dropdown.Toggle className="nodesign" id="dropdown-basic">
                Fashion
                </Dropdown.Toggle>
                <Dropdown.Menu className="sub-menu">
                  <Dropdown.Item href="Action">Woman Fashion</Dropdown.Item>
                  <Dropdown.Item href="Action">Men Fashion</Dropdown.Item>
                  <Dropdown.Item href="Action">Kids Fashion</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </li>
            {/* <div className="dropdown" >
                <button  onClick={myFunction()} className="dropbtn">Electronics
                </button>
                <div id="myDropdown" className="dropdown-content">

                  <a href="#">Action</a>
                  <a href="#">Another action</a>
                  <a href="#">Something else here</a>

                </div>             
            </div> */}
            
            

             </ul>

            
        </div>
    </header>
    </div>
  )
}

export default MyHeader;