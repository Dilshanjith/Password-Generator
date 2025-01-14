import React,{useState} from 'react';
import './App.css';
import{
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
}from "./characters"

function App() {
  const [password,setPassword]=useState('')
  const [passwordlength, setPasswordlength] = useState(20)
  const[includeUppercase,setIncludeUppercase] = useState(false)
  const[includeLowercase,setIncludeLowercase] = useState(false)
  const[includeNumbers,setIncludeNumbers] = useState(false)
  const[includeSymbols,setIncludeSymbbols] = useState(false)

  const handleGeneratePassword =(e) => {
    let characterList = ''

    if(includeLowercase){
      characterList = characterList + lowerCaseLetters
    }

    if(includeUppercase){
      characterList = characterList + upperCaseLetters
    }

    if(includeNumbers){
      characterList = characterList + numbers
    }

    if(includeSymbols){
      characterList = characterList + specialCharacters
    }

    setPassword(characterList)
  }

  return (<div className="App">
    <div className="container">
      <div className="generator">
        <h2 className="generator_heder">
          password Generator</h2>
        <div className="generator-password">
          <h3>{password}</h3>
          <button className="copy_btn">
          <i className='far fa-clipboard'></i>
          </button>
        </div>

        <div className="form-group">
          <lable htmlFor="password-strength">password length</lable>
          <input 
          defaultValue={passwordlength}
          onChange={(e) => setPasswordlength(e.target.value)}
          type="number" 
          id="password-strength" 
          name="password-strength"
          max="20"
          min="10"
          />
        </div>

        <div className="form-group">
          <lable htmlFor="uppercase-letters">Include Uppercase Letters</lable>
          <input 
          
          checked ={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
          type="checkbox" 
          id="uppercase-letters" 
          name="uppercase-letters"
          max="20"
          min="10"
          />
        </div>

        <div className="form-group">
          <lable htmlFor="lowercase-letters">Include Lowercase Letters</lable>
          <input
          checked ={includeLowercase} 
          onChange={(e) => setIncludeLowercase(e.target.checked)}
          type="checkbox" 
          id="lowercase-letters" 
          name="lowercase-letters"
          max="20"
          min="10"
          />
        </div>

        <div className="form-group">
          <lable htmlFor="include-numbers">Include Number</lable>
          <input 
          checked ={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          type="checkbox" 
          id="include-numbers" 
          name="include-numbers"
          />
        </div>

        <div className="form-group">
          <lable htmlFor="include-symbols">Include Symbols</lable>
          <input 
          checked ={includeSymbols}
          onChange={(e) => setIncludeSymbbols(e.target.checked)}
          type="checkbox" 
          id="include-symbols" 
          name="include-symbols"
          />
        </div>

        <button onClick={handleGeneratePassword} className="generator_btn">Generate Password</button>

      </div>
    </div>
    </div>
  );
}

export default App;
