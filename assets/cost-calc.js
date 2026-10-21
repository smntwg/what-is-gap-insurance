(function () {
  var root = document.getElementById("gap-cost-calc");
  if (!root) return;
  var years = document.getElementById("gc-years");
  var quote = document.getElementById("gc-quote");
  var out = document.getElementById("gc-out");
  var LOW3 = 100, HIGH3 = 300, FCA_AVG = 330, FCA_MONTHS = 36;

  function gbp(n) {
    return "£" + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function gbp0(n) {
    return "£" + Math.round(n).toLocaleString("en-GB");
  }
  function row(label, value) {
    return '<div class="calc-row"><span>' + label + "</span><strong>" + value + "</strong></div>";
  }

  function render() {
    var y = parseInt(years.value, 10) || 3;
    var months = y * 12;
    var low = LOW3 * y / 3, high = HIGH3 * y / 3;
    var html = '<p class="calc-head">Rough guide range for ' + y + (y === 1 ? " year" : " years") + "</p>";
    html += row("Whole policy", gbp0(low) + " to " + gbp0(high));
    html += row("Per year", gbp(low / y) + " to " + gbp(high / y));
    html += row("Per month", gbp(low / months) + " to " + gbp(high / months));

    var raw = String(quote.value || "").trim();
    if (raw !== "") {
      var q = Number(raw);
      if (!isFinite(q) || q <= 0) {
        html += '<p class="err" role="alert">Enter the total price of the quote in pounds, for example 250.</p>';
      } else {
        var verdict;
        if (q < low) verdict = "below the rough guide range for this length of cover. Check the claim limit and cover type match what you need.";
        else if (q <= high) verdict = "inside the rough guide range for this length of cover.";
        else verdict = "above the rough guide range for this length of cover. Ask why, and get a standalone quote for the same cover to compare.";
        html += '<p class="calc-head">Your quote</p>';
        html += row("Per year", gbp(q / y));
        html += row("Per month", gbp(q / months));
        html += '<p class="calc-verdict">' + gbp(q) + " is " + verdict + "</p>";
        var fcaMonthly = FCA_AVG / FCA_MONTHS;
        var qMonthly = q / months;
        html += '<p class="calc-verdict">For reference, the FCA\u2019s 2022 market average of ' + gbp0(FCA_AVG) + " over about " + FCA_MONTHS + " months is " + gbp(fcaMonthly) + " a month. Your quote is " + (Math.round(qMonthly * 100) === Math.round(fcaMonthly * 100) ? "the same as that per month" : (qMonthly > fcaMonthly ? "more than that per month" : "less than that per month")) + ".</p>";
      }
    }
    out.innerHTML = html;
  }

  root.querySelector("form").addEventListener("submit", function (e) { e.preventDefault(); render(); });
  years.addEventListener("change", render);
  quote.addEventListener("input", render);
  render();
})();
