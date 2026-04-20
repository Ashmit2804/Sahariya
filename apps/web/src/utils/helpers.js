/**
 * Utility functions for common operations.
 */
import pb from '@/lib/pocketbaseClient';

/**
 * Formats a date string into a consistent format.
 * @param {string|Date} date - The date to format.
 * @returns {string} Formatted date string.
 */
export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Truncates text to a specified length and appends an ellipsis.
 * @param {string} text - The text to truncate.
 * @param {number} length - Maximum length.
 * @returns {string} Truncated text.
 */
export const truncateText = (text, length = 100) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
};

/**
 * Generates a full URL for a file stored in PocketBase.
 * @param {Object} record - The PocketBase record.
 * @param {string} filename - The name of the file field.
 * @param {Object} [options] - Optional query parameters.
 * @returns {string} Full URL to the file.
 */
export const getImageUrl = (record, filename, options = {}) => {
  if (!record || !filename) return '';
  return pb.files.getUrl(record, filename, options);
};