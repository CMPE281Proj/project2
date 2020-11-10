Set up amplify react app  

-	Clone the repo using ‘git clone <git_url>’
-	Navigate to the cloned repo , open the code editor you chose to use
-	npm install -g @aws-amplify/cli
-	Load node modules for the cloned project using 'npm install'
-	Add nodes modules folder to .gitignore since it is huge 
-   Make sure you are logged into aws console before amplify configure
-	Set up amplify using ‘amplify configure’
    -	Press enter to continue
    -	set region : us-east-1
    -	set user name:
    -	Click on the link and complete the IAM user creation process (Enable console access along with programmatic access)
    -	Download the credentials.csv that holds the access and secret key of the new user (once closed , you cannot get the details again)
    -	Go back to the editor and specify access and secret key in the terminal
    -	Set profile name for the user created 
    
    You are going to use this user as admin instead of root user.
    
    If you want to login to the user created above, open the credentials file you downloaded.
    Use the console log in link for iam user login and proceed with credentials.
    
-	Initialize Amplify on the repo using ‘amplify init’
    -	Set name of the project 
    -	Name of the environment:dev (DEFAULT)
    -	Type of app : javascript (default)
    -	Javascript framework: react (default)
    -	Source directory path: src (default)
    -	Distribution directory path: build (default)
    -	Build command : npm run-script build (default)
    -	Start command : npm run-script start (default)
    -	Use aws profile :‘Yes’ 
    -	Select the profile created previously
-	Add authentication to the react app using ‘amplify add auth’ (go with the default values) and select the following for the prompted :
    -	Default authentication and security configuration : Default configuration 
    -	User should be able to login with : Email 
    -	Configure advanced settings : No 
-	Update ‘aws-exports.js’ using with the user pool details using ‘amplify push’ , provide ‘Y’ when prompted
-	npm install --save aws-amplify @aws-amplify/ui-react
- npm start

- Commit Description
    - Created Header Component using material ui having support for Desktop and Mobile Layout
    - Created Navigation in Header using React Router
