export const exercisesOptions= {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      
      'X-RapidAPI-Key': '5b29106a64mshc21fabcc1e33f91p12248ejsna2c8cd4860bd'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    params: {
      id: 'UCE_M8A5yxnLfW0KghEeajjw'
    },
    headers: {
      
      'X-RapidAPI-Key': '5b29106a64mshc21fabcc1e33f91p12248ejsna2c8cd4860bd',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData =async(url,options)=>{
const response=await fetch(url,options)
const data=await response.json()
// console.log(data);
return data
}