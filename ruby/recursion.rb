def upcase (str)
  return str.upcase if str.length <= 1
  str[0].upcase + upcase(str[1..-1])
end

def reverse (str)
  return str if str.length <= 1
  str[-1] + reverse(str[0..-2])
end

reverse('Hello')
