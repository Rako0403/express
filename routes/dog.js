const request=require('request');

request('https://dog.ceo/dog-api/', function(error,response,body){
	if (!error&&response.statusCode==200){
		const data=JSON.parse(bosy);
		console.log(body);
		const dogImageUrl=data[0].url;
		console.log(dogImageUrl);
	}
});
