# BloodHub

BloodHub is a mobile application designed to facilitate blood donation requests and fulfillments. Users can request blood donations, view their current location on a map, and send their location details.

## Features

- User Registration and Login
- Request Blood Donation
- View Current Location on Map
- Send Location Details

## Technologies Used

- React Native
- Expo
- Node.js
- Express
- MongoDB
- JWT for Authentication

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/aditya06121/bloodhub.git
   cd bloodhub
   ```

2. Install dependencies for the backend:

   ```sh
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:

   ```sh
   cd ../BloodHub
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=1h
REFRESH_TOKEN_EXPIRY=7d
PORT=8000
```

### Running the Application

1. Start the backend server:

   ```sh
   cd backend
   npm run dev
   ```

2. Start the frontend application:

   ```sh
   cd ../BloodHub
   npm start
   ```

### Usage

- Register a new user or login with existing credentials.
- Request a blood donation by selecting the blood type and sharing your location.
- View your current location on the map.
- Send your location details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
