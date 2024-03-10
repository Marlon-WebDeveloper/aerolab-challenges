const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRmZjIyYjU2YWRmZDAwMjA1YjZkNGQiLCJpYXQiOjE3MDkxNzUzMzl9.6YhGXAm3YGm177dt2b3gK8Gd7HleSVGnweenEE-CHKo";

export const getUser = async () => {
  return fetch("https://coding-challenge-api.aerolab.co/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }).then((res) => res.json());
};
