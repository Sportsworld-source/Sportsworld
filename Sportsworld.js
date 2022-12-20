class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        .logo{
          color: #54b3d6;
          font-size: 180%;
        }
        .logo:hover{
          color: #54b3d6;
        }
        .dropdown {
            position: relative;
            display: inline-block;
          }
          a{
            color: black;
            text-align: center;
            
        }
        .option{
          color: white;
          text-shadow: 0 0 5px black;
        }
        .option:hover{
            color: #54b3d6;
        }
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: black;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
          }
          
          .dropdown-content a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }
          
          .dropdown-content a:hover {background-color: #ddd;}
          
          .dropdown:hover .dropdown-content {display: block;
          background-color: #54b3d6;}
          
          .dropdown:hover .dropbtn {background-color: #3e8e41;}
          
          .beta{
            font-size:1%
          }
          .header{
                      width: 100%;
                      height: 10%;
                  }
                  .option{
                      text-decoration: none;
                      display: inline-block;
                      margin-right: 1%;
                      text-align: right;
                      font-family: Verdana, Geneva, Tahoma, sans-serif;
                      padding: 3%;
                      }

                      /* Use a media query to add a breakpoint at 800px: */
        @media screen and (max-width: 800px) {
            .dropdown-content {
                
                background-color: black;
               
              }
              .logo{
                
                font-size: 300%;
              }
                        }
    </style>
    <div class="header">
    <div class="option"><a class="logo a" href="Sportsworld.html">🇸‌🇵‌🇴‌🇷‌🇹‌🇸‌🇼‌🇴‌🇷‌🇱‌🇩‌ </a> <p class=beta>(Beta Version)</p></div>
        <div class="option dropdown">Sportarten
            <div class="dropdown-content">
                <a class="a" href="SW_Fit.html">Fitness</a>
                <a class="a" href="SW_Cali.html">Calisthenics</a>
                <a class="a" href="SW_Tri.html">Triathlon</a>
                <a class="a" href="SW_Swim.html">Schwimmen</a>
                <a class="a" href="SW_Rad.html">Radfahren</a>
                <a class="a" href="SW_Run.html">Laufen</a>
              </div>
        </div>
        <div class="option  dropdown">Trainingspläne und Tipps
            <div class="dropdown-content">
            <a class="a" href="SW_Fit.html#Krafttraining">Kraftsport</a>
            <a class="a" href="SW_Fit.html#Körpergewicht">Bodyweight</a>
            <a class="a" href="SW_Cali_01.html#Trainingspläne">Calisthenics</a>
            <a class="a" href="SW_Tri.html#Trainingspläne">Triathlon</a>
                <a class="a" href="SW_Swim_01.html#Trainingspläne">Schwimmen</a>
                <a class="a" href="SW_Rad_01.html#Trainingspläne">Radfahren (Spinning)</a>
                <a class="a" href="SW_Run_01.html#Trainingspläne">Laufen</a>
            
              </div>
        </div>
        <div class="option dropdown"> <a class="Link" href="Sportsworld_Shop.html#Shop" >Equipment & Ernährung</a>
            
            
        </div>
        <div class="option  dropdown">Über Uns
            <div class="dropdown-content">
                <a class="a" href="Sportsworld_UeberUns.html">Über Uns</a>
                <a class="a" href="Sportsworld_Kontakt.html">Kontakt & FAQs</a>
                <a class="a" href="Sportsworld_Information.html">Information</a>
              </div>
        </div>

    </div>
        
    `;

    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <style>
      .footer{
        position: relative;
        top: -5%;
        background-color: black;
        width: 100%;
        padding-top: 3%;
        padding-bottom: 3%;
        margin-bottom: -5%;
        margin-top: -2%;
        height: 50%;
        text-align: center;
        color: #f8f4ff;
    }
      
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,240C960,256,1200,256,1320,256L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    
      <div class="footer">
      <h3>Hier kannst du dir Inspiration für dein Training suchen!</h3>
<h3>Und wenn du willst kannst du auch gerne etwas ergänzen, denn auch wir wissen nicht alles!</h3>
<p>Kontaktiere uns dazu  <a class="Link" href="Sportsworld_Kontakt.html#Kontaktformular" id="style-2" data-replace="hier">hier</a>.</p>

      </div>
  `;

  }
}

customElements.define('my-footer', MyFooter)


