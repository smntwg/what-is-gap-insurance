(function () {
  var config = window.GAP_AFFILIATE || {};
  var label = String(config.label || "Compare gap insurance quotes").trim();
  var href = String(config.href || "").trim();
  var note = String(config.note || "").trim();
  var disclosure = String(config.disclosure || "").trim();
  var emptyState = config.emptyState === "hidden" ? "hidden" : "neat";
  var valid = /^https?:\/\/\S+$/i.test(href);
  var slots = document.querySelectorAll("[data-affiliate]");

  slots.forEach(function (slot) {
    if (!label || (!valid && emptyState === "hidden")) {
      slot.hidden = true;
      slot.replaceChildren();
      return;
    }

    var inner = document.createElement("div");
    inner.className = "affiliate-inner";

    var title = document.createElement("p");
    title.className = "affiliate-title";
    title.textContent = label;
    inner.appendChild(title);

    if (valid) {
      var link = document.createElement("a");
      link.className = "affiliate-button";
      link.href = href;
      link.textContent = label;
      link.rel = "sponsored noopener noreferrer";
      link.target = "_blank";
      inner.appendChild(link);
      if (disclosure) {
        var disclosureNode = document.createElement("p");
        disclosureNode.className = "affiliate-note";
        disclosureNode.textContent = disclosure;
        inner.appendChild(disclosureNode);
      }
    } else {
      var noteNode = document.createElement("p");
      noteNode.className = "affiliate-note";
      noteNode.textContent = note || "Comparison links are not available on this page yet.";
      inner.appendChild(noteNode);
    }

    slot.hidden = false;
    slot.replaceChildren(inner);
  });
})();
