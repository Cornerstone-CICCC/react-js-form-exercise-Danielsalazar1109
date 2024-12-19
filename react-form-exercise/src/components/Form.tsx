import React, { useState } from 'react';

interface FormProps {
  firstname: string;
  lastname: string;
  age: number | string;
  favoriteFoods: string[];
}

const App = () => {
  const [formData, setFormData] = useState<FormProps>({
    firstname: '',
    lastname: '',
    age: '',
    favoriteFoods: [],
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        favoriteFoods: checked
          ? [...prevState.favoriteFoods, value]
          : prevState.favoriteFoods.filter((food) => food !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleDisplayUser = () => {
    setIsSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      firstname: '',
      lastname: '',
      age: '',
      favoriteFoods: [],
    });
    setIsSubmitted(false);
  };

  return (
    <div>
      <h1>Let's fill out the information for our christmas dinner !!</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={formData.favoriteFoods.includes('Chicken')}
              onChange={handleChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={formData.favoriteFoods.includes('Beef')}
              onChange={handleChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              checked={formData.favoriteFoods.includes('Vegetables')}
              onChange={handleChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              checked={formData.favoriteFoods.includes('Dessert')}
              onChange={handleChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              checked={formData.favoriteFoods.includes('Pork')}
              onChange={handleChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button type="button" onClick={handleDisplayUser}>
        Display User
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>

      <div className="output">
        {isSubmitted ? (
          <p>
            Hello {formData.firstname} {formData.lastname}. You are{' '}
            {formData.age} years old and I will bring your favorite foods to the christmas eve:
            {formData.favoriteFoods.join(', ')}.
          </p>
        ) : (
          <p>Fill out the form and click "Display User" to see the result.</p>
        )}
      </div>
    </div>
  );
};

export default App;
