// Shared utilities for JKT48 Show Theater

// Canonical generation colors — used across ALL pages
const GEN_COLORS = {
  3: '#ec4899', 6: '#22c55e', 7: '#15803d', 8: '#1e40af',
  9: '#06b6d4', 10: '#38bdf8', 11: '#f97316', 12: '#fde68a',
  13: '#facc15', 14: '#e879f9'
};

// Security: escape HTML to prevent XSS
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Parse WIB (UTC+7) date+time strings into a Date object
function parseWIB(dateStr, timeStr) {
  return new Date(`${dateStr}T${timeStr}+07:00`);
}
