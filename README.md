Installation : Make sure you have the following installed : =) Node.js , npm (Node Package Manager) , vscode( or any other code editor)

Step-1. Clone the repository =) git clone [your-github-repo-link] =) cd frondend and cd backend ( on different terminal).
Step-2. Install the dependencies =) npm install Step-3. Start the development server =) npm start for frontend =) node server for backend .

i have done all specification mentioned in Customerlabs_React_Test doc . i hope iam done much better .

How to use our app: 
*) i have Create a page with a button caption “Save segment” 
*) When we click on “Save segment” button a right to left drawer will be opens .
 *) The popup will contain a text box to type the segment name . 
*) And also it should contain dropdown name as “Add schema to segment” with mentioned ( as per Customerlabs_React_Test doc) options. 
*) Add a link component name as “+Add new schema” .
 *) When we select a option from the “Add schema to segment” dropdown and click on “+Add new schema” a new dropdown will added in a Blue box container.
 *) The newly added dropdown will be able to change the other options . And the contai options are which not selected options. 
*) when all options will be selected the “+Add new schema” link will be disabled automaticall .
 *) And they have other two component names are savethesegment and close buttons . 
*) when we click savethesegment button the filled datas will be send to webhook.site server via json format. 
*) for this process we have work in node and express backend server to connect the webhook.site server .
 *) when we click the close button they close the drawer and clear all datas .
