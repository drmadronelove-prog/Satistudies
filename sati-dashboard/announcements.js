/*
 * Announcements for the Sati Certificate Program dashboard.
 *
 * HOW TO POST A NEW ANNOUNCEMENT:
 *   Add a new object to the TOP of the ANNOUNCEMENTS array below (newest first).
 *   Each announcement has four fields:
 *     date     — a display string, e.g. "July 17, 2026"
 *     category — one of "registration", "schedule", or "faculty" — sets the
 *                card's accent color and the small tag label shown by the date
 *     title    — a short headline
 *     body     — the announcement text; basic HTML is allowed, e.g.
 *                'Read more <a href="https://www.sati.org">on our website</a>.'
 *
 *   Example:
 *     {
 *       date: "August 1, 2026",
 *       category: "schedule",
 *       title: "New announcement title",
 *       body: "Announcement text goes here."
 *     },
 */

const ANNOUNCEMENTS = [
  {
    date: "July 26, 2026",
    category: "registration",
    title: "Fall Classes Are Open",
    body: "Fall classes are open. Make sure to <a href=\"https://pci.jotform.com/form/261964969697081\">register</a> for the <a href=\"class-schedule.html\">Deepening Meditation Program</a> (only offered once every three years) and the Sati Seminar."
  }
];
