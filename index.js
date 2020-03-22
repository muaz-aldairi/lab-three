
// way one
const mark1=66;
switch (mark1) {
    case 100 :
    case 99:
    case 98:
    case 97:
    case 96 :
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
    case 89:
    case 88:
    case 87:
    case 86:
    case 85:
        console.log( ' A+ ' + 'pass with Distinction')
     break;
    case 84 :
    case 83 :
    case 82 :
    case 81 :
    case 80 :
        console.log( ' A ' + 'pass with Distinction')
     break;
     case 79 :
        case  78:
        case  77:
        case 76 :
        case  75:
        console.log(' A- ' + 'pass with Distinction')
     break;
    case  74:
    case  73:
    case  72:
    case  71:
    case  70:
        console.log(' B+ ' + 'pass with Merit')
     break;
    case 69 :
    case 68 :
    case 67 :
    case 66 :
    case  65:
        console.log(' B ' + 'pass with Merit')
     break;
    case  64:
    case  63:
    case  62:
    case  61:
    case  60:
        console.log(' B- ' + 'pass with Merit')
     break;
     case 59 :
    case  58:
    case  57:
    case  56:
    case  55:
        console.log(' C+ ' + 'pass')
        break;
     case 54 :
     case  53: 
     case  52:
     case 51 :
     case  50:
        console.log(' C ' + 'pass')
     break;
    case 49 :
    case 48 :
    case  47: 
   case  46:
   case 45 :
    case  44:
    case 43 :
     case  42: 
     case  41:
    case 40 :
        console.log( ' D ' + 'Fail grades')
        break;
    case 39:
    case 38:
    case 37:
    case 36:
    case 35:
    case 34:
    case 33:
    case 32:
    case 31:
    case 30 :
    case 29:
    case 28 :
    case 27:
    case 26:
    case 25:
    case 24:
    case 23:
    case 22:
    case 21:
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log( ' E ' + 'Fail grades')
        break;
        default:
          console.log(' use numbers from 0 to 100');
      }

// way two

const mark= -101;
let grade;

if (100<mark) { console.log("unvalid number");}
else if (0>mark) { console.log("unvalid number");}
else if (mark>=75) { grade=1;}
else if (mark>=60) { grade=2;}
else if (mark>=50) {  grade=3;}
else { grade=4;}

switch (grade) {

  case 1 :

  console.log("Pass with Distinction");
  if (mark>=85) {console.log('A+');}
  else if (mark>=80) {console.log('A');}
  else {console.log('A-');}
  break;


  case 2 :
    
  console.log("Pass with Merit");
  if (mark>=70) {console.log('B+');}
  else if (mark>=65) {console.log('B');}
  else {console.log('B-');}
  break;


  case 3 :

  console.log("Pass");
  if (mark>=55) {console.log('C+');}
  else {console.log('c');}
  break;


  case 4 :
    
  console.log(" fail grades");
  if (mark>=40) {console.log('D');}
  else   {console.log('E');}
  break;

  default : 
  
  console.log(" please enter number between 0 to 100");
}






