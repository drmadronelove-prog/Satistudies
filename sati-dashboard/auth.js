/*
 * Simple client-side password gate for the Sati Certificate Program dashboard.
 *
 * NOTE: This is a light deterrent, not real security. A static site has no
 * server to verify passwords, so the check happens in the visitor's browser.
 * Only a SHA-256 hash of the password is stored here (never the password
 * itself), but a determined visitor could still bypass the gate. For real
 * protection, host the site behind server-side auth.
 *
 * TO CHANGE THE PASSWORD:
 *   Run in any browser console (or Node):
 *     crypto.subtle.digest("SHA-256", new TextEncoder().encode("newpassword"))
 *       .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("")))
 *   and paste the resulting hex string into PASSWORD_HASH below.
 */

(function () {
  "use strict";

  var PASSWORD_HASH = "c2e10c20bf46daf0ba03f725218b012544a3d0d3b37334eeb1d4d81e5406e478";
  var STORAGE_KEY = "sati_dashboard_unlocked";

  // Already unlocked this browser session? Skip the gate.
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "yes") return;
  } catch (e) { /* sessionStorage unavailable — show the gate every visit */ }

  document.documentElement.classList.add("locked");

  function sha256Hex(text) {
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return b.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  function buildGate() {
    var gate = document.createElement("div");
    gate.className = "gate";
    gate.innerHTML =
      '<form class="gate-box" aria-labelledby="gate-heading">' +
      '  <p class="gate-name">Sati Center <span>for Buddhist Studies</span></p>' +
      '  <h1 id="gate-heading">Sati Certificate Program</h1>' +
      '  <p class="gate-note">This page is for program participants. Please enter the password to continue.</p>' +
      '  <label class="visually-hidden" for="gate-password">Password</label>' +
      '  <input id="gate-password" type="password" autocomplete="current-password" autofocus required>' +
      '  <button type="submit" class="btn">Enter</button>' +
      '  <p class="gate-error" role="alert" aria-live="assertive"></p>' +
      "</form>";

    var input = gate.querySelector("#gate-password");
    var error = gate.querySelector(".gate-error");

    gate.querySelector("form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      sha256Hex(input.value).then(function (hex) {
        if (hex === PASSWORD_HASH) {
          try { sessionStorage.setItem(STORAGE_KEY, "yes"); } catch (e) { /* ignore */ }
          document.documentElement.classList.remove("locked");
          gate.remove();
        } else {
          error.textContent = "That password is not right. Please try again.";
          input.value = "";
          input.focus();
        }
      });
    });

    document.body.appendChild(gate);
    input.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildGate);
  } else {
    buildGate();
  }
})();
