const container = document.querySelector(".container");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        Dashboard(user);
    } else {
        Landing();
    }
});

const Dashboard = (user) => {
    let displayName = user.displayName;
    let photoURL = user.photoURL;
    let email = user.email;

    const element = document.createElement('div');
    element.classList.add('Dashboard');
    element.innerHTML = (`
        <div class="foto-user"></div>
        <div class="nama-user">Nama: ${displayName}</div>
        <div class="email-user">Email: ${email}</div>
        <button data-button="logout">Logout</button>

        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4xuWVBs4FgJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `);

    const fotoUser = element.querySelector(`.foto-user`);
    fotoUser.style.backgroundImage = `url(${photoURL})`;

    const logoutBtn = element.querySelector(`[data-button="logout"]`);
    logoutBtn.onclick = () => firebase.auth().signOut().then(() => alert('Berhasil Keluar Dari Akun Kamu')).catch((err) => alert(err));
    
    container.innerHTML = '';
    container.appendChild(element);
}

const Landing = () => {
    const element = document.createElement('div');
    element.classList.add('Landing');
    element.innerHTML = (`<button data-button="login" >Google Login</button>`);

    container.innerHTML = '';
    container.appendChild(element);

    const loginBtn = element.querySelector(`[data-button="login"]`);
    loginBtn.onclick = () => loginGoogle();

    const loginGoogle = () => {
        const provider =  new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
}
