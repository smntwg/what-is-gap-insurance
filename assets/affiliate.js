(function () {
  var config = window.GAP_AFFILIATE || {};
  var label = String(config.label || "Compare gap insurance quotes").trim();
  var note = String(config.note || "If you buy cover, use a provider on the FCA register and read the policy before you pay.").trim();
  var slots = document.querySelectorAll("[data-affiliate]");

  slots.forEach(function (slot) {
    if (!label && !note) {
      slot.hidden = true;
      slot.replaceChildren();
      return;
    }

    var inner = document.createElement("div");
    inner.className = "affiliate-inner";

    if (label) {
      var title = document.createElement("p");
      title.className = "affiliate-title";
      title.textContent = label;
      inner.appendChild(title);
    }

    if (note) {
      var noteNode = document.createElement("p");
      noteNode.className = "affiliate-note";
      noteNode.textContent = note;
      inner.appendChild(noteNode);
    }

    slot.hidden = false;
    slot.replaceChildren(inner);
  });
})();
