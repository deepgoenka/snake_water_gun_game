let obj = ['S', "G", 'W'];
let comp;
let comp_wins = 0;
let user_wins = 0;
let user;
let con;
let i = 0
while (i < 5) {
  document.write("<br>Chance - " + (i + 1));
  comp = obj[Math.floor(Math.random() * obj.length)];
  user = prompt("Enter your choice");
  con = confirm(`Do you want to give your choice as ${user}?`);
  document.write("<br>User entered: " + user);
  if (con) {
    if (comp == user) {
      alert("Draw");
      document.write("<br>Computer entered: " + comp);
      document.write("<br>It's a Draw!");
    }

    if (comp == 'S' && user == 'W') {
      alert("Computer wins");
      comp_wins = comp_wins + 1;
      document.write("<br>Computer entered: " + comp);
      document.write("<br>Computer wins!");
    }
    else if (comp == 'G' && user == 'S') {
      alert("Computer wins");
      comp_wins = comp_wins + 1;
      document.write("<br>Computer entered: " + comp);
      document.write("<br>Computer wins!");
    }
    else if (comp == 'W' && user == 'G') {
      alert("Computer wins");
      comp_wins = comp_wins + 1;
      document.write("<br>Computer entered: " + comp);
      document.write("<br>Computer wins!");
    }
    else if (comp == 'W' && user == 'S') {
      alert("User wins");
      user_wins = user_wins + 1;
      document.write("<br>Computer entered: " + comp);
      document.write("<br>User wins!");
    }
    else if (comp == 'S' && user == 'G') {
      alert("User wins");
      user_wins = user_wins + 1;
      document.write("<br>Computer entered: " + comp);
      document.write("<br>User wins!");
    }
    else if (comp == 'G' && user == 'W') {
      alert("User wins");
      user_wins = user_wins + 1;
      document.write("<br>Computer entered: " + comp);
      document.write("<br>User wins!");
    }
  }
  document.write("<br>---------------------------------------");
  i = i + 1;
}
document.write("<br>---------------------------------------");
alert("User Score: " + user_wins + "\nComputer Score: " + comp_wins);
document.write("<br>Final Result");
document.write("<br>User Score: " + user_wins);
document.write("<br>Computer Score: " + comp_wins);
if (user_wins > comp_wins) {
  alert("User won the series");
  document.write("<br>Congratulations User! You won the series.");
}
else if (user_wins < comp_wins) {
  alert("Computer won the series");
  document.write("<br>Oops! Computer won the series.");
}
else {
  alert("It's a draw in series");
  document.write("<br>Oh! It's a draw in the finals.");
}