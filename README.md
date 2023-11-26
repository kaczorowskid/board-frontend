# Board-frontend [WIP]


![image](https://github.com/kaczorowskid/board-frontend/assets/57078565/d698b4be-3211-4a29-920d-3cba4f1b9d11)

It is a combination of jira and trello. The application consists of 4 subsections
- dashboard
- board list
- board
- calendar


## Dashboard

### Light theme:
![image](https://github.com/kaczorowskid/board-frontend/assets/57078565/48a35f46-283d-4754-8382-88e0a80afd4f)

### Dark theme
![image1](https://github.com/kaczorowskid/board-frontend/assets/57078565/29c926e5-0484-4476-b9d6-f64bf889b2f9)

The dashboard displays all the most necessary information such as:
- recen tickets
- recent boards
- statistics
- calendar
- notes

It gives the user the opportunity to check all the latest information.


## Boards

### Light theme
![image](https://github.com/kaczorowskid/board-frontend/assets/57078565/c934f8c5-e403-4dd6-b1aa-74ff9bba37f3)

### Dark theme
![image1](https://github.com/kaczorowskid/board-frontend/assets/57078565/1edb5fbe-dd0d-4bee-a70a-186b0d6cd9f1)

The `boards` subsection displays all the boards that the user has set up (those that he sharers with other users too). He has the ability to edit the names and also the descriptions of each board. This view includes pagination


## Board
This view contains task boards, where you can move tasks between columns (drag and drop), add new tasks, edit existing tasks and also delete tasks. Each task must have a name, and a priority (a description is not required). In addition, under each task it is possible to write comments (having discussions with other users)

### Light theme
![image](https://github.com/kaczorowskid/board-frontend/assets/57078565/27a67107-d84f-4718-9418-a609c1e5ddd3)

### Dark theme
![image1](https://github.com/kaczorowskid/board-frontend/assets/57078565/c1a93e9a-cfe7-4fb9-9eb1-abb1f000d3bd)


### Filter light theme
![image3](https://github.com/kaczorowskid/board-frontend/assets/57078565/f4f91b17-6e03-4323-a7b8-21b8245d903e)

### Filter dark theme
![image2](https://github.com/kaczorowskid/board-frontend/assets/57078565/716881b5-8b82-46fb-86ad-ef39ec1119d4)


## Calendar
In this view, it is possible to add notes to each day of the current month, edit them, delete them, and set them as done/in progress

### Light theme
![image](https://github.com/kaczorowskid/board-frontend/assets/57078565/dc9d3030-4371-4b3c-8d81-702f45a6379a)

### Dark theme
![image1](https://github.com/kaczorowskid/board-frontend/assets/57078565/a4b2388a-031c-4597-a884-fa7d96d2513d)


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
- Refactor DragAndDrop component (use ContextAPI, to avoid props drilling)
- Refactoring of selected components
