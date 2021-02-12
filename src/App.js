


import React, { Component ,useState} from 'react';

   function App ()
   {
      const [ my_name, changeMyName] = useState("Wisdom");
      const [ my_age, changeMyAge] = useState(24);

      const buttonClicked = () =>
      {
          changeMyName("Randhir")
          changeMyAge(22)
      }

        return(
          <div>
            <h1>Welcome {my_name}</h1>
            <h2>And My Age is {my_age}</h2>

            <button onClick={buttonClicked}> Change Name </button>
          </div>
        );
}

export default App;
