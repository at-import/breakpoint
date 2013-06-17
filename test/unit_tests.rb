require 'compass'
require 'test/unit'
require 'rake'
require 'fileutils'


class TestCompassOutput < Test::Unit::TestCase

  Compass.add_configuration('config.rb')
  temp_dir = Compass.configuration.css_dir;

  FileList['sass/*.scss'].exclude('sass/_*.scss').each do |test|


    test_name = test.chomp(File.extname(test) ).gsub("sass/", "")
    full_path = File.join(Dir.pwd, test)


    define_method "test_#{test_name}_compile" do

      puts "\nCompiling #{test}"
      puts "=" * "Compiling #{test}".length
      exit_code = system "compass compile #{Dir.pwd} #{full_path} --force"

      assert_equal(true, exit_code)

      css_output = test.gsub(".scss", ".css");
      test_output = css_output.gsub("sass", temp_dir)

      assert_equal(true, FileUtils.compare_file(test_output, css_output.gsub("sass", "css")))

    end

    FileUtils.rm_rf(temp_dir)

  end
end


