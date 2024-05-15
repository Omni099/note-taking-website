function getInfo() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    newusername = localStorage.getItem("newusername");
    newpassword = localStorage.getItem("newpassword");


    if (username === "Raj" && password === "spotify") {
        window.location.href = "notes.html";
    }
    else if (username === newusername && password === newpassword) {
        window.location.href = "notes.html";
    }
    else {
        window.alert("Incorrect Username/Password Combination");
    }
}


function createAcc() {
    const newusername = document.getElementById("newusername").value;
    const newpassword = document.getElementById("newpassword").value;

    if  (newusername.length < 5 && newpassword.length < 8) {
        window.alert("Username must be greater than 4 characters and password must be greater than 7 characters")
} else {
    localStorage.setItem("newusername", newusername);
    localStorage.setItem("newpassword", newpassword);
    window.alert("Account Created Successfully. Please Proceed to Sign In.")
}
}

function createNote() {
        /*note1*/
        const input_title = document.getElementById("input_title").value;
        const input_desc = document.getElementById("input_desc").value;
        const input_date = document.getElementById("input_date").value

        localStorage.setItem("note1_title", input_title);
        localStorage.setItem("note1_date", input_date);
        localStorage.setItem("note1_desc", input_desc);

        document.getElementById("note1_title").textContent = input_title;
        document.getElementById("note1_date").textContent = input_date;
        document.getElementById("note1_desc").textContent = input_desc;
        /*note2*/
        const input2_title = document.getElementById("input2_title").value;
        const input2_desc = document.getElementById("input2_desc").value;
        const input2_date = document.getElementById("input2_date").value
    
        localStorage.setItem("note2_title", input2_title);
        localStorage.setItem("note2_date", input2_date);
        localStorage.setItem("note2_desc", input2_desc);
    
        document.getElementById("note2_title").textContent = input2_title;
        document.getElementById("note2_date").textContent = input2_date;
        document.getElementById("note2_desc").textContent = input2_desc;
        /*note3*/
        const input3_title = document.getElementById("input3_title").value;
        const input3_desc = document.getElementById("input3_desc").value;
        const input3_date = document.getElementById("input3_date").value
    
        localStorage.setItem("note3_title", input3_title);
        localStorage.setItem("note3_date", input3_date);
        localStorage.setItem("note3_desc", input3_desc);
    
        document.getElementById("note3_title").textContent = input3_title;
        document.getElementById("note3_date").textContent = input3_date;
        document.getElementById("note3_desc").textContent = input3_desc;
        /*note4*/
        const input4_title = document.getElementById("input4_title").value;
        const input4_desc = document.getElementById("input4_desc").value;
        const input4_date = document.getElementById("input4_date").value
    
        localStorage.setItem("note4_title", input4_title);
        localStorage.setItem("note4_date", input4_date);
        localStorage.setItem("note4_desc", input4_desc);
    
        document.getElementById("note4_title").textContent = input4_title;
        document.getElementById("note4_date").textContent = input4_date;
        document.getElementById("note4_desc").textContent = input4_desc;
}


function renderNotes() {
    /*note1*/
    const note1_title = localStorage.getItem("note1_title");
    const note1_desc = localStorage.getItem("note1_desc");
    const note1_date = localStorage.getItem("note1_date");

    document.getElementById("note1_title").textContent = note1_title;
    document.getElementById("note1_date").textContent = note1_date;
    document.getElementById("note1_desc").textContent = note1_desc;
   /*note2*/
    const note2_title = localStorage.getItem("note2_title");
    const note2_desc = localStorage.getItem("note2_desc");
    const note2_date = localStorage.getItem("note2_date");

    document.getElementById("note2_title").textContent = note2_title;
    document.getElementById("note2_date").textContent = note2_date;
    document.getElementById("note2_desc").textContent = note2_desc;
    /*note3*/
    const note3_title = localStorage.getItem("note3_title");
    const note3_desc = localStorage.getItem("note3_desc");
    const note3_date = localStorage.getItem("note3_date");

    document.getElementById("note3_title").textContent = note3_title;
    document.getElementById("note3_date").textContent = note3_date;
    document.getElementById("note3_desc").textContent = note3_desc;
    /*note3*/
    const note4_title = localStorage.getItem("note4_title");
    const note4_desc = localStorage.getItem("note4_desc");
    const note4_date = localStorage.getItem("note4_date");

    document.getElementById("note4_title").textContent = note4_title;
    document.getElementById("note4_date").textContent = note4_date;
    document.getElementById("note4_desc").textContent = note4_desc;
}
window.addEventListener("load", renderNotes);
