# NADSOFT_TASK
# Countries





🏁 Getting Started

Software:
Visual studio code. -postman. -MongoDB
or you can use the browser to check the test cases


#Setup and run the application.
-clone the repo: https://github.com/AbdullahMomani/NADSOFT_TASK.git
-npm i or yarn install if you using yarn to install all dependencies.
-then run the following command in the root of repo to run the server:
-npm run dev or -yarn run dev if you using yarn

#Setup the database :
run the following url in your browser or postman:
http://localhost:5000/api-data/
to fetch the data from the API and store it in database.

#Test Cases:
-Countries Search Cases:
method: get 
url:
http://localhost:5000/countries              //all countries
http://localhost:5000/countries?search=GUY   //based on cca3
http://localhost:5000/countries?search=ck    //based on cca2
http://localhost:5000/countries?search=184   //based on ccn3
http://localhost:5000/countries?search=Cook Islands   //based on common name
http://localhost:5000/countries?search=Republic of Turkey  //based on official name
http://localhost:5000/countries/currencies/tr    //search currencies based on cca2
http://localhost:5000/countries/filter/region    // group countries by region
http://localhost:5000/countries/filter/languages  //group countries be languages

-create a json file with api-data and download it test cases:
method:get
url:
http://localhost:5000/files/write       to write a file countries.json containing all data from the api
http://localhost:5000/files/download    to download the countries.json file
