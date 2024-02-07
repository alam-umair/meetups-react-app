import { useContext } from "react";

import FavouriteContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourite() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites Meetups</h1>
      {content}
    </section>
  );
}

export default Favourite;
