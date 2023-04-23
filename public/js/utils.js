/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
class ClientValidator {
  static validateNumber(num) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(num)) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(new Error('Invalid number'));
      } else {
        resolve('Valid number');
      }
    });
  }

  static validateString(str) {
    return new Promise((resolve, reject) => {
      if (!str || typeof str !== 'string') {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(new Error('Invalid string'));
      } else {
        resolve('Valid string');
      }
    });
  }

  static validateEmail(email) {
    return new Promise((resolve, reject) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !pattern.test(email)) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(new Error('Invalid email'));
      } else {
        resolve('Valid email');
      }
    });
  }

  static validateMin(value, minValue) {
    return new Promise((resolve, reject) => {
      if (value.length < minValue) {
        reject(new Error(`Value must be greater than or equal to ${minValue}`));
      } else {
        resolve('Valid value');
      }
    });
  }

  static validateMax(value, maxValue) {
    return new Promise((resolve, reject) => {
      if (value > maxValue) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(new Error(`Value must be less than or equal to ${maxValue}`));
      } else {
        resolve('Valid value');
      }
    });
  }
}

function listen(selector, eventType) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (!element) {
      reject(new Error(`Element ${selector} not found`));
      return;
    }

    element.addEventListener(eventType, (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      resolve(event);
    }, { once: true });

    element.addEventListener('error', (errorEvent) => {
      reject(errorEvent.error);
    }, { once: true });
  });
}
