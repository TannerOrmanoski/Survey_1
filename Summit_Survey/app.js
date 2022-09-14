const button_1 = document.querySelector(".next-button1");
const button_2 = document.querySelector(".next-button2");
const button_3 = document.querySelector(".next-button3");
const button_4 = document.querySelector(".next-button4");
const button_5 = document.querySelector(".next-button5");
const button_6 = document.querySelector(".results-button");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

const nlist = document.querySelector(".nlist");
const tlist = document.querySelector(".tlist"); 
const rlist = document.querySelector(".rlist");
const relist = document.querySelector(".relist");
const flist = document.querySelector(".flist");

let names = [""]
let titles = [""]
let roles = [""]
let reports = [""]
let facts = [""]

let input = document.querySelector('#name');
let input1 = document.querySelector('#title');
let input2 = document.querySelector('#role');
let input3 = document.querySelector('#report');
let input4 = document.querySelector('#fact');

function addNames(){
    let template = names.map(name => `<li>${name}</li>`).join('\n');
    document.querySelector('#ul1').innerHTML = template;
}

//addNames();



function addTitle() {
    let template2 = titles.map(title => `<li>${title}</li>`).join('\n');
    document.querySelector('#ul2').innerHTML = template2;
}

//addTitle();

function addRole() {
    let template3 = roles.map(role => `<li>${role}</li>`).join('\n');
    document.querySelector('#ul3').innerHTML = template3;
}

//addRole();

function addReport() {
    let template4 = reports.map(report => `<li>${report}</li>`).join('\n');
    document.querySelector('#ul4').innerHTML = template4;
}

//addReport();

function addFact() {
    let template5 = facts.map(fact => `<li>${fact}</li>`).join('\n');
    document.querySelector('#ul5').innerHTML = template5;
}

//addFact();

// First Questiion
button_1.addEventListener("click", function() {
    q1.style.display = "none";
    q2.style.display = "block";
    names.push(input.value);
    input.value = '';
    addNames();
});

// Second Questiion
button_2.addEventListener("click", function() {
    q2.style.display = "none";
    q3.style.display = "block";
    titles.push(input1.value);
    input1.value = '';
    addTitle();
});

// Third Questiion
button_3.addEventListener("click", function() {
    q3.style.display = "none";
    q4.style.display = "block";
    roles.push(input2.value);
    input2.value = '';
    addRole();
});

// Fourth Questiion
button_4.addEventListener("click", function() {
    q4.style.display = "none";
    q5.style.display = "block";
    reports.push(input3.value);
    input3.value = '';
    addReport();
});

// Display Thanks Message
button_5.addEventListener("click", function() {
    q5.style.display = "none";
    survey.style.display = "none";
    end.style.display = "block";
    facts.push(input4.value);
    input4.value = '';
    addFact();
});

// Show Results
button_6.addEventListener("click", function() {
    end.style.display = "none";
    nlist.style.display = "block";
    tlist.style.display = "block";
    rlist.style.display = "block";
    relist.style.display = "block";
    flist.style.display = "block";
});