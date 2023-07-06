import * as React from "react";
import classes from './Header.module.css';
import MealImg from '../../../assets/meals.jpg';
import HeaderCart from "../HeaderCart/HeaderCart";

type HeaderProps = {
  onShowCart: () => void
};

const Header: React.FC<HeaderProps> = (props) => {
  return(
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealImg} alt="A Table full of delicious food!"/>
      </div>
    </>
  );
};

export default Header;
