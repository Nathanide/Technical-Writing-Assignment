/**
 * Simple logger utility for application logging
 * In production, consider using winston or bunyan
 */

const logger = {
  /**
   * Log an informational message
   * @param {string} message - The message to log
   */
  log: (message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] INFO: ${message}`);
  },

  /**
   * Log an error message
   * @param {string} message - The error message to log
   */
  error: (message) => {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ERROR: ${message}`);
  },

  /**
   * Log a warning message
   * @param {string} message - The warning message to log
   */
  warn: (message) => {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] WARN: ${message}`);
  },

  /**
   * Log a debug message
   * @param {string} message - The debug message to log
   */
  debug: (message) => {
    if (process.env.NODE_ENV === 'development') {
      const timestamp = new Date().toISOString();
      console.debug(`[${timestamp}] DEBUG: ${message}`);
    }
  }
};

module.exports = logger;
