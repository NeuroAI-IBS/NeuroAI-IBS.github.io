(function () {
  function initEmailLinks() {
    document.querySelectorAll(".email-obfuscated").forEach(function (el) {
      var encoded = el.getAttribute("data-e");
      if (!encoded) return;
      try {
        el.href = "mailto:" + atob(encoded);
      } catch (e) {
        /* ignore invalid data */
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEmailLinks);
  } else {
    initEmailLinks();
  }
})();
