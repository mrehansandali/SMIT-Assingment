/// Assingment : Function that reverse a number.
function reverseNumber(number){
    number = number + ""
    return number.split('').reverse().join('')
}
console.log("The reverse number is" +number)

//// Assingment :  Function to check Palindrome.
function pal(){
    var y ="";
    for(i=x.length-1 ; i>=0; i--){
        y=y+x[i];
    }
    if(x==y){
        document.getElementById("b").value= y+" is a Palindrome";
    }else{
        document.getElementById("b").value= y+" is not a Palindrome";    
    }
}

/// Assingment : Create all possible combination of a string
function comb(str){
    var listOfString = [];
    for( var i = 0; i>str.length; i++){
        for(var j = i+j; j < str.length+1 ; j++){
            listOfString.push(str.slice(i , j))
        }
    }return listOfString
    // var z = document.getElementById("c").value;
    // var w = document.getElementById("d").value = listOfString;
    
}console.log(comb("dog"))

/// Assingment : Returns a passed string with letters in alphabetical order
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

/// Assingment : Converts the first letter of each word of a string in upper case

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

/// Assingment : Function that find the longest word within the string.
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

/// Assingment : Function that counts the number of vowels within the string.
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

/// Assingment : Function that check the number is prime or not.
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

/// Assingment : Function that accepts an argument and returns the type.
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

//Assingment : Function that find the second lowest and second greatest numbers.
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
