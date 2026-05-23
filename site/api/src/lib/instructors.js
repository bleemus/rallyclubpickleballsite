const fs = require('fs');
const path = require('path');

let cache = null;

function loadInstructors() {
  if (cache) return cache;
  const candidates = [
    path.join(__dirname, '..', '..', '..', 'data', 'instructors.json'),
    path.join(__dirname, '..', '..', 'data', 'instructors.json')
  ];
  for (const candidate of candidates) {
    try {
      const raw = fs.readFileSync(candidate, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        cache = parsed;
        return cache;
      }
    } catch {
      // try next candidate
    }
  }
  cache = [];
  return cache;
}

function getInstructorMap() {
  const list = loadInstructors();
  const map = new Map();
  for (const entry of list) {
    if (entry && entry.id) map.set(String(entry.id), entry);
  }
  return map;
}

function getAllowedIds() {
  return new Set(getInstructorMap().keys());
}

function getInstructorName(id) {
  if (id === 'any' || !id) return 'Any trainer';
  const entry = getInstructorMap().get(String(id));
  return entry ? entry.name : 'Unknown';
}

module.exports = { loadInstructors, getInstructorMap, getAllowedIds, getInstructorName };
