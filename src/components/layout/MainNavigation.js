import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";

import FavouriteContext from "../../store/favourite-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">
              My Favourite
              <span className={classes.badge}>
                {favouriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
