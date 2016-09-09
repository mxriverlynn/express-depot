module.exports = function(grunt) {
  grunt.initConfig({

    jasmine_nodejs: {
      options: {
        specNameSuffix: ".specs.js", // also accepts an array
        helperNameSuffix: ".helpers.js",
        useHelpers: true,
        reporters: {
          console: {
            colors: true,
            cleanStack: 1,       // (0|false)|(1|true)|2|3
            verbosity: 3,        // (0|false)|1|2|(3|true)
            listStyle: "indent", // "flat"|"indent"
            activity: false
          }
        },
      },

      depot: {
        specs: ["specs/**/*"]
      }
    },

    jshint: {
      depot: {
        src: ["lib/**/*.js", "specs/**/*.js"],
        options: {
          jshintrc: ".jshintrc"
        }
      }
    },

    watch: {
      depot: {
        files: "lib/**/*.js",
        tasks: ["specs"]
      },

      specs: {
        files: "specs/**/*.js",
        tasks: ["specs"]
      }
    }

  });

  grunt.loadNpmTasks("grunt-jasmine-nodejs");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("specs", ["jshint", "jasmine_nodejs"]);
  grunt.registerTask("default", ["watch"]);
};
