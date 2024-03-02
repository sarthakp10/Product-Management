# Product-Management
Welcome to the GitHub repository of our **Product Management System!** In this file, we would be keeping a record of the commits made to the project and a brief description of each and every commit with respect to the project. The project is mainly built using the **MERN Stack**, in which Node.js is used for server side code, MongoDB Atlas is mainly used for the database needs, Express.js is used for communicating with the server by means of requests and responses, and React.js is used for the Frontend and UI needs. 

### 18 Feb 2024 - Commit 1: The Backend code (Server-side code, Database logic and API routes):
In the server-side code, we import two important modules, `express` and `mongoose`. The express module is used for the **middleware** code (the code that is executed after the client sends a request and before the server sends a response). The `express.json()` method is used to retrieve the body of the request being sent to the server. The mongoose module is used to connect to the database and prepare a **schema** (the structure in which documents are added to the database). The routes consist of `GET` requests (to display all products or a single product), `POST` requests (to add a product to the database), `DELETE` request (to delete a product from a database) and `PATCH` request (to update a product). The logic for the CRUD operations is defined in the `productController.js` file.

### 26 Feb 2024 - Commit 2: Making a React app and Fetching Data:
A React app was created using `npx create-react-app` command. React.js allows us to divide the project into pages and components and is largely used for the Frontend part. In this commit, the **Home** component (Home.js) was made which displays all the products in the database using the `fetch()` function. A reusable component **ProductDetails.js** was also created which would be rendered in Home.js. This component receives the product as a prop and displays its properties. The name, description and cost of the product were fetched from the backend and were rendered onto the app. 

### 27 Feb 2024 - Commit 3: Creating a Product form to add new product:
In this commit, I have created a form which would ask the details of the product. On submitting the form, the product would be added to the database. The form contains input fields for the name, description, cost and the image of the product. On submitting the form, the data is converted into json by `JSON.stringify()` method, and a `POST` request is sent to the server along with the data received from the user. The updated data is then fetched again using the `fetch()` function. If an error occurs, then the error is displayed. If there are no errors in the request or response, then the data is stored successfully, and the input fields are cleared using the `useState` hook. 

### 29 Feb 2024 - Commit 4: Adding Context to data:
When a new product is added to the database from the form created earlier, the new product is not fetched and displayed along with the other products until the user refreshes the page. This problem is solved by the concept of **context**. Context is a global scope that is assigned to a specific component, so that any external component can change the state of that component. In this case, a context is assigned to the list of products such that whenever the product is added, the list of products is updated without having to refresh the page. This is done using `ProdContext.js` and the custom hook `useProdContext.js`. Note that we are enclosing the App component (the root component) in the Context Provider to use context in our applicaton.