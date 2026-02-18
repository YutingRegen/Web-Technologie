
// Countdown Timer (updates every second)      
function updateCountdown(){
    const deadline = new Date(2025, 7, 5, 12, 30, 0);
    let now = new Date(); 
    let timeRemaining = deadline - now;

        let day = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
        let hour = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
        let minute = Math.floor(timeRemaining / 1000 / 60 % 60);
        let second = Math.floor(timeRemaining / 1000 % 60);

    document.querySelector(".day").innerHTML = `<span style="font-size: 2em">${day}</span> Tag`;
    document.querySelector(".hour").innerHTML = `<span style="font-size: 2em">${hour}</span> Stunde`;
    document.querySelector(".minute").innerHTML = `<span style="font-size: 2em">${minute}</span> Minute`;
    document.querySelector(".second").innerHTML = `<span style="font-size: 2em">${second}</span> Sekunde`;
}

function loadCountDown(callback) {
    let countdownLoader = document.getElementById("countdownLoader");
    countdownLoader.style.display = "flex";

    setTimeout(() => {
        callback();
        countdownLoader.style.display = "none";
    }, 1500); 
}

loadCountDown(() => {
    updateCountdown();                      // from 0 to 1000ms
    setInterval(updateCountdown, 1000);     // from 1000ms
});


//Fetch JSON Data from API
let users = [];

let loader = document.getElementById('loader'); // Reference to loader element

async function getJson(url){

    try {
        loader.style.display = "flex";

        let myJson = await fetch(url);
        if(!myJson.ok){
            throw new Error(`HTTP Fehler: ${myJson.status}`);
        }
        let mydata = await myJson.json(); // Parse JSON
        users = mydata.results; // Store user data in global array
        setHelferinList(users); // Display users
    } catch (error) {
        alert("Die Daten konnten nicht geladen werden.");
    } finally {
    loader.style.display = "none";  // Hide loader
    }
}

function setHelferinList(array) {
    let cardBody = document.querySelector(".card");
    cardBody.innerHTML = ""; // Clear existing content

    let divTable = document.createElement("div");
    divTable.className = "table-responsive";
    cardBody.appendChild(divTable);

    let helferTable = document.createElement("table");
        helferTable.className = "helfer-table table table-striped table-bordered table-hover ";
        divTable.appendChild(helferTable);

    users.forEach( user => {
        let tr = document.createElement("tr");
        helferTable.appendChild(tr);

        
        //Helfer-image
        let tdLeft = document.createElement("td");
        tdLeft.colSpan = 1;
            let cardImage = document.createElement("img");
            cardImage.className = "card-Image";
            cardImage.src = user.picture.large;   
            cardImage.alt = `${user.name.first} ${user.name.last}`;
            tdLeft.append(cardImage);
        tr.appendChild(tdLeft);


        //Helfer-info
        let tdRight = document.createElement("td");
        tdRight.colSpan = 2;
        tr.appendChild(tdRight);
            /* begin of info */
            let cardDiv = document.createElement("div");
            cardDiv.className = "card-body";
            helferTable.appendChild(cardDiv);

            //name
            let userName = document.createElement("h2");
            userName.className = "card-title";
            userName.innerHTML = `${user.name.first} ${user.name.last}`;
            cardDiv.appendChild(userName);
            //gender    
            let userGender = document.createElement("p");
            userGender.className = "infoText";
            userGender.innerHTML = `${user.gender}`;
            cardDiv.appendChild(userGender);
            //email
            let userEmail = document.createElement("p");
            userEmail.className = "infoText";
            userEmail.innerHTML = `📮 ${user.email}`;
            cardDiv.appendChild(userEmail);

            // Birthday
            let userBirth = document.createElement("p");
            userBirth.className = "infoText";
            let rawDate1 = user.dob.date;
            let dateObj1 = new Date(rawDate1);
            let formattedDate1 = dateObj1.toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }); 
            userBirth.innerHTML = `🗓️ ${formattedDate1} (${user.dob.age} Jahre)`;
            cardDiv.appendChild(userBirth);

            // Registration date
            let userRegist = document.createElement("p");
            userRegist.className = "infoText";
            let rawDate2 = user.registered.date;
            let dateObj2 = new Date(rawDate2);
            let formattedDate2 = dateObj2.toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }); 
            userRegist.innerHTML = `🗂️ ${formattedDate2}`;
            cardDiv.appendChild(userRegist);
            
            // Phone
            let userTelefon = document.createElement("p");
            userTelefon.className = "infoText";
            userTelefon.innerHTML = `☎️ ${user.phone}`;
            cardDiv.appendChild(userTelefon);

            let userHandy = document.createElement("p");
            userHandy.className = "infoText";
            userHandy.innerHTML = `📱 ${user.cell}`;
            cardDiv.appendChild(userHandy);

            let userID = document.createElement("p");
            userID.className = "infoText";
            userID.innerHTML = `🆔 ${user.id.value}`;
            cardDiv.appendChild(userID);
            /* end of info */
        tdRight.appendChild(cardDiv); // Append info to right side
    });  
}


document.getElementById("selectsort").addEventListener("change", (event) => {
    const value = event.target.value;

    // Sort user list based on selected criteria
    if (value === "name-asc") {
    users.sort((a, b) => a.name.first.localeCompare(b.name.first));
    } else if (value === "name-desc") {
    users.sort((a, b) => b.name.first.localeCompare(a.name.first));
    } else if (value === "registered-asc") {
    users.sort((a, b) => new Date(a.registered.date) - new Date(b.registered.date));
    } else if (value === "registered-desc") {
    users.sort((a, b) => new Date(b.registered.date) - new Date(a.registered.date));
    }

    setHelferinList(users); // Re-render list
 
});
 

window.onload = function () {
  getJson('https://randomuser.me/api/?results=30&seed=a');
};


