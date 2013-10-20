require 'compass'

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint
  VERSION = "2.2.0.alpha.1"
  DATE = "2013-10-20"
end