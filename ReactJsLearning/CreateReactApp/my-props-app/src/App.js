import './App.css';
import React from 'react';
import ClassProps from './ClassProps';
import FunctionalProps from './FunctionalProps';

function App() {
  return (
    <div>
      <ClassProps name="Joel" place="Karunya"><p>This is child</p></ClassProps>
      <ClassProps name="Jackson" place="Chennai" />
      <FunctionalProps name="Jovita" place="Dindigul" />
    </div>
  );
}

export default App;
