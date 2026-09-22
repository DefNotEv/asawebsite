export default function HeroArt() {
  return (
    <svg
      className="hero-bg-art"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="inkGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3D889" />
          <stop offset="50%" stopColor="#C9962E" />
          <stop offset="100%" stopColor="#8C6414" />
        </linearGradient>
        <pattern id="diamondTile" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20,4 L36,20 L20,36 L4,20 Z" fill="none" stroke="url(#inkGold)" strokeWidth="1.2" />
        </pattern>
      </defs>

      {/* rising sun */}
      <circle cx="800" cy="220" r="130" fill="url(#inkGold)" opacity="0.12" />

      {/* crescent moon, upper right */}
      <path
        d="M1400,60 m -40,0 a40,40 0 1,0 80,0 a32,32 0 1,1 -80,0"
        fill="url(#inkGold)"
        opacity="0.15"
      />

      {/* ink clouds */}
      <path
        d="M90,150 C170,110 250,190 330,150 C410,110 490,190 570,150"
        stroke="url(#inkGold)"
        strokeWidth="3"
        fill="none"
        opacity="0.22"
        strokeLinecap="round"
      />
      <path
        d="M1010,115 C1090,75 1170,155 1250,115 C1330,75 1410,155 1490,115"
        stroke="url(#inkGold)"
        strokeWidth="3"
        fill="none"
        opacity="0.18"
        strokeLinecap="round"
      />

      {/* distant mountain range */}
      <path
        d="M0,560 C120,480 220,520 320,470 C420,420 480,500 600,460 C720,420 800,480 900,450 C1020,415 1120,470 1240,440 C1360,410 1460,460 1600,430 L1600,800 L0,800 Z"
        fill="url(#inkGold)"
        opacity="0.09"
      />

      {/* closer karst-style peaks */}
      <path
        d="M0,640 C80,560 140,600 200,540 C260,480 300,560 360,600 C420,640 460,560 520,520 C580,480 620,580 700,610 C780,640 820,560 880,600 C940,640 1000,580 1080,610 C1160,640 1220,580 1300,600 C1380,620 1460,580 1600,620 L1600,800 L0,800 Z"
        fill="url(#inkGold)"
        opacity="0.15"
      />

      {/* pagoda silhouette (East Asia) */}
      <g transform="translate(230,470)" opacity="0.35" fill="url(#inkGold)">
        <path d="M-40,60 L40,60 L30,45 L-30,45 Z" />
        <path d="M-32,45 L32,45 L24,30 L-24,30 Z" />
        <path d="M-24,30 L24,30 L16,15 L-16,15 Z" />
        <path d="M-16,15 L16,15 L0,-5 L0,-5 Z" />
        <line x1="0" y1="-5" x2="0" y2="-26" stroke="url(#inkGold)" strokeWidth="2" />
      </g>

      {/* stupa / dome silhouette (South &amp; Southeast Asia) */}
      <g transform="translate(1330,455)" opacity="0.32">
        <rect x="-26" y="30" width="52" height="16" fill="url(#inkGold)" />
        <path d="M-20,30 C-20,-10 20,-10 20,30 Z" fill="url(#inkGold)" />
        <line x1="0" y1="-10" x2="0" y2="-28" stroke="url(#inkGold)" strokeWidth="2" />
        <circle cx="0" cy="-30" r="3" fill="url(#inkGold)" />
      </g>

      {/* bamboo cluster (East &amp; Southeast Asia) */}
      <g
        transform="translate(90,620)"
        opacity="0.4"
        stroke="url(#inkGold)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M0,180 L0,0" />
        <path d="M-2,150 L6,150 M-2,110 L6,110 M-2,70 L6,70 M-2,30 L6,30" />
        <path d="M22,190 L22,20" />
        <path d="M20,160 L28,160 M20,120 L28,120 M20,80 L28,80 M20,40 L28,40" />
        <path d="M0,40 C-20,30 -34,10 -30,-10" strokeWidth="2.5" />
        <path d="M22,30 C42,20 56,0 52,-20" strokeWidth="2.5" />
      </g>

      {/* lotus flower (South &amp; Southeast Asia) */}
      <g transform="translate(1480,660)" opacity="0.4" fill="url(#inkGold)">
        <path d="M0,0 C-10,-30 -40,-34 -55,-15 C-35,-10 -15,-5 0,0 Z" />
        <path d="M0,0 C10,-30 40,-34 55,-15 C35,-10 15,-5 0,0 Z" />
        <path d="M0,0 C-6,-38 -6,-55 0,-70 C6,-55 6,-38 0,0 Z" />
        <path d="M0,0 C-20,-20 -45,-15 -55,5 C-35,5 -15,3 0,0 Z" opacity="0.7" />
        <path d="M0,0 C20,-20 45,-15 55,5 C35,5 15,3 0,0 Z" opacity="0.7" />
      </g>

      {/* flowing river / brush flourish */}
      <path
        d="M0,720 C200,690 300,740 480,710 C660,680 760,730 940,700 C1120,670 1220,720 1400,690 C1500,675 1560,690 1600,680"
        stroke="url(#inkGold)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.26"
        strokeLinecap="round"
      />

      {/* Central Asian geometric tile border */}
      <rect x="0" y="772" width="1600" height="28" fill="url(#diamondTile)" opacity="0.2" />
    </svg>
  )
}
