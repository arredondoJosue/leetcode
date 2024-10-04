# 605. Can Place Flowers
# Easy
# Array, Greedy

# You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

# Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

# Example 1:

# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true
# Example 2:

# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false
 

# Constraints:

# 1 <= flowerbed.length <= 2 * 104
# flowerbed[i] is 0 or 1.
# There are no two adjacent flowers in flowerbed.
# 0 <= n <= flowerbed.length
# ======================================================================================

# PSUEDO CODE:
# check if n is 0 
#     return true if so

# loop through length of flowerbed
#     check if current element is 0 
#     AND if current index is at start OR prev element is not 1
#     AND if current index is at end OR next element is 0:
#         "plant flower" in plot
#         n - 1 
#         check if n is 0, if so:
#             return true

# if loops completes, then return false because couldn't plant all plants in flowerbed
# note: got help from solutions tab for this one. Specifically on the if statement in the loop.
# note: trust your logic and impliment it lol

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True

        for p in range(len(flowerbed)):
            if flowerbed[p] == 0 and (p == 0 or flowerbed[p-1] != 1) and (p == len(flowerbed) - 1 or flowerbed[p+1] == 0):
                flowerbed[p] = 1
                n -= 1
                if n == 0:
                    return True
        return False