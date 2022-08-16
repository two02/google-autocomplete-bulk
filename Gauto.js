// Author: TWOZEROTWO LLC
// Language: Node.js
// Params: quary, list qnty, proxy address, proxy port, proxy username, proxy password 
const axios = require('axios-https-proxy-fix');

module.exports= {Gauto} = async (quary, qnty, pa, pp, pu, pas) => {
    const clients = ['chrome','edge','firefox','internet explorer','opera','safari'];
    const client = await clients[Math.floor(Math.random() * clients.length)];
    const resData = [];
    const qry = [quary];

    try{
        while(resData.length < qnty){
            if(!pa || !pp || !pu || !pas) {
                try{
                    const result = await axios.get(`http://suggestqueries.google.com/complete/search?client=${client}&q=${qry.shift()}`);
                    if(result.status === 200){
                        for(var i =0; i < result.data[1].length; i++){
                            await qry.push(result.data[1][i]);
                            await resData.push(result.data[1][i]);
                        }
                        await resData.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
                    }else{
                        if(qry.length === 0){ 
                            await qry.push(query);
                        }
                    }
                    
                }catch(err){
                    console.log(err);
                    
                }
                
            }else{
                const proxy = {
                    host: `${pa}`,
                    port: `${pp}`,
                    auth: {
                    username: `${pu}`,
                    password: `${pas}`
                    }
                };
                try{
                    const result = await axios.get(`http://suggestqueries.google.com/complete/search?client=${client}&q=${qry.shift()}`, {proxy});
                    if(result.status === 200){
                        for(var i =0; i < result.data[1].length; i++){
                            await qry.push(result.data[1][i]);
                            await resData.push(result.data[1][i]);
                        }
                        await resData.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
                    }else{
                        if(qry.length === 0){ 
                            await qry.push(query);
                        }
                    }
                    
                }catch(err){
                    console.log(err);
                }
            }
    
        }
    }catch(e){
        return {"data":`${e}`,"status":400};
    }

    

    return {"data":`[${resData}]`,"status":200};

    
}

