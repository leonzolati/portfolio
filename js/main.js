var prev = document.getElementById("prev");
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var help =  "education: relevant education I have\n" +
            "skills: a short list of general technical skills\n"+
            "projects: a description of some projects I have worked on\n"+
            "clear: clears the terminal\n\n";

var projects =  "Zolati.dev\nThis website was written in HTML, CSS, and Javascript and deployed on AWS using S3, cloudfront, ACM, and Route 53.\n\n"+
                "Next Stop\nA low-cost GPS tracking app for regional public transport services.\n    -  A proof of concept android app written in Java\n    - Uses Google Maps API and Google Firebase to display the location of “bus” users to “general” users\n\n"+
                "Fitomatic\nAn exercise partener app to help you find your next gym buddy, running partner and much more.\n    - A two-month-long project involving four members requiring a high degree of teamwork, individual learning, regular meetings, and a commitment to deadlines.\n    - Was responsible for front-end development, UI design and minor back-end development i.e. Adapters for RecyclerViews.\n\n";
var skills = "Languages: Java, C/C++, Python, HTML/CSS, JavaScript, ARM  assembly.\nFrameworks and Databases: AWS, Android Development, Firebase (database and authentication), PostgreSQL\nTools: Git (including for agile workflows), Gitlab CI/CD, Gradle\n\n";
var education = "Australian National University\n    - Batchelor of Information Technology (2021 - present)\nUniversity of Tasmania\n    - High Achiever Program in Computer Science (2020)\n\n";

var git = 0;
var commands = [];

window.addEventListener("keyup", enterKey);


init();

function init(){
  //init
  textarea.value = "";
  prev.value ="";
  command.innerHTML = textarea.value;

  addLine(
    "\n▀█ █▀█ █░░ ▄▀█ ▀█▀ █ ░ █▀▄ █▀▀ █░█\n"+
      "█▄ █▄█ █▄▄ █▀█ ░█░ █ ▄ █▄▀ ██▄ ▀▄▀\n\n");

  addLine("Welcome to my Portfolio Site.\nType 'help' for a list of commands\n\n");
}

function enterKey(e) {
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("c:\\users\\tempuser> " + command.innerHTML + "\n\n");
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case("education"):
      addLine(education);
      break;
    case("skills"):
      addLine(skills);
      break;
    case("projects"):
      addLine(projects);
      break;
    case ("help"):
      addLine(help);
      break;
    case ("clear"):
        init();
      break;
    default:
      addLine("unknown input\n\n");
      break;
  }
}

function addLine(text) {
  prev.value += text;
  prev.rows = prev.value.split("\n").length+1;
  prev.scrollTop = prev.scrollHeight;
  
}

