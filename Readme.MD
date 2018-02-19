# SHRED-BOX

Multiplayer music game, that displays random array of four colour, waits for input, then updates lives and score accordingly. This game designed to test memory and accuracy. 
This game uses a component based React framework. The application uses Streamy.js in conjunction with Meteor to allow users to recieve async data and play simultaneously.
![Alt text](/public/Screenshot.png "Preview Picture")

## Getting Started

Download or clone github files.
Run:
* npm install 
* meteor
* meteor npm install --save @babel/runtime
* localhost:3000 in your browser
Click 'sign in' and enter your email and password

## Playing Multiplayer

Locally: Open a regular browser window and an icognito window. Go to localhost 3000 on each window. Click start on both. The screens will update seperatly and share the same score and lives.
Seperate computers: 
Install localtunnel:
* npm install -g localtunnel
* lt --port 8000
Follow the url given you you and sign in on multiple clients.
Click start and play together.

### Playing

Click 'Start'
Wait for the intro song to play, and wait for the preview icons to appear in the upper left corner. You will have 4 seconds to repeat the input before it changes! Click the drum pad buttons in the correct order. Dont miss and dont click twice! Find your rhythm and try to set a new high score.
If you love, click reset, then start to try again.

### Future goals

Moving forward we plan on hosting this app online so it can be played without a git download. We are also interested in a decreasing time interval per turn. A function to highlight the current correct choice is also under works.

## Built With

* [Meteor]
* [React]
* [javascript]
* [streamy]
* [CSS]
* [HTML]

## Authors

* **Qingxin Yuan**
* **Sean Stobo**
* **Nicholas Johnston**
* **Michael Kim**

## Acknowledgments


* Thanks to our instructors for their guidance
* Streamy author Yuukan00 and his/her github repo at https://github.com/YuukanOO/streamy
* Thank you to the React and Meteor teams for their continued hard work