base_directory  = File.expand_path(File.join(File.dirname(__FILE__), '..'))
breakpoint_stylesheets_path = File.join(base_directory, 'stylesheets')

if (defined? Compass)
  require 'sassy-maps'
  Compass::Frameworks.register(
    "breakpoint",
    :path => base_directory
  )
else
  ENV["SASS_PATH"] = [ENV["SASS_PATH"], breakpoint_stylesheets_path].compact.join(File::PATH_SEPARATOR)
end

module Breakpoint
  VERSION = "2.5.0"
  DATE = "2014-08-05"
end
