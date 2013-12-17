require 'compass'
require 'sassy-maps'

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint
  VERSION = "2.4.0"
  DATE = "2013-12-17"
end
