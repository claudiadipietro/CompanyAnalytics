# Company Analytics - Jump2Digital Hackathon 2022

## Background

This project was created to participate in the hackathon [Jump2Digital 2022](https://nuwe.io/dev/challenges/jump2digital2022-backend), with the backend challenge.

The tech stack used for this project is:
- NodeJS
- JavaScript
- MongoDB
- Express
- Mongoose

## Usage

The companies are stored in a local MongoDB database. It has three endpoints to retrieve the companies information, which are:

- http://localhost:8080/api/returnBySize: this endpoint returns in ascending order the companies by their size, from bigger to smaller.
- http://localhost:8080/api/returnByCreationDate: this endpoint returns in ascending order the companies creation date, from the newest company to the oldest.
- http://localhost:8080/api/summary: this endpoint returns the summary of the companies by industry, by range of size and by range of creation date.

## Installation

- The first step is to clone the repository 
```shell
git clone https://github.com/claudiadipietro/CompanyAnalytics.git
```
- Then, to install the dependencies a npm install must be done in the terminal of the project
```shell
 npm install
```
Finally, to run the server:
```shell
 npm run start
```
## License

[MIT](https://opensource.org/licenses/MIT)