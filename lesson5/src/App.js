import React from 'react';
import Demo1 from './component/Demo1';
import Demo2 from './component/Demo2';
import Demo3 from './component/Demo3';

function App() {
  return (
    // Type your website layout here...
    <div id="demos">
      {/* Demo #1 */}
      <Demo1 />
      <hr />
      
      {/* Demo #2 */}
      <Demo2 numbers={[1,2,3,4,5]}/>
      <hr />

      {/* Demo #3 */}
      <Demo3 />

    </div>
  );
}

export default App;
