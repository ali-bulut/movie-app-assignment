# Sample Movie App for React Assignment

> You may reach out the website from [here!](https://d1hkqx9g59ff69.cloudfront.net)

> This web app uses [TheMovieDB's](https://themoviedb.org) design and API on list of movies and movie detail pages.

## Used Technologies

The app is built with React and Typescript support.
It has been fully dockerized and has CI/CD support with the help of AWS CodePipeline & CodeBuild. 
It has been deployed to AWS S3 and uses CloudFront, as well.

* React
* Typescript
* Docker
* AWS
  * S3
  * CloudFront
  * CodePipeline & CodeBuild

## Installation
1. Get an API Key at [TheMovieDB](https://developers.themoviedb.org/3).
2. Clone the repo.
```
git clone https://github.com/ali-bulut/movie-app-assignment.git
```
3. Enter your API_URL, API_KEY, and POSTER_PATH to .env file.
```
REACT_APP_API_URL=xxx
REACT_APP_API_KEY=xxx
REACT_APP_POSTER_PATH=xxx
```
* By using your own machine
  * 4.Install NPM packages.
  ```
  npm install
  ```
  * 5.Start the project.
  ```
  npm start
  ```
* By using Docker
  * 4.Start the project.
  ```
  docker-compose up
  ```

## Screenshots
![Movies List Page](https://i.imgur.com/BFLh1zg.jpeg)
![Movie Detail Page](https://i.imgur.com/Q5VGZF5.png)

## Screenshots from Smaller Screens
<p align="middle">
  <img src="https://i.imgur.com/FiXlQNd.png" width="49.5%" />
  <img src="https://i.imgur.com/QKqOaei.png" width="49.5%" />
</p>
