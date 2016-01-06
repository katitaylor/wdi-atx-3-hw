class Word

  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase
  end


  def piglatinize

 # constonants = [['b', 'bl'],['c', 'ch', 'cr', 'cl', 'cr'],['d', 'dr'],['f', 'fl', 'fr'],['g', 'gr', 'gl']]


  if original_word.start_with?('a', 'e', 'i', 'o', 'u')
   original_word << "way"
    end
    # if original_word.start_with[index]?(consonants)
    # original_word:slice(consonants)
    # orinigal_word << (join!consonants)
end
end


new_word=Word.new('egg')
new_word.piglatinize

