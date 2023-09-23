import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import DropdownButton from "react-bootstrap/DropdownButton"; // Import DropdownButton from react-bootstrap
import Dropdown from "react-bootstrap/Dropdown"; 
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
function AddGrocery() {
  // Define state variables to hold form input values
  const [groceryData, setGroceryData] = useState({
    category: "", // Initialize category to an empty string
    name: "",
    price: "",
    area: "",
    priceInQuintal: "",
    priceInKg: "",
    contactNumber: "",
  });

  // Function to handle form input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGroceryData({ ...groceryData, [name]: value });
  };

  // Function to handle form submission and store data in an array
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new grocery item object
    const newGroceryItem = {
      category: groceryData.category,
      name: groceryData.name,
      price: groceryData.price,
      area: groceryData.area,
      priceInQuintal: groceryData.priceInQuintal,
      priceInKg: groceryData.priceInKg,
      contactNumber: groceryData.contactNumber,
    };

    // You can now add newGroceryItem to an array or perform any other action with the data
    axios.post('https://groceryappapi-7024d460edd6.herokuapp.com/AddGrocery', newGroceryItem)
      .then(result => console.log(result))
      .catch(err => console.log(err));
    console.log(newGroceryItem);

    // Clear the form fields
    setGroceryData({
      category: "", // Reset category to an empty string
      name: "",
      price: "",
      area: "",
      priceInQuintal: "",
      priceInKg: "",
      contactNumber: "",
    });
  };

  const [dataCat, setDataCat] = useState([]);
  const navigate = useNavigate();
  // Function to handle category selection from the dropdown
  const handleCategorySelect = (category) => {
    setGroceryData({ ...groceryData, category }); // Update the category in groceryData state
  };

  useEffect(() => {
    axios.get('https://groceryappapi-7024d460edd6.herokuapp.com/getCategories').then((result) => {
      setDataCat(result.data);
    });
  }, []);
 const AddNewCat=()=>{
  navigate('/addCategory')
 }
  return (
    <div style={{ marginLeft: "100px", marginRight: "100px" }}>
      <Form onSubmit={handleSubmit}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <DropdownButton
          id="dropdown-basic-button"
          title="Category"
          onSelect={handleCategorySelect} // Add the onSelect event handler
        >
          {dataCat.map((item, index) => (
            <Dropdown.Item key={index} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
          
        </DropdownButton>
        <Button onClick={AddNewCat}>Add new Category</Button>
        </div>
        <Form.Control
            type="text"
            name="name"
            placeholder="Category"
            value={groceryData.category}
            
          />
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Grocery Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Grocery Name"
            value={groceryData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Grocery Price</Form.Label>
          <Form.Control type="text"
            name="price"
            
            value={groceryData.price}
            onChange={handleInputChange} placeholder=" Grocery Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Area</Form.Label>
          <Form.Control type="text" name="area"
            
            value={groceryData.area}
            onChange={handleInputChange}placeholder="Area" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price in quintal</Form.Label>
          <Form.Control type="text" name="priceInQuintal"
            
            value={groceryData.priceInQuintal}
            onChange={handleInputChange}placeholder=" Price in quintal" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price in Kg</Form.Label>
          <Form.Control type="text" name="priceInKg"
            
            value={groceryData.priceInKg}
            onChange={handleInputChange}placeholder="Price in Kg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" name="contactNumber"
            
            value={groceryData.contactNumber}
            onChange={handleInputChange}placeholder="Contact Number" />
        </Form.Group>
        <button type="submit">Add Grocery</button>
      </Form>
    </div>
  );
} 

export default AddGrocery;
