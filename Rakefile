
task :default => [:test]

task :test do
  require 'fileutils'

  Dir.chdir('test') do
    output_dir = 'test'
    FileUtils.mkdir_p output_dir
    ruby 'unit_tests.rb'
    FileUtils.rm_rf output_dir
  end
end

desc 'Compile baseline CSS'
task :compile do
  require 'compass'
  require 'compass/exec'

  Dir.chdir('test') do
    Compass.add_configuration 'config.rb'
    Compass.configuration.project_path = Dir.pwd
    # Compile into baseline directory instead of test output directory
    Compass.configuration.css_dir = 'css'
    Compass.compiler.clean!
    Compass.compiler.run
  end
end
