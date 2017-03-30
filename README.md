# :beers: Brastlewark :beers:
---
#### A simple web app that helps our heroes to browse into the information of the gnomes living in the happy-go-lucky town southeast of Barcelona - Brastlewark
---
To install the application on your local machines, you need to :
1. Clone the repo or download the zip
2. From inside the repo, open your terminal and type `bower install`
3. Type `http-server` to initialize a local server and open your browser and type `localhost:8080`
4. To run tests, type `karma start` on a new terminal window

#### Technologies used
1. AngularJS 1.4.0 - For consuming the JSON responded by the API endpoint
2. Bootstrap3, SASS and FlexBox - For easy styling and responsive website
3. UI-Bootstrap - Angular tailored bootstrap directives for pagination and modal windows
4. UI-Router - For state based routing
5. Karma + Jasmine - For testing the application
6. Hover - Hover effects on images

#### Custom Objects/Functions

1. I have added some custom-made directives and filters for extended funcionalities.  
    i. imagePreLoad.js - Directive - Preloads a light icon while image is loading  
    ii. startFrom - Filter - assigns a array chunk size to display in every page  

#### Difficulties Faced
1. Searching for ways to load large images in a more friendly UX way
2. Configuring Karma + Jasmine on dev environment
