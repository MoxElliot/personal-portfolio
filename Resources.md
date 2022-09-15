https://reactrouter.com/docs/en/v6/getting-started/tutorial#tutorial

Used this to set up useState to store the active tab (via activeKey prop) on the HobbyTabs.js 
https://react-bootstrap.github.io/components/tabs/ <_ Controlled Tab Section

How to use useEffect to console.log active state https://stackoverflow.com/questions/54867616/console-log-the-state-after-using-usestate-doesnt-return-the-current-value


Create context explaination and example https://stackoverflow.com/questions/61836485/passing-data-to-sibling-components-with-react-hooks

https://codesandbox.io/s/react-context-api-example-0ghhy

 Used Controlled Carousel guide from https://react-bootstrap.github.io/components/carousel/
Read https://w3collective.com/tab-component-react/ for tab active index

From: https://github.com/rafgraph/spa-github-pages

Basic instructions - there are two things you need from this repo for your single page app to run on GitHub Pages.

Copy over the 404.html file to your repo as is
Note that if you are setting up a Project Pages site and not using a custom domain (i.e. your site's address is username.github.io/repo-name), then you need to set pathSegmentsToKeep to 1 in the 404.html file in order to keep /repo-name in the path after the redirect. If you are using React Router you'll need to tell it to use the repo-name as the basename, for example '< BrowserRouter basename="/repo-name" />.'
Copy the redirect script in the index.html file and add it to your index.html file - Note that the redirect script must be placed before your single page app script in your index.html file.  


Freecodecamp has a different solution to using react router on github pages: https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/


Good bootstrap 5 docs : https://mdbootstrap.com/docs/b5/react/layout/grid/

MERN Setup (MongoDB form submission) https://www.mongodb.com/languages/mern-stack-tutorial
https://www.mongodb.com/languages/mern-stack-tutorial

https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369

connection string: mongodb+srv://eric0952:Eric5042@mongoatlascluster.5nkuq.mongodb.net/?retryWrites=true&w=majority

node server.js to start MongoDB