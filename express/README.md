# Mini Express

1. Create database in mysql
```
CREATE DATABASE stockbit;
```
2. Create table in mysql inside stockbit db
```
CREATE TABLE logger (id int PRIMARY KEY NOT NULL AUTO_INCREMENT, createdAt datetime, endpoint varchar(255), parameters varchar(255));
```
3. Run this in terminal
```
npm install -g nodemon
npm install
npm start
```
4. Open postman or something and run this api
```
http://localhost:5000/search?filmName=Batman

for this filmName is required and you can pass anything

http://localhost:5000/detail/tt0372784

for this is detail/filmId, filmId is coming from the first api that you get the response it called imdbID
```
