# Product-Management
Welcome to the GitHub repository of our **Product Management System!** In this file, we would be keeping a record of the commits made to the project and a brief description of each and every commit with respect to the project. The project is mainly built using the **MERN Stack**, in which Node.js is used for server side code, MongoDB Atlas is mainly used for the database needs, Express.js is used for communicating with the server by means of requests and responses, and React.js is used for the Frontend and UI needs. 

### 18 Feb 2024 - Commit 1: The Backend code (Server-side code, Database logic and API routes):
In the server-side code, we import two important modules, `express` and `mongoose`. The express module is used for the **middleware** code (the code that is executed after the client sends a request and before the server sends a response). The `express.json()` method is used to retrieve the body of the request being sent to the server. The mongoose module is used to connect to the database and prepare a **schema** (the structure in which documents are added to the database). The routes consist of `GET` requests (to display all products or a single product), `POST` requests (to add a product to the database), `DELETE` request (to delete a product from a database) and `PATCH` request (to update a product). The logic for the CRUD operations is defined in the `productController.js` file. An empty React app is also created for the Frontend code...

