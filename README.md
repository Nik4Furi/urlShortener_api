# <h1 id="urlShortener_api"> urlShortener_api ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/urlShortener_api) </h1>
### A fullstack app, which is short any url after entering by the users. We use '<a href="https://ejs.co" target="_ejs">EJS templates</a>' to build this fullstack app.
urlShortener_api, is fullstack app, basically made on EJS Templates. Have the functionality to create url, read urls from database. But also have specific feature, it can automatically delete any urls data which is 24 hours old.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >urlShortener_api Looka Like</a></p>
####   <p><a href="#demos" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#colorsRef" >Color References</a></p>
####   <p><a href="#routersRef" >Routers References</a></p>
####   <p><a href="#usages" >Usages/Examples</a></p>
####   <p><a href="#features" >Features</a></p>
####   <p><a href="#relatedProjects" >Related Projects</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/urlShortener_api?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/urlShortener_api?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/urlShortener_api)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/urlShortener_api?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/urlShortener_api) 

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/urlShortener_api)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/urlShortener_api)

## <h2 id="looks" >urlShortener_api Looks Like</h2>


<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/204721877-6cbaa9d2-bb18-4ebf-bfa9-35b198afc6ed.png" width="400" height="" alt="urlShortener_api_home"/>
  
 </p>

<a href="#urlShortener_api">Go Home </a>



## <h2 id="demos" >Demo </h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/204722243-26ab6d3e-5f5d-4948-8768-99f6e09d1c55.gif" width="500" height="" alt="urlShortener_api_home"/>
    
 </p>
 


<a href="#urlShortener_api">Go Home </a>



## <h2 id="stack" >Tech Stack </h2>


**Server:** NodeJS, ExpressJS, MongoDB, EJS

<a href="#urlShortener_api">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/urlShortener_api
```

Go to the project directory

```bash
  cd urlShortener_api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start (start for only time)

  npm run dev (Run or restart server, whenever you save any file(js,ejs))
```

<a href="#urlShortener_api">Go Home </a>

## <h2 id="envVar">Environment Variables </h2>

To run this project, you will need to add the following environment variables for basic ideas.Also you can see **.env.example** file for whole idea of environment variables.

Version Configurations
 
`VERSION` = v1

Server Configurations

`PORT` = 8000
`URL` = http://localhost

Database configurations

`DB_SERVER`   
`DB_HOST`   
`DB_PORT`   
`DB_NAME`   

Session key configurations

`SECRET_SESSION_KEY`

<a href="#urlShortener_api">Go Home </a>



## <h2 id="colorsRef">Color Reference </h2>

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color |  #dc3545 |

<a href="#urlShortener_api">Go Home </a>



## <h2 id="routersRef">Routers Reference </h2>

#### Home Page, with urls data from database

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `get` | See our home page,where we see the form to post urls and urls data |

#### Upload File

```http
  POST /PostUrl
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -      | `POST` | **url field required**.To post/submit the url into database |


## <h2 id="usages" >Usages / Examples </h2>

Deleting the file,which are 24 hour delay.

```javascript
const DeleteDoc24Hour = async(Modal)=>{
    const today = new Date(Date.now());
    today.setHours(0,0,0,0);
    
    await Modal.deleteMany({createdAt : {$lt:today}});
}

module.exports =  DeleteDoc24Hour
```

<a href="#urlShortener_api"> Go Home </a>


## <h2 id="features">Features </h2>

- Delete any urls data which is 24 hours old
- Use Components to build these app
- Use <a href="https://en.wikipedia.org/wiki/Model-view-controller" target="_blank" rel="noopener noreferrer"></a>MVC Architecture</a> to controlling accured in project.

<a href="#urlShortener_api">Go Home </a>



## <h2 id="relatedProjects" >Related Projects </h2>

Here are some related projects

[urlShortener_api](https://github.com/Nik4Furi/urlShortener_api)

[inotes](https://github.com/Nik4Furi/inotes)


