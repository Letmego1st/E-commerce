# ***ORM-Ecommerce-Back End***

## **Description**


This project was developed using starter code to create a back-end application for an e-commerce site that uses the command line interface (CLI) and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods with a RESTUL API.

The schema.sql file in the db folder was run in MySQL Workbench to create the ecommerce_db and establish a connection with Insomnia Core through the command line interface (CLI). Once the database is created, the specific NPM packages are installed using npm i. MySQL2 and Sequelize packages to connect an Express.js API to a MySQL database, which utilizes the dotenv package to store sensitive environmental variables such as: username, password, and database name. npm run seed command migrates the data to MYSQL. A table is created out of the four objects located in the models folder: Product, Category, Tag, ProductTag.

With the node.js packages installed and database seeded without error, run NPM Start to start the server and connect to local host http://localhost:3001/. Then, an API GET request is performed for each route displaying in JSON format. All API POST, PUT, and DELETE routes are tested in Insomnia Core. I am able to successfully create, update, and delete data in my database.


E-Commerce Backend Demo
### [![Ecommerce Demo](./assets/Screenshot%202023-05-20%20at%205.23.51%20AM.png)](./assets/Untitled_%20May%2015%2C%202023%209_19%20AM-1.mp4)

Github:

https://github.com/Letmego1st/E-commerce

Webpage:

https://letmego1st.github.io/E-commerce/



**User Story**

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

```
**Acceptance Criteria**

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database

```


**Installation/Usage**

From the command line, run:

* npm init

* npm install mysql2

* npm install sequelize

* npm install express

* npm install dotenv

* npm run start


**Mock-Up**

The following animation shows the application's GET, POST, PUT, and DELETE routes for TAGS being tested in Insomnia Core:

![Ecommerce gif](./assets/13-orm-homework-demo-01.gif)


The following animation shows the application's GET, POST, PUT, and DELETE routes for CATEGORIES being tested in Insomnia Core:

![Ecommerce gif](./assets/13-orm-homework-demo-02.gif)


The following animation shows the application's GET, POST, PUT, and DELETE routes for PRODUCTS being tested in Insomnia Core:

![Ecommerce gif](./assets/13-orm-homework-demo-03.gif)



