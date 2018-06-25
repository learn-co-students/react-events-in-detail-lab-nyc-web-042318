import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

function aFunc() {
  console.log("hey")
}

ReactDOM.render(
  <div>
    <CoordinatesButton />
    <DelayedButton onDelayedClick={aFunc} delay={2000} />
  </div>,
  document.getElementById('global')
);
