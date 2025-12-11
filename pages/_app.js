<<<<<<< HEAD
import "../styles/globals.css";
import Layout from "../components/Layout";
import { createContext, useEffect, useState } from "react";
import {
  fetchDestinations as apiFetchDestinations,
  fetchFavourites as apiFetchFavourites,
  saveDestinations as apiSaveDestinations,
  saveFavourites as apiSaveFavourites,
} from "../utils/api";
export const DestinationsContext = createContext({
  destinations: [],
  setDestinations: () => {},
  favourites: [],
  setFavourites: () => {},
});

function MyApp({ Component, pageProps }) {
  const [destinations, setDestinations] = useState(undefined);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function init() {
      const stored = await apiFetchDestinations();

      if (Array.isArray(stored) && stored.length > 0) {
        setDestinations(stored);
      } else {
        try {
          const module = await import("../data/destinations.json");
          const initial = module.default || module;
          setDestinations(initial);

          await apiSaveDestinations(initial);
        } catch (err) {
          setDestinations([]);
        }
      }
      const favs = await apiFetchFavourites();
      setFavourites(favs || []);
    }

    init();
  }, []);

  useEffect(() => {
    if (Array.isArray(destinations)) {
      apiSaveDestinations(destinations);
    }
  }, [destinations]);

  useEffect(() => {
    apiSaveFavourites(favourites);
  }, [favourites]);

  return (
    <DestinationsContext.Provider
      value={{ destinations, setDestinations, favourites, setFavourites }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DestinationsContext.Provider>
  );
}

export default MyApp;
=======
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
>>>>>>> 883e66deee431af052336e6be0ed799fad9e6e91
