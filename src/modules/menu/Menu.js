import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import './Menu.css';

const dummyData = {
  Monday: {
    veg:{
    breakfast: 'Eggs and Toast',
    lunch: 'Chicken Salad',
    snacks: 'Fruit Bowl',
    dinner: 'Spaghetti Bolognese',
    },
    nonveg:{
    breakfast: 'Puttu and Kadala',
    lunch: 'Chor ',
    snacks: 'Fruit Bowl',
    dinner: 'Spaghetti Bolognese',
    }

    
  },
  Tuesday: {
    veg:{
    breakfast: 'Oatmeal with Berries',
    lunch: 'Vegetarian Wrap',
    snacks: 'Yogurt with Nuts',
    dinner: 'Grilled Salmon with Quinoa',
    },
    nonveg:{
      breakfast: 'Bread toast',
      lunch: 'Sandwich',
      snacks: 'Fruit Bowl',
      dinner: 'Spaghetti Bolognese',
      }
  },
  Wednesday: {
    veg:{
    breakfast: 'Pancakes with Maple Syrup',
    lunch: 'Caesar Salad',
    snacks: 'Cheese and Crackers',
    dinner: 'Vegetable Stir-Fry',
    },
    nonveg:{
      breakfast: 'Puttu and Kadala',
      lunch: 'Chor ',
      snacks: 'Fruit Bowl',
      dinner: 'Spaghetti Bolognese',
      }
  },
  Thursday: {
    veg:{
    breakfast: 'Smoothie Bowl',
    lunch: 'Turkey Sandwich',
    snacks: 'Hummus with Veggies',
    dinner: 'Baked Chicken with Rice',
    },
    nonveg:{
      breakfast: 'Puttu and Kadala',
      lunch: 'Chor ',
      snacks: 'Fruit Bowl',
      dinner: 'Spaghetti Bolognese',
      }
  },
  Friday: {
    veg:{
    breakfast: 'Bagel with Cream Cheese',
    lunch: 'Caprese Sandwich',
    snacks: 'Trail Mix',
    dinner: 'Shrimp Scampi',
    },
    nonveg:{
      breakfast: 'Puttu and Kadala',
      lunch: 'Chor ',
      snacks: 'Fruit Bowl',
      dinner: 'Spaghetti Bolognese',
      }
  },
  Saturday: {
    veg:{
    breakfast: 'Fruit Smoothie',
    lunch: 'Greek Salad',
    snacks: 'Popcorn',
    dinner: 'Steak with Mashed Potatoes',
    },
    nonveg:{
      breakfast: 'Puttu and Kadala',
      lunch: 'Chor ',
      snacks: 'Fruit Bowl',
      dinner: 'Spaghetti Bolognese',
      }
  },
  Sunday: {
    veg:{
    breakfast: 'Avocado Toast',
    lunch: 'Tomato Soup with Grilled Cheese',
    snacks: 'Chips and Salsa',
    dinner: 'Pasta Primavera',
    },
    nonveg:{
      breakfast: 'Puttu and Kadala',
      lunch: 'Chor ',
      snacks: 'Fruit Bowl',
      dinner: 'Spaghetti Bolognese',
      }
  },
};

const Menu = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className='menu'>
      <h1 className='header'>Menu for {selectedDay}</h1>
      <label className='day-select' htmlFor="daySelect">Select a day:</label>
      <select id="daySelect" value={selectedDay} onChange={handleDayChange}>
        {Object.keys(dummyData).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <Table striped bordered hover className='menutable'>
        <thead>
          <tr>
            <th></th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Snacks</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Veg</th>
            <td>{dummyData[selectedDay].veg.breakfast}</td>
            <td>{dummyData[selectedDay].veg.lunch}</td>
            <td>{dummyData[selectedDay].veg.snacks}</td>
            <td>{dummyData[selectedDay].veg.dinner}</td>  
          </tr>
          <tr>
            <th>Non Veg</th>
            <td>{dummyData[selectedDay].nonveg.breakfast}</td>
            <td>{dummyData[selectedDay].nonveg.lunch}</td>
            <td>{dummyData[selectedDay].nonveg.snacks}</td>
            <td>{dummyData[selectedDay].nonveg.dinner}</td>
          </tr>
        </tbody>
      </Table>
      <label className="menuPref" htmlFor="menuPref">Preferred menu:</label>

    </div>
  );
};

export default Menu;
