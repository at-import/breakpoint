require 'compass'
require 'sassy-maps'

Compass::Frameworks.register("breakpoint", :path => "#{File.dirname(__FILE__)}/..")

module Breakpoint
  VERSION = "2.3.2"
  DATE = "2013-12-16"
end
