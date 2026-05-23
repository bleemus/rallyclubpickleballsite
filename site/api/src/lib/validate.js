const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LIMITS = {
  name: 100,
  email: 200,
  phone: 30,
  instructorId: 50,
  duprOrSkill: 50,
  goals: 1000,
  preferredTimes: 500,
  notes: 1000
};

const STATUSES = new Set(['New', 'Contacted', 'Scheduled', 'Closed', 'Spam']);

function s(v) {
  return typeof v === 'string' ? v.trim() : '';
}

function validateSubmission(body, allowedInstructorIds) {
  const errors = {};
  const name = s(body.name);
  const email = s(body.email).toLowerCase();
  const phone = s(body.phone);
  const phoneDigits = phone.replace(/\D/g, '');
  const instructorId = s(body.instructorId) || 'any';
  const duprOrSkill = s(body.duprOrSkill);
  const goals = s(body.goals);
  const preferredTimes = s(body.preferredTimes);
  const notes = s(body.notes);

  if (!name) errors.name = 'required';
  else if (name.length > FIELD_LIMITS.name) errors.name = 'too_long';

  if (!email) errors.email = 'required';
  else if (email.length > FIELD_LIMITS.email) errors.email = 'too_long';
  else if (!EMAIL_RE.test(email)) errors.email = 'invalid';

  if (!phone) errors.phone = 'required';
  else if (phone.length > FIELD_LIMITS.phone) errors.phone = 'too_long';
  else if (phoneDigits.length < 10) errors.phone = 'invalid';

  if (instructorId.length > FIELD_LIMITS.instructorId) errors.instructorId = 'too_long';
  if (instructorId !== 'any' && allowedInstructorIds && !allowedInstructorIds.has(instructorId)) {
    errors.instructorId = 'invalid';
  }

  if (!duprOrSkill) errors.duprOrSkill = 'required';
  else if (duprOrSkill.length > FIELD_LIMITS.duprOrSkill) errors.duprOrSkill = 'too_long';

  if (!preferredTimes) errors.preferredTimes = 'required';
  else if (preferredTimes.length > FIELD_LIMITS.preferredTimes) errors.preferredTimes = 'too_long';

  if (goals.length > FIELD_LIMITS.goals) errors.goals = 'too_long';
  if (notes.length > FIELD_LIMITS.notes) errors.notes = 'too_long';

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, clean: null };
  }

  return {
    ok: true,
    errors: null,
    clean: { name, email, phone: phoneDigits, instructorId, duprOrSkill, goals, preferredTimes, notes }
  };
}

function validateStatus(status) {
  return STATUSES.has(status);
}

module.exports = { validateSubmission, validateStatus, STATUSES, FIELD_LIMITS };
