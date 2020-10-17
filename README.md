# PGNScoreboardAssistant
Stream overlay for Poly Gaming Network tournaments. For use on http://8wr.io/

# Setup

## Package

Put the CSS and JS scripts found in the `/package` folder into the respective windows.

## Pages

Put the HTML, CSS, and JS scripts found in the `/pages` folder into the respective pages.

### Versus

The versus page displays player names, scores, and the round of the tournament.

#### Fields

The versus page has a number of fields. Set them up like so:

![Versus page field setup](https://raw.githubusercontent.com/DrEvilBrain/PGNScoreboardAssistant/master/VersusPageFields.png "Versus page field setup")

```
Round counter (used to keep track of what round the tournament is on):
    Key: round
    Type: Text field

Player names and scoreboard (used to keep track of the score):
    Key: player
    Type: Scoreboard
    Show clear/reset buttons: On

Copy match info to clipboard (used to quickly grab match info for Twitter):
    Key: info
    Type: Clipboard
    Database: {event_1} - {game_1} {round_1} - {player_1} VS {player_2}

Game name (used to set the game name for match info):
    Key: game
    Type: Text field

Event name (used to set the event name for match info):
    Key: event
    Type: Text field

Show Matcherino (used to show the bottom bar with the Matcherino code + prize pool):
    Key: showMatcherino
    Type: Select menus

Matcherino Page ID (the numeric identifier in the URL of a Matcherino event page):
    Key: matcherino
    Type: Text field

Matcherino Coupon (the sponsor code used to contribute to the the Matcherino prize pool):
    Key: coupon
    Type: Text field
```
## Color Palette

The PGN stream overlay uses the [official NYU color palette](https://www.nyu.edu/employees/resources-and-services/media-and-communications/styleguide/website/graphic-visual-design.html). To match this, the following should be set as your scoreboard package's palette:

```
var(--font-color): rgb(255, 255, 255)

var(--border-color): rgb(0, 0, 0)

var(--main-color1): rgb(87, 46, 140)

var(--main-color2): rgb(54, 0, 88)

var(--main-color3): rgb(20, 2, 38)
```
## Font

The PGN stream overlay uses Noto Sans because the license for Gotham Bold (the font NYU uses) is stupidly expensive.

## Images

Included in `/img` is a PGN logo for use on stream. Just put it wherever looks best according to each game (usually bottom middle of the screen).
