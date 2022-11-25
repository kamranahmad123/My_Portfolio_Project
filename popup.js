/* Popup windows JS code */

const body = document.querySelector('body');
const mycode = document.createElement('div');
body.appendChild(mycode);
mycode.innerHTML = `
<body>
<section class="menu_background">
  <header>
    <nav class="navbar">  
    <h1 class="my_logo">My Logo</h1>
    <ul class="nav_menu">
        <li class="nav-link"><a href="#portfolio" class="nav_link">Portfolio</a></li>
        <li class="nav-link"><a href="#about" class="nav_link">About</a></li>
        <li class="nav-link"><a href="#contact" class="nav_link">Contact</a></li>
    </ul>
    <div class="hamburger">
        <span class="nav_bar"></span>
        <span class="nav_bar"></span>
        <span class="nav_bar"></span>   
    </div>
    <script src="Javascript.js"></script>
</nav>
</header>
    <main>
      <section class="headline">
        <h1 class="header_text">I’m Kamran
          Glad to see you!</h1>
        <p class="primary_text">I’m a software developer! I can help you build a product , feature or website
          Look through some of my work and
          experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
        <h2 class="connect">LET'S CONNECT</h2>
        <ul class="social-media-icons">
          <li class="social-media-icon">
            <a href="https://twitter.com/Kamrankhanahm15" target="_blank">
              <img class="social-media-links" src="images/twitter.png" alt="Kamran's Twitter">
            </a>
          </li>
          <li class="social-media-icon">
            <a href="https://www.linkedin.com/in/kamran-ahmad-b9b05910b/" target="_blank">
              <img class="social-media-links" src="images/Linkedin.png" alt="Kamran's Linkedin">
            </a>
          </li>
          <li class="social-media-icon">
            <a href="#social-media-icon" target="_blank">
              <img class="social-media-links" src="images/Blog.png" alt="Kamran's Blog">
            </a>
          </li>
          <li class="social-media-icon">
            <a href="https://github.com/Kamran123Ahmad" target="_blank">
              <img class="social-media-links" src="images/github.png" alt="Kamran's github">
            </a>
          </li>
          <li class="social-media-icon">
            <a href="#social-media-icon" target="_blank">
              <img class="social-media-links" src="images/angelist.png" alt="Kamran's Angelist">
            </a>
          </li>
        </ul>
      </section>
    </section>
  
      <section id="portfolio" class="work-section">
        <ul class="project_work">
          <li class="project-image-container">
            <img src="./images/SnapshootPortfolioA.png"  class="mobile-image">
            <img src="./images/SnapshootDesktopPortfolioA.png" class="desktop-image">
          </li>
          <li class="project-body-block">
            <h2 class="project-title">Tonic</h2>
            <div class="project-info">
              <span class="project-info-items canopy">CANOPY</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items dsk-fw">Back End Dev</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items">2015</span>
            </div>
            <p class="project-primary-text">A daily selection of privately personalized reads; no accounts or sign-ups
              required.</p>
            <ul class="tags">
              <li class="tag">html</li>
              <li class="tag">css</li>
              <li class="tag">javaScript</li>
            </ul>
            <button class="open1 button see-project" type="button">See Project</button>
          </li>
        </ul>
  
        <ul class="project_work row-reverse-desktop">
          <li class="project-image-container">
            <img src="./images/SnapshootPortfolioB.png"  class="mobile-image">
            <img src="./images/SnapshootDesktopPortfolioB.png"  class="desktop-image">
          </li>
          <li class="project-body-block">
            <h2 class="project-title">Multi-Post Stories</h2>
            <div class="project-info">
              <span class="project-info-items canopy hide-for-desktop">CANOPY</span>
              <span class="project-info-items canopy hide-for-mobile">FACEBOOK</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items hide-for-desktop">Back End Dev</span>
              <span class="project-info-items hide-for-mobile dsk-fw">Full Stack Dev</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items">2015</span>
            </div>
            <p class="project-primary-text hide-for-desktop">A daily selection of privately personalized reads; no
              accounts or sign-ups
              required.</p>
            <p class="project-primary-text hide-for-mobile">Experimental content creation feature that allows users to add
              to an existing story over the course of a day without
              spamming their friends.</p>
            <ul class="tags">
              <li class="tag">html</li>
              <li class="tag hide-for-mobile">Ruby on rails</li>
              <li class="tag">css</li>
              <li class="tag">javaScript</li>
            </ul>
            <button class="open2 button see-project" type="button">See Project</button>
          </li>
        </ul>
  
        <ul class="project_work">
          <li class="project-image-container">
            <img src="./images/SnapshootPortfolioC.png"  class="mobile-image">
            <img src="./images/SnapshootDesktopPortfolioC.png"  class="desktop-image">
          </li>
          <li class="project-body-block">
            <h2 class="project-title hide-for-desktop">Tonic</h2>
            <h2 class="project-title hide-for-mobile">Facebook 360</h2>
            <div class="project-info">
              <span class="project-info-items canopy hide-for-desktop">CANOPY</span>
              <span class="project-info-items canopy hide-for-mobile">FACEBOOK</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items hide-for-desktop">Back End Dev</span>
              <span class="project-info-items hide-for-mobile dsk-fw">Full Stack Dev</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items">2015</span>
            </div>
            <p class="project-primary-text hide-for-desktop">A daily selection of privately personalized reads; no
              accounts or sign-ups
              required.</p>
  
            <p class="project-primary-text hide-for-mobile">Exploring the future of media in Facebook's first Virtual
              Reality app; a place to discover and enjoy 360 photos and
              videos on Gear VR.</p>
            <ul class="tags">
              <li class="tag">html</li>
              <li class="tag hide-for-mobile">Ruby on rails</li>
              <li class="tag">css</li>
              <li class="tag">javaScript</li>
            </ul> 
            <button class="open3 button see-project" type="button">See Project</button>
          </li>
        </ul>
  
        <ul class="project_work row-reverse-desktop">
          <li class="project-image-container">
            <img src="./images/SnapshootPortfolioD.png"  class="mobile-image">
            <img src="./images/SnapshootDesktopPortfolioD.png"  class="desktop-image">
          </li>
          <li class="project-body-block">
            <h2 class="project-title hide-for-desktop">Multi-Post Stories</h2>
            <h2 class="project-title hide-for-mobile">Uber Navigation</h2>
            <div class="project-info">
              <span class="project-info-items canopy hide-for-desktop">CANOPY</span>
              <span class="project-info-items canopy hide-for-mobile">Uber</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items hide-for-desktop">Back End Dev</span>
              <span class="project-info-items hide-for-mobile dsk-fw">Lead Developer</span>
              <img src="./images/Counter.png" >
              <span class="project-info-items hide-for-desktop">2015</span>
              <span class="project-info-items hide-for-mobile dsk-fw">2018</span>
            </div>
            <p class="project-primary-text hide-for-desktop">A daily selection of privately personalized reads; no
              accounts or sign-ups
              required.</p>
  
            <p class="project-primary-text hide-for-mobile">
              A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer:
              your car.
            </p>
            <ul class="tags">
              <li class="tag">html</li>
              <li class="tag hide-for-mobile">Ruby on rails</li>
              <li class="tag">css</li>
              <li class="tag">javaScript</li>
            </ul>
            <button class="open4 button see-project" type="button">See Project</button>
          </li>
        </ul>
      </section>
  
      <section id="about" class="my_self_introduction headline">
        <div class="top-container">
          <h2 class="about-myself-header   header_text">About Myself</h2>
          <p class="primary_text">Hello I’m a software developer! I can help you build a product , feature or
            website
            Look through some of my work and
            experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
          <h2 class="connect">LET'S CONNECT</h2>
          <ul class="about-myself-sm-icons social-media-icons">
            <li class="social-media-icon">
              <a href="https://github.com/Kamran123Ahmad" target="_blank">
                <img class="social-media-links" src="images/github.png" alt="Kamran's Github">
              </a>
            </li>
            <li class="social-media-icon">
              <a href="https://www.linkedin.com/in/kamran-ahmad-b9b05910b/" target="_blank"
                >
                <img class="social-media-links" src="images/Linkedin.png" alt="Kamran's Linkedin">
              </a>
            </li>
            <li class="social-media-icon">
              <a href="#social-media-icon" target="_blank">
                <img class="social-media-links" src="images/angelist.png" alt="Kamran's Angelist">
              </a>
            </li>
            <li class="social-media-icon">
              <a href="https://twitter.com/Kamrankhanahm15" target="_blank" >
                <img class="social-media-links" src="images/twitter.png" alt="Kamran's Twitter">
              </a>
            </li>
            <li class="social-media-icon">
              <a href="#social-media-icon" target="_blank">
                <img class="social-media-links" src="images/Blog.png" alt="Kamran's Blog">
              </a>
            </li>
          </ul>
          <button class="about-myself-btn button" type="button">Get my resume</button>
        </div>
        <ul class="skill-lists">
          <li class="frames-lang-lists-container">
            <div class="frames-lfs">
              <h2 class="skill-title">Languages</h2>
              <img src="./images/arrowdown.png">
            </div>
            <ul class="language-list">
              <li class="language">
                <img src="./images/JS.png">
                <h2 class="lang-name">JavaScript</h2>
              </li>
              <li class="language">
                <img src="./images/HTML.png">
                <h2 class="lang-name">HTML</h2>
              </li>
              <li class="language">
                <img src="./images/CSS.png">
                <h2 class="lang-name">CSS</h2>
              </li>
            </ul>
          </li>
          <li class="frames-lfs">
            <h2 class="skill-title">Frameworks</h2>
            <img src="./images/arrowright.png">
          </li>
          <li class="line"></li>
          <li class="frames-lfs">
            <h2 class="skill-title">Skills</h2>
            <img src="./images/arrowright.png">
          </li>
          <li class="line"></li>
        </ul>
      </section>
  
      <footer id="contact" class="contact-sect">
        <h2 class="header_text">contact me</h2>
        <p class="primary_text">If you have an application you are interested in developing, a feature that you need
          built or a project that
          needs
          coding. I’d love to help with it</p>
        <form action="https://formspree.io/f/xzbwkrzg" class="contact_form" id="contact_form" method="POST">
          <label for="username">
            <input type="text" name="username" id="username" maxlength="30" placeholder="username" required>
          </label>
  
          <label for="email">
            <input type="email" name="email" id="email" placeholder="example@mail.com" required>
          </label>
  
          <label for="message">
            <textarea name="message" id="message" rows="5" maxlength="500" placeholder="Write your message here!"
              required></textarea>
          </label>
          <span class="error-message"></span>
          <div class="button-container">
            <button class="button" type="submit">Get In Touch</button>
          </div>
        </form>
        <div class="bottom-line"></div>
       </footer> 
      </main> 
      </body>
`;

const open = document.querySelector('.open1');
open.addEventListener('click', () => {
  const pop1 = document.createElement('pop1');
  pop1.className = 'pop1';
  const main = document.createElement('div');
  main.className = 'main';
  pop1.innerHTML = `
<div class="top-popup">
<button class="close1 style" type="button">X</button>
<h2 class="project-title-popup">Tonic</h2>
<div class="project-info-popup">
  <span class="project-info-items-popup canopy-popup">CANOPY</span>
  <img src="./images/Counter.png" >
  <span class="project-info-items-popup1">Back End Dev</span>
  <img src="./images/Counter.png" >
  <span class="project-info-items-popup2">2015</span>
</div> 
</div> 
<img src="./images/SnapshootPortfolioA.png"  class="mobile-image-popup"> 
 <p class="project-primary-text-popup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.</p>
 <div class="footer-popup">    
  <ul class="tags-popup">
    <li class="tag-popup">html</li>
    <li class="tag-popup hide-for-mobile">Ruby on rails</li>
    <li class="tag-popup">CSS</li>
    <li class="tag-popup">javaScript</li>
  </ul>
  <button class="button project-popup" type="button">See live</button>
  <button class="button project-popup" type="button">See source</button>
 </ul>
</div>
`;
  body.appendChild(main);
  main.appendChild(pop1);

  const close = document.querySelector('.close1');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
});

const open2 = document.querySelector('.open2');
open2.addEventListener('click', () => {
  const pop1 = document.createElement('pop1');
  pop1.className = 'pop1';
  const main = document.createElement('div');
  main.className = 'main';
  pop1.innerHTML = `
<div class="top-popup">
<h2 class="project-title-popup">Facebook</h2>
<div class="project-info-popup">
<button class="close2 style" type="button">X</button>
  <span class="project-info-items-popup canopy-popup">Facebook</span>
  <img src="./images/Counter.png" >
  <span class="project-info-items-popup1">Back End Dev</span>
  <img src="./images/Counter.png" >
  <span class="project-info-items-popup2">2015</span>
</div> 
</div> 
<img src="./images/SnapshootDesktopPortfolioD.png"  class="mobile-image-popup"> 
 <p class="project-primary-text-popup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.</p>
 <div class="footer-popup">    
  <ul class="tags-popup">
    <li class="tag-popup">html</li>
    <li class="tag-popup hide-for-mobile">Ruby on rails</li>
    <li class="tag-popup">CSS</li>
    <li class="tag-popup">javaScript</li>
    </ul>
    <button class="button project-popup" type="button">See live</button>
    <button class="button project-popup" type="button">See source</button>
   </ul>
</div>
`;
  body.appendChild(main);
  main.appendChild(pop1);

  const close = document.querySelector('.close2');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
});

const open3 = document.querySelector('.open3');
open3.addEventListener('click', () => {
  const pop1 = document.createElement('pop1');
  pop1.className = 'pop1';
  const main = document.createElement('div');
  main.className = 'main';
  pop1.innerHTML = `
<div class="top-popup">
<h2 class="project-title-popup">Facebook 360</h2>
<div class="project-info-popup">
<button class="close3 style" type="button">X</button>
  <span class="project-info-items-popup canopy-popup">Facebook</span>
  <img src="./images/Counter.png" >
  <span class="project-info-items-popup1">Back End Dev</span>
  <img src="./images/Counter.png" >
  <span class="project-info-items-popup2">2015</span>
</div> 
</div> 
<img src="./images/SnapshootPortfolioC.png"  class="mobile-image-popup"> 
 <p class="project-primary-text-popup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.</p>
 <div class="footer-popup">    
  <ul class="tags-popup">
    <li class="tag-popup">html</li>
    <li class="tag-popup hide-for-mobile">Ruby on rails</li>
    <li class="tag-popup">CSS</li>
    <li class="tag-popup">javaScript</li>
    </ul>
    <button class="button project-popup" type="button">See live</button>
    <button class="button project-popup" type="button">See source</button>
   </ul>
</div>
`;
  body.appendChild(main);
  main.appendChild(pop1);

  const close = document.querySelector('.close3');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
});


