import Texts from '../constants/Texts';

export const apiWrapper = async (url: string, type: string, body?: object) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const fullUrl = `https://${apiUrl}/${url}${url.includes('?') ? '&' : '?'}api_key=${apiKey}`;

  let response;
  try {
    response = await fetch(fullUrl, {
      method: type,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    return {
      error: Texts.somethingWrong,
    };
  }

  const resData = await response.json();

  return resData;
};
