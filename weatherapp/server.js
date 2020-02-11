const express=require('express');
const fetch=require('node-fetch');
const app=express();
//const Datastore=require('nedb');
app.listen(8080,()=> console.log('Listening at 8080'));
app.use(express.static('public')); 
app.use(express.json({limit:'1mb'}));

// const database=new Datastore('database.db');
// database.loadDatabase();

app.get('/weather/:latlon', async (request, response)=>{
    const latlon=request.params.latlon.split(',');
    const lat=latlon[0];
    const lon=latlon[1];
    const data=request.body;
    const weather_api_url=`https://api.darksky.net/forecast/966cfa831967587d4d30dde52d01c122/${lat},${lon}`;
    const api_data =await fetch(weather_api_url);
    const json= await api_data.json();
    console.log(data);
    response.json(json);
});

app.get('/weather',async (request,response)=>{
    
    

});



 