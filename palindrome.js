function checkPalindrome(N, str) {
    var name=""
    var namy=""
    for(var i=N-1;i>=0;i--){
        // console.log(str[i])
        name=name+str[i]
    }
    for(var j=0;j<N;j++){
        namy=namy+str[j]
    }
    // console.log(name)
    // console.log(namy)
    if(name==namy){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
    }
    