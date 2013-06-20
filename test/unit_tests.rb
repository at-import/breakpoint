require 'compass'
require 'compass/exec'
require 'test/unit'


class TestCompassOutput < Test::Unit::TestCase

  Compass.add_configuration 'config.rb'
  Compass.configuration.project_path = Dir.pwd

  Compass.compiler.sass_files.each do |sass_file|
    test_name = File.basename(sass_file, '.*')

    define_method "test_#{test_name}_compile" do
      css_file = Compass.compiler.corresponding_css_file(sass_file)
      Compass.compiler.compile sass_file, css_file  # Raises exception upon error

      baseline_file = "#{Dir.pwd}/css/#{File.basename(css_file)}"
      assert FileUtils.compare_file(css_file, baseline_file)
    end
  end

end
