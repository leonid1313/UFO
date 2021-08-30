// import React, { useState } from 'react'
// import './InputSubmit.css'

// function InputSubmit () {

//   const [value, setValue] = useState('');
//   const [valueDirty, setValueDirty] = useState(false);
//   const [valueError, setValueError] = useState('Cannot be empty');

//   const changeValue = (event) => {
//     setValue(event.target.value)
//   }

//   const filter = () => {
    
//   }

//   const submitValue = () => {
//     setValueDirty(false)
//   }

//   const blurHandler = (event) => {
//     switch(event.target.name) {
//       case 'search':
//         setValueDirty(true)
//         break
//     }
//   }

//     return (
//       <div>
//         <form
//             className="form-container"
//             onSubmit={(event) => event.preventDefault()}
//         >
//         {(valueDirty && valueError)
//           ? <div>{valueError}</div>
//           : <div className="default"></div>
          
//         }
//         <input
//           className="search"
//           name="search"
//           placeholder="Search Github Repositories"
//           type="text"
//           value={value}
//           onChange={event => changeValue(event)}
//           onBlur={event => blurHandler(event)}
//         />
//         <button 
//           className="button-input"
//           onClick={() => submitValue()}
//         >
//           Search
//         </button>
//         </form>
//       </div>
//     )
// }

// export default InputSubmit;


import React from "react";
import ReactDOM from "react-dom";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function App({
  items
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;