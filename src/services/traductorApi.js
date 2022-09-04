
export default function ApiTraductor(datos) {
  return fetch(`https://api.mymemory.translated.net/get?q=${datos}&langpair=en|es`)
    .then(response => response.json())
    .then(response => response.responseData.translatedText)
    .catch(err => console.error(err));
}
