def fib(n)
  if n <2
    return n;
  else
    return fib(n-1) + fib(n-2);
  end
end

puts fib(0)
puts fib(1)
puts fib(2)
puts fib(10)
