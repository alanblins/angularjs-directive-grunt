const path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    html2js: {
      options: {
	rename:function(moduleName){
		return 'tpl/'+path.basename(moduleName);
	}
      },
      main: {
        src: ['directive/**/*.tpl.html'],
        dest: 'tmp/templates.js'
      }
    },
    concat: {
       options: {
         separator: ';',
       },
       dist: {
         src: ['tmp/templates.js', 'directive/directive.js'],
         dest: 'dist/directive.build.js',
       }
    }
  });
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['html2js','concat']);

};
