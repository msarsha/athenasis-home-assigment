# athena_frontend_home_test
Home test for Frontend applicants

# Task Background:
You will be creating a user profile page, similar to https://github.com/goergch or https://stackoverflow.com/users/9209546/jpp
Each profile page contains the following information:
-	Basic details (name, image, DOB, contact details, places of education, places of work)
-	Latest Posts (post title, post text, no. of likes)
-	Top Connections (connection name, connection image, connection FB username)

# Demo API Setup:
1)	Clone the demo API repo: https://github.com/joshuamer/athena_frontend_home_test.git
2)	Run: npm install
3)	Run: node bin/www
You should have the demo API running and accessible from http://localhost:3000

# Part 1 – Create a demo JSON response:
 - You need to create a static JSON response that is returned as the response to the /user endpoint in the demo API.
 - The JSON response should contain all information as detailed in the task background. 
 - Place the JSON data in the object variable, in the routes/users.js file

# Part 2 – Create the Profile Page:
 - Create a new application using AngularJS or Angular (an Angular 6 application created using the Angular-CLI is preferred).
 - Create the application in a new folder within the cloned repo
 - The application should contain just the profile page.
 - The profile page should display the information received from the request to the http://localhost:3000/user endpoint.
 - The profile page should contain all relevant information displayed in a clean, ordered, well designed manner.
 - How the page looks is completely up to you.

# Tips:
-	When creating the Angular application, design the code with maintainability, scalability and best practices in mind
-	Try to create a visually attractive design, but consider the effect on performance and page load times
-	For the API images, use links to free stock images, eg. https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
-	The page should be responsive across various desktop sizes – no need to make it mobile responsive though
-	Recommended to use Bootstrap 4 and/or material design
-	Bonus points for writing unit tests

# Submission:
Upload the cloned repo to github / gitlab / etc. and email the repo link to: joshua_m@mer-group.com
