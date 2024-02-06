function longestPalindrome(s: string): number {
  const lettersMap: Map<string, number> = new Map();

  for(let i = 0, l = s.length; i < l; i++) {
    if(!lettersMap.has(s[i])) lettersMap.set(s[i], 1);
    else {
      const val = lettersMap.get(s[i]);
      if(val) {
        lettersMap.set(s[i], val + 1);
      }
    }
  }

  let result: number = 0;
  let maxOdd: number = 0;

  lettersMap.forEach(val => {
    if(val % 2 === 0) result += val;
    else {
      if(maxOdd < val) maxOdd = val;
    }
  });
  console.log(lettersMap, maxOdd, result);
  
  return result + maxOdd;
};

const str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
console.log(longestPalindrome(str));
