    #* **Name for order:** (enter name)
print "Name for order: "
    name = gets.chomp

    #* {name} wants to order: (enter item)
print "#{name} wants to order: "
    item = gets.chomp


#2. Store the name/order data. When storing data, do it in such a way that additional order items #may be added for the person's name.
# * Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.

lunch_order = { name => item }

lunch_order.each do |name, item|
    puts "#{name}: #{item}"
    end

print "Add another item to the order? y or n"
  input = gets.chomp

  if input.include? "y"
      print "What else would you like?"
      item2 = gets.chomp

lunch_order = [[name, item, item2]]

lunch_order.each do |name, item, item2|
      puts "Thank you #{name}, your #{item} and #{item2} will be ready soon"

    end

  else
      puts "Thanks for your order. #{name}, your #{item} is being prepared"
  end
