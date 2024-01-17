class Solution {
  public int differenceOfSum(int[] nums) {
    int sum = 0;
    for(int i = 0; i < nums.length(); i++) {
      if(nums[i] > 9) {
        string s = nums[i].toString(i);
        switch(s.length()) {
          case 2:
          sum += 9 * s.charAt(0).parseInt();
          break;
        case 3:
          sum += 99 * s.charAt(0).parseInt() + 9 * s.charAt(1).parseInt();
          break;
        default:
          sum +=
            999 * s.charAt(0).parseInt() +
            99 * s.charAt(1).parseInt() +
            9 * s.charAt(2).parseInt();
          break;
        }
      }
    }
    return sum;    
  }
}