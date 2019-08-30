1. Go to your project dir
2. create-react-app projectName
3. cd to the new dir
4. npm start


-- Installing BootsTrap

1. Download bootstrap:
    it will show you 2 folders (We already downloaded it in the BootsTrap project)
    
2. create in your 'public' dir, 2 new dirs: css , js

3. copy inside those dirs:
    * bootstrap.min.js
    * bootstrap.min.css
    
4. Bootstrap needs Jquery and Library-Tether (system for grid)
    4.1 Download jquery compressed cdn from jquery weebsite
    4.2 save the jquery-3.4.0.min to the js directory
    4.3 same as tether..download and extract min.js to js folder like in this project.

5. Import everything in the index.html:

 <link rel=stylesheet href="%PUBLIC_URL%/css/bootstrap.min.css">
    <script src="%PUBLIC_URL%/js/jquery-3.4.1.min.js"></script>
    <script src="%PUBLIC_URL%/js/tether.min.js"></script>
    <script src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
    
    
--- Connect the BackEnd
1. Run the DB: (CMD1)
    1.1 run the mongo server: $mongod -- Keep it open
    1.2 on new Tab
        1.2.1 get into the db: $mongo --> show dbs
        1.2.2 change to our db: $use swag-shop(our db name)
        1.2.3 Check: db.products.find({}).pretty()
        1.2.4 $exit

2. Turn on our API(CMD2)
    2.1 cd to the dir with: server.js
    2.2 $ nodemon server.js 
    3.2 check in postman db is connecting
    
3. React Server(CMD3)
    3.1 go to your dir you created at the beginning: '/my-app'
    3.2 $npm start
    
--- Start
    
1. Create a service for the http requests
    1.1 cd to the react project: npm install --save whatwg-fetch (Library for HTTP req)
    1.2 import at services\http.service.js
     
    
