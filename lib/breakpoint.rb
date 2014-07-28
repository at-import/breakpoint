breakpoint_path = File.expand_path('../stylesheets', __FILE__)

if (defined? Compass)
  require 'sassy-maps'
  Compass::Frameworks.register(
    "breakpoint",
    :stylesheets_directory => breakpoint_path
  )
else
  ENV["SASS_PATH"] = [ENV["SASS_PATH"], breakpoint_path].compact.join(File::PATH_SEPARATOR)
end

module Breakpoint
  VERSION = "2.4.4"
  DATE = "2014-07-24"
end
