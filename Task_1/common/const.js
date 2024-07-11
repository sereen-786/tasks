// API endpoint
export const BASE_URL = 'https://api.github.com';

// API token
export const TOKEN = `${__ENV.TOKEN}`;

// github username
export const USERNAME = `${__ENV.USERNAME}`;

// Invalid API token
export const INVALID_TOKEN = 'invalid_token';

// Valid headers for api testing
export const AUTHHEADERS = {
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
    }
};