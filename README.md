# Hobby Garden

A locally hosted app where your hobbies grow as flowers. The more time you spend on something, the bigger and more detailed its flower becomes.

## Running it

You need [Node.js](https://nodejs.org) installed (no extra packages needed).

```bash
node server.js
```

Then open **http://localhost:3000** in your browser.

Press `Ctrl+C` in the terminal to stop the server.

## Data

Everything is saved to `data.json` in this folder. It's plain JSON — you can back it up, copy it to another machine, or open it in any text editor.

## Features

- **Flowers grow** based on total time logged — 6 stages from seed to flourishing bloom
- **Each flower is unique** — petal shape, pattern, and center style are generated from the hobby's ID and revealed as it blooms
- **Timer** — built-in Pomodoro-style timer with free, 25m, 45m, 50m, and 1h modes; plays a chime and logs the session automatically when a countdown finishes
- **Manual logging** — log hours and minutes directly without using the timer
- **Session history** — see every watering session per hobby with the option to delete individual entries
- **Activity log** — write notes on what you did each session, stored per hobby
- **Wins tracker** — log small victories and milestones for each hobby
- **40h goal system** — progress tracks toward 40 hours; on completion you're prompted to spawn the next generation of the same flower as a fresh bud
- **Drag to reposition** — click and drag any flower to move it anywhere in the garden; position saves automatically
- **Compare view** — standalone comparison panel with four chart types: total hours (bar), hours over time (line), heatmap (GitHub-style activity grid), and goal progress (bar toward 40h per hobby)

## Growth stages

| Hours | Stage |
|-------|-------|
| 0 | Seed |
| < 2h | Sprout |
| 2–10h | Seedling |
| 10–40h | Budding |
| 40–120h | Blooming |
| 120h+ | Flourishing |

Flower patterns (petal shape, streaks, spots, bicolor, tip color) unlock at the Budding stage.

## Controls

- **Click** a flower — open its detail modal to log time, start a timer, or write notes
- **Click and drag** a flower — reposition it in the garden (position saves automatically)
- **+ Add hobby** button — create a new flower with a name and color
- **⚖ Compare** button — open the comparison panel across all hobbies
