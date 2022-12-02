# <h1 id="urlShortener_api"> urlShortener_api ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/urlShortener_api) </h1>
### A <a href="https://en.wikipedia.com/wiki/rest-api" target="_ejs">REST API </a> project, which is short the urls after entering by the users.
urlShortener_api, is REST API project, which is create the short the urls after entering by the users any url, and read the urls data from database.Alos have specific feature, it is automatically deleting the urls data from database, which is 24 hours old.
  So this api is used as , you create any frontend app(<a href="https://github.com/Nik4Furi/urlShortener" target="_url">urlShortener </a>), and this frontend app make the request via this apis.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >urlShortener_api Looka Like</a></p>
####   <p><a href="#demos" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#colorsRef" >Color References</a></p>
####   <p><a href="#apiRef" >API References</a></p>
####   <p><a href="#usages" >Usages/Examples</a></p>
####   <p><a href="#features" >Features</a></p>
####   <p><a href="#relatedProjects" >Related Projects</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/urlShortener_api?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/urlShortener_api?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/urlShortener_api)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/urlShortener_api?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/urlShortener_api) 

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/urlShortener_api)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/urlShortener_api)

## <h2 id="looks" >urlShortener_api Looks Like</h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/205229770-b57ea733-6bd0-4856-871a-379d5fe1256a.png" width="400" height="" alt="urlShortener_api_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/205229790-9b00df29-4298-46d5-897a-bee533a5a27d.png" width="500" height="" alt="urlShortener_api_link"/>  
 </p>
 
<a href="#urlShortener_api">Go Home </a>



## <h2 id="demos" >Demo </h2>

<p text-align=left>

  <img src="https://user-images.githubusercontent.com/91304976/205230538-c2ea2d4e-d850-41e6-af29-618fe7546032.gif" width="500" height="" alt="urlShortener_api_home"/>
    
    
  <img src="https://user-images.githubusercontent.com/91304976/205230554-291cb593-92ae-4399-ab03-b40aa0722a7d.gif" width="500" height="" alt="urlShortener_api_download"/>  
 </p>
 


<a href="#urlShortener_api">Go Home </a>



## <h2 id="stack" >Tech Stack </h2>

**Client:** React, Bootstrap <a href="https://github.com/Nik4Furi/urlShotener" target="_blank" rel="noopener noreferrer">(urlShotener)</a> (Its frontend part)
**Server:** NodeJS, ExpressJS, MongoDB <a href="https://github.com/Nik4Furi/urlShotener" target="_blank" rel="noopener noreferrer">(urlShotener_api)</a> (Its backend part)

<a href="#urlShortener_api">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

#### To run this project, you ensure that all basic requirements are indeed into your PC, such as mongodb, and nodejs is already install your PC. 
##### If not plz refer this videos  <a href="https://www.youtube.com/results?search_query=install+node+js+" target="_blank" rel="noopener noreferrer">Install node js</a>,<a href="https://www.youtube.com/results?search_query=install+mongodb" target="_blank" rel="noopener noreferrer">Install mongoDB</a>  ,or you did it yourselves👍.

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

  npm run dev (Run or restart server, whenever you save any file(js))
```

<a href="#urlShortener_api">Go Home </a>

## <h2 id="envVar">Environment Variables </h2>

To run this project, you will need to add the following environment variables for basic ideas.Also you can see **.env.example** file for whole idea of environment variables.

Version Configurations
 
`VERSION` = v2

Server Configurations

`PORT` = 8000
`URL` = http://localhost

Database configurations

`DB_SERVER`   
`DB_HOST`   
`DB_PORT`   
`DB_NAME`   

<a href="#urlShortener_api">Go Home </a>



## <h2 id="apiRef">API Reference </h2>

#### Fetch all urls data from database

```http
  GET /api/urls/FetchUrls
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `get` | Fetch all urls data from database |

#### Post/submit the url for short into database

```http
  POST /api/urls/PostUrl
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
- Use Error-Handling techniques to handle errors or server requests
- Use <a href="https://en.wikipedia.org/wiki/Model-view-controller" target="_blank" rel="noopener noreferrer">MVC Architecture</a> to controlling accured in project.

<a href="#urlShortener_api">Go Home </a>



## <h2 id="relatedProjects" >Related Projects </h2>

Here are some related projects

[urlShortener](https://github.com/Nik4Furi/urlShortener_api)

[inotes_api](https://github.com/Nik4Furi/inotes_api)


