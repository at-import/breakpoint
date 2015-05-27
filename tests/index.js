var sass = require('node-sass'),
    jsdiff = require('diff'),
    fs = require('fs-extra'),
    i = 0,
    glob = require('glob');

glob('./tests/**/*.scss', function (err, files) {
  if (err) throw err;

  files.forEach(function (file) {
    if (file.charAt(0) !== '_') {
      sass.render({
        file: file,
        outputStyle: 'expanded',
        includePaths: [
          '../stylesheets/',
          '../vendor/ruby/2.0.0/gems/sassy-maps-0.4.0/sass/',
          '../vendor/ruby/2.0.0/gems/breakpoint-2.5.0/stylesheets/'
        ]
      }, function(err, result) {
          if (err) throw err;

          // console.log(result);
          var file = result.stats.entry.split('/');

          file = file[file.length - 1];
          file = file.replace('.scss', '.css');

          if (file.charAt(0) !== '_') {
            fs.readFile('./controls/' + file, function (ctrlErr, ctrlFile) {
              var diff = jsdiff.diffCss(ctrlFile.toString(), result.css.toString()),
                  diffCount = 0;

              diff.forEach(function(part){
                // green for additions, red for deletions
                // grey for common parts
                var color = part.added ? 'green' :
                  part.removed ? 'red' : 'grey';

                if (color !== 'grey') {
                  diffCount++;
                }
              });

              if (diffCount) {
                console.log(file);
                diff = jsdiff.createPatch(file, ctrlFile.toString(), result.css.toString());

                fs.outputFile('./diff/' + file + '.diff', diff, function (writeErr, writePatch) {
                  if (writeErr) throw writeErr;

                  // throw 'Diff in output for ' + file;
                });
              }
            });
          }
        });
    }
  });
});
