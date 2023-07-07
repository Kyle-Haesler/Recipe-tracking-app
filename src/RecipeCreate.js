import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // create initial form state as object
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  // create formData for entire form
  const [formData, setFormData] = useState({ ...initialFormState });
  // create change handler
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  // handle submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                onChange={handleChange}
                value={formData.ingredients}
                name="ingredients"
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                onChange={handleChange}
                value={formData.preparation}
                name="preparation"
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
