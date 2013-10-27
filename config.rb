#
# Compass Configuration
#
require 'survivalkit'
# require 'susy'
# require 'modular-scale'
# require 'color-schemer'
# require 'breakpoint'
# require 'toolkit'

# Change this to :production when ready to deploy the CSS to the live server.
# environment = :development
environment = :production

# HTTP paths
http_path             = '/'
http_stylesheets_path = '/css'
http_images_path      = '/images'
http_javascripts_path = '/js'

# File system locations
sass_dir              = 'sass'
# css_dir               = 'public/css'
css_dir               = 'css'
images_dir            = 'images'
javascripts_dir       = 'js'
fonts_dir             = 'fonts'

# Set to true for easier debugging
line_comments         = false
preferred_syntax      = :sass

# CSS output style - :nested, :expanded, :compact, or :compressed
# output_style          = :expanded
output_style = (environment == :development) ? :expanded : :compressed

# Determine whether Compass asset helper functions generate relative
# or absolute paths
relative_assets       = true

# Learn more:
#   http://compass-style.org/docs/tutorials/configuration-reference/


Compass::BrowserSupport.add_support("repeating-linear-gradient", "webkit", "moz", "ms")
