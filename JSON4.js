let user = {
    name: "Alex",
    balance: 1500
};

let {name,balance} = user

let withdrawal = 1000;

let checkbalance = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(balance >= withdrawal){
            resolve("Balance checked")
        }
        else{
            reject("Insufficient funds")
        }
    },2000)
})

checkbalance 
            .then(result =>{
             console.log(result)
             let spisanie = new Promise((resolv,rejected)=>{
             setTimeout(()=>{
                resolv("Withdrawal successful")
               },1000)
               
            
            })    
            return spisanie
            })
          
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            })
        
