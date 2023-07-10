import React, { useState } from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    console.log(text);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleButtonClick}>Display Text</button>
      {text && <p>{text}</p>}
    </div>
  );
}

function Footer() {
  return <footer>© Afroz Tinni | Learner</footer>;
}

function App() {
  return (
    <div className="App">
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
