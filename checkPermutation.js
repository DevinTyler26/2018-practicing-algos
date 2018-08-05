const isPerm = (str1, str2) => {
  let perm = true;
  let map = {};

  for (i=0; i<str1.length; i++ ){
    if(map[str1[i]]){
      map[str1[i]] += 1;
    } else {
      map[str1[i]] = 1;
    }
    console.log(map)
  }

  for (i=0; i<str2.length; i++){
    if (!map[str2[i]]) {
      perm = false
    }
    else
    map[str2[i]] -= 1;
  }
  return perm;
}

string1 = ['d','o','g']
string2 = ['g','o','d']

isPerm(string1, string2)
