# Analog Clock
A analog clock built with JavaScript, HTML and CSS. Display time into your local time zone.

# Usage

Use this `link` tag into your html between `<head></head>` section:
```
<link rel="stylesheet" href="./includes/stylesheets/analog-clock-v1.0.0.css">
```

Use this `script` tag before your html `</body>` section:
```
<script src="./analog-clock-html-proto-v1.0.0.js"></script>
```

## include into your javascript project
Use `require` method to include into your Node project:
```
const analogClock = require('./analog-clock-v1.0.0');
```

Call the clock function
```
const theclock = analogClock();
```

Get the time and date
```
const theTime = theclock.time;
const theDay = theclock.date;
```

Use as per your needs. I.e. log them:
```
console.log(theTime());
console.log(theDay());
```

# Live URL
<a href="https://shrikumarinfotech.github.io/analog-clock/">https://shrikumarinfotech.github.io/analog-clock/</a>