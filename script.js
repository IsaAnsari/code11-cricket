// Splash Screen Logic (All Pages)
// let splash = document.getElementById("splash");
// let mainContent = document.getElementById("main-content");

document.addEventListener("DOMContentLoaded", () => {

    let splash = document.getElementById("splash");
    let mainContent = document.getElementById("main-content");

    let loaderBar = document.getElementById("loader-bar");
    let loadingText = document.getElementById("loading-text");

    // Agar splash exist hi nahi hai to kuch mat karo
    if (!splash || !mainContent || !loaderBar || !loadingText) return;

    let progress = 0;

    let interval = setInterval(() => {
        progress++;

        loaderBar.style.width = progress + "%";
        loadingText.innerText = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);

            splash.style.display = "none";
            mainContent.classList.remove("hidden");
        }
    }, 20);

});

const players = [
    //! legendary ⤵️👇
    {
        name: "Sir Don Bradman",
        rating: 99,
        role: "Batsman",
        country: "Australia",
        type: "legendary",
        img: "img/don_bradman.png",
        desc: "The Greatest Ever. Unbeatable 99.94 Test average."
    },
    {
        name: "Malcolm Marshall",
        rating: 99,
        role: "Bowler",
        country: "West Indies",
        type: "legendary",
        img: "img/malcolm_marshall.png",
        desc: "King of dangerous bouncer and the most complete pacer ever."
    },
    {
        name: "Jeff Thomson",
        rating: 99,
        role: "Bowler",
        country: "Australia",
        type: "legendary",
        img: "img/jeff_thomson.png",
        desc: "Raw terror. One of the fastest bowlers in history."
    },
    {
        name: "Shane Warne",
        rating: 99,
        role: "Spinner",
        country: "Australia",
        type: "legendary",
        img: "img/shane_warne.png",
        desc: "King of Spin. Revived the art of leg-break."
    },
    {
        name: "Sachin Tendulkar",
        rating: 99,
        role: "Batsman",
        country: "India",
        type: "legendary",
        img: "img/sachin.png",
        desc: "God of Cricket. 100 International centuries."
    },
    {
        name: "Muttiah Muralitharan",
        rating: 99,
        role: "Spinner",
        country: "Sri Lanka",
        type: "legendary",
        img: "img/muttiah_muralitharan.png",
        desc: "Spin Wizard. Highest wicket-taker in history."
    },
    {
        name: "Sir Curtly Ambrose",
        rating: 98,
        role: "Bowler",
        country: "West Indies",
        type: "legendary",
        img: "img/curtly_ambrose.png",
        desc: "The Silent Giant. Lethal bounce and accuracy."
    },
    {
        name: "Vivian Richards",
        rating: 98,
        role: "Batsman",
        country: "West Indies",
        type: "legendary",
        img: "img/viv_richards.png",
        desc: "The Original Master Blaster. Pure dominance."
    },
    {
        name: "Brian Lara",
        rating: 98,
        role: "Batsman",
        country: "West Indies",
        type: "legendary",
        img: "img/brian_lara.png",
        desc: "Prince of Trinidad. Record holder for 400* in Tests."
    },
    {
        name: "Virender Sehwag",
        rating: 98,
        role: "Batsman",
        country: "India",
        type: "legendary",
        img: "img/sehwag.png",
        desc: "Fearless opener. 'See ball, hit ball' specialist."
    },
    {
        name: "Rahul Dravid",
        rating: 98,
        role: "Batsman",
        country: "India",
        type: "legendary",
        img: "img/rahul_dravid.png",
        desc: "The Wall. Known for his legendary technique and immovable defense."
    },
    {
        name: "Chris Gayle",
        rating: "98 / 71",
        role: "All-Rounder",
        country: "West Indies",
        type: "legendary",
        img: "img/chris_gayle.png",
        desc: "Universe Boss. The ultimate T20 six-hitter."
    },
    {
        name: "AB de Villiers",
        rating: 98,
        role: "WK-Batsman",
        country: "South Africa",
        type: "legendary",
        img: "img/abd.png",
        desc: "Mr. 360. Can hit any ball, anywhere."
    },
    {
        name: "Dale Steyn",
        rating: 98,
        role: "Bowler",
        country: "South Africa",
        type: "legendary",
        img: "img/dale_steyn.png",
        desc: "Steyn Gun. Pure pace, swing, and the most iconic veins-popping celebration."
    },
    {
        name: "James Anderson",
        rating: 98,
        role: "Bowler",
        country: "England",
        type: "legendary",
        img: "img/james_anderson.png",
        desc: "The Burnley Express. Highest wicket-taking pacer in Test history."
    },
    {
        name: "Sir Alastair Cook",
        rating: 97,
        role: "Batsman",
        country: "England",
        type: "legendary",
        img: "img/alastair_Cook.png",
        desc: "England's finest opener. Master of grit and long-innings."
    },
    {
        name: "Waqar Younis",
        rating: 97,
        role: "Bowler",
        country: "Pakistan",
        type: "legendary",
        img: "img/waqar_younis.png",
        desc: "Burewala Express. Master of the reverse-swing yorker."
    },
    {
        name: "Adam Gilchrist",
        rating: 97,
        role: "WK-Batsman",
        country: "Australia",
        type: "legendary",
        img: "img/adam_gilchrist.png",
        desc: "Revolutionary keeper-bat. Pure explosive power."
    },
    {
        name: "Jacques Kallis",
        rating: "97 / 94",
        role: "All-Rounder",
        country: "South Africa",
        type: "legendary",
        img: "img/jacques_kallis.png",
        desc: "The Ultimate All-Rounder. Perfect stats in both."
    },
    {
        name: "Wasim Akram",
        rating: 97,
        role: "Bowler",
        country: "Pakistan",
        type: "legendary",
        img: "img/wasim_akram.png",
        desc: "Sultan of Swing. Master of both ways."
    },
    {
        name: "Ricky Ponting",
        rating: 97,
        role: "Batsman",
        country: "Australia",
        type: "legendary",
        img: "img/ricky_ponting.png",
        desc: "Legendary Captain. Fierce pull-shot master."
    },
    {
        name: "Shoaib Akhtar",
        rating: 97,
        role: "Bowler",
        country: "Pakistan",
        type: "legendary",
        img: "img/shoaib_akhtar.png",
        desc: "Rawalpindi Express. Fastest bowler ever recorded."
    },
    {
        name: "Kevin Pietersen",
        rating: 97,
        role: "Batsman",
        country: "England",
        type: "legendary",
        img: "img/kevin_pietersen.png",
        desc: "The Switch-Hit King. A fearless stroke-maker who redefined batting."
    },
    {
        name: "Mitchell Johnson",
        rating: 97,
        role: "Bowler",
        country: "Australia",
        type: "legendary",
        img: "img/mitchell_johnson.png",
        desc: "Lethal left-arm pace. Terrifying bounce."
    },
    {
        name: "Lasith Malinga",
        rating: 97,
        role: "Bowler",
        country: "Sri Lanka",
        type: "legendary",
        img: "img/lasith_malinga.png",
        desc: "Slinga Malinga. Yorker and slower ball king."
    },
    {
        name: "Brendon McCullum",
        rating: 97,
        role: "WK-Batsman",
        country: "New Zealand",
        type: "legendary",
        img: "img/brendon_mccullum.png",
        desc: "Baz. Fearless leader and pioneer of explosive modern batting."
    },
    {
        name: "Steve Waugh",
        rating: 97,
        role: "Batsman",
        country: "Australia",
        type: "legendary",
        img: "img/steve_waugh.png",
        desc: "The Iceman. Gritty middle-order legend and great captain."
    },
    {
        name: "Ross Taylor",
        rating: 96,
        role: "Batsman",
        country: "New Zealand",
        type: "legendary",
        img: "img/ross_taylor.png",
        desc: "The Tongue-Out Master. New Zealand's greatest middle-order run machine."
    },
    {
        name: "Glenn McGrath",
        rating: 96,
        role: "Bowler",
        country: "Australia",
        type: "legendary",
        img: "img/glenn_mcGrath.png",
        desc: "Metronomic accuracy. Clinical fast bowling."
    },
    {
        name: "Arjuna Ranatunga",
        rating: 96,
        role: "Batsman",
        country: "Sri Lanka",
        type: "legendary",
        img: "img/arjuna_ranatunga.png",
        desc: "World Cup winning captain. Iconic leader and middle-order rock."
    },
    {
        name: "Graeme Smith",
        rating: 96,
        role: "Batsman",
        country: "South Africa",
        type: "legendary",
        img: "img/graeme_smith.png",
        desc: "Biff. Most successful Test captain and gritty opener."
    },
    {
        name: "Daniel Vettori",
        rating: "88 / 96",
        role: "All-Rounder",
        country: "New Zealand",
        type: "legendary",
        img: "img/daniel_vettori.png", // Image: Left-arm spin action
        desc: "Spin wizard and handy bat. New Zealand's greatest spinner."
    },
    {
        name: "Gautam Gambhir",
        rating: 96,
        role: "Batsman",
        country: "India",
        type: "legendary",
        img: "img/gautam_gambhir.png",
        desc: "Big match player. Hero of 2007 and 2011 World Cup finals."
    },
    {
        name: "Kapil Dev",
        rating: "92 / 96",
        role: "All-Rounder",
        country: "India",
        type: "legendary",
        img: "img/kapil_dev.png",
        desc: "Haryana Hurricane. 1983 World Cup winning captain."
    },
    {
        name: "Brett Lee",
        rating: 96,
        role: "Bowler",
        country: "Australia",
        type: "legendary",
        img: "img/brett_lee.png",
        desc: "Express speed with a classic rhythmic action."
    },
    {
        name: "Kumar Sangakkara",
        rating: 96,
        role: "WK-Batsman",
        country: "Sri Lanka",
        type: "legendary",
        img: "img/kumar_sangakkara.png",
        desc: "Elegant left-hander and world-class keeper."
    },
    {
        name: "Matthew Hayden",
        rating: 96,
        role: "Batsman",
        country: "Australia",
        type: "legendary",
        img: "img/mathew_hayden.png",
        desc: "Powerhouse opener. Intimidating presence."
    },
    {
        name: "Sir Ian Botham",
        rating: "91 / 96",
        role: "All-Rounder",
        country: "England",
        type: "legendary",
        img: "img/ian_botham.png",
        desc: "Iconic all-rounder. Single-handedly won matches."
    },
    {
        name: "Sunil Gavaskar",
        rating: 96,
        role: "Batsman",
        country: "India",
        type: "legendary",
        img: "img/sunil_gavaskar.png",
        desc: "The Little Master. First to 10k Test runs."
    },
    {
        name: "Hashim Amla",
        rating: 96,
        role: "Batsman",
        country: "South Africa",
        type: "legendary",
        img: "img/hashim_amla.png",
        desc: "Mighty Monk. Prolific run machine."
    },
    {
        name: "Yuvraj Singh",
        rating: "96 / 82",
        role: "All-Rounder",
        country: "India",
        type: "legendary",
        img: "img/yuvraj_singh.png",
        desc: "Match winner. Six-sixes hero and WC legend."
    },


    //! epic ⤵️👇
    {
        name: "Virat Kohli",
        rating: 95,
        role: "Batsman",
        country: "India",
        type: "epic",
        img: "img/virat-kohli.png",
        desc: "King Kohli. Chase master and modern legend."
    },
    {
        name: "Mitchell Starc",
        rating: "77 / 95",
        role: "Bowler",
        country: "Australia",
        type: "epic",
        img: "img/starc.png",
        desc: "Left-arm lethal swing and toe-crushers."
    },
    {
        name: "Jasprit Bumrah",
        rating: 95,
        role: "Bowler",
        country: "India",
        type: "epic",
        img: "img/jasprit_bumrah.png",
        desc: "Boom Boom. World's best all-format pacer."
    },
    {
        name: "Ravichandran Ashwin",
        rating: "78 / 95", // All-rounder (Bowling > Batting)
        role: "Spinner",
        country: "India",
        type: "epic",
        img: "img/r_ashwin.png", // Suggestion: Bowling image
        desc: "The professor of spin. Tactical genius with endless variations."
    },
    {
        name: "MS Dhoni",
        rating: 94,
        role: "WK-Batsman",
        country: "India",
        type: "epic",
        img: "img/msd.png",
        desc: "Captain Cool. Legendary finisher and leader."
    },
    {
        name: "Shikhar Dhawan",
        rating: 94,
        role: "Batsman",
        country: "India",
        type: "epic",
        img: "img/shikhar_dhawan.png",
        desc: "Gabbar. ICC tournament specialist and explosive opener."
    },
    {
        name: "Rohit Sharma",
        rating: 94,
        role: "Batsman",
        country: "India",
        type: "epic",
        img: "img/rohit-sharma.png",
        desc: "Hitman. Record 3 double centuries in ODIs."
    },
    {
        name: "David Warner",
        rating: 94,
        role: "Batsman",
        country: "Australia",
        type: "epic",
        img: "img/david_warner.png",
        desc: "Relentless run-scorer. Bull of opening."
    },
    {
        name: "Rashid Khan",
        rating: "82 / 94",
        role: "Spinner",
        country: "Afghanistan",
        type: "epic",
        img: "img/rashid_khan.png",
        desc: "T20 Magician. Unpredictable quick leg-spin."
    },
    {
        name: "Zaheer Khan",
        rating: 94, // Specialist
        role: "Bowler",
        country: "India",
        type: "epic",
        img: "img/zaheer_khan.png", // Bowling image
        desc: "The wizard of reverse swing. India's pace spearhead."
    },
    {
        name: "Martin Guptill",
        rating: 93,
        role: "Batsman",
        country: "New Zealand",
        type: "epic",
        img: "img/martin_guptill.png",
        desc: "White-ball juggernaut. Scored 237* in WC 2015, the highest individual score in WC history."
    },
    {
        name: "Shane Watson",
        rating: "93 / 88", // All-rounder (Batting > Bowling)
        role: "All-Rounder",
        country: "Australia",
        type: "epic",
        img: "img/shane_watson.png", // Suggestion: Batting image
        desc: "Aggressive opener and a clutch player in big finals."
    },
    {
        name: "Tim Southee",
        rating: 93,
        role: "Bowler",
        country: "New Zealand",
        type: "epic",
        img: "img/tim_southee.png",
        desc: "Swing maestro. Master of the out-swinger and leading T20 wicket-taker."
    },
    {
        name: "Ben Stokes",
        rating: "93 / 88",
        role: "All-Rounder",
        country: "England",
        type: "epic",
        img: "img/ben-stokes.png",
        desc: "Clutch player. Wins big games from nowhere."
    },
    {
        name: "Steve Smith",
        rating: 93,
        role: "Batsman",
        country: "Australia",
        type: "epic",
        img: "img/steve_smith.png",
        desc: "Test genius. Unique technique, runs machine."
    },
    {
        name: "Phil Salt",
        rating: 93,
        role: "WK-Batsman",
        country: "England",
        type: "epic",
        img: "img/phil_salt.png",
        desc: "Aggressive opener. Explosive T20 hitter."
    },
    {
        name: "Trent Boult",
        rating: 93,
        role: "Bowler",
        country: "New Zealand",
        type: "epic",
        img: "img/trent-boult.png",
        desc: "Swing King. Powerplay wicket-taker."
    },
    {
        name: "Dwayne Bravo",
        rating: "84 / 93",
        role: "All-Rounder",
        country: "West Indies",
        type: "epic",
        img: "img/dwayne_bravo.png", // Image: Champion dance or slower ball action
        desc: "Champion. Master of the death-over slower ball and handy finisher."
    },
    {
        name: "Kieron Pollard",
        rating: "93 / 82",
        role: "All-Rounder",
        country: "West Indies",
        type: "epic",
        img: "img/kieron_pollard.png", // Image: Power-hitting follow through
        desc: "Powerhouse. Destructive finisher and smart medium pacer."
    },
    {
        name: "Kuldeep Yadav",
        rating: 93,
        role: "Spinner",
        country: "India",
        type: "epic",
        img: "img/kuldeep_yadav.png",
        desc: "China-man wizard. Deceptive variations."
    },
    {
        name: "Mohammed Shami",
        rating: "75 / 93",
        role: "Bowler",
        country: "India",
        type: "epic",
        img: "img/m_shami.png",
        desc: "Perfect seam position. World Cup specialist."
    },
    {
        name: "Josh Hazlewood",
        rating: 93,
        role: "Bowler",
        country: "Australia",
        type: "epic",
        img: "img/josh_hazlewood.png",
        desc: "Consistent and clinical. Master of line and length."
    },
    {
        name: "Bhuvneshwar Kumar",
        rating: 93,
        role: "Bowler",
        country: "India",
        type: "epic",
        img: "img/bhuvneshwar_kumar.png",
        desc: "Swing King. Exceptional control with the new and old ball."
    },
    {
        name: "Heinrich Klaasen",
        rating: 93,
        role: "WK-Batsman",
        country: "South Africa",
        type: "epic",
        img: "img/heinrich_klaasen.png",
        desc: "Best spin-hitter in the world. Lethal middle-order finisher."
    },
    {
        name: "Yuzvendra Chahal",
        rating: 93,
        role: "Spinner",
        country: "India",
        type: "epic",
        img: "img/yuzvendra_chahal.png",
        desc: "Chess master. Smart leg-spinner with wicket-taking knack."
    },
    {
        name: "Jofra Archer",
        rating: 93,
        role: "Bowler",
        country: "England",
        type: "epic",
        img: "img/jofra_archer.png",
        desc: "High-octane pace. Terrifying bounce and lethal accuracy."
    },
    {
        name: "Andre Russell",
        rating: "93 / 85",
        role: "All-Rounder",
        country: "West Indies",
        type: "epic",
        img: "img/andre_russell.png",
        desc: "Dre Russ. Pure explosive power with both bat and ball."
    },
    {
        name: "Tim David",
        rating: 93,
        role: "Batsman",
        country: "Australia",
        type: "epic",
        img: "img/tim_david.png",
        desc: "Power-hitting finisher. One of the cleanest strikers in T20 cricket."
    },
    {
        name: "Sunil Narine",
        rating: "80 / 93",
        role: "All-Rounder",
        country: "West Indies",
        type: "epic",
        img: "img/sunil_narine.png",
        desc: "Mystery spinner and pinch hitter. A true T20 legend."
    },
    {
        name: "Shahid Afridi",
        rating: "90 / 92", // All-rounder (Bowling > Batting)
        role: "All-Rounder",
        country: "Pakistan",
        type: "epic",
        img: "img/shahid_afridi.png", // Suggestion: Bowling image
        desc: "Boom Boom! Raw power and match-winning leg-spin."
    },
    {
        name: "Jos Buttler",
        rating: 92,
        role: "WK-Batsman",
        country: "England",
        type: "epic",
        img: "img/jos_buttler.png",
        desc: "Dangerous white-ball destructive batsman."
    },
    {
        name: "Kane Williamson",
        rating: 92,
        role: "Batsman",
        country: "New Zealand",
        type: "epic",
        img: "img/kane_williamson.png",
        desc: "Classy and calm. Technical batting master."
    },
    {
        name: "Dinesh Karthik",
        rating: 92, // Specialist
        role: "WK-Batsman",
        country: "India",
        type: "epic",
        img: "img/dinesh_karthik.png", // Batting image
        desc: "The ultimate finisher. Calm under pressure with elite glovework."
    },
    {
        name: "Irfan Pathan",
        rating: "87 / 92", // All-rounder (Bowling > Batting)
        role: "All-Rounder",
        country: "India",
        type: "epic",
        img: "img/irfan_pathan.png", // Suggestion: Bowling image
        desc: "Master of swing and a clean striker of the ball."
    },
    {
        name: "Quinton de Kock",
        rating: 92,
        role: "WK-Batsman",
        country: "South Africa",
        type: "epic",
        img: "img/qdk.png",
        desc: "Classy opener with lightning-fast gloves."
    },
    {
        name: "Travis Head",
        rating: 92,
        role: "Batsman",
        country: "Australia",
        type: "epic",
        img: "img/travis_head.png",
        desc: "Finals specialist. High-impact left-hander."
    },
    {
        name: "Faf du Plessis",
        rating: 92,
        role: "Batsman",
        country: "South Africa",
        type: "epic",
        img: "img/faf_du_plessis.png", // Batting image
        desc: "Dynamic fielder and a reliable top-order run-machine."
    },
    {
        name: "Ravindra Jadeja",
        rating: "86 / 92",
        role: "All-Rounder",
        country: "India",
        type: "epic",
        img: "img/ravindra_jadeja.png",
        desc: "Sir Jadeja. Elite spin, bat, and fielding."
    },
    {
        name: "Angelo Mathews",
        rating: "91 / 88",
        role: "All-Rounder",
        country: "Sri Lanka",
        type: "epic",
        img: "img/angelo_mathews.png", // Image: Classy batting stance
        desc: "Reliable veteran. Solid middle-order bat and smart medium pace."
    },
    {
        name: "Pat Cummins",
        rating: "82 / 91",
        role: "Bowler",
        country: "Australia",
        type: "epic",
        img: "img/pat_cummins.png",
        desc: "Top-ranked pacer and world champion leader."
    },
    {
        name: "Shubman Gill",
        rating: 91,
        role: "Batsman",
        country: "India",
        type: "epic",
        img: "img/gill.png",
        desc: "The Prince. Elegant stroke-maker."
    },
    {
        name: "Jacob Duffy",
        rating: 91,
        role: "Bowler",
        country: "New Zealand",
        type: "epic",
        img: "img/jacob_duffy.png",
        desc: "Swing specialist. Known for consistent lines and wicket-taking ability."
    },
    {
        name: "Joe Root",
        rating: 91,
        role: "Batsman",
        country: "England",
        type: "epic",
        img: "img/joe_root.png",
        desc: "England's best. Master of rotating strike."
    },
    {
        name: "Hardik Pandya",
        rating: "91 / 86",
        role: "All-Rounder",
        country: "India",
        type: "epic",
        img: "img/hardik_pandya.png",
        desc: "Dynamic finisher and useful pace bowler."
    },
    {
        name: "Arshdeep Singh",
        rating: 91,
        role: "Bowler",
        country: "India",
        type: "epic",
        img: "img/arshdeep_singh.png",
        desc: "Death-over specialist. Excellent yorkers and swing."
    },
    {
        name: "Suryakumar Yadav",
        rating: 91,
        role: "Batsman",
        country: "India",
        type: "epic",
        img: "img/sky.png",
        desc: "MR 360. Dominates any bowling attack with unique shots."
    },
    {
        name: "Mitchell Marsh",
        rating: "91 / 85",
        role: "All-Rounder",
        country: "Australia",
        type: "epic",
        img: "img/mitchell_marsh.png",
        desc: "Powerhouse performer. Dominant batting and crucial wickets."
    },
    {
        name: "Aiden Markram",
        rating: "91 / 82",
        role: "All-Rounder",
        country: "South Africa",
        type: "epic",
        img: "img/aiden_markram.png",
        desc: "Technically sound. Classy batting and smart off-spin."
    },
    {
        name: "Shaheen Afridi",
        rating: 91, // Specialist
        role: "Bowler",
        country: "Pakistan",
        type: "epic",
        img: "img/shaheen_afridi.png", // Bowling image
        desc: "Lightning fast left-arm pace. Deadly with the new ball."
    },


    //! rare ⤵️👇
    {
        name: "David Miller",
        rating: 90, // Specialist
        role: "Batsman",
        country: "South Africa",
        type: "rare",
        img: "img/david_miller.png", // Batting image
        desc: "If it's in the arc, it's out of the park. Pure power."
    },
    {
        name: "Yashasvi Jaiswal",
        rating: 90,
        role: "Batsman",
        country: "India",
        type: "rare",
        img: "img/jaiswal.png",
        desc: "Fearless young talent. Aggressive opener."
    },
    {
        name: "Rajat Patidar",
        rating: 90,
        role: "Batsman",
        country: "India",
        type: "rare",
        img: "img/rajat_patidar.png",
        desc: "Elegant stroke-maker. Known for his ability to dominate spinners."
    },
    {
        name: "Shreyas Iyer",
        rating: 90,
        role: "Batsman",
        country: "India",
        type: "rare",
        img: "img/shreyas_iyer.png",
        desc: "Solid anchor and spin-hitter."
    },
    {
        name: "Abhishek Sharma",
        rating: "90 / 78",
        role: "All-Rounder",
        country: "India",
        type: "rare",
        img: "img/abhishek_sharma.png",
        desc: "Fearless opener. Destructive batting and useful left-arm spin."
    },
    {
        name: "Ishan Kishan",
        rating: 90,
        role: "WK-Batsman",
        country: "India",
        type: "rare",
        img: "img/ishan_kishan.png",
        desc: "Pocket dynamo. Fastest ODI double ton."
    },
    {
        name: "Jacob Bethell",
        rating: "90 / 81",
        role: "All-Rounder",
        country: "England",
        type: "rare",
        img: "img/jacob_bethell.png",
        desc: "Rising English star. Explosive left-hand bat and handy spin."
    },
    {
        name: "Shivam Dube",
        rating: "90 / 78",
        role: "All-Rounder",
        country: "India",
        type: "rare",
        img: "img/shivam_dube.png",
        desc: "Spin-hitter. Tall left-hander known for massive sixes."
    },
    {
        name: "Varun Chakravarthy",
        rating: 90,
        role: "Spinner",
        country: "India",
        type: "rare",
        img: "img/varun_chakra.png",
        desc: "Mystery spinner. Hard to read variations."
    },
    {
        name: "Vaibhav Suryavanshi",
        rating: 89,
        role: "Batsman",
        country: "India",
        type: "rare",
        img: "img/vaibhav_suryavanshi.png",
        desc: "Youngest prodigy. A future batting star."
    },
    {
        name: "Devdutt Padikkal",
        rating: 89,
        role: "Batsman",
        country: "India",
        type: "rare",
        img: "img/devdutt_padikkal.png",
        desc: "Stylish left-hander. Known for his graceful cover drives."
    },
    {
        name: "Cooper Connolly",
        rating: "88 / 80",
        role: "All-Rounder",
        country: "Australia",
        type: "rare",
        img: "img/cooper_connolly.png",
        desc: "Versatile youngster. Calm under pressure with bat and ball."
    },
    {
        name: "Axar Patel",
        rating: "84 / 89",
        role: "All-Rounder",
        country: "India",
        type: "rare",
        img: "img/axar_patel.png",
        desc: "Extremely accurate. Economical spin and clutch finisher."
    },
    {
        name: "Romario Shepherd",
        rating: "87 / 88",
        role: "All-Rounder",
        country: "West Indies",
        type: "rare",
        img: "img/romario_shepherd.png",
        desc: "Powerful all-rounder. Heavy ball specialist and big hitter."
    },
    {
        name: "Mohsin Khan",
        rating: 89,
        role: "Bowler",
        country: "India",
        type: "rare",
        img: "img/mohsin_khan.png",
        desc: "Tall left-arm pacer. Known for his bounce and awkward angles."
    },
    {
        name: "Marcus Stoinis",
        rating: "89 / 84",
        role: "All-Rounder",
        country: "Australia",
        type: "rare",
        img: "img/marcus_stoinis.png",
        desc: "The Hulk. High-impact finisher and reliable medium pacer."
    },
    {
        name: "Will Jacks",
        rating: "89 / 80",
        role: "All-Rounder",
        country: "England",
        type: "rare",
        img: "img/will_jacks.png",
        desc: "Clean ball striker. Aggressive batting and handy off-spin."
    },
    {
        name: "KL Rahul",
        rating: 89,
        role: "Batsman",
        country: "India",
        type: "rare",
        img: "img/kl_rahul.png",
        desc: "Versatile batsman. Stylish and reliable."
    },
    {
        name: "Nuwan Thushara",
        rating: 89, // Specialist
        role: "Bowler",
        country: "Sri Lanka",
        type: "rare",
        img: "img/nuwan_thushara.png", // Bowling image
        desc: "Modern-day slinger with deadly accuracy in the death overs."
    },
    {
        name: "Harshal Patel",
        rating: 88, // Specialist
        role: "Bowler",
        country: "India",
        type: "rare",
        img: "img/harshal_patel.png", // Bowling image
        desc: "Master of deception with the slowest balls in the business."
    },
    {
        name: "Cameron Green",
        rating: "88 / 86",
        role: "All-Rounder",
        country: "Australia",
        type: "rare",
        img: "img/cameron_green.png",
        desc: "Giant talent. Strong presence in both departments."
    },
    {
        name: "Finn Allen",
        rating: 88,
        role: "Batsman",
        country: "New Zealand",
        type: "rare",
        img: "img/finn_allen.png",
        desc: "Ultra-aggressive opener. Takes the game away in powerplay."
    },
    {
        name: "Glenn Phillips",
        rating: "88 / 84",
        role: "All-Rounder",
        country: "New Zealand",
        type: "rare",
        img: "img/glenn_phillips.png",
        desc: "Dynamic athlete. Explosive batting and gold-arm bowling."
    },
    {
        name: "Sanju Samson",
        rating: 88,
        role: "WK-Batsman",
        country: "India",
        type: "rare",
        img: "img/sanju_samson.png",
        desc: "Gifted timer of the ball. Pure class."
    },
    {
        name: "Babar Azam",
        rating: 88,
        role: "Batsman",
        country: "Pakistan",
        type: "rare",
        img: "img/babar_azam.png",
        desc: "Classical technique. King of cover drives."
    },
    {
        name: "Mohammed Siraj",
        rating: 88,
        role: "Bowler",
        country: "India",
        type: "rare",
        img: "img/siraj.png",
        desc: "Spirited pacer. Lethal with the new ball."
    },
    {
        name: "Kagiso Rabada",
        rating: 88,
        role: "Bowler",
        country: "South Africa",
        type: "rare",
        img: "img/kagiso_rabada.png",
        desc: "Spearhead pacer. Genuine wicket-taker."
    },
    {
        name: "Nicholas Pooran",
        rating: 88,
        role: "Batsman",
        country: "West Indies",
        type: "rare",
        img: "img/nicholas_pooran.png",
        desc: "Clean ball-striker. High-impact hitter."
    },
    {
        name: "Rishabh Pant",
        rating: 87,
        role: "WK-Batsman",
        country: "India",
        type: "rare",
        img: "img/rishabh_pant.png",
        desc: "Flamboyant and unorthodox match-winner."
    },
    {
        name: "Krunal Pandya",
        rating: "81 / 86",
        role: "All-Rounder",
        country: "India",
        type: "rare",
        img: "img/krunal_pandya.png",
        desc: "Impactful all-rounder. Tight spin, handy bat."
    },
    {
        name: "Glenn Maxwell",
        rating: "86 / 78",
        role: "All-Rounder",
        country: "Australia",
        type: "rare",
        img: "img/glenn_maxwell.png",
        desc: "The Big Show. Freakish power-hitting."
    },
    {
        name: "Harry Brook",
        rating: 86,
        role: "Batsman",
        country: "England",
        type: "rare",
        img: "img/harry_brook.png",
        desc: "Next-gen star. Destructive middle-order."
    },
    {
        name: "Daryl Mitchell",
        rating: "86 / 75",
        role: "All-Rounder",
        country: "New Zealand",
        type: "rare",
        img: "img/daryl_mitchell.png",
        desc: "Clutch performer. Reliable team player."
    },

    //! common ⤵️👇
    {
        name: "Suyash Sharma",
        rating: 85,
        role: "Spinner",
        country: "India",
        type: "common",
        img: "img/suyash_sharma.png",
        desc: "Young leggie. Impactful mystery spin."
    },
    {
        name: "Ibrahim Zadran",
        rating: 85,
        role: "Batsman",
        country: "Afghanistan",
        type: "common",
        img: "img/ibrahim_zadran.png",
        desc: "Technically sound opener. The future of Afghan batting."
    },
    {
        name: "Sameer Rizvi",
        rating: 84,
        role: "Batsman",
        country: "India",
        type: "common",
        img: "img/sameer_rizvi.png",
        desc: "New-age power-hitter. Big sixes."
    },
    {
        name: "Ayush Mhatre",
        rating: 83,
        role: "Batsman",
        country: "India",
        type: "common",
        img: "img/ayush_mhatre.png",
        desc: "Young batting prospect with solid tech."
    },
    {
        name: "Rinku Singh",
        rating: 83,
        role: "Batsman",
        country: "India",
        type: "common",
        img: "img/rinku_singh.png",
        desc: "Finisher extraordinaire. Ice in veins."
    },
    {
        name: "Prashant Veer",
        rating: "82 / 78",
        role: "All-Rounder",
        country: "India",
        type: "common",
        img: "img/prashant_veer.png",
        desc: "Rising domestic star with all-round skills."
    },
    {
        name: "Angkrish Raghuvanshi",
        rating: 81,
        role: "WK-Batsman",
        country: "India",
        type: "common",
        img: "img/angkrish_raghuvanshi.png",
        desc: "Fearless youngster. Explosive talent."
    },
    {
        name: "Kartik Sharma",
        rating: "81 / 74",
        role: "All-Rounder",
        country: "India",
        type: "common",
        img: "img/kartik_sharma.png",
        desc: "Emerging talent in domestic T20s."
    },
    {
        name: "Anshul Kamboj",
        rating: 81,
        role: "Bowler",
        country: "India",
        type: "common",
        img: "img/anshul_kamboj.png",
        desc: "Promising pacer with good control."
    },
    {
        name: "Mangesh Yadav",
        rating: 79,
        role: "Bowler",
        country: "India",
        type: "common",
        img: "img/mangesh_yadav.png",
        desc: "Hard-working domestic medium pacer."
    },
    {
        name: "Nitish Reddy",
        rating: "79 / 82",
        role: "All-Rounder",
        country: "India",
        type: "common",
        img: "img/nk_reddy.png",
        desc: "Athletic all-rounder. Handy pace and bat."
    },
    {
        name: "Auqib Nabi",
        rating: 77,
        role: "Bowler",
        country: "India",
        type: "common",
        img: "img/auqib_nabi.png",
        desc: "Effective domestic seamer with movement."
    },
    {
        name: "Urvil Patel",
        rating: 76,
        role: "WK-Batsman",
        country: "India",
        type: "common",
        img: "img/urvil_patel.png",
        desc: "Aggressive domestic opener and keeper."
    },
    {
        name: "Manav Suthar",
        rating: 75,
        role: "Spinner",
        country: "India",
        type: "common",
        img: "img/manav_suthar.png",
        desc: "Crafty left-arm spinner. Consistent wicket-taker."
    },
];

// LOAD DATA
let xp = parseInt(localStorage.getItem("xp")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;
let unlockedCards = JSON.parse(localStorage.getItem("cards")) || [];
let completedChallenges = JSON.parse(localStorage.getItem("completed")) || [];
let totalAttempts = parseInt(localStorage.getItem("totalAttempts")) || 0;
let correctAttempts = parseInt(localStorage.getItem("correctAttempts")) || 0;
let currentStreak = parseInt(localStorage.getItem("currentStreak")) || 0;
let bestStreak = parseInt(localStorage.getItem("bestStreak")) || 0;
let playtimeSeconds = parseInt(localStorage.getItem("playtimeSeconds")) || 0;
let activityLog = JSON.parse(localStorage.getItem("activityLog")) || [];
const sessionStartTime = Date.now();

function saveData() {
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("cards", JSON.stringify(unlockedCards));
    localStorage.setItem("completed", JSON.stringify(completedChallenges));
    localStorage.setItem("totalAttempts", totalAttempts);
    localStorage.setItem("correctAttempts", correctAttempts);
    localStorage.setItem("currentStreak", currentStreak);
    localStorage.setItem("bestStreak", bestStreak);
    localStorage.setItem("playtimeSeconds", playtimeSeconds);
    localStorage.setItem("activityLog", JSON.stringify(activityLog));
}

// NAV
function goHome() {
    window.location.href = "index.html";
}

// CHALLENGES
const challenges = [
    {
        id: 1,
        title: "Sum of Two Numbers",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'sum' that takes two numbers and returns their sum.\nExample: sum(2, 3) should return 5",
        functionName: "sum",
        testCases: [
            { input: [2, 3], expected: 5 },
            { input: [10, 20], expected: 30 },
            { input: [-5, 3], expected: -2 },
            { input: [0, 0], expected: 0 }
        ]
    },
    {
        id: 2,
        title: "Reverse a String",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'reverseString' that takes a string and returns it reversed.\nExample: reverseString('hello') should return 'olleh'",
        functionName: "reverseString",
        testCases: [
            { input: ["hello"], expected: "olleh" },
            { input: ["code"], expected: "edoc" },
            { input: ["a"], expected: "a" },
            { input: [""], expected: "" }
        ]
    },
    {
        id: 3,
        title: "Check Even or Odd",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'isEven' that takes a number and returns true if even, false if odd.\nExample: isEven(4) should return true, isEven(7) should return false",
        functionName: "isEven",
        testCases: [
            { input: [4], expected: true },
            { input: [7], expected: false },
            { input: [0], expected: true },
            { input: [-2], expected: true }
        ]
    },
    {
        id: 4,
        title: "Find Maximum",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'findMax' that takes an array of numbers and returns the maximum value.\nExample: findMax([1, 5, 3]) should return 5",
        functionName: "findMax",
        testCases: [
            { input: [[1, 5, 3]], expected: 5 },
            { input: [[10, 20, 30]], expected: 30 },
            { input: [[-1, -5, -3]], expected: -1 },
            { input: [[42]], expected: 42 }
        ]
    },
    {
        id: 5,
        title: "Count Vowels",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'countVowels' that takes a string and returns how many vowels (a,e,i,o,u) it contains.\nExample: countVowels('hello') should return 2",
        functionName: "countVowels",
        testCases: [
            { input: ["hello"], expected: 2 },
            { input: ["code"], expected: 3 },
            { input: ["aeiou"], expected: 5 },
            { input: ["xyz"], expected: 0 }
        ]
    },
    {
        id: 6,
        title: "Palindrome Check",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'isPalindrome' that checks if a string is a palindrome.\nExample: isPalindrome('madam') should return true",
        functionName: "isPalindrome",
        testCases: [
            { input: ["madam"], expected: true },
            { input: ["racecar"], expected: true },
            { input: ["hello"], expected: false },
            { input: ["a"], expected: true }
        ]
    },
    {
        id: 7,
        title: "Factorial",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'factorial' that calculates the factorial of a number.\nExample: factorial(5) should return 120",
        functionName: "factorial",
        testCases: [
            { input: [5], expected: 120 },
            { input: [4], expected: 24 },
            { input: [1], expected: 1 },
            { input: [0], expected: 1 }
        ]
    },
    {
        id: 8,
        title: "Check Prime Number",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'isPrime' that checks if a number is prime.\nExample: isPrime(7) should return true",
        functionName: "isPrime",
        testCases: [
            { input: [7], expected: true },
            { input: [13], expected: true },
            { input: [4], expected: false },
            { input: [2], expected: true }
        ]
    },
    {
        id: 9,
        title: "Array Sum",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'arraySum' that takes an array of numbers and returns the sum of all elements.\nExample: arraySum([1, 2, 3]) should return 6",
        functionName: "arraySum",
        testCases: [
            { input: [[1, 2, 3]], expected: 6 },
            { input: [[10, 20]], expected: 30 },
            { input: [[]], expected: 0 },
            { input: [[-1, 2, -3]], expected: -2 }
        ]
    },
    {
        id: 10,
        title: "Remove Duplicates",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'removeDuplicates' that takes an array and returns an array with duplicates removed.\nExample: removeDuplicates([1, 2, 2, 3]) should return [1, 2, 3]",
        functionName: "removeDuplicates",
        testCases: [
            { input: [[1, 2, 2, 3]], expected: [1, 2, 3] },
            { input: [[1, 1, 1]], expected: [1] },
            { input: [[1, 2, 3]], expected: [1, 2, 3] },
            { input: [[]], expected: [] }
        ]
    },
    // More JavaScript Challenges
    {
        id: 11,
        title: "FizzBuzz Array",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'fizzBuzz' that takes a number n and returns an array from 1 to n where multiples of 3 are 'Fizz', multiples of 5 are 'Buzz', and multiples of both are 'FizzBuzz'.\nExample: fizzBuzz(5) should return [1, 2, 'Fizz', 4, 'Buzz']",
        functionName: "fizzBuzz",
        testCases: [
            { input: [5], expected: [1, 2, "Fizz", 4, "Buzz"] },
            { input: [15], expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] }
        ]
    },
    {
        id: 12,
        title: "Binary Search",
        difficulty: "Hard",
        lang: "JavaScript",
        desc: "Write a function 'binarySearch' that takes a sorted array and a target value, returns the index of the target or -1 if not found.\nExample: binarySearch([1, 3, 5, 7, 9], 5) should return 2",
        functionName: "binarySearch",
        testCases: [
            { input: [[1, 3, 5, 7, 9], 5], expected: 2 },
            { input: [[1, 2, 3, 4, 5], 1], expected: 0 },
            { input: [[1, 2, 3, 4, 5], 6], expected: -1 }
        ]
    },
    {
        id: 13,
        title: "Merge Two Arrays",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Write a function 'mergeArrays' that takes two sorted arrays and merges them into one sorted array.\nExample: mergeArrays([1, 3, 5], [2, 4, 6]) should return [1, 2, 3, 4, 5, 6]",
        functionName: "mergeArrays",
        testCases: [
            { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
            { input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },
            { input: [[], [1, 2]], expected: [1, 2] }
        ]
    },
    {
        id: 14,
        title: "Valid Parentheses",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'isValidParentheses' that checks if a string of parentheses is valid.\nExample: isValidParentheses('()[]{}') should return true",
        functionName: "isValidParentheses",
        testCases: [
            { input: ["()[]{}"], expected: true },
            { input: ["(]"], expected: false },
            { input: ["([)]"], expected: false },
            { input: ["{[]}"], expected: true }
        ]
    },
    {
        id: 15,
        title: "Two Sum",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'twoSum' that finds two numbers in an array that add up to a target.\nExample: twoSum([2, 7, 11, 15], 9) should return [0, 1]",
        functionName: "twoSum",
        testCases: [
            { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { input: [[3, 2, 4], 6], expected: [1, 2] },
            { input: [[3, 3], 6], expected: [0, 1] }
        ]
    },
    // Python Challenges
    {
        id: 16,
        title: "Python Hello World",
        difficulty: "Easy",
        lang: "Python",
        desc: "Write a Python program that prints 'Hello, World!'",
        answer: "print('Hello, World!')"
    },
    {
        id: 17,
        title: "Python Variables",
        difficulty: "Easy",
        lang: "Python",
        desc: "Write Python code to declare a variable 'name' with value 'Alice' and print it",
        answer: "name = 'Alice'\nprint(name)"
    },
    {
        id: 18,
        title: "Python List Sum",
        difficulty: "Easy",
        lang: "Python",
        desc: "Write Python code to sum all elements in the list [1, 2, 3, 4, 5]",
        answer: "numbers = [1, 2, 3, 4, 5]\nprint(sum(numbers))"
    },
    {
        id: 19,
        title: "Python String Reverse",
        difficulty: "Easy",
        lang: "Python",
        desc: "Write Python code to reverse the string 'python'",
        answer: "text = 'python'\nprint(text[::-1])"
    },
    {
        id: 20,
        title: "Python Dictionary",
        difficulty: "Medium",
        lang: "Python",
        desc: "Create a dictionary with keys 'name' and 'age', values 'John' and 25, then print the name",
        answer: "person = {'name': 'John', 'age': 25}\nprint(person['name'])"
    },
    {
        id: 21,
        title: "Python Loop",
        difficulty: "Easy",
        lang: "Python",
        desc: "Write a for loop that prints numbers from 1 to 5",
        answer: "for i in range(1, 6):\n    print(i)"
    },
    {
        id: 22,
        title: "Python Function",
        difficulty: "Medium",
        lang: "Python",
        desc: "Write a function 'square' that takes a number and returns its square, then call it with 4",
        answer: "def square(x):\n    return x * x\n\nprint(square(4))"
    },
    // HTML Challenges
    {
        id: 23,
        title: "Basic HTML Structure",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Write the basic HTML5 document structure with doctype, html, head, and body tags",
        answer: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Page Title</title>\n</head>\n<body>\n    \n</body>\n</html>"
    },
    {
        id: 24,
        title: "HTML Headings",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Create h1, h2, and h3 headings with appropriate text",
        answer: "<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<h3>Smaller Heading</h3>"
    },
    {
        id: 25,
        title: "HTML Links",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Create a link to 'https://example.com' with text 'Visit Example'",
        answer: "<a href=\"https://example.com\">Visit Example</a>"
    },
    {
        id: 26,
        title: "HTML Images",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Add an image with src='image.jpg' and alt text 'Description'",
        answer: "<img src=\"image.jpg\" alt=\"Description\">"
    },
    {
        id: 27,
        title: "HTML Lists",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Create an unordered list with 3 items: Apple, Banana, Orange",
        answer: "<ul>\n    <li>Apple</li>\n    <li>Banana</li>\n    <li>Orange</li>\n</ul>"
    },
    {
        id: 28,
        title: "HTML Form",
        difficulty: "Medium",
        lang: "HTML",
        desc: "Create a form with input field for name and submit button",
        answer: "<form>\n    <input type=\"text\" name=\"name\" placeholder=\"Enter your name\">\n    <button type=\"submit\">Submit</button>\n</form>"
    },
    // CSS Challenges
    {
        id: 29,
        title: "CSS Text Color",
        difficulty: "Easy",
        lang: "CSS",
        desc: "Write CSS to make all paragraph text red",
        answer: "p {\n    color: red;\n}"
    },
    {
        id: 30,
        title: "CSS Background",
        difficulty: "Easy",
        lang: "CSS",
        desc: "Write CSS to set a blue background for the body",
        answer: "body {\n    background-color: blue;\n}"
    },
    {
        id: 31,
        title: "CSS Font Size",
        difficulty: "Easy",
        lang: "CSS",
        desc: "Write CSS to make h1 headings 24px",
        answer: "h1 {\n    font-size: 24px;\n}"
    },
    {
        id: 32,
        title: "CSS Flexbox",
        difficulty: "Medium",
        lang: "CSS",
        desc: "Write CSS to center content horizontally and vertically using flexbox",
        answer: ".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"
    },
    {
        id: 33,
        title: "CSS Border",
        difficulty: "Easy",
        lang: "CSS",
        desc: "Write CSS to add a 2px solid black border to div elements",
        answer: "div {\n    border: 2px solid black;\n}"
    },
    {
        id: 34,
        title: "CSS Hover Effect",
        difficulty: "Medium",
        lang: "CSS",
        desc: "Write CSS for a button that changes background color on hover",
        answer: "button {\n    background-color: blue;\n}\n\nbutton:hover {\n    background-color: red;\n}"
    },
    // Java Challenges
    {
        id: 35,
        title: "Java Hello World",
        difficulty: "Easy",
        lang: "Java",
        desc: "Write a complete Java program that prints 'Hello, World!'",
        answer: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
        id: 36,
        title: "Java Variables",
        difficulty: "Easy",
        lang: "Java",
        desc: "Declare an int variable 'age' with value 25 and print it",
        answer: "int age = 25;\nSystem.out.println(age);"
    },
    {
        id: 37,
        title: "Java Loop",
        difficulty: "Easy",
        lang: "Java",
        desc: "Write a for loop that prints numbers from 1 to 5",
        answer: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}"
    },
    {
        id: 38,
        title: "Java Method",
        difficulty: "Medium",
        lang: "Java",
        desc: "Write a method 'add' that takes two ints and returns their sum",
        answer: "public int add(int a, int b) {\n    return a + b;\n}"
    },
    {
        id: 39,
        title: "Java Array",
        difficulty: "Medium",
        lang: "Java",
        desc: "Create an array of integers {1, 2, 3, 4, 5} and print the first element",
        answer: "int[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[0]);"
    },
    {
        id: 40,
        title: "Java Class",
        difficulty: "Hard",
        lang: "Java",
        desc: "Create a simple class 'Person' with name field and constructor",
        answer: "public class Person {\n    String name;\n    \n    public Person(String name) {\n        this.name = name;\n    }\n}"
    },
    // C Challenges
    {
        id: 41,
        title: "C Hello World",
        difficulty: "Easy",
        lang: "C",
        desc: "Write a C program that prints 'Hello, World!'",
        answer: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}"
    },
    {
        id: 42,
        title: "C Variables",
        difficulty: "Easy",
        lang: "C",
        desc: "Declare an int variable 'num' with value 10 and print it",
        answer: "#include <stdio.h>\n\nint main() {\n    int num = 10;\n    printf(\"%d\\n\", num);\n    return 0;\n}"
    },
    {
        id: 43,
        title: "C Loop",
        difficulty: "Easy",
        lang: "C",
        desc: "Write a for loop that prints numbers from 1 to 3",
        answer: "#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}"
    },
    {
        id: 44,
        title: "C Function",
        difficulty: "Medium",
        lang: "C",
        desc: "Write a function 'add' that takes two ints and returns their sum",
        answer: "#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    printf(\"%d\\n\", add(5, 3));\n    return 0;\n}"
    },
    {
        id: 45,
        title: "C Pointers",
        difficulty: "Hard",
        lang: "C",
        desc: "Use a pointer to change the value of a variable",
        answer: "#include <stdio.h>\n\nint main() {\n    int num = 10;\n    int *ptr = &num;\n    *ptr = 20;\n    printf(\"%d\\n\", num);\n    return 0;\n}"
    },
    // C++ Challenges
    {
        id: 46,
        title: "C++ Hello World",
        difficulty: "Easy",
        lang: "C++",
        desc: "Write a C++ program that prints 'Hello, World!'",
        answer: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
    },
    {
        id: 47,
        title: "C++ Variables",
        difficulty: "Easy",
        lang: "C++",
        desc: "Declare a string variable 'name' with value 'C++' and print it",
        answer: "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = \"C++\";\n    std::cout << name << std::endl;\n    return 0;\n}"
    },
    {
        id: 48,
        title: "C++ Class",
        difficulty: "Medium",
        lang: "C++",
        desc: "Create a simple class 'Car' with a method 'drive'",
        answer: "#include <iostream>\n\nclass Car {\npublic:\n    void drive() {\n        std::cout << \"Driving!\" << std::endl;\n    }\n};\n\nint main() {\n    Car car;\n    car.drive();\n    return 0;\n}"
    },
    {
        id: 49,
        title: "C++ Vector",
        difficulty: "Medium",
        lang: "C++",
        desc: "Create a vector of integers and print all elements",
        answer: "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> numbers = {1, 2, 3, 4, 5};\n    for (int num : numbers) {\n        std::cout << num << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
    },
    {
        id: 50,
        title: "C++ Inheritance",
        difficulty: "Hard",
        lang: "C++",
        desc: "Create a base class 'Animal' and derived class 'Dog' with overridden method",
        answer: "#include <iostream>\n\nclass Animal {\npublic:\n    virtual void speak() {\n        std::cout << \"Animal sound\" << std::endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override {\n        std::cout << \"Woof!\" << std::endl;\n    }\n};\n\nint main() {\n    Dog dog;\n    dog.speak();\n    return 0;\n}"
    },
    // JavaScript Logic (Medium to Hard)
    {
        id: 51,
        title: "Find Longest Word",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Write a function 'findLongestWord' that takes a string and returns the length of the longest word.\nExample: findLongestWord('The quick brown fox') should return 5",
        functionName: "findLongestWord",
        testCases: [
            { input: ["The quick brown fox"], expected: 5 },
            { input: ["Hello world"], expected: 5 },
            { input: ["Coding is fun"], expected: 6 }
        ]
    },
    {
        id: 52,
        title: "Title Case a Sentence",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Return the string with the first letter of each word capitalized.\nExample: titleCase('i am a coder') should return 'I Am A Coder'",
        functionName: "titleCase",
        testCases: [
            { input: ["i am a coder"], expected: "I Am A Coder" },
            { input: ["HELLO WORLD"], expected: "Hello World" }
        ]
    },
    // {
    //     id: 53,
    //     title: "Largest Number in Sub-arrays",
    //     difficulty: "Hard",
    //     lang: "JavaScript",
    //     desc: "Return an array consisting of the largest number from each provided sub-array.\nExample: largestOfFour([,]) should return",
    //     functionName: "largestOfFour",
    //     testCases: [
    //         { input: [[, , ,]], expected: }
    //     ]
    // },
    {
        id: 54,
        title: "Confirm the Ending",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Check if a string ends with the given target string.\nExample: confirmEnding('Bastian', 'n') should return true",
        functionName: "confirmEnding",
        testCases: [
            { input: ["Bastian", "n"], expected: true },
            { input: ["Congratulation", "on"], expected: true },
            { input: ["Connor", "n"], expected: false }
        ]
    },
    {
        id: 55,
        title: "Repeat a String",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Repeat a given string num times. Return an empty string if num is not positive.\nExample: repeatStringNumTimes('abc', 3) should return 'abcabcabc'",
        functionName: "repeatStringNumTimes",
        testCases: [
            { input: ["*", 3], expected: "***" },
            { input: ["abc", 4], expected: "abcabcabcabc" },
            { input: ["abc", -2], expected: "" }
        ]
    },
    {
        id: 56,
        title: "Truncate a String",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Truncate a string if it is longer than the given maximum length. Append '...' to the end.\nExample: truncateString('A-tisket', 3) should return 'A-t...'",
        functionName: "truncateString",
        testCases: [
            { input: ["A-tisket a-tasket A green and yellow basket", 8], expected: "A-tisket..." },
            { input: ["Peter Piper picked a peck of pickled peppers", 11], expected: "Peter Piper..." }
        ]
    },
    {
        id: 57,
        title: "Finders Keepers",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Create a function that looks through an array and returns the first element that passes a 'truth test'.",
        functionName: "findElement",
        testCases: [
            { input: [, "num => num % 2 === 0"], expected: 8 },
            { input: [, "num => num % 2 === 0"], expected: undefined }
        ]
    },
    {
        id: 58,
        title: "Boo who",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Check if a value is classified as a boolean primitive. Return true or false.",
        functionName: "booWho",
        testCases: [
            { input: [true], expected: true },
            { input: [false], expected: true },
            { input: [], expected: false },
            { input: ["true"], expected: false }
        ]
    },
    // {
    //     id: 59,
    //     title: "Slice and Splice",
    //     difficulty: "Medium",
    //     lang: "JavaScript",
    //     desc: "Copy each element of the first array into the second array, in order, beginning at index n.\nExample: frankenSplice(,, 1) should return",
    //     functionName: "frankenSplice",
    //     testCases: [
    //         { input: [, , 1], expected: }
    //     ]
    // },
    {
        id: 60,
        title: "Falsy Bouncer",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Remove all falsy values (false, null, 0, '', undefined, NaN) from an array.",
        functionName: "bouncer",
        testCases: [
            { input: [[7, "ate", "", false, 9]], expected: [7, "ate", 9] },
            { input: [[false, null, 0, NaN, undefined, ""]], expected: [] }
        ]
    },

    // HTML/CSS (New Additions)
    {
        id: 61,
        title: "HTML Table",
        difficulty: "Medium",
        lang: "HTML",
        desc: "Create a table with 2 rows and 2 columns (Name, Age).",
        answer: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Isa</td>\n    <td>22</td>\n  </tr>\n</table>"
    },
    {
        id: 62,
        title: "CSS Border Radius",
        difficulty: "Easy",
        lang: "CSS",
        desc: "Make a div appear as a circle (assume width/height are 100px).",
        answer: "div {\n  border-radius: 50%;\n}"
    },
    {
        id: 63,
        title: "HTML Input Placeholder",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Create an email input with placeholder 'Enter Email'.",
        answer: "<input type=\"email\" placeholder=\"Enter Email\">"
    },
    {
        id: 64,
        title: "CSS Grid Center",
        difficulty: "Medium",
        lang: "CSS",
        desc: "Use CSS Grid to center an item inside a container.",
        answer: ".container {\n  display: grid;\n  place-items: center;\n}"
    },
    {
        id: 65,
        title: "HTML Button Disabled",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Create a submit button that is disabled by default.",
        answer: "<button type=\"submit\" disabled>Submit</button>"
    },
    {
        id: 66,
        title: "CSS Box Shadow",
        difficulty: "Medium",
        lang: "CSS",
        desc: "Add a grey shadow to a box with 5px offset and 10px blur.",
        answer: ".box {\n  box-shadow: 5px 5px 10px grey;\n}"
    },
    {
        id: 67,
        title: "HTML Video Tag",
        difficulty: "Medium",
        lang: "HTML",
        desc: "Add a video tag with controls and src 'movie.mp4'.",
        answer: "<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n</video>"
    },
    {
        id: 68,
        title: "CSS Transitions",
        difficulty: "Medium",
        lang: "CSS",
        desc: "Make a background-color change over 2 seconds smoothly.",
        answer: ".box {\n  transition: background-color 2s;\n}"
    },
    {
        id: 69,
        title: "HTML Meta Charset",
        difficulty: "Easy",
        lang: "HTML",
        desc: "Write the meta tag for UTF-8 character encoding.",
        answer: "<meta charset=\"UTF-8\">"
    },
    {
        id: 70,
        title: "CSS Z-Index",
        difficulty: "Easy",
        lang: "CSS",
        desc: "Set the stack order of an element to the highest possible value.",
        answer: ".overlay {\n  z-index: 9999;\n}"
    },

    // Python Logic
    {
        id: 71,
        title: "Python List Append",
        difficulty: "Easy",
        lang: "Python",
        desc: "Add 'orange' to the list fruits = ['apple', 'banana'].",
        answer: "fruits = ['apple', 'banana']\nfruits.append('orange')"
    },
    {
        id: 72,
        title: "Python If-Else",
        difficulty: "Easy",
        lang: "Python",
        desc: "Print 'Even' if x is even, else 'Odd'.",
        answer: "if x % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')"
    },
    {
        id: 73,
        title: "Python Length of List",
        difficulty: "Easy",
        lang: "Python",
        desc: "Get the number of items in the list 'mylist'.",
        answer: "print(len(mylist))"
    },
    {
        id: 74,
        title: "Python Lambda Function",
        difficulty: "Medium",
        lang: "Python",
        desc: "Create a lambda function that adds 10 to a number n.",
        answer: "x = lambda n : n + 10"
    },
    {
        id: 75,
        title: "Python F-String",
        difficulty: "Easy",
        lang: "Python",
        desc: "Use an f-string to print 'My name is {name}' where name = 'Isa'.",
        answer: "name = 'Isa'\nprint(f'My name is {name}')"
    },

    // SQL (New Language Category)
    {
        id: 76,
        title: "SQL Select All",
        difficulty: "Easy",
        lang: "SQL",
        desc: "Select all columns from a table named 'Players'.",
        answer: "SELECT * FROM Players;"
    },
    {
        id: 77,
        title: "SQL Filter Where",
        difficulty: "Easy",
        lang: "SQL",
        desc: "Select names from 'Users' where city is 'Mumbai'.",
        answer: "SELECT name FROM Users WHERE city = 'Mumbai';"
    },
    {
        id: 78,
        title: "SQL Order By",
        difficulty: "Easy",
        lang: "SQL",
        desc: "Select all from 'Products' ordered by price descending.",
        answer: "SELECT * FROM Products ORDER BY price DESC;"
    },
    {
        id: 79,
        title: "SQL Insert Into",
        difficulty: "Medium",
        lang: "SQL",
        desc: "Insert a new record (name: 'John', age: 20) into 'Students' table.",
        answer: "INSERT INTO Students (name, age) VALUES ('John', 20);"
    },
    {
        id: 80,
        title: "SQL Update",
        difficulty: "Medium",
        lang: "SQL",
        desc: "Update age to 21 for student with id 1.",
        answer: "UPDATE Students SET age = 21 WHERE id = 1;"
    },

    //! JavaScript Array Methods (Essential for Devs)
    // {
    //     id: 81,
    //     title: "Array Map",
    //     difficulty: "Medium",
    //     lang: "JavaScript",
    //     desc: "Use .map() to double every number in the array.",
    //     functionName: "doubleArray",
    //     testCases: [{ input: [], expected: }]
    // },
    // {
    //     id: 82,
    //     title: "Array Filter",
    //     difficulty: "Medium",
    //     lang: "JavaScript",
    //     desc: "Use .filter() to return only numbers greater than 10.",
    //     functionName: "filterOverTen",
    //     testCases: [{ input: [], expected: }]
    // },
    {
        id: 83,
        title: "Array Reduce",
        difficulty: "Hard",
        lang: "JavaScript",
        desc: "Use .reduce() to find the sum of elements in.",
        functionName: "sumWithReduce",
        testCases: [{ input: [], expected: 10 }]
    },
    {
        id: 84,
        title: "Check Object Property",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Return true if object 'obj' has property 'prop'.",
        functionName: "checkProp",
        testCases: [{ input: [{ name: "Isa" }, "name"], expected: true }]
    },
    {
        id: 85,
        title: "JSON Parse",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Convert a JSON string '{\"age\":22}' into a JS object.",
        functionName: "parseJson",
        testCases: [{ input: ['{"age":22}'], expected: { age: 22 } }]
    },

    // C++ and Data Structures
    {
        id: 86,
        title: "C++ Max of Two",
        difficulty: "Easy",
        lang: "C++",
        desc: "Write a function 'getMax' using ternary operator to return the larger of two ints.",
        answer: "int getMax(int a, int b) {\n  return (a > b) ? a : b;\n}"
    },
    {
        id: 87,
        title: "C++ Constructor",
        difficulty: "Medium",
        lang: "C++",
        desc: "Define a constructor for class 'Player' that initializes 'id'.",
        answer: "class Player {\npublic:\n  int id;\n  Player(int x) { id = x; }\n};"
    },
    {
        id: 88,
        title: "Binary Tree Node",
        difficulty: "Hard",
        lang: "C++",
        desc: "Create a struct for a Node in a binary tree with left and right pointers.",
        answer: "struct Node {\n  int data;\n  Node *left, *right;\n};"
    },
    {
        id: 89,
        title: "C++ Namespace",
        difficulty: "Easy",
        lang: "C++",
        desc: "Print 'Hi' using the standard namespace.",
        answer: "std::cout << \"Hi\";"
    },
    {
        id: 90,
        title: "C++ Inline Function",
        difficulty: "Medium",
        lang: "C++",
        desc: "Write an inline function 'cube' that returns x*x*x.",
        answer: "inline int cube(int x) { return x*x*x; }"
    },

    // Java Advanced
    {
        id: 91,
        title: "Java Exception Handling",
        difficulty: "Medium",
        lang: "Java",
        desc: "Write a try-catch block to handle ArithmeticException.",
        answer: "try {\n  int result = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println(\"Error\");\n}"
    },
    {
        id: 92,
        title: "Java String Length",
        difficulty: "Easy",
        lang: "Java",
        desc: "Print the length of string 'str'.",
        answer: "System.out.println(str.length());"
    },
    {
        id: 93,
        title: "Java HashMap",
        difficulty: "Hard",
        lang: "Java",
        desc: "Create a HashMap storing String key and Integer value.",
        answer: "HashMap<String, Integer> map = new HashMap<>();"
    },
    {
        id: 94,
        title: "Java Interface",
        difficulty: "Medium",
        lang: "Java",
        desc: "Define an interface 'Animal' with method 'eat()'.",
        answer: "interface Animal {\n  void eat();\n}"
    },
    {
        id: 95,
        title: "Java ArrayList Add",
        difficulty: "Easy",
        lang: "Java",
        desc: "Add 'Apple' to an ArrayList named 'list'.",
        answer: "list.add(\"Apple\");"
    },

    //! More Logic & Algorithms (Language Neutral)
    // {
    //     id: 96,
    //     title: "Leap Year Check",
    //     difficulty: "Medium",
    //     lang: "JavaScript",
    //     desc: "Write a function 'isLeapYear' that returns true if year is leap.",
    //     functionName: "isLeapYear",
    //     testCases: [{ input:, expected: true }, { input:, expected: false }]
    // },
    // {
    //     id: 97,
    //     title: "Celsius to Fahrenheit",
    //     difficulty: "Easy",
    //     lang: "JavaScript",
    //     desc: "Formula: (C * 9/5) + 32.",
    //     functionName: "convertToF",
    //     testCases: [
    //         { input:, expected: 86 }
    //     ]
    // },
    {
        id: 98,
        title: "Find Smallest Number",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Return the smallest number from an array.",
        functionName: "findMin",
        testCases: [{ input: [], expected: 5 }]
    },
    {
        id: 99,
        title: "String Concatenation",
        difficulty: "Easy",
        lang: "JavaScript",
        desc: "Combine 'Hello' and 'World' with a space.",
        functionName: "combine",
        testCases: [{ input: ["Hello", "World"], expected: "Hello World" }]
    },
    {
        id: 100,
        title: "Array Average",
        difficulty: "Medium",
        lang: "JavaScript",
        desc: "Return the average of numbers in an array.",
        functionName: "getAverage",
        testCases: [{ input: [], expected: 3 }]
    },

    // Rapid Fire Easy (ID 101 - 115)
    { id: 101, title: "CSS Text Align", lang: "CSS", desc: "Center align text.", answer: "text-align: center;" },
    { id: 102, title: "HTML Bold", lang: "HTML", desc: "Bold the word 'Warning'.", answer: "<b>Warning</b>" },
    { id: 103, title: "JS TypeOf", lang: "JavaScript", desc: "Check type of 'Hello'.", answer: "typeof 'Hello'" },
    { id: 104, title: "Python Pow", lang: "Python", desc: "2 raised to power 3.", answer: "2**3" },
    { id: 105, title: "SQL Count", lang: "SQL", desc: "Count total rows in 'Users'.", answer: "SELECT COUNT(*) FROM Users;" },
    { id: 106, title: "HTML Underline", lang: "HTML", desc: "Underline text.", answer: "<u>Text</u>" },
    { id: 107, title: "CSS Margin Auto", lang: "CSS", desc: "Center block element.", answer: "margin: auto;" },
    { id: 108, title: "JS Math Floor", lang: "JavaScript", desc: "Round 4.7 down.", answer: "Math.floor(4.7)" },
    { id: 109, title: "Python Round", lang: "Python", desc: "Round 3.1415 to 2 decimal places.", answer: "round(3.1415, 2)" },
    { id: 110, title: "C++ Comment", lang: "C++", desc: "Single line comment.", answer: "// My comment" },
    { id: 111, title: "Java Main args", lang: "Java", desc: "Argument type in main method.", answer: "String[] args" },
    { id: 112, title: "HTML Script Tag", lang: "HTML", desc: "Link 'app.js'.", answer: "<script src=\"app.js\"></script>" },
    { id: 113, title: "CSS Font Weight", lang: "CSS", desc: "Make text bold.", answer: "font-weight: bold;" },
    { id: 114, title: "JS Array Pop", lang: "JavaScript", desc: "Remove last element.", answer: "arr.pop()" },
    { id: 115, title: "SQL Delete", lang: "SQL", desc: "Delete all from 'Logs'.", answer: "DELETE FROM Logs;" }
];

function loadChallenges() {
    let container = document.getElementById("challenge-list");
    if (!container) return;

    container.innerHTML = "";

    challenges.forEach(ch => {
        let div = document.createElement("div");
        div.className = "challenge";

        div.innerHTML = `
            <h3>${ch.title}</h3>
            <p>Difficulty: ${ch.difficulty}</p>
            <span class="lang">${ch.lang}</span>
        `;

        div.onclick = () => openChallenge(ch.id);

        if (completedChallenges.includes(ch.id)) {
            div.innerHTML += `<p style="color:lightgreen;">✔ Completed</p>`;
        }

        container.appendChild(div);
    });
}

function openChallenge(id) {
    let ch = challenges.find(c => c.id === id);

    if (completedChallenges.includes(id)) {
        alert("This challenge is already completed! Try a different one.");
        return;
    }

    document.getElementById("challenge-box").classList.remove("hidden");
    const placeholder = document.getElementById("challenge-placeholder");
    if (placeholder) placeholder.classList.add("hidden");

    document.getElementById("challenge-title").innerText = ch.title;
    document.getElementById("challenge-desc").innerText = ch.desc;

    window.currentChallenge = ch;
    window.currentId = id;

    const codeBox = document.getElementById("code-input");
    if (codeBox) {
        const funcName = ch.functionName;
        codeBox.placeholder = `Write your ${funcName}() function here...`;
        codeBox.value = `function ${funcName}() {\n  // Your code here\n}\n`;
    }
}

function submitCode() {
    console.log("submitCode called");

    let codeBox = document.getElementById("code-input");

    if (!codeBox) {
        alert("Code box not found ❌");
        return;
    }

    console.log("codeBox found:", codeBox.value);

    if (!window.currentChallenge) {
        alert("Please open a challenge first ⚠️");
        return;
    }

    console.log("currentChallenge:", window.currentChallenge);

    const userCode = codeBox.value.trim();
    const challenge = window.currentChallenge;

    console.log("userCode:", userCode);
    console.log("challenge lang:", challenge.lang);

    if (challenge.lang === "JavaScript") {
        // Handle JavaScript with eval and test cases
        const testCases = challenge.testCases || [];

        console.log("testCases:", testCases);

        try {
            eval(userCode);

            const userFunc = eval(challenge.functionName);
            if (typeof userFunc !== 'function') {
                alert(`❌ Function '${challenge.functionName}' not found. Make sure you define it!`);
                return;
            }

            console.log("userFunc found:", userFunc);

            let allTestsPassed = true;
            let testResults = [];

            for (let i = 0; i < testCases.length; i++) {
                const test = testCases[i];
                let result;
                try {
                    result = userFunc(...test.input);
                    console.log(`Test ${i + 1}: input=${JSON.stringify(test.input)}, result=${JSON.stringify(result)}, expected=${JSON.stringify(test.expected)}`);
                } catch (e) {
                    testResults.push({ passed: false, error: e.message });
                    allTestsPassed = false;
                    continue;
                }

                const passed = JSON.stringify(result) === JSON.stringify(test.expected);
                testResults.push({ passed, input: test.input, expected: test.expected, result });

                if (!passed) {
                    allTestsPassed = false;
                }
            }

            console.log("allTestsPassed:", allTestsPassed);

            if (allTestsPassed) {
                console.log("All tests passed - unlocking card");
                totalAttempts++;
                correctAttempts++;
                currentStreak++;
                if (currentStreak > bestStreak) bestStreak = currentStreak;

                const challengeTitle = challenge.title;
                activityLog.unshift({
                    icon: "✅",
                    text: `Solved \"${challengeTitle}\"`,
                    time: new Date().toISOString()
                });
                activityLog = activityLog.slice(0, 10);

                if (!completedChallenges.includes(window.currentId)) {
                    xp += 10;
                    completedChallenges.push(window.currentId);
                }

                if (xp >= level * 20) {
                    level++;
                }

                saveData();
                loadProfile();
                loadCollection();
                loadChallenges();

                // Unlock card every 3 challenges
                const shouldUnlockCard = completedChallenges.length % 3 === 0;
                if (shouldUnlockCard) {
                    alert("✅ Correct answer! Unlocking card...");
                    unlockCard();
                } else {
                    alert("✅ Correct answer!");
                }
            } else {
                console.log("Some tests failed");
                totalAttempts++;
                currentStreak = 0;
                const challengeTitle = challenge.title;
                activityLog.unshift({
                    icon: "❌",
                    text: `Failed \"${challengeTitle}\"`,
                    time: new Date().toISOString()
                });
                activityLog = activityLog.slice(0, 10);
                saveData();
                loadProfile();

                let failedTests = testResults.filter(t => !t.passed);
                let errorMsg = "❌ Some test cases failed:\n\n";
                failedTests.forEach((test, idx) => {
                    if (test.error) {
                        errorMsg += `Test ${idx + 1}: Error - ${test.error}\n`;
                    } else {
                        errorMsg += `Test ${idx + 1}:\n  Input: ${JSON.stringify(test.input)}\n  Expected: ${JSON.stringify(test.expected)}\n  Got: ${JSON.stringify(test.result)}\n\n`;
                    }
                });
                alert(errorMsg);
            }
        } catch (e) {
            console.log("Error in code:", e);
            alert(`❌ Error in your code:\n${e.message}`);
        }
    } else {
        // Handle other languages with text matching
        const expectedAnswer = challenge.answer;
        const normalizedUserCode = userCode.replace(/\s+/g, ' ').trim();
        const normalizedExpected = expectedAnswer.replace(/\s+/g, ' ').trim();

        console.log("Expected:", normalizedExpected);
        console.log("User:", normalizedUserCode);

        if (normalizedUserCode === normalizedExpected) {
            console.log("Answer correct - unlocking card");
            totalAttempts++;
            correctAttempts++;
            currentStreak++;
            if (currentStreak > bestStreak) bestStreak = currentStreak;

            const challengeTitle = challenge.title;
            activityLog.unshift({
                icon: "✅",
                text: `Solved \"${challengeTitle}\"`,
                time: new Date().toISOString()
            });
            activityLog = activityLog.slice(0, 10);

            if (!completedChallenges.includes(window.currentId)) {
                xp += 10;
                completedChallenges.push(window.currentId);
            }

            if (xp >= level * 20) {
                level++;
            }

            saveData();
            loadProfile();
            loadCollection();
            loadChallenges(); // Reload challenge list to show completed status

            // Unlock card every 3 challenges
            const shouldUnlockCard = completedChallenges.length % 3 === 0;
            if (shouldUnlockCard) {
                alert("✅ Correct answer! Unlocking card...");
                unlockCard();
            } else {
                alert("✅ Correct answer!");
            }
        } else {
            console.log("Answer incorrect");
            totalAttempts++;
            currentStreak = 0;
            const challengeTitle = challenge.title;
            activityLog.unshift({
                icon: "❌",
                text: `Failed \"${challengeTitle}\"`,
                time: new Date().toISOString()
            });
            activityLog = activityLog.slice(0, 10);
            saveData();
            loadProfile();

            alert(`❌ Incorrect answer!\n\nExpected:\n${expectedAnswer}\n\nYour answer:\n${userCode}`);
        }
    }
}

// CARDS
function unlockCard() {

    let rarity;

    // Rarity logic
    let rand = Math.random();

    if (rand < 0.5) rarity = "common";
    else if (rand < 0.75) rarity = "rare";
    else if (rand < 0.9) rarity = "epic";
    else rarity = "legendary";

    // let pool = players[rarity];
    let pool = players.filter(p =>
        p.type === rarity && !unlockedCards.some(c => c.name === p.name)
    );

    if (pool.length === 0) {
        pool = players.filter(p => !unlockedCards.some(c => c.name === p.name));
    }

    if (pool.length === 0) return;

    let card = pool[Math.floor(Math.random() * pool.length)];
    unlockedCards.push({ ...card });
    activityLog.unshift({
        icon: "🎴",
        text: `Unlocked ${card.type} card \"${card.name}\"`,
        time: new Date().toISOString()
    });
    activityLog = activityLog.slice(0, 10);
    saveData();

    showCard(card, card.type);
}

function showCard(card, rarity) {

    let popup = document.getElementById("card-popup");
    let inner = document.getElementById("card-inner");
    const cardBack = popup ? popup.querySelector(".card-back") : null;
    const cardTypeEl = document.getElementById("card-type");

    if (!popup || !inner || !cardBack || !cardTypeEl) {
        console.error("Popup missing", { popup, inner, cardBack, cardTypeEl });
        return;
    }

    inner.classList.remove("flip");

    document.getElementById("card-name").innerText = card.name;
    document.getElementById("card-img").src = card.img;
    document.getElementById("card-rating").innerText = "⭐ " + card.rating;
    document.getElementById("card-role").innerText = "🏏 " + card.role;
    document.getElementById("card-country").innerText = "🌍 " + card.country;
    cardTypeEl.innerText = rarity.toUpperCase();
    cardTypeEl.className = "card-type " + rarity;

    popup.classList.remove("hidden");
    popup.style.display = "flex";

    const revealBtn = popup.querySelector("#reveal-card-btn");
    if (revealBtn) {
        revealBtn.onclick = () => {
            inner.classList.add("flip");
            setTimeout(() => {
                popup.classList.add("hidden");
            }, 2500); // 800
        };
    }

    const cardElement = popup.querySelector(".card");
    if (cardElement) {
        cardElement.style.cursor = "pointer";
    }

    popup.onclick = (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    };

}

// PROFILE
function loadProfile() {
    let lvl = document.getElementById("profile-level");
    if (!lvl) return;

    const completedCount = completedChallenges.length;
    const accuracy = totalAttempts ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
    const langCounts = completedChallenges.reduce((acc, id) => {
        const ch = challenges.find(c => c.id === id);
        if (ch) acc[ch.lang] = (acc[ch.lang] || 0) + 1;
        return acc;
    }, {});
    const favoriteLang = Object.keys(langCounts).length
        ? Object.entries(langCounts).sort((a, b) => b[1] - a[1])[0][0]
        : "JavaScript";
    const progressTarget = level * 20;
    const progressPercent = Math.min(100, Math.round((xp / progressTarget) * 100));
    const activeSeconds = playtimeSeconds + Math.floor((Date.now() - sessionStartTime) / 1000);
    const hours = Math.floor(activeSeconds / 3600);
    const minutes = Math.floor((activeSeconds % 3600) / 60);
    const formattedPlaytime = `${hours}h ${minutes}m`;
    const rankValue = Math.max(1, 1000 - level * 5 - completedCount);

    document.getElementById("profile-level").innerText = level;
    document.getElementById("profile-xp").innerText = xp;
    document.getElementById("profile-cards").innerText = unlockedCards.length;
    document.getElementById("profile-streak").innerText = currentStreak;

    const levelBar = document.getElementById("level-bar");
    if (levelBar) levelBar.style.width = `${progressPercent}%`;

    const levelText = document.getElementById("level-text");
    if (levelText) levelText.innerText = `${xp} / ${progressTarget} XP to next level`;

    const challengesCompletedEl = document.getElementById("challenges-completed");
    if (challengesCompletedEl) challengesCompletedEl.innerText = completedCount;

    const accuracyEl = document.getElementById("accuracy-rate");
    if (accuracyEl) accuracyEl.innerText = `${accuracy}%`;

    const favoriteLangEl = document.getElementById("favorite-lang");
    if (favoriteLangEl) favoriteLangEl.innerText = favoriteLang;

    const playtimeEl = document.getElementById("playtime");
    if (playtimeEl) playtimeEl.innerText = formattedPlaytime;

    const bestStreakEl = document.getElementById("best-streak");
    if (bestStreakEl) bestStreakEl.innerText = bestStreak;

    const rankEl = document.getElementById("rank");
    if (rankEl) rankEl.innerText = `#${rankValue}`;

    const firstAchievement = document.querySelector('.achievement[title="First Steps"]');
    const championAchievement = document.querySelector('.achievement[title="Code Champion"]');
    const collectorAchievement = document.querySelector('.achievement[title="Collector Master"]');
    const legendaryAchievement = document.querySelector('.achievement[title="Legendary Player"]');

    if (firstAchievement) firstAchievement.className = `achievement ${completedCount > 0 ? "common" : "locked"}`;
    if (championAchievement) championAchievement.className = `achievement ${level >= 5 ? "rare" : "locked"}`;
    if (collectorAchievement) collectorAchievement.className = `achievement ${unlockedCards.length >= 5 ? "epic" : "locked"}`;
    if (legendaryAchievement) legendaryAchievement.className = `achievement ${unlockedCards.some(c => c.type === "legendary") ? "legendary" : "locked"}`;

    const activityFeed = document.querySelector('.activity-feed');
    if (activityFeed) {
        if (!activityLog.length) {
            activityFeed.innerHTML = `
                <div class="activity-item">
                    <span class="activity-icon">⚡</span>
                    <div class="activity-text">
                        <p>Start solving challenges to build your profile history.</p>
                    </div>
                </div>
            `;
        } else {
            activityFeed.innerHTML = activityLog.slice(0, 6).map(entry => {
                const date = new Date(entry.time);
                const timeString = date.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
                return `
                    <div class="activity-item">
                        <span class="activity-icon">${entry.icon}</span>
                        <div class="activity-text">
                            <p>${entry.text}</p>
                            <time>${timeString}</time>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// COLLECTION
function loadCollection() {
    let container = document.getElementById("card-collection");
    if (!container) return;

    container.innerHTML = "";

    let summary = {
        owned: unlockedCards.length,
        common: unlockedCards.filter(c => c.type === "common").length,
        rare: unlockedCards.filter(c => c.type === "rare").length,
        epic: unlockedCards.filter(c => c.type === "epic").length,
        legendary: unlockedCards.filter(c => c.type === "legendary").length
    };

    let ownedCountEl = document.getElementById("owned-count");
    let commonCountEl = document.getElementById("common-count");
    let rareCountEl = document.getElementById("rare-count");
    let epicCountEl = document.getElementById("epic-count");
    let legendaryCountEl = document.getElementById("legendary-count");

    if (ownedCountEl) ownedCountEl.innerText = summary.owned;
    if (commonCountEl) commonCountEl.innerText = summary.common;
    if (rareCountEl) rareCountEl.innerText = summary.rare;
    if (epicCountEl) epicCountEl.innerText = summary.epic;
    if (legendaryCountEl) legendaryCountEl.innerText = summary.legendary;

    unlockedCards.forEach(c => {
        let div = document.createElement("div");
        div.className = "collection-card " + c.type;

        div.innerHTML = `
            <img src="${c.img}">
            <h3>${c.name}</h3>
            <span class="card-rarity">${c.type}</span>
        
            <div class="card-stats">
                <p>⭐ ${c.rating}</p>
                <p>🏏 ${c.role}</p>
            </div>

            <p>🌍 ${c.country}</p>
            <p class="player-desc">🗒️ ${c.desc}</p>
        `;

        container.appendChild(div);
    });
}

// AVAILABLE CARDS
function loadAvailableCards() {
    let container = document.getElementById("available-grid");
    if (!container) return;

    container.innerHTML = "";

    // Get IDs of unlocked cards
    const unlockedIds = unlockedCards.map(c => c.name);

    // Filter available cards (not yet unlocked)
    const availableCards = players.filter(p => !unlockedIds.includes(p.name));

    // Calculate summary
    let summary = {
        total: availableCards.length,
        common: availableCards.filter(c => c.type === "common").length,
        rare: availableCards.filter(c => c.type === "rare").length,
        epic: availableCards.filter(c => c.type === "epic").length,
        legendary: availableCards.filter(c => c.type === "legendary").length
    };

    // Update summary counts
    let countEl = document.getElementById("available-count");
    let commonCountEl = document.getElementById("available-common-count");
    let rareCountEl = document.getElementById("available-rare-count");
    let epicCountEl = document.getElementById("available-epic-count");
    let legendaryCountEl = document.getElementById("available-legendary-count");

    if (countEl) countEl.innerText = summary.total;
    if (commonCountEl) commonCountEl.innerText = summary.common;
    if (rareCountEl) rareCountEl.innerText = summary.rare;
    if (epicCountEl) epicCountEl.innerText = summary.epic;
    if (legendaryCountEl) legendaryCountEl.innerText = summary.legendary;

    // Render cards
    availableCards.forEach(c => {
        let div = document.createElement("div");
        div.className = "collection-card " + c.type;

        div.innerHTML = `
            <img src="${c.img}">
            <h3>${c.name}</h3>
            <span class="card-rarity">${c.type}</span>
        
            <div class="card-stats">
                <p>⭐ ${c.rating}</p>
                <p>🏏 ${c.role}</p>
            </div>

            <p>🌍 ${c.country}</p>
            <p class="player-desc">🗒️ ${c.desc}</p>
        `;

        container.appendChild(div);
    });
}

// RESTART GAME FUNCTION
function restartGame() {
    if (confirm("⚠️ Are you sure you want to restart the game?\n\nThis will:\n• Reset all progress to level 0\n• Clear all completed challenges\n• Move all cards back to available\n• Reset all stats and achievements\n• Clear activity history\n\nThis action cannot be undone!")) {
        // Clear all localStorage data
        localStorage.clear();

        // Reset all variables to initial state
        level = 1;
        xp = 0;
        unlockedCards = [];
        completedChallenges = [];
        totalAttempts = 0;
        correctAttempts = 0;
        currentStreak = 0;
        bestStreak = 0;
        playTimeSeconds = 0;
        activityLog = [];
        sessionStartTime = Date.now();

        // Save the reset state
        saveData();

        // Reload the page to refresh all displays
        location.reload();
    }
}

// Add event listener for restart button
document.addEventListener('DOMContentLoaded', function () {
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartGame);
    }
});

// INIT
loadChallenges();
loadProfile();
loadCollection();
loadAvailableCards();

window.addEventListener("beforeunload", () => {
    const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
    playtimeSeconds += elapsed;
    saveData();
});