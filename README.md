# Welcome To Gavriels Kanban Board!

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Live server](solution/readMeImages/front.PNG?raw=true 'Live_server')

This project is a task to do list website. Here you can orginize your tasks
and make sure you don't miss on anything important!

Link to the github pages: [Gavriels kanban board](https://gavriel44.github.io/kanban-final/solution/)

### Built With

- html
- javaScript
- css

pay attention - the main files for the project are located in the solution folder.

important files:

- index.html - The base html for the website
- index.js - The js logic
- styles.css - The styles

### Flowchart Diagram

The mane idea behinds my project is the Board class. Every time we update anything on the board we change the board object accordingly and save the current board in the local storage. 
The rendering then happens when we take the data from the board object and render it.
If we refresh the page, we take the localStorage data and create a new instance of the board. this is our board new. we new render it.
that way we can have eny board and be able to render it easily.

the diagram below will help to understand the concept.

![add task](solution/readMeImages/diagram3.PNG?raw=true 'diagram')

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/gavriel44/kanban-final.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. open the index.html file in the browser. I recommend using Live server for that.

   ![Live server](solution/readMeImages/Live_server.JPG?raw=true 'Live_server')

<!-- USAGE EXAMPLES -->

## Usage

We will give a fue examples for using the website. there are more but we wont list them all here.

1. Add task:
   enter the task text in the input off the relevant list and press the add button.

   ![add task](solution/readMeImages/addTask.PNG?raw=true 'add task')

2. Add a new list:
   Enter the new list name in the input and press the add new list button.

   ![add new list](solution/readMeImages/addNewList.PNG?raw=true 'add new list')

3. Delete task:
   press right click on the task and click delete task in the popup context menu.

   ![delete task](solution/readMeImages/deleteTask.PNG?raw=true 'delete task')

4. Use drag and drop to order the tasks as you like.

   ![drag and drop](solution/readMeImages/dragAndDrop.PNG?raw=true 'drag and drop')

5. delete a list.

6. save and load tasks using save and load buttons.

<!-- CONTACT -->

## Contact

Gavriel Frant - email: gavril44@gmail.com

Project Link: [Gavriels kanban board](https://gavriel44.github.io/kanban-final/solution/)
