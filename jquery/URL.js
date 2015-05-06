// JavaScript Document Gmap URL_JS
function GetQuadtreeAddress(long, lat)
{
var PI = 3.1415926535897;
var digits = 18; // how many digits precision
// now convert to normalized square coordinates
// use standard equations to map into mercator projection
var x = (180.0 + parseFloat(long)) / 360.0;
var y = -parseFloat(lat) * PI / 180; // convert to radians
y = 0.5 * Math.log((1+Math.sin(y)) / (1 - Math.sin(y)));
y *= 1.0/(2 * PI); // scale factor from radians to normalized
y += 0.5; // and make y range from 0 - 1
var quad = "t"; // google addresses start with t
var lookup = "qrts"; // tl tr bl br
while (digits–)
{
// make sure we only look at fractional part
x -= Math.floor(x);
y -= Math.floor(y);
quad = quad + lookup.substr((x >= 0.5 ? 1 : 0) + (y >= 0.5 ? 2 : 0), 1);
// now descend into that square
x *= 2;
y *= 2;
}
return quad;
}