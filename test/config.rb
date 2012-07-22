#
# Compass Configuration
#

# HTTP paths
# http_path             = '/'
# http_stylesheets_path = '/stylesheets'
# http_images_path      = '/images'
# http_javascripts_path = '/js'

# File system locations
sass_dir              = 'sass'
add_import_path         '../stylesheets'
css_dir               = 'public/css'
images_dir            = 'public/images'
javascripts_dir       = 'public/js'

# Set to true for easier debugging
line_comments         = false
preferred_syntax      = :sass

# CSS output style - :nested, :expanded, :compact, or :compressed
output_style          = :expanded

# Determine whether Compass asset helper functions generate relative
# or absolute paths
relative_assets       = true

# Learn more:
#   http://compass-style.org/docs/tutorials/configuration-reference/

module Sass::Script::Functions
  def featureExists(feature, list)
    testList = Array.new
    listLength = list.to_a.length - 1
    
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
    Sass::Script::Bool.new(result)
  end
end