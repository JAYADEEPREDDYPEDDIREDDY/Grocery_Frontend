import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddGrocery from './AddGrocery';
import GroceryList from './GroceryList';
function FPO() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add FPO">
        <AddGrocery/>
      </Tab>
      <Tab eventKey="profile" title="FPO List">
        <GroceryList/>
      </Tab>
      
    </Tabs>
  );
}

export default FPO;