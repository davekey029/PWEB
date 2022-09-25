any: x1, y1, x2, y2;


export function calcDist() {
   var d = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y1 - y2, 2));
   console.log(d);
}
