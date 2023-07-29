def longest_consecutive(nums)

if nums.length <= 1
return nums.length
end

hash = {}
high_score = 0
sorted = nums.uniq.sort() 

sorted.each_with_index do |n, i|
    if n-1 === sorted[i-1]
      high_score +=1
      hash["leader#{i}"] = high_score
    else
      high_score = 1 
      hash["leader#{i}"] = high_score     
    end
  end

# if !hash["leader"]
#   return 1
# else
  return hash.values.sort.reverse[0]


end
