# Travel Booking

Participated in an agile team of four to create an application that fetches a third party API that allows users to book and purchase flights/hotels/cars.

# Authors

Built by [Ray](https://github.com/BoomBoomRay), [Shay](https://github.com/newCodeWriter), [Sebastian](https://github.com/gbudjeakp), [Tojonirina](https://github.com/Tojonirina4)

# Preview
<img width="1422" alt="Screen Shot 2021-04-04 at 11 54 22 AM" src="https://user-images.githubusercontent.com/50201713/113518686-c1fb9980-953c-11eb-9c30-cddb970d97bc.png">

<img width="1418" alt="Screen Shot 2021-04-04 at 11 55 16 AM" src="https://user-images.githubusercontent.com/50201713/113518690-c758e400-953c-11eb-9fd5-436d383a5dcd.png">

<img width="1413" alt="Screen Shot 2021-04-04 at 11 55 37 AM" src="https://user-images.githubusercontent.com/50201713/113518696-cfb11f00-953c-11eb-9ab0-aa1a98cdd724.png">

# Tech/Framework: MERN

1. React.js/Material UI
2. Express/Node.js
3. MongoDB
4. React context API
5. Cookie-parser
6. JWT
7. Bcrypt
8. Sengrid
9. AWS
10. Stripe

# Setup

## Installations
1. Add API key dependencies to the project(see Adding API Key Dependencies below for instructions)
2. cd to the client directory(front-end)
3. Install dependencies via **npm install**
4. start app via **npm start**
5. Head to http://localhost:3000 on the browser
6. At root, **npm install** for back-end dependencies
7. run server via **npm start**
8. server will run at http://localhost:3001

## Setup env variables:
You must create a .env file for back-end
```bash
# randomly generated
JWT_SECRET= ''

# obtained from mongoDB
MONGO_URL= ''

# obtained from SkyscannerAPI(see Adding API Key Dependencies)
RAPID_API_KEY= ''
RAPID_API_HOST= ''

# obtained from Sengrid API(see Adding API Key Dependencies)
SENDGRID_API_KEY= ''
EMAIL= ''

# obtained from AWS
AWS_SECRET_ACCESS_KEY=''
AWS_ACCESS_KEY_ID=''

# obtained from Stripe
STRIPE_SK=''
STRIPE_PK=''
```
You must also create a .env file in /client
```bash
# obtained from Stripe
REACT_APP_STRIPE_SK= ''
REACT_APP_STRIPE_PK

# email used in Sengrid account
REACT_APP_EMAIL= ''
```


## Adding API Key Dependencies:
This program requires the following API keys. These can be obtained here(folow the instructions of website links)
* [SkyScanner API](https://rapidapi.com/skyscanner/api/skyscanner-flight-search)
* [Sengrid API](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/)
* [AWS](https://docs.aws.amazon.com/index.html)
