# Require any additional compass plugins here.]
require 'sassy-maps'

# File system locations
sass_dir              = 'tests'
css_dir               = 'output'
# Import latest breakpoint library
add_import_path       '../stylesheets'

# Set to true for easier debugging
line_comments         = false
# preferred_syntax      = :sass

# CSS output style - :nested, :expanded, :compact, or :compressed
output_style          = :expanded

# Determine whether Compass asset helper functions generate relative
# or absolute paths
relative_assets       = true

# Learn more:
#   http://compass-style.org/docs/tutorials/configuration-reference/
sass_options = {:sourcemap => false}