#encoding=utf-8

puts 'Hello World! 你好，世界！'

def get_sum(a, b)
    return a + b
end

sum = get_sum 1, 2

puts "sum: #{sum}"

range_nums = (1 .. 5).to_a

puts "#{range_nums}"