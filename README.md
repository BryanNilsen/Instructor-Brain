# How to Use this Repo:

## Clone this Repo

From your terminal:

1. Clone this repo: `git clone git@github.com:BryanNilsen/Instructor-Brain.git`

2. Install dependencies: `npm install`

3. Remove path to this repository: `git remote rm origin`

## Create a New Repo in Your GitHub Account

From your browser:

4. [Create your own repository on GitHub](https://help.github.com/en/github/getting-started-with-github/create-a-repo)

5. After creating the repository, copy the repo URL ( _this example uses SSH_ )

## Push This Cloned Repo to Your New Repo

Back in your Terminal:

6. Add the URL to your repo: `git remote add origin git@github.com:{your GH username}/{name of your repo}.git`

7. Now you can push this cloned repo to the new repo you created under your username: `git push origin master`

So far we have cloned this repo, created a new repo and pushed up our copy and you should see the code on GitHub. Now we have to make just a few changes in order for you to deploy it for your students to use.

## Edit Files

8. Launch your favorite code editor from the Instructor-Brain root directory. This is where the package.json file lives

In your code editor:

9. Open the package.json file and locate the line: `"homepage": "https://BryanNilsen.github.io/Instructor-Brain"`

10. Replace `BryanNilsen` with your GitHub username and `Instructor-Brain` with the name of the new repo you just created so it looks like this:
    `"homepage": "https://{Your-Username}.github.io/{Your-Repo}"`

11. Save the changes to package.json

The next step assumes you have a Github Project Board or alternative url for the students to access in order to sign up to receive help.
If not, take some time to do that now.

Still in your code editor:

12. Open Card.js from the `src > components` directory, and change the URL on line 8 to the location of your instructor help project board: `const link = "{your path here}`

13. Save the changes to Card.js

## You're Doing Great - We're Almost Finished!

Back in your terminal:

14. add your saved changes: `git add --all`

15. commit your changes: `git commit -m "{your commit message here}"`

16. push your changes: `git push origin master`

17. deploy your app: `npm run deploy`

## That's it!!

You should now be able to view your app online at the homepage path you provided above; i.e. `https://{Your-Username}.github.io/{Your-Repo}`

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._
