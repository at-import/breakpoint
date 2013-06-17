# \ -p 4000

require 'rubygems'
require 'bundler'
begin
  Bundler.setup(:default, :development)
rescue Bundler::BundlerError => e
  $stderr.puts e.message
  $stderr.puts "Run `bundle install` to install missing gems"
  exit e.status_code
end

require 'serve'
require 'serve/rack'

# The project root directory
root = ::File.dirname(__FILE__)

# Compile Sass on the fly with the Sass plugin. Some production environments
# don't allow you to write to the file system on the fly (like Heroku).
# Remove this conditional if you want to compile Sass in production.
# if ENV['RACK_ENV'] != 'production'
#   require 'sass'
#   require 'sass/plugin/rack'
#   require 'compass'
#   require 'susy'

#   Compass.add_project_configuration(root + '/config.rb')
#   Compass.configure_sass_plugin!

#   use Sass::Plugin::Rack  # Sass Middleware
# end

# Other Rack Middleware
use Rack::ShowStatus      # Nice looking 404s and other messages
use Rack::ShowExceptions  # Nice looking errors

# Rack Application
if ENV['SERVER_SOFTWARE'] =~ /passenger/i
  # Passendger only needs the adapter
  run Serve::RackAdapter.new(root + '/views')
else
  # Use Rack::Cascade and Rack::Directory on other platforms for static assets
  run Rack::Cascade.new([
    Serve::RackAdapter.new(root + '/views'),
    Rack::Directory.new(root + '/public')
  ])
end
