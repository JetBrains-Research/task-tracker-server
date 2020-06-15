# Table of Contents

- [Coding Assistant Server](#coding-assistant-server)
  - [Getting started](#getting-started)
  - [Usage](#usage)
    - [Task](#task)    
    - [Data item](#data-item)    
    - [Activity tracker item](#activity-tracker-item)    


# Coding Assistant Server

A server for the [Coding Assistant](https://github.com/JetBrains-Research/codetracker-data) project. The main goal of 
the server is data gathering for the [codetracker](https://github.com/JetBrains-Research/codetracker) plugin.

---

## Getting started

Do the following steps:

1. Download the repository.
2. Run [MongoDB](https://www.mongodb.com/).
3. Run `npm install` command to install the necessary packages.
4. Run `npm start`. It will works on the `localhost:3000`.

---

## Usage

The section describes the models and routes in the server.  

### Task


**TODO: add task**


### Data item

The model stores _user files_ from the [codetracker](https://github.com/JetBrains-Research/codetracker) plugin.

#### Model

Field | Type | Description
---   | --- | ---
**id** |  ObjectId  |  internal [MongoDB id](https://docs.mongodb.com/manual/reference/method/ObjectId/)
**externalDiId** |  Integer | external id
**codePath** |  String | path for the _user file_
**activityTrackerKey** |  String | external _activity-tracker id_

#### Routes

URL | Type | Description
---   | --- | --- 
`/api/data-item`    | `POST` | create a new data-item in the database
`/api/data-item/all`| `GET`  | get all data-items
`/api/data-item/:id`| `GET`  | get data-item by external id


### Activity tracker item

The model stores _activity-tracker files_ from the [codetracker](https://github.com/JetBrains-Research/codetracker) plugin.

#### Model

Field | Type | Description
---   | --- | ---
**id** |  ObjectId  |  internal [MongoDB id](https://docs.mongodb.com/manual/reference/method/ObjectId/)
**externalAtiId** |  Integer | external id
**codePath** |  String | path for the _activity tracker file_

#### Routes

URL | Type | Description
---   | --- | --- 
`/api/activity-tracker-item`    | `POST` | create a new activity-tracker-item in the database
`/api/activity-tracker-item/all`| `GET`  | get all activity-tracker-items
`/api/activity-tracker-item/:id`| `GET`  | get activity-tracker-item by external id
`/api/activity-tracker-item/:id`| `PUT`  | replace activity-tracker `codePath`

