const slugify = require('slugify');

/**
 * Generate a unique slug for a Mongoose model document.
 *
 * @param {string} title - The title to slugify.
 * @param {import('mongoose').Model} model - The Mongoose model to check for uniqueness.
 * @param {import('mongoose').ObjectId} [_id=null] - The ID of the document (to exclude from uniqueness check on update).
 * @returns {Promise<string>} - The unique slug.
 */
async function generateUniqueSlug(title, model, _id = null) {
  if (!title) return '';

  const baseSlug = slugify(title, { lower: true, strict: true, locale: 'vi' });
  let uniqueSlug = baseSlug;
  let counter = 1;

  // Safety break to prevent infinite loops (though unlikely)
  while (counter < 100) {
    // Check if slug exists in DB, excluding current document
    const query = { slug: uniqueSlug };
    if (_id) {
      query._id = { $ne: _id };
    }

    // eslint-disable-next-line no-await-in-loop
    const existing = await model.findOne(query).select('_id');

    if (!existing) {
      return uniqueSlug; // Unique!
    }

    // Collision -> Append counter
    uniqueSlug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  throw new Error('Failed to generate unique slug after 100 attempts');
}

module.exports = {
  generateUniqueSlug,
};
