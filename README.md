Fibanocci Clock
===============

<div id="outerBox" align="center" style="width:320px"><a href="http://fibonacciclock-ranji2612.rhcloud.com/" target="_blank" style="text-decoration: none;"><canvas id="myCanvas" width="800" height="500" style="border:0px solid #EEE;">Your browser does not support the HTML5 canvas tag.</canvas><strong>Fibonacci Clock</strong></a></div><script src="http://fibonacciclock-ranji2612.rhcloud.com/fillColor.js" type="text/javascript"></script>

Time shown in a geeky fibonacci clock. A fun, geeky and an awesome way of showing time.

>Hosted at http://fibonacciclock-ranji2612.rhcloud.com/

Inspired from
-----------------
Physical version of this clock by **Philippe Chrétien** in KickStarter 
[**Fibonacci Clock - An open source clock for nerds with style**](https://www.kickstarter.com/projects/basbrun/fibonacci-clock-an-open-source-clock-for-nerds-wit)


How it works
------

As the FIbonacci Number goes 1,1,2,3,5 .. There are these blocks, which add up to a max of 12. And each squares represent the value corresponding to its size.

Colors are used for distingush the squares used for the hours and minutes. So what if a square is used for both, well we give a common color which represents that its used for both. The color chart is below.

| Color | Represents |
|-----------|-------------|
| Red | Hours |
| Green | Minutes |
| Blue | Used in Both |

Examples
--------
A few examples to make it much clear .

Say, the time is *4:30* (oh, yes it cant distinguish AM/PM)

Hours 3 + 1 and for minutes its 5 + 1 (in an analog clock, the minute arm will be at 6. So basically the Min/5)
So we can have the same 1 being used for both Hours and Mins so the final colors would be
> 3 - Red, 1 - Blue, 5 - Green
