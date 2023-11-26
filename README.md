# Board-contracts [WIP]

![image](https://github.com/kaczorowskid/commits/assets/57078565/6264ca5f-c681-4cde-b5ff-ba8f981ed46d)

It is a combination of jira and trello. The application consists of 4 subsections
- dashboard
- board list
- board
- calendar

## Dashboard

| **Light theme**                                        | **Dark theme**                                        |
| ------------------------------------------------- | ------------------------------------------------ |
| <img width="590" alt="Light IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/d291c313-e81b-42b9-98d4-9514521f0027"> | <img width="590" alt="Dark IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/6ba83e00-70ec-483b-b83a-c86cc8bff120"> |


The dashboard displays all the most necessary information such as:
- recen tickets
- recent boards
- statistics
- calendar
- notes

It gives the user the opportunity to check all the latest information.

## Boards

| **Light theme**                                        | **Dark theme**                                        |
| ------------------------------------------------- | ------------------------------------------------ |
| <img width="590" alt="Light IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/b97f19f4-102e-4104-a3e6-760f67a33ce0"> | <img width="590" alt="Dark IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/c04e74c5-e089-45e6-88de-74db2b746d97"> |

The `boards` subsection displays all the boards that the user has set up (those that he sharers with other users too). He has the ability to edit the names and also the descriptions of each board. This view includes pagination


## Board
This view contains task boards, where you can move tasks between columns (drag and drop), add new tasks, edit existing tasks and also delete tasks. Each task must have a name, and a priority (a description is not required). In addition, under each task it is possible to write comments (having discussions with other users)
| **Light theme**                                        | **Dark theme**                                        |
| ------------------------------------------------- | ------------------------------------------------ |
| <img width="590" alt="Light IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/5049e84d-6f9b-4d5c-ab02-9cd3dc58d34e"> | <img width="590](https://github.com/kaczorowskid/commits/assets/57078565/7de83f0b-d980-4e2a-9b7a-95f4a3b7b160)" alt="Dark IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/719b069b-33ac-44af-89c2-fb621dc728b9"> |
| <img width="590" alt="Light IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/e60fdafc-e95a-4774-85cb-65e245f7143b"> | <img width="590](https://github.com/kaczorowskid/commits/assets/57078565/7de83f0b-d980-4e2a-9b7a-95f4a3b7b160)" alt="Dark IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/664e35cf-ed55-4ada-afd9-6be01de19cf6"> |

## Calendar
In this view, it is possible to add notes to each day of the current month, edit them, delete them, and set them as done/in progress

| **Light theme**                                        | **Dark theme**                                        |
| ------------------------------------------------- | ------------------------------------------------ |
| <img width="590" alt="Light IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/29a4b011-cc21-45a7-8019-ee53bbaadccf"> | <img width="590" alt="Dark IMG Preview" src="https://github.com/kaczorowskid/commits/assets/57078565/d39be511-9383-453b-b11a-ed41d3961f04"> |


# How to run

In the project directory, you can run:

### `npm install`

to install the dependencies.

### `npm start`

to run the app in the development mode at [http://localhost:3000](http://localhost:3000)<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## In project I used:

- Typescript
- React
- Zustand
- Styled-components
- React-Query
- React-router-dom
- Antd


# TODO
- RWD
- Adding tests
- Refactoring of selected components
