const isPerm = (str1, str2) => {
  let perm = true;
  let map = {};
  let n = str1.length
  let m = str2.length

  if (n !== m) return perm = false

  for (i=0; i<n; i++ ){
    if(map[str1[i]]){
      map[str1[i]] += 1;
    } else {
      map[str1[i]] = 1;
    }
  }

  for (i=0; i<m; i++){
    if (!map[str2[i]]) {
      perm = false
    }
    else
    map[str2[i]] -= 1;
  }
  return perm;
}

string1 = ['d','o','g',]
string2 = ['g','o','d']

isPerm(string1, string2)
