# require 'breakpoint'

#
# Compass Configuration
#

# HTTP paths
# http_path             = '/'
# http_stylesheets_path = '/stylesheets'
# http_images_path      = '/images'
# http_javascripts_path = '/js'

# File system locations
sass_dir                = 'sass'
css_dir                  = 'css'
images_dir            = 'images'
javascripts_dir       = 'js'
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

module Sass::Script::Functions
  def is_breakpoint_list(breakpoint)
    result = false unless breakpoint.class == Sass::Script::List && breakpoint.separator.to_s == 'comma'
    Sass::Script::Bool.new(result)
  end
  def featureExists(feature, list)
    testList = Array.new
    listLength = list.to_a.length - 1

    # Only check if length greater than zero
    # Was throwing errors for floats (but strangely, not for ints)
    if listLength > 0
      for i in 0..listLength
        if list.value[i].class == Sass::Script::List
          subList = list.value[i].to_a.length - 1

          for j in 0..subList
            testList << list.value[i].value[j]
          end
        else
          testList << list.value[i]
        end
      end
      result = testList.include?(feature)
    else
      result = false
    end

    Sass::Script::Bool.new(result)
  end
end
