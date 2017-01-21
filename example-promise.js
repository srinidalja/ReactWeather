
function addPromise(a, b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b)
            } else {
                reject('These are not numbers');
            }
        }, 1000);
    });
}

addPromise(5, 4).then(function(temp){
    console.log('Promise success: ', temp);
}, function(err){
    console.log('Promise error', err)
});