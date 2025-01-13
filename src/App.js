
import './App.css';

function App() {
  return (<div className="App">
    <div className="container">
      <div className="generator">
        <h2 className="generator_heder">
          password Generator</h2>
        <div className="generator-password">
          <h3>password</h3>
          <button className="copy_btn">
          <i className='far fa-clipboard'></i>
          </button>
        </div>

        <div className="form-group">
          <lable htmlFor="password-strength">password Strength</lable>
          <input 
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
          type="checkbox" 
          id="include-numbers" 
          name="include-numbers"
          />
        </div>

        <div className="form-group">
          <lable htmlFor="include-symbols">Include Symbols</lable>
          <input 
          type="checkbox" 
          id="include-symbols" 
          name="include-symbols"
          />
        </div>

        <button className="generator_btn">Generate Button</button>

      </div>
    </div>
    </div>
  );
}

export default App;
