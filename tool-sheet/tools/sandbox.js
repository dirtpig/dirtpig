function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'welcome to the cool kids club' );
  } else {
    alert( 'fuck outa here chump' );
  }

function minA(a,b) {
    if (a > b) {
        return b;
    }
    return a;
}
function minB(a, b) {
    return a < b ? a : b;
  }



