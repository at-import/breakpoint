require './lib/breakpoint'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SurvivalKit::VERSION
  s.date = SurvivalKit::DATE

  # Gem Details
  s.name = "breakpoint"
  s.description = %q{Really simple media queries in Sass}
  s.summary = %q{An easy to use system for writing and managing media queries.}
  s.authors = ["Mason Wendell"]
  s.email = ["mason@zivtech.com"]
  s.homepage = "http://thecodingdesigner.com"

  # Gem Files
  s.files = ["README.markdown"]
  s.files += ["CHANGELOG.markdown"]
  s.files += Dir.glob("lib/**/*.*")
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}
  s.add_dependency("compass", [">= 0.12.1"])
end
