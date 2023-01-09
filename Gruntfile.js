const sass = require('node-sass');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      /*
       concat:{
        js:{
            src:['src/js/*.js'],
            dest:'build/js/scripts.js'
        },
        css:{
            src:['css/main.min.css'],
            dest:'build/css/main.min.css'
        }

       },
*/
       uglify: {
        options: {
          manage: false
        },
        my_target: {
          /*  
          files:{
            'build/main.min.js':['src/js/main1.js','src/js/main2.js']
          }
          */
          files:[{
            expand:true,
            cwd:'src/js/',
            src:'main.js',
            dest:'build/js',
            ext:'.min.js'
        }]
        }
      },
      
      cssmin:{
        my_target:{
            files:[{
                expand:true,
                cwd:'src/css/',
                src:'main.min.css',
                dest:'build/css',
                ext:'.min.css'
            }]
        }

      },
      
       sass: {
        options: {
              implementation: sass,
              sourceMap: false
          },
        build: {
          files: [{
          //  src:["src/sass/main.scss","src/sass/style.scss"],
           // dest: "src/css/main.css"
           'src/css/main.min.css':["src/sass/main.scss","src/sass/style.scss"]
          }
        ]
        }
      }


    });


    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


   grunt.registerTask('cssminRun', ['cssmin']);
    grunt.registerTask('uglify-js', ['uglify']);
    grunt.registerTask('concat-js',['concat:js']);
   // grunt.registerTask('concat-css',['concat:css']);

  };