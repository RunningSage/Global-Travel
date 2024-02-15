import React from 'react';
import Button1 from './Button1';
function FormField() {

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const fieldsToValidate = ['keywords', 'category-1', 'category-2', 'minPrice', 'maxPrice', 'duration', 'date'];
  
    for (const fieldName of fieldsToValidate) {
      const value = formData.get(fieldName).trim();
      if (!value) {
        alert(`Please fill in the ${fieldName} field.`);
        return;
      }
    }
  
    const output = Array.from(formData.entries())
      .map(([name, value]) => `${name}: ${value}`)
      .join('\n');
    alert(output);
  };

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <h3>Find Your Tour</h3>
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <label>Keywords</label>
              <input className="form-control" placeholder="Keywords" type="text" name="keywords" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <label>Category</label>
              <select className="form-control" name="category-1">
                <option>Any</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <select className="form-control" name="category-2">
                <option>Any</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <label>Min Price</label>
              <input className="form-control" placeholder="0" type="number" name="minPrice" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <label>Duration</label>
              <input className="form-control" placeholder="0" type="number" name="duration"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <label>Date</label>
              <input className="form-control" placeholder="" type="date" name="date" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <label>Max Price</label>
              <input className="form-control" placeholder="0" type="number" name="maxPrice" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
          <button type="submit"><a>Submit</a></button>
        </div>
    
      </div>
    </form>
  );
}

export default FormField;
