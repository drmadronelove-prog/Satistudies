/*
 * Announcements for the Sati Certificate Program dashboard.
 *
 * HOW TO POST A NEW ANNOUNCEMENT:
 *   Add a new object to the TOP of the ANNOUNCEMENTS array below (newest first).
 *   Each announcement has three fields:
 *     date  — a display string, e.g. "July 17, 2026"
 *     title — a short headline
 *     body  — the announcement text; basic HTML is allowed, e.g.
 *             'Read more <a href="https://www.sati.org">on our website</a>.'
 *
 *   Example:
 *     {
 *       date: "August 1, 2026",
 *       title: "New announcement title",
 *       body: "Announcement text goes here."
 *     },
 */

const ANNOUNCEMENTS = [
  {
    date: "July 10, 2026",
    title: "Spring Registration Now Open",
    body: "Registration for the spring term is now open. Please complete your <a href=\"#\">course registration</a> by August 15 to secure your place."
  },
  {
    date: "June 28, 2026",
    title: "Updated Class Schedule Posted",
    body: "The class schedule for the upcoming term has been finalized and posted. Note that the Wednesday evening sutta study session now begins at 7:00&nbsp;PM Pacific."
  },
  {
    date: "June 12, 2026",
    title: "Welcome to the New Program Dashboard",
    body: "This page is your home base for the certificate program — registration, schedules, faculty contacts, and Canvas access are all one click away. Bookmark it!"
  }
];
