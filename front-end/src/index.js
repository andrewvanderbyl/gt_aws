import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const router = createBrowserRouter([
//   { path: "/", element: <SignIn/> },
//   { path: "register", element: <Register /> },
//   { path: "app", element: <Dashboard /> }
// ]
// )

ReactDOM.createRoot(document.getElementById('root')).render( 

  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
