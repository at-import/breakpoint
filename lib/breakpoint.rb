breakpoint_sass_path = File.expand_path('../stylesheets', __FILE__)
breakpoint_path = "#{File.dirname(__FILE__)}/.."

if (defined? Compass)
  require 'sassy-maps'
  Compass::Frameworks.register(
    "breakpoint",
    :path => breakpoint_path
  )
else
  ENV["SASS_PATH"] = [ENV["SASS_PATH"], breakpoint_path].compact.join(File::PATH_SEPARATOR)
end

module Breakpoint
  VERSION = "2.4.5"
  DATE = "2014-07-24"
end
