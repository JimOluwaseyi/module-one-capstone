const menuBtn = document.querySelector('.fa-bars');
const mobileNav = document.querySelector('.mobile-nav');
const cancel = document.querySelector('#cancel .fa-xmark');
const menuBg = document.querySelector('.intro');
const moreBtn = document.getElementById('moreBtn');

// -------------- Menu Bar --------------
menuBtn.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  menuBg.style.filter = 'blur(100px)';
});

cancel.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  menuBg.style.filter = 'blur(0)';
});

// --------- Dynamic Display ---------
const speaker = document.querySelector('.speakers');
const programHeading = document.querySelector('.program-heading');
const columnOne = document.querySelector('.columnOne');
const speakerParent = document.querySelector('.speaker-parent');

const showColumnOne = () => {
  programHeading.innerHTML = ` <h3>Featured Speakers</h3>
<div class="border"></div>`;
  speaker.append(programHeading);
  columnOne.innerHTML = `<section class="speaker-intro">
<div class="speakerImg">
  <img src="image/Black-white.PNG" alt="" />
  <img
    src="image/Stan_Kroenke_Arsenal.png"
    alt=""
    class="imgPosition"
  />
</div>
<div class="speaker-name">
  <h4>Stan Kroenke</h4>
  <p>Owner Of Arsenal F.C</p>
  <div class="speakerBorder"></div>
  <div class="speaker-description">
    <p>
      Stan Kroenke is an American billionaire businessman. He is the
      owner of Kroenke Sports & Entertainment, which is the holding
      company of Arsenal F.C. of the Premier League and Arsenal
      W.F.C.
    </p>
  </div>
</div>
</section>
<!-- ===== Speaker Two -->
<section class="speaker-intro speaker-mobile">
<div class="speakerImg">
  <img src="image/Black-white.PNG" alt="" />
  <img
    src="image/Carol_shanahan-port-vale.jpg"
    alt=""
    class="imgPosition"
  />
</div>
<div class="speaker-name">
  <h4>Carol Shanahan</h4>
  <p>Owner Of Port Vale F.C</p>
  <div class="speakerBorder"></div>
  <div class="speaker-description">
    <p>
      is an English businesswoman and club chairperson of Port Vale
      Football Club.
    </p>
  </div>
</div>
</section>
<!-- ===== Speaker Three ===== -->
<section class="speaker-intro speaker-mobile">
<div class="speakerImg">
  <img src="image/Black-white.PNG" alt="" />
  <img src="image/Glazer-family.jpeg" alt="" class="imgPosition" />
</div>
<!-- Name -->
<div class="speaker-name">
  <h4>Glazer Family</h4>
  <p>Owner Of Manchester United</p>
  <div class="speakerBorder"></div>
  <div class="speaker-description">
    <p>
      United is currently owned by his six children. The Glazers
      family bought the club for £790 million in 2005 in a highly
      leveraged deal that has been
    </p>
  </div>
</div>
</section>
</div>`;
  speakerParent.append(columnOne);
  speaker.append(speakerParent);
};

showColumnOne();
//  ====---------- Column Two -------======
const columnTwo = document.querySelector('.columnTwo');

const showColumnTwo = () => {
  columnTwo.innerHTML = `
  <section class="speaker-intro">
    <div class="speakerImg">
      <img src="image/Black-white.PNG" alt="" />
      <img
        src="image/JohnRadfordBusinessman-mansfield-town.png"
        alt=""
        class="imgPosition"
      />
    </div>
    <div class="speaker-name">
      <h4>John Radford</h4>
      <p>Owner Of Mansfield Town F.C</p>
      <div class="speakerBorder"></div>
      <div class="speaker-description">
        <p>
          John Lawrence Radford (born 1965) is an English businessman
          and owner of Mansfield Town Football Club, which he bought in
          2010.
        </p>
      </div>
    </div>
  </section>

  <section class="speaker-intro">
    <div class="speakerImg">
      <img src="image/Black-white.PNG" alt="" />
      <img
        src="image/Lansdown_at_a_Bristol_City_Game.jpg"
        alt=""
        class="imgPosition"
      />
    </div>
    <div class="speaker-name">
      <h4>Steve Landsdown</h4>
      <p>Owner Of Bristol City F.C</p>
      <div class="speakerBorder"></div>
      <div class="speaker-description">
        <p>
          Bristol City Football Club is a professional football club
          based in Bristol, England, which compete in the EFL
          Championship, the second tier of English football.
        </p>
      </div>
    </div>
  </section>


  <section class="speaker-intro">
    <div class="speakerImg">
      <img src="image/Black-white.PNG" alt="" />
      <img
        src="image/MichaelEisnerOct10-portsmouth.jpg"
        alt=""
        class="imgPosition"
      />
    </div>
    <div class="speaker-name">
      <h4>Micheal Eisner</h4>
      <p>Owner Of Portsmouth F.C</p>
      <div class="speakerBorder"></div>
      <div class="speaker-description">
        <p>
          Michael Dammann Eisner (born March 7, 1942)[2] is an American
          businessman[3] and former chairman and chief executive officer
          (CEO) of The Walt Disney Company from September 1984 to
          September 2005.
        </p>
      </div>
    </div>
  </section>
</div>`;
  speaker.append(moreBtn);
};
showColumnTwo();

// -------- button clicked ----------

function mobileDynaamic() {
  columnOne.innerHTML = `
  <section class="speaker-intro">
  <div class="speakerImg">
    <img src="image/Black-white.PNG" alt="" />
    <img
      src="image/Stan_Kroenke_Arsenal.png"
      alt=""
      class="imgPosition"
    />
  </div>
  <div class="speaker-name">
    <h4>Stan Kroenke</h4>
    <p>Owner Of Arsenal F.C</p>
    <div class="speakerBorder"></div>
    <div class="speaker-description">
      <p>
        Stan Kroenke is an American billionaire businessman. He is the
        owner of Kroenke Sports & Entertainment, which is the holding
        company of Arsenal F.C. of the Premier League and Arsenal
        W.F.C.
      </p>
    </div>
  </div>
</section>          
<section class="speaker-intro">
  <div class="speakerImg">
    <img src="image/Black-white.PNG" alt="" />
    <img
      src="image/Carol_shanahan-port-vale.jpg"
      alt=""
      class="imgPosition"
    />
  </div>
  <div class="speaker-name">
    <h4>Carol Shanahan</h4>
    <p>Owner Of Port Vale F.C</p>
    <div class="speakerBorder"></div>
    <div class="speaker-description">
      <p>
        is an English businesswoman and club chairperson of Port Vale
        Football Club.
      </p>
    </div>
  </div>
</section>
<section class="speaker-intro">
  <div class="speakerImg">
    <img src="image/Black-white.PNG" alt="" />
    <img src="image/Glazer-family.jpeg" alt="" class="imgPosition" />
  </div>
  <div class="speaker-name">
    <h4>Glazer Family</h4>
    <p>Owner Of Manchester United</p>
    <div class="speakerBorder"></div>
    <div class="speaker-description">
      <p>
        United is currently owned by his six children. The Glazers
        family bought the club for £790 million in 2005 in a highly
        leveraged deal that has been
      </p>
    </div>
  </div>
</section>
<section class="speaker-intro">
<div class="speakerImg">
  <img src="image/Black-white.PNG" alt="" />
  <img
    src="image/JohnRadfordBusinessman-mansfield-town.png"
    alt=""
    class="imgPosition"
  />
</div>
<!-- Name -->
<div class="speaker-name">
  <h4>John Radford</h4>
  <p>Owner Of Mansfield Town F.C</p>
  <div class="speakerBorder"></div>
  <div class="speaker-description">
    <p>
      John Lawrence Radford (born 1965) is an English businessman
      and owner of Mansfield Town Football Club, which he bought in
      2010.
    </p>
  </div>
</div>
</section>
<section class="speaker-intro">
            <div class="speakerImg">
              <img src="image/Black-white.PNG" alt="" />
              <img
                src="image/Lansdown_at_a_Bristol_City_Game.jpg"
                alt=""
                class="imgPosition"
              />
            </div>
            <div class="speaker-name">
              <h4>Steve Landsdown</h4>
              <p>Owner Of Bristol City F.C</p>
              <div class="speakerBorder"></div>
              <div class="speaker-description">
                <p>
                  Bristol City Football Club is a professional football club
                  based in Bristol, England, which compete in the EFL
                  Championship, the second tier of English football.
                </p>
              </div>
            </div>
          </section>
          <section class="speaker-intro">
            <div class="speakerImg">
              <img src="image/Black-white.PNG" alt="" />
              <img
                src="image/MichaelEisnerOct10-portsmouth.jpg"
                alt=""
                class="imgPosition"
              />
            </div>
            <!-- Name -->
            <div class="speaker-name">
              <h4>Micheal Eisner</h4>
              <p>Owner Of Portsmouth F.C</p>
              <div class="speakerBorder"></div>
              <div class="speaker-description">
                <p>
                  Michael Dammann Eisner (born March 7, 1942)[2] is an American
                  businessman[3] and former chairman and chief executive officer
                  (CEO) of The Walt Disney Company from September 1984 to
                  September 2005.
                </p>
              </div>
            </div>
          </section>
`;
}
//  --------- Show more button on the mobile --------------

moreBtn.addEventListener('click', () => {
  mobileDynaamic();
  moreBtn.style.display = 'none';
});
