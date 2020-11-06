#Set up amplify react app  

-	Clone the repo using ‘git clone <git_url>’
-	Navigate to the cloned repo , open the code editor you chose to use
-	npm install -g @aws-amplify/cli
-	Create react app within the cloned folder using ‘npx create-react-app’ . (takes time)
-	Add nodes modules folder to .gitignore since it is huge 
-	Set up amplify using ‘amplify configure’
    o	Press enter to continue
    o	set region : us-east-1
    o	user name:
    o	Click on the link and complete the IAM user creation process.
    o	Download the credentials.csv that holds the access and secret key of the new user (once closed , you cannot get the details again)
    o	Go back to the editor and specify access and secret key in the terminal
    o	Set profile name for the user created 
-	Initialize Amplify on the repo using ‘amplify init’
    o	Set name of the project 
    o	Name of the environment:dev (DEFAULT)
    o	Type of app : javascript (default)
    o	Javascript framework: react (default)
    o	Source directory path: src (default)
    o	Distribution directory path: build (default)
    o	Build command : npm run-script build (default)
    o	Start command : npm run-script start (default)
    o	Use aws profile :‘Yes’ 
    o	Select the profile created previously
-	Add authentication to the react app using ‘amplify add auth’ (go with the default values) and select the following for the prompted :
    o	Default authentication and security configuration : Default configuration 
    o	User should be able to login with : Email 
    o	Configure advanced settings : No 
-	Update ‘aws-exports.js’ using with the user pool details using ‘amplify push’ , provide ‘Y’ when prompted
-	npm install –save aws-amplify @aws-amplify/ui-react
-	
