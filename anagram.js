/*
Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan
sama eg. 'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram.
Dibawah ini ada array berisi sederetan Strings.
['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
Silahkan kelompokkan/group kata-kata di dalamnya sesuai dengan kelompok
Anagramnya,
Catatan: tidak boleh menggunakan syntax es6 map, reduce, find, filter
# Expected Outputs
[
["kita", "atik", "tika"],
["aku", "kua"],
["makan"],
["kia"]
]
*/

const anagrams = arr => {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    let compareA = sortString(arr[i]);
    res[compareA] = [];
    for (let j = 0; j < arr.length; j++) {
      let compareB = sortString(arr[j]);
      if (compareA === compareB) {
        res[compareA].push(arr[j]);
      }
    }
  }
  // console.log(res);
  let result = [];
  for (let key in res) {
    result.push(res[key]);
  }
  return result;
};

const sortString = str => {
  const s = str.split('').sort().join('');
  return s;
};

console.log(anagrams(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));
