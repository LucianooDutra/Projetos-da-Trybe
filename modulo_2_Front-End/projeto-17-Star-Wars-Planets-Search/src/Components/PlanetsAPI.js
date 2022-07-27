async function planetsApi(url) {
  try {
    const data = await fetch(url).then((response) => response.json());
    return data;
  } catch (error) {
    console.log('API REQUEST ERROR: ', error);
  }
}

export default planetsApi;
