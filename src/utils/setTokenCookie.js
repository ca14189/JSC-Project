export function setTokenCookie(token) {
  document.cookie = `token=${token}; Path=/; SameSite=Lax; Secure`;
}
