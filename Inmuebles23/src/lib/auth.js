import { apiFetch } from './api';

export async function login(email, password) {
  return apiFetch('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function logout() {
  try {
    await apiFetch('/logout', { method: 'POST' });
  } finally {
    clearToken();
  }
}

export function setToken(token) {
  localStorage.setItem('token', token);
}

export function clearToken() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function hasToken() {
  return Boolean(localStorage.getItem('token'));
}
