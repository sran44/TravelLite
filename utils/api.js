export async function fetchDestinations() {
  return new Promise((resolve) => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("tl_destinations") : null;
      const data = raw ? JSON.parse(raw) : null;
      resolve(data);
    } catch (err) {
      resolve(null);
    }
  });
}

export async function saveDestinations(destinations) {
  return new Promise((resolve) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tl_destinations", JSON.stringify(destinations || []));
    }
    resolve(true);
  });
}

export async function fetchFavourites() {
  return new Promise((resolve) => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("tl_favourites") : null;
      const data = raw ? JSON.parse(raw) : [];
      resolve(data);
    } catch (err) {
      resolve([]);
    }
  });
}

export async function saveFavourites(favourites) {
  return new Promise((resolve) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tl_favourites", JSON.stringify(favourites || []));
    }
    resolve(true);
  });
}
