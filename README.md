# Cucina - Food Recipe App

Cucina is a food recipe app that allows you to discover, explore, and cook a wide variety of delicious dishes from around the world. Whether you're a seasoned chef or a beginner in the kitchen, Cucina has something for everyone.



## Features

- Browse a vast collection of recipes with detailed instructions and ingredient lists.
- Search for recipes by cuisine, ingredients, dietary preferences, and more.
- Save your favorite recipes for quick access.
- Share recipes with friends and family.
- Contribute your own recipes to the Cucina community.

## Installation

To get started with Cucina, follow these installation steps:

1. Clone this repository to your local machine

2. cd cucina and do npm install it will install the  dependencies

-   if you dont have npm go to this github repo [nvm -node version manager ]([Your Name](https://github.com/yourusername)) allows you to quickly install and use different versions of node via the command line.
- copy and paste on your terminal `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`


3. cd to config and add make a file called .env 
-   touch .env to the config/
-   add this to your .env file 

- `PORT = 2121` `(can be any port example: 3000)`
-`API_KEY` = `CLOUDINARY API KEY` 
- `API_SECRET` = `CLOUDINARY SECRET KEY`
`CLOUD_NAME` = `cloudinary cloud name`
- `DB_STRING` = `your database URI`

4. type `npm start` to start the project

# How It's Made:

- Tech used:

"bcrypt": "^5.0.1",
    "cloudinary": "^1.25.1",
    "connect-mongo": "^3.2.0",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-flash": "^0.0.2",
    "express-session": "^1.17.1",
    "method-override": "^3.0.0",
    "mongodb": "^3.6.5",
    "mongoose": "^5.12.3",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "nodemon": "^2.0.7",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "validator": "^13.6.0"

Enjoy cooking with Cucina, and bon appétit!


