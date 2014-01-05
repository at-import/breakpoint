require 'compass'
require 'sassy-maps'

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint
  VERSION = "2.4.1"
  DATE = "2014-01-05"
end
