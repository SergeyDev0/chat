import React from "react";
import { Link } from "react-router-dom";
import "../scss/auth.scss"

const fields = {
  name: "name",
  room: "room",
};

const Home = () => {
  const { name, room } = fields
  const [values, setValues] = React.useState({
    name: "", room: ""
  });
 
  const handleChange = (event) => {
    let obj = {
      name: event.target.form.username.value,
      room: event.target.form.room.value,
    }
    setValues(obj);
  }

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((value) => !value);
    isDisabled && e.preventDefault();
  }
  return (
    <form className="form__auth">
      <h1 className="form__auth__title">Присоединяйся</h1>
      <div className="form__auth__wrapper-input">
        <label htmlFor="nickname" className="form__auth__label">Ваш никнейм</label>
        <input 
          type="text" 
          id="nickname" 
          name="username"
          className="form__auth__input" 
          placeholder="Введите никнейм" 
          autoComplete="off" 
          onChange={e => handleChange(e)} 
          defaultValue={values[name]}
          required
        />
      </div>
      <div className="form__auth__wrapper-input">
        <label htmlFor="nameRoom" className="form__auth__label">Название комнаты</label>
        <input 
          type="text" 
          id="nameRoom" 
          className="form__auth__input" 
          placeholder="Введите название комнаты" 
          defaultValue={values[room]}
          name="room"
          autoComplete="off" 
          onChange={e => handleChange(e)} 
          required
        />
      </div>
      <Link 
        to={`/chat?name=${values[name]}&room=${values[room]}`}
        onClick={e => handleClick(e)}
      >
        <button type="submit" className="form__auth__button">Войти</button>
      </Link>
     
    </form>
  )
};

export default Home;
