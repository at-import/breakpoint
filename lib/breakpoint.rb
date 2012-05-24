require 'compass'
require 'fraction'

# Connect Fraction up to Sass so we can use it for fracking use it for -o-device-pixel-ratio
module Sass::Script::Functions
 def numerator(number)
   Sass::Script::Number.new number.value.fraction.first
 end
 def denominator(number)
      num, den = number.value.fraction
      Sass::Script::Number.new(den)
 end
end

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint

  VERSION = "0.2"
  DATE = "2012-05-24"

end
