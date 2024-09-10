const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}

document.getElementById('live-demo-btn').addEventListener('click', function() {
    window.open('demo1.mp4', '_blank');
});

document.getElementById('github-repo-btn').addEventListener('click', function() {
    window.open('https://github.com/justindy81/marketplace-project-1', '_blank');
});

document.getElementById('live-demo-btn1').addEventListener('click', function() {
    window.open('demo2.mp4', '_blank');
});

document.getElementById('github-repo-btn1').addEventListener('click', function() {
    window.open('https://github.com/justindy81/Responsive-Personal-RGB-Website', '_blank');
});

document.getElementById('github-repo-btn2').addEventListener('click', function() {
    window.open('https://github.com/justindy81/URL-to-Video-AI-Project', '_blank');
});
