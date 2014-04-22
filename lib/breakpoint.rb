if (defined? Compass)
  require 'sassy-maps'
  Compass::Frameworks.register(
    "breakpoint",
    :path => "#{File.dirname(__FILE__)}/.."
  )
else
  # Compass not defined, register on the Sass path via the environment.
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + "#{File.dirname(__FILE__)}/../stylesheets"
  else
    ENV["SASS_PATH"] = "#{File.dirname(__FILE__)}/../stylesheets"
  end
end

module Breakpoint
  VERSION = "2.4.2"
  DATE = "2014-03-11"
end
