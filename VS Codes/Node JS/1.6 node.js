function palindrome(s){
var b = ''
for(let i=0;i<s.length;i++){
b+=s[s.length-1-i]

}
if(s===b){
    console.log("palindrome")
}
else{
    console.log("not a palindrome")
}
}
palindrome("malayalam")