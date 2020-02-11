const express=require('express');
const app=express();
const Datastore=require('nedb');
app.listen(8080,()=> console.log('Listening at 8080'));
app.use(express.static('public')); 
app.use(express.json({limit:'1mb'}));

const database=new Datastore('database.db');
database.loadDatabase();

app.post('/api',(request, response)=>{
    console.log(request.body);
    const data=request.body;
    const timestamp=Date.now();
    data.timestamp=timestamp;
    database.insert(data);
    response.json({
        status:'success',
        'timestamp':timestamp, 
        'lat':data.latitude,
        'lon':data.longitude,
    });
});

app.get('/api',(request,response)=>{
    database.find({},(err,data)=>{
        if(err){
            response.end();
            return;
        }
        response.json(data);

    });

});



 