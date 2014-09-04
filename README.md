# AngularJS / Mongo / RequireJS / Passport - Seed

This is my seed Project. 
I use what I believe are good practices, and of course, with a bunch of personal preferences that may be changed. 
No Jade here :) Me no like.

## Core technologies used

- NodeJS
- Express Framework
- AngularJS
- MongoDB (mongoose)

(Other libraries used: RequireJS, Passport, Nodemailer and crypto)

## Instructions

1. Make sure you have Mongo installed and running
2. Run npm install (with administration rights)
3. Run node app.js

## Overview

This Seed provides users with RequireJS module loading, PassportJS registration / authentication and AngularJS as the client framework.

Upon registration, the application sends a confirmation e-mail (make sure you use a valid email address that you can check for the confirmation email). As for now, I'm not doing anything with it, but I plan to add more features sometime soon (Tests are a must).

## Next steps

1. Unit Tests with Jasmine (coming very soon) - I expect to use quite a few Jasmine features.

2. Put an email confirmation url to confirm users / allow only confirmed users to login (this is a trivial feature / not sure how relevant)

## Directory Structure
    
	app.js              	--> web server
    package.json        	--> package dependencies
    app/             		--> main client app
      	css/              	--> css files
      	js/               	--> javascript files
      		components/		--> logger component
        	controllers/	--> application controllers      	
        	app.js          --> app module
        	main.js 		--> main application bootstrap
        	routes.js 		--> client side routing definition
    	lib/            	--> angular and 3rd party JavaScript libraries
    	views/				--> main view and partials
	config/					--> application config folder
		app(.)-strings.js 	--> re-usable strings used by application
		config.js 			--> app default configs (db name, etc)
		conf(.)-routes.js 	--> routing passing point
		mailer.js 			--> mailer module
		passport.js 		--> passportjs configuration
		routes.js 			--> routes's implementation
	server/					--> server side logic
  		api/				--> api for model manipulation	
      	helpers/			--> generic helpers (I added an encryption helper)
    	models/				--> mongoose models      	

Hope you like it,
Tiago
