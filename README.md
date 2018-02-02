Provides a simple solution for the dragging questions

This exercise took between 2 and 3 hours, but I did not keep track of the time.

RUNNING
=======
* npm install
* npm start

SOLUTION
========
The premise of the answer is as follows:
* At drag start, record the index and the initial y location.
* At drag end, use the new y location to find the change in y position.
* Divide the y-delta by the total height of a question to find the change in index
* Splice the moved element into the array
* Update Component state

ASSUMPTIONS
===========
* All questions have the same dimensions
* If this were not true, this simple solution would not work, but perhaps it could be modified.

OUTSIDE LIBRARIES
=================
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* Several draggable libraries are recommended for React, but I followed the task instruction to ignore them.
