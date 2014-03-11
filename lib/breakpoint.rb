if (defined? Compass)
  require 'sassy-maps'
  Compass::Frameworks.register(
    "breakpoint",
    :path => "#{File.dirname(__FILE__)}/.."
  )
end

module Breakpoint
  VERSION = "2.4.2"
  DATE = "2014-03-11"
end
