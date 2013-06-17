

task :default => [:test]

task :test do
  Dir.chdir('test') do
    ruby "unit_tests.rb"
  end
end


desc "Compile Example CSS"
task :compile do
  require 'compass'
  require 'compass/exec'

  Dir.chdir('test') do
    Compass::Exec::SubCommandUI.new(%w(compile --force --css-dir=css)).run!
  end

end



desc "Compile Example CSS"
task :other do
  require 'compass'
  require 'compass/exec'

  Dir.chdir('test') do
    Compass.add_configuration('config.rb')
    Compass.configuration.project_path = Dir.pwd
    args = Compass.configuration.to_compiler_arguments(:logger => Compass::NullLogger.new)

   # compiler = Compass::Compiler.new *args
   #   compiler.clean!
   #   compiler.run

    puts args



    FileList['sass/*.scss'].exclude('sass/_*.scss').each do |test|
      puts "\nCompiling #{test}"
      puts "=" * "Compiling #{test}".length
      puts test
      full_path = Dir.pwd + "/" + test


      compiler = Compass::Compiler.new(Dir.pwd, full_path, Dir.pwd + "/css", {})
      compiler.clean!
      compiler.run

      puts Dir.pwd


      puts full_path

      #puts "compass compile #{Dir.pwd} #{full_path} --force"

      exit_code = sh "compass compile #{Dir.pwd} #{full_path} --force "

      #exit_code = Compass::Exec::SubCommandUI.new(%w(compile #{Dir.pwd} #{full_path} --force)).run!

      puts exit_code
    end
  end



#  Dir.chdir 'test' do |dir|
    #file_compass_config = "/path/to/some/different/config.rb"


 #   Compass::Exec::SubCommandUI.new(%w(compile --force)).run!
 # end
end

