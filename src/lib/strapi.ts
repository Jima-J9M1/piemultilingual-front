export const fetchFromStrapi = async (endpoint: string, options: RequestInit = {}) => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const url = `${baseUrl}/api/${endpoint}`;
    console.log(url);
    const res = await fetch(url, options);
    console.log(res);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  };