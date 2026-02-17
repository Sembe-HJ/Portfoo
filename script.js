const body = document.body;
const colorChanger = document.getElementById('color-changer');
const header = document.querySelector('header');

let currentColorScheme = 1;

colorChanger.addEventListener('click', () => {
  currentColorScheme = (currentColorScheme % 4) + 1; // Cycle through 3 color schemes

  switch (currentColorScheme) {
    case 1:
      body.style.backgroundColor = '#f4f4f4';
      body.style.color = '#333';
      header.style.backgroundColor = '#333';
      colorChanger.style.backgroundColor = '#007bff';
      break;
    case 2:
      body.style.backgroundColor = '#e0f7fa';
      body.style.color = 'firebrick';
      header.style.backgroundColor = '#a0522d';
      colorChanger.style.backgroundColor = '#4CAF50';
      break;
    case 3:
      body.style.backgroundColor = '#f5f5dc';
      body.style.color = 'darkkhaki';
      header.style.backgroundColor = 'darksalmon';
      colorChanger.style.backgroundColor = '#f44336';
      break;
      case 4:
      body.style.backgroundColor = '#45DFB1';
      body.style.color = '#0B6477';
      header.style.backgroundColor = '#14919B';
      colorChanger.style.backgroundColor = 'coral';
      break;
  }
});

const detailsButtons = document.querySelectorAll('.project-details');

detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectIndex = Array.from(detailsButtons).indexOf(button);
        alert(`Details for Project ${projectIndex + 1}`); // Replace with your details display logic
    });
});

const viewMoreButtons = document.querySelectorAll('.view-more');

viewMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const moreDetails = button.nextElementSibling; // Get the next sibling element (the .more-details div)
        moreDetails.style.display = moreDetails.style.display === 'none' ? 'block' : 'none';
        button.textContent = moreDetails.style.display === 'block' ? 'View Less' : 'View More'; // Change button text
    });
});





window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("intro-screen").style.display = "flex";
        document.getElementById("fire-sound").play(); // Moto unaanza kusikika
    }, 3000);
};

function startAnimation() {
    showExplosion();
    setTimeout(function() {
        enterSite();
    }, 800);
}

function showExplosion() {
    let explosion = document.getElementById("explosion");
    explosion.style.display = "block";

    setTimeout(function() {
        explosion.style.display = "none";
    }, 800);
}

function enterSite() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    document.getElementById("fire-sound").pause(); // Moto unazimwa
    document.getElementById("enter-sound").play(); // Sound ya enter inacheza
}




// Show Login and Register forms
function showLogin() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

function showRegister() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
}

// Register function
function register() {
    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    showLogin();
}

// Login function
function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        alert("Login successful!");
        window.location.href = "portfoo.html"; // Redirect to portfolio page
    } else {
        alert("Invalid email or password!");
    }
}

