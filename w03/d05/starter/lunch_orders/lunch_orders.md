## Lunch Orders

It's approaching lunch hour… let's collect orders. Create a new file called `lunch_orders.rb` to complete this exercise.

1. Create a program that collects lunch orders. Prompt:
	
    #* **Name for order:** (enter name)
puts "Name for order: "
    name = gets.chomp
	
    #* **{name} wants to order:** (enter item)
puts "#{text} wants to order: "
    item = gets.chomp

#2. Store the name/order data. When storing data, do it in such a way that additional order items #may be added for the person's name.
#	* Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.

lunch_order.each do |name, item|
    puts "#{name}: #{item}"
    end

lunch_order.each = { |x, y| puts y"}

#3. After storing data, prompt the user with:
#	* **Add another item to the order? (y/n)**
#	* Repeat steps 1 & 2 if the answer is "y"



3. After the user completes adding orders, print out:
	* **"All orders: {order data}"**
	
### Keep going... 

Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

* "Greg ordered a sandwich"
* "Peter ordered a burger & fries"
* "Travis ordered a salad, guac & water"

*You may have to do some hunting in Ruby docs!*
