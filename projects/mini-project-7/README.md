My take on this assignment is a fun mystical forest!

Instead of using a flexbox to hold the generated items, I used `position:absolute` and randomized X and Y coordinates to stack them on top of each other. I thought this would create a satisfying feeling of going deeper and deeper into a forest, being surrounded by trees.

There were some features I needed to use in this project that I wasn't familiar with before, but since this is vanilla JavaScript, it was easy enough to pick up after checking online. Some of these include my use of `Math.round(Math.random())` to randomly place the images, and the way I generated four different types of trees. To accomplish this, I used a `for` loop that would repeat based on the number entered, and spawn images based on if the diminishing variable was divisible by 1, 2, 3, or 4.

Live version is [here](https://edb394.github.io/abc-student-repo/projects/coding-foundation/)!
