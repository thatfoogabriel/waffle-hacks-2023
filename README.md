# nEARby 
### WaffleHacks 2023 Accessibilty Category

Team Members:
Gabriel Soto,
Giselle Avila,
Aisling Gonzalez,
Shavleen Singh

## Description

nEARby is a map-based web app designed to aid both deaf people and deaf-friendly establishments, services, and attractions in Los Angeles County. People with disabilities, and even those without them, can use nEARby to find sign language interpreters, businesses with deaf-friendly accommodations, and even ASL social events organized by non-profits.

## Technologies

- ReactJS
- ExpressJS
- MySQL

## Requirements

- NodeJS

## Installation

Open Folder in a Terminal and Write:

`C:\...\waffle-hacks-2023> cd client`

`C:\...\waffle-hacks-2023\client> npm install`

### Installs node dependencies in Client Folder

`C:\...\waffle-hacks-2023\client> cd ..`

`C:\...\waffle-hacks-2023> npm install`

### Installs node dependencies in the root folder

`C:\...\waffle-hacks-2023> npm install`

### Finally, run `npm start` from root folder to execute

## Design

Client-Server Model
### Client:
- Web Page Display
- Routing
- User Input Collection
- HTTP Requests to Server

### Server:
- User Input Processing
- Building and Exceution of SQL queries
- Retrieval of Business/Event Info
- HTTP Responses to Client

### Database:
- Single Business/Event Table
- Info Held In One Row

## Future Changes
- Finish Styling
- Add User Profiles with Sign Up/Login
- Bookmarks, Notifications
- Improve Map Points Visually to Help Differetiation
- Map Filters
- Dark Mode, Colorblind Modes

# Thoughts/Lessons Learned
### Inspiration:
During our discussion of what theme we wanted to do for the project, we needed help finding something that clicked. Then One of our team members mentioned that they took American Sign Language at her local community college. They emphasized the importance of raising awareness of Deaf culture and promoting events. Then we clicked to create a map-based website to raise awareness of upcoming events in the deaf community and promote deaf-friendly establishments and services.

### What it does:
We aim to develop a map-based app that raises awareness of Deaf-friendly establishments, services, and attractions in a given area. Travelers can use this app to find sign language interpreters, Deaf-friendly accommodations, restaurants with Deaf staff, and other accessible facilities.

### How we built it:
We started designing in Figma to nail down our ideas and make the implementation smoother. We collected data on deaf-friendly establishments, services, and social events into a spreadsheet, then into a database. We built our website using React, and once we worked out the routing between pages, we started building our designs.

### Challenges we ran into:
We first used Google's free MyMaps since it could import data from Google Sheets, but we needed help to track when or where a user clicks on the embedded map on the website. So we started over using Google's Javascript Map API, which we were unfamiliar with but could do what is needed we needed. We also ran into time issues since our work schedules conflicted. We are beginners in web development and could have spent a few more days figuring out how a flexbox works.

### Accomplishments that we're proud of:
We accomplished our first hackathon with a product that works! ...mostly. Using Figma, Kanban, and GitHub helped our asynchronous collaboration and navigated our scheduling issues.

### What we learned:
We learned what goes into making a simple website, from designing, researching, implementing, and especially debugging pain. We also learned to work in a team on a tech project with a short time limit.

### What's next for nEARby:
We hope to pretty up the site and implement the rest of our designs to one day make the site publicly available and start helping the deaf community.
