require 'compass'

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint
  VERSION = "1.0.1"
  DATE = "2012-06-27"
end

module Sass::Script::Functions
  def featureExists(feature, list)
    testList = Array.new
    listLength = list.to_a.length - 1
    
    for i in 0..listLength
      if list.value[i].class == Sass::Script::List
        subList = list.value[i].to_a.length - 1
        
        for j in 0..subList
          testList << list.value[i].value[j]
        end
      else
        testList << list.value[i]
      end
    end
    
    result = testList.include?(feature)
    Sass::Script::Bool.new(result)
  end
end