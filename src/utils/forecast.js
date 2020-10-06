const request = require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=8447dc4005cc049c6fddf3c54372bae6&query=' + latitude +','+ longitude +'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
             callback("unable to connect weather",undefined)
        }else if(body.error){
            callback("unable to find location.",undefined)
         }else{
             
            callback(undefined,body.current.weather_descriptions[0]+'. it is currently ' +body.current.temperature + ' degree celsius. Winds speed '+ body.current.wind_speed +" km/hr.The Humidity is "+body.current.humidity+"%.")
      }
    })
}
module.exports=forecast