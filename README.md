TravelLite  
A simple, elegant travel destination explorer built with **Next.js**, **React**, and **CSS Modules**.  
This project is developed for **CPAN144 – Advanced Front-End Programming (Phase 2)**.

---

Project Overview
TravelLite allows users to explore global destinations, view details, favourite places they like, and add their own destinations. The project focuses on **routing**, **component modularity**, **state management**, and **responsive UI design**.

Phase 2 builds upon Phase 1 by introducing dynamic routes, shared state using React Context, persistent storage, and polished layouts.

---

Phase 2 Objectives Met

1. Routing & Navigation
- Multi-page navigation using Next.js `<Link>`.
- Routes implemented:
  - `/` Home
  - `/favourites`
  - `/add-destination`
  - `/destination/[id]` (dynamic route)
- Smooth transitions between pages.
- Header navigation active-state styling included.

2. Component Layout & Modularity
- Fully modularized UI:
  - `Header`
  - `Footer`
  - `Layout`
  - `DestinationCard`
  - `DestinationList`
- Shared global state using React Context in `_app.js`.
- All pages wrapped inside a global layout.
- Clean folder structure.

3. Responsive Styling & Theming
- CSS Modules used throughout.
- Fully responsive card grid.
- Mobile-friendly header and layout.
- Hover animations and smooth UI interactions.
- Consistent design across pages.

4. Dynamic State Management
- Add new destinations.
- Delete existing destinations.
- Toggle favourites (add/remove).
- All data persists using `localStorage`.
- State globally managed using React Context.

5. Data Handling & API Preparation
- Placeholder asynchronou
