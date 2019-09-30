/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let free_time = config[focus];
      let course_time = 800 + (knowsProgramming ? 0 : 500);
      let weeks = Math.ceil(course_time / free_time);
      return weeks;
  };
  
  