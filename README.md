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

The detail information see in the [documentation](https://github.com/nbirillo/coding-assistant-server/wiki).

---

## Getting started

Do the following steps:

1. Download the repository.
2. Run [MongoDB](https://www.mongodb.com/). It can works on the `localhost:27017`.
3. Run `npm install` command from the root folder to install the necessary packages.
4. Run `npm start` command from the root folder. It will works on the `localhost:3000`.

---

## Usage

The section describes the models and routes in the server. The full description see in the [documentation](https://github.com/nbirillo/coding-assistant-server/wiki/API). 

### Task

The model stores _tasks_ from the [codetracker](https://github.com/JetBrains-Research/codetracker) plugin.

#### Model

Field | Type | Description
---   | --- | ---
**key**      |  String          | the task key. It must be unique
**examples** |  List of objects | list of the examples of code. Each item has two fields: **input** (type - `String`) and input (**output** - `String`) 
**en**       |  Object          | detail description for the task in English
**...**      |  Object          | detail description for the task in the _different_ languages

Available languages:

- **en** - English
- **ru** - Russian

**Note**: you can add a new language. See [documentation](https://github.com/nbirillo/coding-assistant-server/wiki/API:-Task#add-new-language).

#### Routes

URL | Type | Description
---   | --- | --- 
`/api/task`     | `POST`    | create a new task in the database
`/api/task/all` | `GET`     | get all tasks
`/api/task/:key`| `GET`     | get task by key
`/api/task/:key`| `DELETE`  | delete task by key

**Note**: you can see more information. See [documentation](https://github.com/nbirillo/coding-assistant-server/wiki/API:-Task#routes).


### Data item

The model stores _user files_ from the [codetracker](https://github.com/JetBrains-Research/codetracker) plugin.

#### Model

Field | Type | Description
---   | --- | ---
**id** |  [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/)  |  internal **MongoDB** id
**externalDiId** |  Integer | external id
**codePath** |  String | path for the _user file_
**activityTrackerKey** |  String | external _activity-tracker id_

#### Routes

URL | Type | Description
---   | --- | --- 
`/api/data-item`    | `POST` | create a new data-item in the database
`/api/data-item/all`| `GET`  | get all data-items
`/api/data-item/:id`| `GET`  | get data-item by external id

**Note**: you can see more information. See [documentation](https://github.com/nbirillo/coding-assistant-server/wiki/API:-Data-item#routes).


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

**Note**: you can see more information. See [documentation](https://github.com/nbirillo/coding-assistant-server/wiki/API:-Activity-tracker-item#routes).
