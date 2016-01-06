print "Please provide a word to piglatinize:"

piglatinize = gets.chomp
piglatinize.downcase!

# For words that begin with vowel sounds or silent letter, "way" is added at the end of the word.

looking for vowels = [a, e, i , o, u]

if original_word.starts?(a, e, i, o, u)
  original_word[0] = [a, e, i, o, u]
  original_word << way
    end


# For words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and "ay" is added

looking for constanants

class Word

  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase
  end


  def piglatinize
  if original_word[0] = [a, e, i, o, u]
    return original_word >> way
    end



end




## Words and Pig Latin

# We've created a `Word` class that is a wrapper for a string. Your job will be to implement a Ruby method `piglatinize` that returns the pig latin equivalent of the word.

# Description of the rules from Wikipedia:

# For words that begin with vowel sounds or silent letter, "way" is added at the end of the word. Examples are

# def piglatinize
#   if original_word.starts?(a, e, i, o, u)
#   original_word[0] = [a, e, i, o, u]
#   original_word << way
#     end

# * "egg" → "eggway"
# * "inbox" → "inboxway"
# * "eight" → "eightway"

# For words that begin with consonant sounds, the initial consonant or consonant cluster is moved to the end of the word, and "ay" is added, as in the following examples:

# * "happy" → "appyhay"
# * "duck" → "uckday"
# * "glove" → "oveglay"


# ## BONUS 1

# The letter 'y' can play the role of either consonant or vowel, depending on its location

# * "yellow" → "ellowyay"
# * "rhythm" → "ythmrhay"

# ## BONUS 2

# How do you deal with words starting with "qu" or "squ" ?

# * "queen" → "eenquay"
# * "squeal" → "ealsquay"
