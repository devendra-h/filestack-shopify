import React from 'react';

export default function myFunc() {
  return (
    <div>
      <h1>Page Title</h1>
      <button onClick={() => console.log("button clicked")}>Click me</button>
    </div>
  );
}
