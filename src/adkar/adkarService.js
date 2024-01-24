async function fetchWithNodeFetch(url) {
    const { default: fetch } = await import('node-fetch');
    return fetch(url);
  }
  
  const ADKAR_API_ENDPOINT = 'https://api.islamicadkar.xyz/api/adkar';
  
  async function fetchMorningAdkar() {
      const url = `${ADKAR_API_ENDPOINT}/morning`;
      const response = await fetchWithNodeFetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  }
  
  async function fetchEveningAdkar() {
      const url = `${ADKAR_API_ENDPOINT}/evening`;
      const response = await fetchWithNodeFetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  }
  
  async function fetchNightAdkar() {
      const url = `${ADKAR_API_ENDPOINT}/night`;
      const response = await fetchWithNodeFetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  }
  
  module.exports = {
    fetchMorningAdkar,
    fetchEveningAdkar,
    fetchNightAdkar
  };
  