const apiKey = "AIzaSyCKxtrnHmnlwRC7dtU29CkxHzt_SKx7mjo";
const videoUrl = "https://www.googleapis.com/youtube/v3/videos";

const request = new Request(videoUrl, {
  key: apiKey,
});

async function getData() {
  const response = await fetch(request);
  const data = response.json();
  console.log(data);
}

getData();
