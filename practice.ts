const twoSum = (nums: number[], target: number): number[] => {
    const lookup: Record <number, number> = {};

    for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]    
    const complement = target - currNum;
        if (complement in lookup) return [lookup[complement], i];
        else lookup[currNum] = i;
        // console.log("lookup:", lookup);
    }
    return [];
}

console.log(twoSum([2, 8, 11, 15, 7], 9));