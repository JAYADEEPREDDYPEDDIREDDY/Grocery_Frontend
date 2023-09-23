import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddGrocery from './AddGrocery';
import GroceryList from './GroceryList';
function Grocery() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add Grocery">
        <AddGrocery/>
      </Tab>
      <Tab eventKey="profile" title="Grocery List">
        <GroceryList/>
      </Tab>
      
    </Tabs>
  );
}

export default Grocery;