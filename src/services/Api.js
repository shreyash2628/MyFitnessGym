export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e103b104emsh0be9fb60757904dp1d702ajsnfb9d0f6dbdce',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };


  export const imageOptions = {
	method: 'GET',
	url: 'https://muscle-group-image-generator.p.rapidapi.com/getImage',
	params: {muscleGroups: 'chest', color: '200,100,80'},
	headers: {
	  'X-RapidAPI-Key': '2e103b104emsh0be9fb60757904dp1d702ajsnfb9d0f6dbdce',
	  'X-RapidAPI-Host': 'muscle-group-image-generator.p.rapidapi.com'
	},
	responseType: "arraybuffer"

  };

//   export const fetchImage = async (url, options) => {
//     const res = await fetch(url, options);
//     const data = await res.json();
  
//     return data;
//   };