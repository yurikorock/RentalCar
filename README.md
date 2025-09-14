##  Project Overview

RentalCar is a frontend web application for a car rental company. 
It allows users to browse available cars, filter listings based on specific criteria, view detailed information about each car, and book a car for rental. The application is built using React with Vite and utilizes Redux for state management.

## 📄 Pages

1. **Home page** (`/`)

   - Banner with call-to-action.
   - **View Catalog** button → navigates to the catalog.

2. **Catalog** (`/catalog`)

   - Displays a list of available cars.
   - Filtering (done on the backend) by:
     - brand
     - price
     - mileage (`from` / `to`)
   - Add cars to _Favorites_.
   - Pagination with **Load More** button.
   - Mileage formatted with space (e.g. `5 000 km`).
   - **Read more** button → navigates to car details.

3. **Car details** (`/catalog/:id`)
   - Photo + detailed description.
   - Booking form: after successful submission → notification about successful booking.

## Tech Stack

- React with Vite
- Redux for state management
- React Router for client-side routing
- Axios for API requests

## API Integration

The app interacts with the backend API documented at: Car Rental API Docs.
🏗 Installation & Setup
Clone the repository:

git clone https://github.com/yourusername/rentalcar.git cd rentalcar
Install dependencies:
npm install

Start the development server:
npm run dev

Deploy the project (optional, e.g., using Vercel or Netlify):
npm run build
