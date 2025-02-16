export async function fetchAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function getIDPokemon(url) {
  const parts = url.split('/'); 
  return parseInt(parts[parts.length - 2], 10);
}