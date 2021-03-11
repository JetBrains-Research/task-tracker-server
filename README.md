# Table of Contents

- [TaskTracker Server](#tasktracker-server)
  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Models](#models)
    - [Data item](#data-item)    
    - [Activity tracker item](#activity-tracker-item)    


# TaskTracker Server

A server for interaction with the [TaskTracker](https://github.com/JetBrains-Research/task-tracker-plugin) plugin.

The detail information see in the [documentation](https://github.com/nbirillo/task-tracker-server/wiki).

---

## Requirements

1. [MongoDB](https://www.mongodb.com/)
2. [Node.js](https://nodejs.org/en/)
3. [npm](https://www.npmjs.com/)

---

## Getting started

Do the following steps:

1. Download the repository.
2. Run [MongoDB](https://www.mongodb.com/). It has to work on the `localhost:27017`.
3. Run `npm install` command from the root folder to install the necessary packages.
4. Run `npm start` command from the root folder. It will works on the `localhost:3000`.

If everything is done correctly, you will see the following message:

<img src="images/server_running_example.png" width="800">

---

## Usage

To generate a database for the [TaskTracker](https://github.com/JetBrains-Research/task-tracker-plugin) plugin
send the `POST` query: `<path_to_your_server>/api/database-generator/task-tracker`.

**Note:** the default `<path_to_your_server>` is `localhost:3000`.

The data for the database can be found [here](/configs/task-tracker-sources).
You can change data before sending the query.

_Note:_ the query can be sent by using [Postman](https://www.postman.com/) tool. An example with the query is:

<img src="./images/postman_example.png">

---

## Models

The section describes the models and routes in the server. 
The full description for all models see in the [documentation](https://github.com/nbirillo/task-tracker-server/wiki/API).

### Data item

The model stores _user files_ from the [TaskTracker](https://github.com/JetBrains-Research/task-tracker-plugin) plugin.

#### Model

Field | Type | Description
---   | --- | ---
**id** |  [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/)  |  internal **MongoDB** id
**externalDiId** |  Integer | external id
**codePath** |  String | path for the _user file_ in the server
**activityTrackerKey** |  String | external _activity-tracker id_

#### Routes

URL | Type | Description
---   | --- | --- 
`/api/data-item`    | `POST` | create a new data-item in the database
`/api/data-item/all`| `GET`  | get all data-items
`/api/data-item/:id`| `GET`  | get data-item by external id

**Note**: you can see more information. See [documentation](https://github.com/nbirillo/task-tracker-server/wiki/API:-Data-item#routes).


### Activity tracker item

The model stores _activity-tracker files_ from the [codetracker](https://github.com/JetBrains-Research/codetracker) plugin.

#### Model

Field | Type | Description
---   | --- | ---
**id** |  ObjectId  |  internal [MongoDB id](https://docs.mongodb.com/manual/reference/method/ObjectId/)
**externalAtiId** |  Integer | external id
**codePath** |  String | path for the _activity tracker file_ in the server

#### Routes

URL | Type | Description
---   | --- | --- 
`/api/activity-tracker-item`    | `POST` | create a new activity-tracker-item in the database
`/api/activity-tracker-item/all`| `GET`  | get all activity-tracker-items
`/api/activity-tracker-item/:id`| `GET`  | get activity-tracker-item by external id

**Note**: you can see more information. See [documentation](https://github.com/nbirillo/task-tracker-server/wiki/API:-Activity-tracker-item#routes).
