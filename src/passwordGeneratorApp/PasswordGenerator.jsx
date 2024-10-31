// PasswordGenerator.js
import React, { useState } from 'react';
import './PasswordGenerator.css';
// import myImage  from './myimage/myImage.png';

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    // let password = 'abbaskhan';
    // let randomChar = password.charAt(Math.floor(Math.random() * password.length));
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;
   

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="password-generator ">

      <h1>Password Generator App</h1>
      <div className="options">
       <label>
        <input type="number" min= "4"   max="20" value={length} 
        onChange={(e) => setLength(e.target.value)} />

        <span>Length of  Password:</span>

       </label>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <button className="generate-button" onClick={generatePassword}>
        Generate Password
      </button>
      <div className="password-output">
        <input type="text" readOnly value={password} />
        <button onClick={() => navigator.clipboard.writeText(password)}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
