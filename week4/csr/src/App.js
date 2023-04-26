import React, { useState } from "react";

function App() {
  const [name, setName] = useState('');

  const onClickEnglishButton = () => setName('Fody');
  const onClickKoreanButton = () => setName('포디');

  return (
    <div>
      <h1>Hello, {name}!</h1>

      <div>
        <button onClick={onClickEnglishButton}>English</button>
        <button onClick={onClickKoreanButton}>한글</button>
      </div>
    </div>
  );
}

export default App;
