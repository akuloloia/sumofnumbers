/**
 * Created by Tony on 9/16/2016.
 */

function sumFor(list)
{
  let sum = 0;
  for(let i = 0; i <list.length; i++)
  {
    sum = sum + list[i];
  }
  return sum;
}


function sumWhile(list)
{
  let sum = 0;
  let i = 0;
  while(i < list.length)
  {
    sum = sum + list[i];
    i++
  }
  return sum;
}

function sumRecursion(list, size)
{
  if (size == 0)
  {
    return (list[size]);
  }
  else
  {
    return list[size] + sumRecursion(list, (size - 1));
  }
}

function sumTheSimpleWay(list)
{
  return _.reduce(list, function(num, key){return num + key}, 0);
}

let list = [1,2,3,4,5];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, list.length - 1));
console.log(sumTheSimpleWay(list));

//took 11m14s09 to complete