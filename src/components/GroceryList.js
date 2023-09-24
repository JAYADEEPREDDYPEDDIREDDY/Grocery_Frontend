import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';

function GroceryList() {
  const [data, setData] = useState([]);
  const [dataCat, setDataCat] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to fetch data based on the selected category
  const fetchDataByCategory = async (category) => {
    try {
      const response = await axios.get(`https://groceryappapi-7024d460edd6.herokuapp.com/getCategories/${category}`); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle dropdown selection change
  const handleCategoryChange = (category) => {
    // setSelectedCategory(category);
    fetchDataByCategory(category);
  };

  useEffect(() => {
    axios.get('https://groceryappapi-7024d460edd6.herokuapp.com/getCategories').then((result) => {
      setDataCat(result.data);
    });
  }, []);

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title="Category"
        onSelect={handleCategoryChange}
      >
        {dataCat.map((item, index) => (
          <Dropdown.Item key={index} eventKey={item}>
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Area</th>
            <th>Price per quintal</th>
            <th>Price per Kg</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.area}</td>
              <td>{item.priceInQuintal}</td>
              <td>{item.priceInKg}</td>
              <td>{item.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GroceryList;
