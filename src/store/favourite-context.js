import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourite, setUserFavourite] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourite((prevUserFavourite) => {
      return prevUserFavourite.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourite((prevUserFavourite) => {
      return prevUserFavourite.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourite.some((meetup) => {
      return meetup.id === meetupId;
    });
  }

  const context = {
    favourites: userFavourite,
    totalFavourites: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
