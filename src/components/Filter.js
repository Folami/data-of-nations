import React  from 'react';

const Filter = (props) => {
    return (
      <form onSubmit={props.handleData} >
        <div>
           Find a country : <input value={props.filter} onChange={props.handleFilter} />
        </div>
        <div>
          <button type="submit">Display Filtered</button>
        </div>
      </form>
    );
  };
  
  export default Filter;