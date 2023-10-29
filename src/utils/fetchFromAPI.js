import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': '57b0c9d622msh5b18b9a05fdf052p1b63f7jsn1cfeb576c483',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
}

