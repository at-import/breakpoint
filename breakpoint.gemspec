require './lib/breakpoint'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = Breakpoint::VERSION
  s.date = Breakpoint::DATE

  # Gem Details
  s.name = "breakpoint"
  s.rubyforge_project = "breakpoint"
  s.description = %q{Really simple media queries in Sass}
  s.summary = %q{An easy to use system for writing and managing media queries.}
  s.authors = ["Mason Wendell", "Sam Richard"]
  s.email = ["mason@thecodingdesigner.com", "sam@snug.ug"]
  s.homepage = "https://github.com/Team-Sass/breakpoint"
  s.licenses = ["MIT", "GPL-2.0"]

  # Gem Files
  s.files = ["README.md"]
  s.files += ["CHANGELOG.md"]
  s.files += Dir.glob("lib/**/*.*")
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  s.add_dependency("sass",      ["~>3.3"])
  s.add_dependency("sassy-maps",   ["<1.0.0"])
end
