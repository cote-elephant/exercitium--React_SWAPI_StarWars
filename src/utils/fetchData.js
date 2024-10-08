//const URL = "https://cat-fact.herokuapp.com"
const apiUrl = "https://swapi.dev/api";

export const fetchData = async (endpoint) => {
  if (!endpoint && typeof endpoint !== "string") {
    throw new Error("a valid endpoint must be provided");
  }
  try {
    return fetch(`${apiUrl}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      });
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};
