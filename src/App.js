import logo from './logo.svg';
import './App.css';
import { useContext, useReducer, useState, createContext } from 'react';
import reducer from './reducer';
import Accordion from './components/Accordion';
import ThemeContext from './context';

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  const {theme, setTheme} = useContext(ThemeContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isDarkFunc = () => {
      setTheme(!theme);
  }

  const inputValue = (e) => {
    setTitle(e.target.value);
  }
  
  const textareaValue = (e) => {
    setDescription(e.target.value);
  }

  const addFunc = (e) => {
    e.preventDefault()
    if (title.length >= 1 && description.length >= 1) {
      dispatch({
        type: "ADD_ACCORDION",
        payload: {
          id: Math.random(),
          title: title,
          description: description
        }
      })

      setDescription("")
      setTitle("")
    }
  } 

  const onDelete = (id) => {
      dispatch({
        type: "DELETE_ACCORDION",
        payload: id
      })
  }

  return (
    <div className="App" style={{backgroundColor: theme ? "#131f2b" : "white" }} >
      <button className='themeBtn' onClick={isDarkFunc} style={{backgroundColor: theme ? "rgb(7, 12, 29)" : "#e8e8e8", color: theme ? "#fff" : "#000" }}>{theme ? "Light" : "Dark"}</button>
      <form onSubmit={addFunc} style={{backgroundColor: theme ? "#1e2230" : "#f3f3f3", border: theme ? "2px solid #0b1118" : "2px solid #dadada"}}>
          <input type='text' placeholder='Enter title' id='title-input' onChange={inputValue} value={title} style={{backgroundColor: theme ? "#283152" : "#fff", color: theme ? "#fff" : "#000", border: theme ? "1px solid #050b21" : "1px solid #000"}}/>

          <textarea id='description-textarea' rows={7} placeholder='Enter description' onChange={textareaValue} value={description} style={{backgroundColor: theme ? "#283152" : "#fff", color: theme ? "#fff" : "#000", border: theme ? "1px solid #050b21" : "1px solid #000"}} ></textarea>
      
          <input type='submit' id='submit' value="Add" style={{backgroundColor: theme ? "#217111" : "rgb(22, 185, 22)"}} />
      </form>

      {
        state.map((accoridon) => {
         return <Accordion accordion={accoridon} onDelete={onDelete} key={accoridon.id} />
        })
      }
    </div>
  );
}

export default App;
