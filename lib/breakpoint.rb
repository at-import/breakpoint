require 'compass'

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint
  VERSION = "2.0.7"
  DATE = "2013-09-17"
end

module Sass::Script::Functions
  def is_breakpoint_list(breakpoint)
    result = false unless breakpoint.class == Sass::Script::List && breakpoint.separator.to_s == 'comma'
    Sass::Script::Bool.new(result)
  end
  def featureExists(feature, list)
    testList = Array.new
    listLength = list.to_a.length - 1

    # Only check if length greater than zero
    # Was throwing errors for floats (but strangely, not for ints)
    if listLength > 0
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
    else
      result = false
    end

    Sass::Script::Bool.new(result)
  end
end
