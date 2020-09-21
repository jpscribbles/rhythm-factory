var w = 750,
    h = 600,
    p = 5.5,
    r = w / 20 - 2 * p,
    fill = d3.scale
.ordinal()
.range(["#000", "#fff", "#00f", "#0f0", "#f00"]
.concat(d3.scale.category20().range()));

var svg = d3.select("#vis").append("svg")
    .attr("width", w + 2 * p)
    .attr("height", h + 2 * p);

svg.append("g")
    .attr("transform", "translate(" + [r + p, r + p] + ")");

d3.selectAll("#n, #k, #b")
    .on("change", changeHandler(update))
    .on("click", changeHandler(update));

update();

function changeHandler(action) {
  return function() {
    var a = "value",
        b = "defaultValue";
    if (this.type === "checkbox") {
      a = "checked";
      b = "defaultChecked";
    }
    if (this[a] === this[b]) return;
    action();
    this[b] = this[a];
  };
}

function update() {
  var n = +d3.select("#n").property("value"), // number of beads
      k = +d3.select("#k").property("value"); // number of colours

fill.domain(d3.range(k));

  var data = fkm(n, k);

  var necklace = svg
      .attr("height", Math.ceil(data.length / 10) * (2 * r + 4 * p) + r)
    .select("g").selectAll("g")
      .data(data, function(d) { return d.join(""); });
  necklace.enter().append("g")
    .append("circle")
      .attr("cy", r)
      .attr("r", r);
  necklace.exit().remove();
  necklace.attr("transform", function(d, i) { return "translate(" + (2 * r + 4 * p) * (i % 10) + "," + (2 * r + 4 * p) * ~~(i / 10) + ")"; })
  var bead = necklace.selectAll("circle.bead")
      .data(Object);
  bead.enter().append("circle")
      .attr("class", "bead")
      .attr("r", 5);
  bead.exit().remove();
  bead.attr("transform", function(d, i) { return "rotate(" + i * 360 / n + " " + [0, r] + ")"; })
      .style("fill", fill)
  d3.select("#count").text(data.length);
}

// Generate all necklaces of length n from alphabet [0, …, k - 1].
// Algorithm due to Fredricksen, Kessler and Maiorana.
function fkm(n, k) {
  var necklaces = [],
      a = [],
      i = -1,
      j;
  while (++i < n) a[i] = 0;
  necklaces.push(a.slice());
  while (1) {
    i = n;
    while (--i >= 0) if (a[i] < k - 1) break;
    if (i < 0) break;
    a[j = i++]++;
    while (++j < n) a[j] = a[j % i];
    if (n % i === 0) necklaces.push(a.slice());
  }
  return necklaces;
}


