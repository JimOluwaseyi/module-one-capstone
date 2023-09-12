const menuBtn = document.querySelector('.fa-bars');
const mobileNav = document.querySelector('.mobile-nav');
const cancel = document.querySelector('.fa-xmark');

// -------------- Menu Bar --------------
menuBtn.addEventListener('click', () => {
  mobileNav.style.display = 'block';
});

cancel.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

// --------- Dynamic Display ---------

const featureSpeakers = [
  {
    name: 'Stan Kroenke',
    image1: 'image/Black-white.PNG',
    image2: 'image/Stan_Kroenke_Arsenal.png',
    description: 'Owner Of Arsenal F.C',
    information: `Stan Kroenke is an American billionaire businessman. He is the
    owner of Kroenke Sports & Entertainment, which is the holding
    company of Arsenal F.C. of the Premier League and Arsenal
    W.F.C.
.`,
  },
  {
    name: 'Carol Shanahan',
    image1: 'image/Black-white.PNG',
    image2: 'image/Carol_shanahan-port-vale.jpg',
    description: 'Owner Of Port Vale F.C',
    information: `Is an English businesswoman and club chairperson of Port Vale
    Football Club.
.`,
  },
  {
    name: 'Glazer Family',
    image1: 'image/Black-white.PNG',
    image2: 'image/Glazer-family.jpeg',
    description: 'Owner Of Manchester United',
    information: `United is currently owned by his six children. The Glazers
    family bought the club for £790 million in 2005 in a highly
    leveraged deal that has been
.`,
  },
  {
    name: 'John Radford',
    image1: 'image/Black-white.PNG',
    image2: 'image/JohnRadfordBusinessman-mansfield-town.png',
    description: 'Owner Of Mansfield Town F.C',
    information: `John Lawrence Radford (born 1965) is an English businessman
    and owner of Mansfield Town Football Club, which he bought in
    2010.
.`,
  },
  {
    name: 'Steve Landsdown',
    image1: 'image/Black-white.PNG',
    image2: 'image/Lansdown_at_a_Bristol_City_Game.jpg',
    description: 'Owner Of Bristol City F.C',
    information: `Bristol City Football Club is a professional football club
    based in Bristol, England, which compete in the EFL
    Championship, the second tier of English football.
.`,
  },
  {
    name: 'Micheal Eisner',
    image1: 'image/Black-white.PNG',
    image2: 'image/MichaelEisnerOct10-portsmouth.jpg',
    description: 'Owner Of Portsmouth F.C',
    information: `Michael Dammann Eisner (born March 7, 1942)[2] is an American
    businessman[3] and former chairman and chief executive officer
    (CEO) of The Walt Disney Company from September 1984 to
    September 2005.
.`,
  },
];

const speakerParent = document.querySelector('.speaker-parent');

let speakerContent = '';

featureSpeakers.forEach((speaker) => {
  speakerContent += `<section class="speaker-intro">
  <div class="speakerImg">
    <img src="${speaker.image1}" alt="" />
    <img
      src="${speaker.image2}"
      alt=""
      class="imgPosition"
    />
  </div>
  <div class="speaker-name">
    <h4>${speaker.name}</h4>
    <p>${speaker.description}</p>
    <div class="speakerBorder"></div>
    <div class="speaker-description">
      <p>
      ${speaker.information}
      </p>
    </div>
  </div>
</section>`;
});

speakerContent += `<button id="moreBtn">
MORE <i class="fa-solid fa-chevron-down"></i>
</button>`;

speakerParent.innerHTML = speakerContent;

//  --------- Show more button on the mobile --------------
const moreBtn = document.getElementById('moreBtn');
const speakerIntros = document.querySelectorAll(
  '.speaker-intro:nth-child(n+3)',
);

moreBtn.addEventListener('click', () => {
  speakerIntros.forEach((intro) => {
    intro.style.display = 'flex';
  });
  moreBtn.style.display = 'none';
});
