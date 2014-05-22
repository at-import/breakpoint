if (defined? Compass)
  require 'sassy-maps'
  breakpoint_path = File.expand_path("../..", __FILE__)
  Compass::Frameworks.register(
    "breakpoint",
    :path => breakpoint_path
  )
else
  bourbon_path = File.expand_path("../../stylesheets", __FILE__)
  ENV["SASS_PATH"] = [ENV["SASS_PATH"], breakpoint_path].compact.join(File::PATH_SEPARATOR)
end

module Breakpoint
  VERSION = "2.4.2"
  DATE = "2014-03-11"
end
