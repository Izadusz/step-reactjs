import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Aplikacja licznika ReactJs</h1>
      </header>
      <Counter initValue={0}
        initStepValue={1}
      />

    </div>
  );
}

export default App;




// import './App.css';
// import Counter from './Counter';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1 className="App-title">Counter App in ReactJS</h1>  
//       </header>
//       <Counter initValue={0} />
//       <Counter initValue={108} />
//     </div>
//   );
// }


