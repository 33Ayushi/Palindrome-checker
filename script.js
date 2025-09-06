

function isPalindrome(str){
    const cleanstr= str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr);
    
    const reversedstr= cleanstr.split('').reverse().join('');
    console.log(reversedstr);

    return cleanstr=== reversedstr;

}


function Palindromechecker(){
    const inputText =document.getElementById("inputText");
    const result =document.getElementById("result");

    if(isPalindrome(inputText.value)){
        result.textContent=`"${inputText.value}" is a palindrome`;

    }else{
        result.textContent=`"${inputText.value}" is a palindrome`;

    }
    result.classList.add(fadeIn);
    inputText.value="";

}



document.getElementById('checkbutton').addEventListener("click",Palindromechecker);