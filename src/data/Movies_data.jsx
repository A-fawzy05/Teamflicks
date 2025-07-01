//imports of comedy and drama
import TheHangover from '../assets/Comedy-Drama/Comedy-Drama/Comedy/The Hangover/photo2.jpg'
import JumpStreet from '../assets/Comedy-Drama/Comedy-Drama/Comedy/21 Jump Street/photo2.jpg'
import Hotfuzz from '../assets/Comedy-Drama/Comedy-Drama/Comedy/Hot Fuzz/photo1.jpg'
import Anchorman from '../assets/Comedy-Drama/Comedy-Drama/Comedy/Anchorman The Legend of Ron Burgundy/photo1.jpg'
import Dumb from '../assets/Comedy-Drama/Comedy-Drama/Comedy/Dumb and Dumber/photo1.jpg'
import Stepbrothers from '../assets/Comedy-Drama/Comedy-Drama/Comedy/Step Brothers/photo1.jpg'
import Superbad from '../assets/Comedy-Drama/Comedy-Drama/Comedy/Superbad/photo1.jpeg'
import Tropicthunder from '../assets/Comedy-Drama/Comedy-Drama/Comedy/Tropic Thunder/photo1.jpg'
import grandbudapest from '../assets/Comedy-Drama/Comedy-Drama/Comedy/The Grand Budapest Hotel/photo1.jpg'
import beautifulmind from '../assets/Comedy-Drama/Comedy-Drama/Drama/A Beautiful Mind/photo1.jpg'
import forrestgump from '../assets/Comedy-Drama/Comedy-Drama/Drama/Forrest Gump/photo1.jpg'
import goodwillhunting from '../assets/Comedy-Drama/Comedy-Drama/Drama/Good Will Hunting/photo1.jpg'
import requiemforadream from '../assets/Comedy-Drama/Comedy-Drama/Drama/Requiem for a Dream/photo1.jpg'
import faultofourstars from '../assets/Comedy-Drama/Comedy-Drama/Drama/The Fault in Our Stars/photo1.jpg'
import godfather from '../assets/Comedy-Drama/Comedy-Drama/Drama/The Godfather/photo1.jpg'
import greenmile from '../assets/Comedy-Drama/Comedy-Drama/Drama/The Green Mile/photo1.jpg'
import pursuitofhappy from '../assets/Comedy-Drama/Comedy-Drama/Drama/The Pursuit of Happyness/photo1.jpg'
import shawsshank from '../assets/Comedy-Drama/Comedy-Drama/Drama/The Shawshank Redemption/photo1.jpg'
import socialnetwork from '../assets/Comedy-Drama/Comedy-Drama/Drama/The Social Network/photo1.jpg'

//imports of horror and romance
import getout from '../assets/Horror-Romance/Horror/2. Get Out/Get_OutBackground.jpg'
import theconjuring from '../assets/Horror-Romance/Horror/1. The Conjuring/Conj_Poster.jpeg'
import it from '../assets/Horror-Romance/Horror/3. It/it_Poster.jpg'
import Herediatary from '../assets/Horror-Romance/Horror/4. Hereditary/HereditaryPoster.jpg'
import quietplace from '../assets/Horror-Romance/Horror/5. A Quiet Place/AQP_poster.jpg'
import thebadook from '../assets/Horror-Romance/Horror/6. The Babadook/BabadookPoster.jpg'
import thewitch from '../assets/Horror-Romance/Horror/7. The Witch/WitchPoster.jpg'
import theexcorist from '../assets/Horror-Romance/Horror/8. The Exorcist/TheExorcistPoster.jpg'
import psycho from '../assets/Horror-Romance/Horror/9. Psycho/er.jpg'
import midsommar from '../assets/Horror-Romance/Horror/10. Midsommar/midsommarPoster.jpg'
import Notebook from '../assets/Horror-Romance/Romance/1. The Notebook/Notebook_Poster.jpg'
import lalaland from '../assets/Horror-Romance/Romance/2. La La Land/LaLaLandPoster_.jpg'
import titanic from '../assets/Horror-Romance/Romance/3. Titanic/Titanic-Poster_.jpg'
import prideandprejudice from '../assets/Horror-Romance/Romance/4. Pride and Prejudice/PrideAndPrejudicePoster_.jpg'
import walktoremember from '../assets/Horror-Romance/Romance/5. A Walk to Remember/A-Walk-To-Remember---Poster_.jpg'
import beforesunrise from '../assets/Horror-Romance/Romance/6. Before Sunrise/BeforeSunrise-Poster_.jpg'
import nottinghill from '../assets/Horror-Romance/Romance/7. Notting Hill/Notting-Hill-Poster_.jpg'
import tenthingsihate from '../assets/Horror-Romance/Romance/8. 10 Things I Hate About You/10things-poster.jpg'
import vow from '../assets/Horror-Romance/Romance/9. The Vow/TheVow-Poster.jpg'
import eternalsunshine from '../assets/Horror-Romance/Romance/10. Eternal Sunshine of The Spotless Mind/EternalSunshine-poster.jpg'



export const Movies = [
    // Action
    {
      genre: "Action",
      movies: [
        {
          id: 1,
          name: "DayOff",
          description: "A fast-paced action movie with intense car chases and daring heists.",
          comments: [
            { name: "John", comment: "Amazing action sequences!" },
            { name: "Sarah", comment: "Loved the car chases, so thrilling!" }
          ],
          rating: 8.5,
          videoLink: "https://youtu.be/IKYvVeWt_n4?si=eJdAnrjXdIh5jkIL",
          duration: 120,
          backgroundImage: "https://helios-i.mashable.com/imagery/articles/05nEybyOoW4rbsHJR7JMllg/hero-image.fill.size_1200x675.v1732029938.jpg"
        },
        {
          id: 2,
          name: "Very Bad Cops",
          description: "An epic war film where soldiers fight for survival against a powerful enemy.",
          comments: [
            { name: "Mike", comment: "Very intense, kept me on the edge of my seat!" },
            { name: "Anna", comment: "Great story and characters, loved it!" }
          ],
          rating: 7.9,
          videoLink: "https://youtu.be/f_q6CYiZS1g?si=wmiifExYH_un8yIU",
          duration: 135,
          backgroundImage: "https://m.media-amazon.com/images/I/81UIfC7NGmL._AC_UF1000,1000_QL80_.jpg"
        },
        {
          id: 3,
          name: "Take Over",
          description: "A martial arts champion seeks revenge after his dojo is destroyed.",
          comments: [
            { name: "David", comment: "The fight scenes were incredible!" },
            { name: "Rachel", comment: "Action-packed and thrilling!" }
          ],
          rating: 8.2,
          videoLink: "https://youtu.be/qz4c9WPceVM?si=QGxiuQBlOXr72isH",
          duration: 115,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKJUIE3ood2Ey1U_YZ2qJ0wNF1jTmBynLX6RB4OdUg8-RPHqg1q3JPyNxTKJ4j_vf0FM&usqp=CAU"
        },
        {
          id: 4,
          name: "Best of JohnWick",
          description: "A former soldier must stop a criminal syndicate from taking over the city.",
          comments: [
            { name: "Luke", comment: "Non-stop action, great movie!" },
            { name: "Megan", comment: "Explosions and gunfights at their best!" }
          ],
          rating: 7.8,
          videoLink: "https://youtu.be/fx_nCYQUzqo?si=BRayBQr0a1uWUHsm",
          duration: 110,
          backgroundImage: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
        },
        {
          id: 5,
          name: "Special Agent",
          description: "A group of mercenaries is hired for a high-stakes mission.",
          comments: [
            { name: "George", comment: "Love this franchise, action never disappoints!" },
            { name: "Lily", comment: "Full of iconic action stars, fantastic!" }
          ],
          rating: 6.9,
          videoLink: "https://youtu.be/4wBGOWHTwjY?si=3Mbb2I9kL2kEn6KO",
          duration: 140,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAup3mSnLq1omUQT3r_c30Mlt92xtZ7by53NEHwoPjDyFHRzoM9koZwAtf-__Dqn_QBnY&usqp=CAU"
        },
        {
          id: 6,
          name: "Apache",
          description: "A prisoner must race against others to win his freedom in a deadly competition.",
          comments: [
            { name: "Kevin", comment: "Fast and thrilling from start to finish!" },
            { name: "Eve", comment: "The car battles were awesome!" }
          ],
          rating: 7.1,
          videoLink: "https://youtu.be/kPWAupd8WKE?si=O_CNDk1Me7bYXwn9",
          duration: 100,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDRDYaijqTNM2r0XueryM9azmlt2bzq5v30VOFipww3Hwp0cgebymc0N4yTqp2NlMTaI&usqp=CAU"
        },
        {
          id: 7,
          name: "Luna",
          description: "James Bond faces a new enemy who threatens MI6 and his own life.",
          comments: [
            { name: "Tom", comment: "Best Bond movie in years!" },
            { name: "Claire", comment: "The action was top-notch!" }
          ],
          rating: 8.3,
          videoLink: "https://youtu.be/JMAHGniqLEM?si=Y0Gg8QZ5VlYgoR-d",
          duration: 143,
          backgroundImage: "https://scontent.fcai2-2.fna.fbcdn.net/v/t39.30808-6/482228406_602021639463883_6687495413072705072_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sO3wofF9X18Q7kNvwErkhxn&_nc_oc=AdnV85T6hm1zpVq4gAi5PaVRxHMMPiz16dJfi1vpGS2iVDYwkhcfh25PtpHabBGzZsU&_nc_zt=23&_nc_ht=scontent.fcai2-2.fna&_nc_gid=M97NrzJJewZWeEfEZZaNhA&oh=00_AfEQwkKSlZbkrmu--akCXb4qNLianlekcHkWAb58V6MsiA&oe=67F8C6EF"
        },
        {
          id: 8,
          name: "Sanhok",
          description: "Ethan Hunt faces his toughest mission yet as he races to stop a nuclear threat.",
          comments: [
            { name: "Robert", comment: "Incredible stunts and suspense!" },
            { name: "Jenna", comment: "One of the best action movies ever!" }
          ],
          rating: 8.0,
          videoLink: "https://youtu.be/_bOR2BXyTxw?si=AMax7XNwdGghgmQk",
          duration: 148,
          backgroundImage: "https://i.ytimg.com/vi/5IOaHSOJJT4/hqdefault.jpg"
        },
        {
          id: 9,
          name: "JohnWick 5",
          description: "A post-apocalyptic action film with wild car chases and epic battles.",
          comments: [
            { name: "Chris", comment: "Non-stop action, an adrenaline rush!" },
            { name: "Sophia", comment: "Visually stunning and intense!" }
          ],
          rating: 8.1,
          videoLink: "https://youtu.be/zv3NDaFqjIc?si=w4zrIZ-683jOiYt0",
          duration: 120,
          backgroundImage: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/04/john-wick-chapter-5-placeholder-poster.jpg"
        },
        {
          id: 10,
          name: "Sniper",
          description: "A retired hitman seeks vengeance after his dog is killed by a Russian mobster.",
          comments: [
            { name: "Alex", comment: "Keanu Reeves at his best!" },
            { name: "Kathy", comment: "The fight choreography is amazing!" }
          ],
          rating: 7.8,
          videoLink: "https://youtu.be/nzRV9T_fLAc?si=2-kaUiqq0-1eItYB",
          duration: 101,
          backgroundImage: "https://images.app.goo.glhttps://m.media-amazon.com/images/M/MV5BMjk3ZjBjZjYtMDQ0ZC00MjBiLWE0YTktZjAzYmYyNzdiMTk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg/CZqojAArc2VtQj189"
        }
      ]
    },
    // Adventure
    {
      genre: "Adventure",
      movies: [
        {
          id: 11,
          name: "Interstellar",
          description: "Two explorers embark on a dangerous journey to uncover the secrets of an ancient city.",
          comments: [
            { name: "James", comment: "A great mix of adventure and comedy!" },
            { name: "Eva", comment: "The plot was fun and exciting!" }
          ],
          rating: 7.4,
          videoLink: "https://youtu.be/60h6lpnSgck?si=3yl_OW1bCvwGKEF1",
          duration: 120,
          backgroundImage: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        },
        {
          id: 12,
          name: "John Carter",
          description: "A group of explorers ventures deep into a jungle filled with perilous creatures.",
          comments: [
            { name: "David", comment: "A thrilling adventure with fantastic visuals!" },
            { name: "Megan", comment: "The jungle setting was really cool!" }
          ],
          rating: 7.0,
          videoLink: "https://youtu.be/6Rf55GTEZ_E?si=B-Mtwoj3m4pQ2DRm",
          duration: 125,
          backgroundImage: "https://m.media-amazon.com/images/M/MV5BZWNmZGYzZjUtODRmOS00ODgzLWE4NWQtMDI3MGUwNjRjYjY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
          id: 13,
          name: "Jungle Curios",
          description: "A man sets off on a cross-country journey to find true freedom in the wilderness.",
          comments: [
            { name: "Chris", comment: "A beautiful journey, very moving." },
            { name: "Laura", comment: "Such a heartwarming story of self-discovery." }
          ],
          rating: 8.0,
          videoLink: "https://youtu.be/f_HvoipFcA8?si=_EFagRJHyPdehNOS",
          duration: 148,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh0l4HAW1ZMIpuDIKx8FugHxM7agVGw-yal7Ia8sTTdev5U37hwio5p3-&s=10"
        },
        {
          id: 14,
          name: "The Revenat",
          description: "A pirate captain teams up with an unlikely group to find the cursed treasure.",
          comments: [
            { name: "Zoe", comment: "Classic adventure, love the pirates!" },
            { name: "Ben", comment: "Johnny Depp is amazing in this role!" }
          ],
          rating: 8.1,
          videoLink: "https://youtu.be/LoebZZ8K5N0?si=L_aslWuw4GCqs-tj",
          duration: 143,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKrd6Hd7LPsmk4LTcC6KbhsyE7ss4NnkavdOUjloUCZFBjlGjUjvsjIFKuNLaoSc0iFo&usqp=CAU"
        },
        {
          id: 15,
          name: "Lord Of The Rings",
          description: "A young girl discovers a hidden garden and changes the lives of those around her.",
          comments: [
            { name: "Emily", comment: "A beautiful, heartwarming story!" },
            { name: "Oliver", comment: "Magical and full of charm." }
          ],
          rating: 7.5,
          videoLink: "https://youtu.be/Lc9q6nnmrGY?si=eRkbjvQP6OZJ54ZW",
          duration: 100,
          backgroundImage: "https://images.app.goo.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9Kh1cevTmwHhWbummXj48K7FqFMBorOi3KW3-YRR7UAxvIAOg4nYrk2wCt7hsgBRtrs&usqp=CAUgl/68jvmrACFdkd5r8RA"
        },
        {
          id: 16,
          name: "Escape 2120",
          description: "Four children are transported to a magical land where they must fight an evil witch.",
          comments: [
            { name: "Sophia", comment: "A fantastic fantasy adventure!" },
            { name: "Jack", comment: "Epic story and breathtaking visuals!" }
          ],
          rating: 8.0,
          videoLink: "https://youtu.be/UZdJDYSu6nk?si=oxOc2ROJvPt1P9Cm",
          duration: 143,
          backgroundImage: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19188304_p_v10_aa.jpg"
        },
        {
          id: 17,
          name: "Lord Of Elves",
          description: "Archaeologist Indiana Jones battles Nazis to find the lost Ark of the Covenant.",
          comments: [
            { name: "Oliver", comment: "The best adventure film of all time!" },
            { name: "Amy", comment: "Action and adventure at its finest!" }
          ],
          rating: 8.5,
          videoLink: "https://youtu.be/jwErAY9QjMA?si=hN3gGNS09v7ewuJ0",
          duration: 115,
          backgroundImage: "https://m.media-amazon.com/images/M/MV5BMTgwMjU0NjQ2Nl5BMl5BanBnXkFtZTgwMjYxMTEwNzE@._V1_.jpg"
        },
        {
          id: 18,
          name: "SOS",
          description: "A film crew discovers a giant ape on a remote island and brings it to New York.",
          comments: [
            { name: "Tom", comment: "The action was great, and the effects were amazing!" },
            { name: "Rachel", comment: "King Kong is truly unforgettable!" }
          ],
          rating: 7.6,
          videoLink: "https://youtu.be/UZdJDYSu6nk?si=oxOc2ROJvPt1P9Cm",
          duration: 187,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvegAiiYjLDZiqr8NyPfPuwO_Xtd1xjD-NFq7eA6iXQ4FQjxHG9z4WSYqt9cONWaUzZ4&usqp=CAU"
        },
        {
          id: 19,
          name: "Lost In Africa",
          description: "Bilbo Baggins sets off on a journey to reclaim treasure guarded by a dragon.",
          comments: [
            { name: "Jack", comment: "A fantastic adventure with great visuals." },
            { name: "Olivia", comment: "A beautiful journey with wonderful characters." }
          ],
          rating: 7.9,
          duration: 169,
          videoLink: "https://youtu.be/E9UT_qSbhHk?si=BRLJLKSq3hdx-zcE",
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZAbs3N-8aYfYRbpb-rVHy2Xx8iq7JwRsRU0XvrLm90BiIh_9gDfo7hbffJVW-T04lr0&usqp=CAU"
        },
        {
          id: 20,
          name: "Venom",
          description: "A young boy raised by wolves in the jungle must find his place in the world.",
          comments: [
            { name: "Lily", comment: "A magical adventure, loved it!" },
            { name: "Nina", comment: "Great music and visuals, amazing jungle setting." }
          ],
          rating: 7.7,
          videoLink: "https://youtu.be/HyIyd9joTTc?si=Xk770J6PRlF4ph1b",
          duration: 106,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSMtshIkwFDpiQZbV4PBTf4ysWb4tX0_KtrycYya9ZM6kmZksL2-qfjT7Z16bUm8LHKY&usqp=CAU"
        }
      ]
    },
    // Anime
    {
      genre: "Anime",
      movies: [
        {
          id: 21,
          name: "Spirited Away",
          description: "A young girl is trapped in a mystical world and must find a way to save her parents.",
          comments: [
            { name: "Kyle", comment: "A masterpiece of animation and storytelling." },
            { name: "Sophie", comment: "One of the best animated films I've ever seen!" }
          ],
          rating: 8.6,
          videoLink: "https://youtu.be/ByXuk9QqQkk",
          duration: 125,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjkFIaR2x3BF__b6d2_vsfpeXOO_HeFwVLg&s"
        },
        {
          id: 22,
          name: "My Neighbor Totoro",
          description: "Two young sisters move to the countryside, where they encounter magical creatures.",
          comments: [
            { name: "Ella", comment: "A heartwarming and magical story." },
            { name: "Liam", comment: "Such a charming and peaceful film." }
          ],
          rating: 8.2,
          videoLink: "https://youtu.be/92a7Hj0ijLs",
          duration: 86,
          backgroundImage: "data:image/jpeg;base64,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"
        },
        {
          id: 23,
          name: "Your Name",
          description: "Two teenagers swap bodies and embark on an emotional journey to find each other.",
          comments: [
            { name: "Rachel", comment: "Beautiful animation and a touching story!" },
            { name: "Ben", comment: "One of the best love stories I've ever seen!" }
          ],
          rating: 8.4,
          videoLink: "https://youtu.be/xU47nhruN-Q",
          duration: 106,
          backgroundImage: "https://wallpapersok.com/images/high/your-name-anime-2016-movie-poster-mlwlcbx1run1k2u9.jpg"
        },
        {
          id: 24,
          name: "Akira",
          description: "In a post-apocalyptic Tokyo, a teenager with psychic powers fights against a corrupt government.",
          comments: [
            { name: "Chris", comment: "A groundbreaking classic of the anime genre." },
            { name: "Sophia", comment: "The animation is stunning and the story gripping." }
          ],
          rating: 8.0,
          videoLink: "https://youtu.be/nA8KmHC2Z-g",
          duration: 124,
          backgroundImage: "data:image/jpeg;base64,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"
        },
        {
          id: 25,
          name: "Dragon Ball Z: Battle of Gods",
          description: "Goku and his friends face off against a new powerful opponent from the Gods.",
          comments: [
            { name: "Lucas", comment: "Great action and exciting battles!" },
            { name: "Anna", comment: "A fun addition to the Dragon Ball series." }
          ],
          rating: 7.8,
          videoLink: "https://youtu.be/sxufB6DxXk0",
          duration: 105,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zF2Q9MVGAcT5i0uQJr2TU0eIFzau-LbK_g&s"
        },
        {
          id: 26,
          name: "One Piece: Stampede",
          description: "The Straw Hat Pirates face off against powerful pirates at the Pirate Expo.",
          comments: [
            { name: "Jenna", comment: "An action-packed and entertaining movie!" },
            { name: "Alex", comment: "The animation and adventure were top-notch!" }
          ],
          rating: 7.7,
          videoLink: "https://example.com/one-piece-stampede",
          duration: 101,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF63lUUrTdBAuc7EPkCgSKps8OGwkHszz_7A&s"
        },
        {
          id: 27,
          name: "My Hero Academia: Heroes Rising",
          description: "The students of UA High School face their biggest challenge yet when a new villain appears.",
          comments: [
            { name: "Zach", comment: "A thrilling anime film, with incredible action!" },
            { name: "Maya", comment: "The heroes' teamwork was amazing to watch." }
          ],
          rating: 7.9,
          videoLink: "https://youtu.be/iaMLBWj6HjI",
          duration: 104,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5NFoCptrlzVYbrV92k2NGkOJIKVi7mqwOA&s"
        },
        {
          id: 28,
          name: "Naruto: The Last",
          description: "Naruto and Hinata's love story unfolds against the backdrop of a powerful new enemy.",
          comments: [
            { name: "Tom", comment: "A beautiful continuation of the Naruto story." },
            { name: "Olivia", comment: "The action was intense and the romance was heartwarming." }
          ],
          rating: 7.6,
          videoLink: "https://youtu.be/tA3yE4_t6SY",
          duration: 112,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitqkqPlxULMai_hmUnaFnPSQw3x8AtcvUEA&s"
        },
        {
          id: 29,
          name: "Ghost in the Shell",
          description: "A cyborg police officer hunts down a mysterious hacker in a futuristic world.",
          comments: [
            { name: "Jack", comment: "A deep and philosophical exploration of technology." },
            { name: "Emily", comment: "Visually stunning and thought-provoking." }
          ],
          rating: 7.5,
          videoLink: "https://youtu.be/8RF09G8Ymqg",
          duration: 83,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9PJX7Cw_E42-OssEXWkP6E-KG1uCKzcimQ&s"
        },
        {
          id: 30,
          name: "Perfect Blue",
          description: "A pop idol becomes a target of a stalker while her life and career unravel.",
          comments: [
            { name: "Sophia", comment: "A psychological thriller that keeps you hooked." },
            { name: "David", comment: "The tension and suspense were perfectly executed." }
          ],
          rating: 8.0,
          videoLink: "https://youtu.be/2O09gQC-KvA",
          duration: 81,
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Dv_0LRZacP4H3Y4lOD3nNnl4g6nS9z1Acg&s"
        }
      ]
    },

  // Animation
  {
    genre: "Animation",
    movies: [
      {
        id: 31,
        name: "Toy Story 4",
        description: "A group of toys come to life when their owner is away, leading to exciting adventures.",
        comments: [
          { name: "Mia", comment: "A timeless classic, loved it!" },
          { name: "Henry", comment: "The animation is still impressive today." }
        ],
        rating: 9.3,
        videoLink: "https://youtu.be/wmiIUN-7qhE",
        duration: 81,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8_6x-F61FS5fP7KrmP5CYtrIJGLKT1WZ8w&s"
      },
      {
        id: 32,
        name: "Frozen",
        description: "A young princess embarks on a journey to find her estranged sister, who has magical powers.",
        comments: [
          { name: "Emma", comment: "Such a beautiful story and great music!" },
          { name: "John", comment: "The animation is breathtaking." }
        ],
        rating: 7.8,
        videoLink: "https://youtu.be/TbQm5doF_Uc",
        duration: 102,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZ2Mf2s7C9bfV4QKAv49UQRyFWuVEPhBb-w&s"
      },
      {
        id: 33,
        name: "Shrek",
        description: "An ogre and his sidekick set out to rescue a princess and reclaim his swamp.",
        comments: [
          { name: "Jake", comment: "Hilarious and heartwarming, loved it!" },
          { name: "Nina", comment: "Shrek is one of the best animated characters ever!" }
        ],
        rating: 7.9,
        videoLink: "https://youtu.be/CwXOrWvPBPk",
        duration: 90,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2oZ1ADJ2DbK-NiFOijdwIk-vZyvxJHR6QQ&s"
      },
      {
        id: 34,
        name: "The Lion King",
        description: "A young lion must embrace his destiny as king after the tragic death of his father.",
        comments: [
          { name: "Sophia", comment: "A legendary animated movie!" },
          { name: "Liam", comment: "The music and animation are unforgettable." }
        ],
        rating: 8.5,
        videoLink: "https://youtu.be/7TavVZMewpY",
        duration: 88,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCcIiZ0mD8mUcnaeeu3C797AX_1YexorR-A&s"
      },
      {
        id: 35,
        name: "Finding Nemo",
        description: "A clownfish sets off on a journey to find his lost son in the vast ocean.",
        comments: [
          { name: "Grace", comment: "A heartfelt adventure with stunning animation!" },
          { name: "Tom", comment: "I cried, this movie is just so beautiful." }
        ],
        rating: 8.1,
        videoLink: "https://youtu.be/9oQ628Seb9w",
        duration: 100,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tHo8RMWS1CCpSXI4y8L9eO_G-4jZQpYLvA&s"
      },
      {
        id: 36,
        name: "Zootopia",
        description: "A bunny cop teams up with a con artist fox to uncover a conspiracy in a city of anthropomorphic animals.",
        comments: [
          { name: "Jenna", comment: "Such a clever and fun movie!" },
          { name: "Lucas", comment: "Great world-building and important themes." }
        ],
        rating: 8.0,
        videoLink: "https://youtu.be/jWM0ct-OLsM",
        duration: 108,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySTHNZoVQ3DF50g8zC8YYjWYmeI1lKzcL9w&s"
      },
      {
        id: 37,
        name: "Coco",
        description: "A young boy travels to the Land of the Dead to uncover his family's history and pursue his musical dreams.",
        comments: [
          { name: "Lily", comment: "A beautiful and emotional film!" },
          { name: "George", comment: "The music and animation were breathtaking." }
        ],
        rating: 8.4,
        videoLink: "https://youtu.be/xlnPHQ3TLX8",
        duration: 105,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZEiPs1DqIWPoa0dzbLBYCcHcrPz4cNx_5Q&s"
      },
      {
        id: 38,
        name: "Kung Fu Panda 4",
        description: "A lazy panda is chosen to become the Dragon Warrior and save his village from a powerful enemy.",
        comments: [
          { name: "Emma", comment: "Funny and full of action, loved the characters!" },
          { name: "Jake", comment: "The animation is top-tier and the humor is perfect." }
        ],
        rating: 9.1,
        videoLink: "https://youtu.be/_inKs4eeHiI",
        duration: 92,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemPVrdfenEvyn8EkGQIQqcjz6gVbhrvjhRQ&s"
      },
      {
        id: 39,
        name: "Inside Out",
        description: "The emotions inside a young girl’s mind must work together to help her adjust to a new life.",
        comments: [
          { name: "Grace", comment: "A beautiful film with great emotional depth." },
          { name: "Anna", comment: "Such a clever concept and heartfelt storytelling." }
        ],
        rating: 8.1,
        videoLink: "https://youtu.be/yRUAzGQ3nSY",
        duration: 95,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMoN9spt8cGUc_PEtTvcqgtWt3fXMEalSww&s"
      },
      {
        id: 40,
        name: "Big Hero 6",
        description: "A young robotics prodigy and his robot companion must save their city from a dangerous villain.",
        comments: [
          { name: "Lucas", comment: "A great mix of action and emotion." },
          { name: "Sarah", comment: "Baymax is adorable, the movie is awesome!" }
        ],
        rating: 7.8,
        videoLink: "https://youtu.be/z3biFxZIJOQ",
        duration: 102,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7Fh3i7ylaeS-1vwdfPNEgcvB9gsBlRgCeA&s"
      }
    ]
  },
// Comedy
{
  genre: "Comedy",
  movies: [
    {
      id: 41,
      name: "The Hangover",
      description: "A bachelor party in Las Vegas turns into an unforgettable adventure when the groom goes missing.",
      comments: [
        { name: "Tom", comment: "Hilarious from start to finish!" },
        { name: "Sarah", comment: "A true classic for a good laugh!" }
      ],
      rating: 7.7,
      videoLink: "https://example.com/the-hangover",
      duration: 100,
      backgroundImage: TheHangover
    },
    {
      id: 42,
      name: "Superbad",
      description: "Two high school friends attempt to enjoy their last days before graduation in a series of hilarious misadventures.",
      comments: [
        { name: "Mike", comment: "So funny, it never gets old." },
        { name: "Anna", comment: "A perfect teen comedy!" }
      ],
      rating: 7.9,
      videoLink: "https://example.com/superbad",
      duration: 113,
      backgroundImage: Superbad
    },
    {
      id: 43,
      name: "21 Jump Street",
      description: "Two cops go undercover at a high school to bust a drug ring, but end up reliving their teenage years.",
      comments: [
        { name: "Emily", comment: "The chemistry between the leads is fantastic!" },
        { name: "Chris", comment: "Action-packed with tons of laughs." }
      ],
      rating: 7.7,
      videoLink: "https://example.com/21-jump-street",
      duration: 109,
      backgroundImage: JumpStreet
    },
    {
      id: 44,
      name: "Anchorman: The Legend of Ron Burgundy",
      description: "The story of a cocky 1970s news anchor and his battle for dominance in the news world.",
      comments: [
        { name: "Olivia", comment: "Will Ferrell is hilarious in this!" },
        { name: "Jack", comment: "An absolute comedy classic!" }
      ],
      rating: 7.2,
      videoLink: "https://example.com/anchorman",
      duration: 94,
      backgroundImage: Anchorman
    },
    {
      id: 45,
      name: "Dumb and Dumber",
      description: "Two blissfully brainless friends embark on a cross-country trip to return a briefcase full of money.",
      comments: [
        { name: "Lucas", comment: "A slapstick comedy at its finest!" },
        { name: "Katie", comment: "Always makes me laugh, no matter how many times I watch it!" }
      ],
      rating: 6.9,
      videoLink: "https://example.com/dumb-and-dumber",
      duration: 107,
      backgroundImage: Dumb
    },
    {
      id: 46,
      name: "The Grand Budapest Hotel",
      description: "The adventures of a legendary concierge and his protégé at a famous European hotel between the wars.",
      comments: [
        { name: "Lily", comment: "A quirky, visually stunning film with great humor." },
        { name: "George", comment: "Wes Anderson's best work!" }
      ],
      rating: 8.1,
      videoLink: "https://example.com/grand-budapest-hotel",
      duration: 99,
      backgroundImage: grandbudapest
    },
    {
      id: 47,
      name: "Step Brothers",
      description: "Two middle-aged, lazy men are forced to live together when their parents marry each other.",
      comments: [
        { name: "Rachel", comment: "Ridiculous, over-the-top comedy!" },
        { name: "Ben", comment: "Nonstop laughs from beginning to end." }
      ],
      rating: 6.9,
      videoLink: "https://example.com/step-brothers",
      duration: 98,
      backgroundImage: Stepbrothers
    },
    {
      id: 48,
      name: "Ferris Bueller's Day Off",
      description: "A high school student takes a day off from school and embarks on an epic adventure through Chicago.",
      comments: [
        { name: "Sophia", comment: "A timeless comedy, so much fun!" },
        { name: "Tom", comment: "The ultimate feel-good movie!" }
      ],
      rating: 7.8,
      videoLink: "https://example.com/ferris-buellers-day-off",
      duration: 103,
      backgroundImage: "https://www.example.com/ferris-buellers-day-off-poster.jpg"
    },
    {
      id: 49,
      name: "Tropic Thunder",
      description: "A group of actors filming a war movie find themselves in a real-life combat situation.",
      comments: [
        { name: "Lucas", comment: "Hilarious satire of Hollywood films." },
        { name: "Ella", comment: "Great performances from all the cast." }
      ],
      rating: 7.0,
      videoLink: "https://example.com/tropic-thunder",
      duration: 107,
      backgroundImage: Tropicthunder
    },
    {
      id: 50,
      name: "Hot Fuzz",
      description: "A top cop from London is sent to a small village, where strange events begin to unfold.",
      comments: [
        { name: "Anna", comment: "A brilliant mix of action and comedy!" },
        { name: "Jake", comment: "Witty, sharp, and hilarious." }
      ],
      rating: 7.8,
      videoLink: "https://example.com/hot-fuzz",
      duration: 121,
      backgroundImage: Hotfuzz
    }
  ]
},

  
  // Drama
  {
    genre: "Drama",
    movies: [
      {
        id: 51,
        name: "The Shawshank Redemption",
        description: "Two imprisoned men form a deep bond over many years, finding hope even in the most dire of circumstances.",
        comments: [
          { name: "John", comment: "One of the greatest films of all time!" },
          { name: "Sarah", comment: "Absolutely powerful, full of emotion." }
        ],
        rating: 9.3,
        videoLink: "https://example.com/shawshank-redemption",
        duration: 142,
        backgroundImage: shawsshank
      },
      {
        id: 52,
        name: "Forrest Gump",
        description: "A slow-witted but kind-hearted man influences several historical events in the 20th century U.S.",
        comments: [
          { name: "Jack", comment: "Timeless classic, full of heart." },
          { name: "Olivia", comment: "Tom Hanks' best performance." }
        ],
        rating: 8.8,
        videoLink: "https://example.com/forrest-gump",
        duration: 142,
        backgroundImage: forrestgump
      },
      {
        id: 53,
        name: "The Pursuit of Happyness",
        description: "A struggling salesman turns his life around with hard work and determination to achieve his dreams.",
        comments: [
          { name: "Emily", comment: "An inspiring and emotional journey." },
          { name: "Kevin", comment: "Will Smith delivers an incredible performance." }
        ],
        rating: 8.0,
        videoLink: "https://example.com/pursuit-of-happyness",
        duration: 117,
        backgroundImage: pursuitofhappy
      },
      {
        id: 54,
        name: "A Beautiful Mind",
        description: "The life story of mathematician John Nash, whose battle with schizophrenia affected his career and relationships.",
        comments: [
          { name: "Rachel", comment: "A gripping and emotional portrayal of mental illness." },
          { name: "Liam", comment: "Russell Crowe's performance is unforgettable." }
        ],
        rating: 8.2,
        videoLink: "https://example.com/beautiful-mind",
        duration: 135,
        backgroundImage: beautifulmind
      },
      {
        id: 55,
        name: "The Godfather",
        description: "The powerful story of the Corleone crime family and the transition of power from father to son.",
        comments: [
          { name: "Chris", comment: "An epic masterpiece of cinema." },
          { name: "Grace", comment: "The best mob movie ever made." }
        ],
        rating: 9.2,
        videoLink: "https://example.com/godfather",
        duration: 175,
        backgroundImage: godfather
      },
      {
        id: 56,
        name: "Requiem for a Dream",
        description: "The devastating effects of addiction on four individuals as their lives spiral out of control.",
        comments: [
          { name: "Olivia", comment: "Visceral and haunting, a must-watch." },
          { name: "Maya", comment: "A dark, emotional rollercoaster." }
        ],
        rating: 8.3,
        videoLink: "https://example.com/requiem-for-a-dream",
        duration: 102,
        backgroundImage: requiemforadream
      },
      {
        id: 57,
        name: "The Green Mile",
        description: "A prison guard learns of a death row inmate's supernatural abilities and the bond they form.",
        comments: [
          { name: "Sophia", comment: "Heartbreaking and powerful." },
          { name: "Jake", comment: "A deeply emotional and unforgettable story." }
        ],
        rating: 8.6,
        videoLink: "https://example.com/green-mile",
        duration: 189,
        backgroundImage: greenmile
      },
      {
        id: 58,
        name: "The Social Network",
        description: "The story of Mark Zuckerberg and the founding of Facebook, and the legal battles that followed.",
        comments: [
          { name: "Tom", comment: "A sharp and intense look at the rise of social media." },
          { name: "Nina", comment: "Incredibly well-made, brilliant script." }
        ],
        rating: 8.0,
        videoLink: "https://example.com/social-network",
        duration: 120,
        backgroundImage: socialnetwork
      },
      {
        id: 59,
        name: "Good Will Hunting",
        description: "A janitor at MIT is a self-taught mathematical genius, but he struggles to find his purpose in life.",
        comments: [
          { name: "Mia", comment: "An emotional and intellectual journey." },
          { name: "Liam", comment: "Robin Williams' performance is exceptional." }
        ],
        rating: 8.3,
        videoLink: "https://example.com/good-will-hunting",
        duration: 126,
        backgroundImage: goodwillhunting
      },
      {
        id: 60,
        name: "The Fault in Our Stars",
        description: "Two teens battling cancer fall in love and learn about life and love despite their illness.",
        comments: [
          { name: "Emma", comment: "A beautiful and heartbreaking love story." },
          { name: "Lily", comment: "One of the most emotional movies I've ever seen." }
        ],
        rating: 7.7,
        videoLink: "https://example.com/fault-in-our-stars",
        duration: 125,
        backgroundImage: faultofourstars
      }
    ]
  },

  // Horror
  {
    genre: "Horror",
    movies: [
      {
        id: 61,
        name: "The Conjuring",
        description: "Based on real events, paranormal investigators try to help a family who are being terrorized by a dark force.",
        backgroundImage: theconjuring,
        comments: [
          { name: "Tom", comment: "Scary, intense, and full of suspense!" },
          { name: "Sophia", comment: "Chilling and terrifying from start to finish." }
        ],
        rating: 7.5,
        videoLink: "https://youtu.be/k10ETZ41q5o",
        duration: 112
      },
      {
        id: 62,
        name: "Get Out",
        description: "A young African-American man uncovers disturbing truths when he visits his white girlfriend's family.",
        backgroundImage: getout,
        comments: [
          { name: "John", comment: "A terrifying and thought-provoking movie." },
          { name: "Rachel", comment: "Innovative and full of suspense." }
        ],
        rating: 7.7,
        videoLink: "https://youtu.be/DzfpyUB60YY",
        duration: 104
      },
      {
        id: 63,
        name: "IT",
        description: "A group of children must face their fears when a malevolent entity takes the form of a clown.",
        backgroundImage: "https://example.com/it-bg.jpg",
        comments: [
          { name: "Lucas", comment: "Terrifying and captivating all the way through!" },
          { name: "Olivia", comment: "Scary, but also emotionally powerful." }
        ],
        rating: 7.3,
        videoLink: it,
        duration: 135
      },
      {
        id: 64,
        name: "Hereditary",
        description: "A family's dark secrets are revealed after the death of their matriarch, leading to terrifying consequences.",
        backgroundImage: Herediatary,
        comments: [
          { name: "Emily", comment: "Chilling and deeply unsettling." },
          { name: "George", comment: "A truly disturbing and memorable film." }
        ],
        rating: 7.8,
        videoLink: "https://youtu.be/V6wWKNij_1M",
        duration: 127
      },
      {
        id: 65,
        name: "A Quiet Place",
        description: "In a world where sound can kill, a family must live in silence to survive against blind monsters.",
        backgroundImage: quietplace,
        comments: [
          { name: "Ella", comment: "Suspenseful, tense, and beautifully executed." },
          { name: "Ben", comment: "A terrifying experience that keeps you on the edge." }
        ],
        rating: 7.5,
        videoLink: "https://youtu.be/WR7cc5t7tv8",
        duration: 90
      },
      {
        id: 66,
        name: "The Babadook",
        description: "A mother and her son are haunted by a mysterious book that seems to bring a terrifying creature to life.",
        backgroundImage: thebadook,
        comments: [
          { name: "Sophia", comment: "Psychological horror at its finest!" },
          { name: "Tom", comment: "Deeply unsettling and eerie." }
        ],
        rating: 6.8,
        videoLink: "https://youtu.be/k5WQZzDRVtw",
        duration: 93
      },
      {
        id: 67,
        name: "The Witch",
        description: "A Puritan family in 17th century New England is torn apart by witchcraft, paranoia, and supernatural forces.",
        backgroundImage: thewitch,
        comments: [
          { name: "Sarah", comment: "A slow burn with incredible atmosphere." },
          { name: "Anna", comment: "Haunting and eerie, with great performances." }
        ],
        rating: 7.3,
        videoLink: "https://youtu.be/iQXmlf3Sefg",
        duration: 92
      },
      {
        id: 68,
        name: "The Exorcist",
        description: "A mother seeks help for her daughter who is possessed by a demon, leading to a terrifying battle of good vs. evil.",
        backgroundImage: theexcorist,
        comments: [
          { name: "Maya", comment: "A true horror classic, terrifying even today." },
          { name: "Lucas", comment: "The scariest movie I have ever seen." }
        ],
        rating: 8.0,
        videoLink: "https://www.youtube.com/watch?v=BU2eYAO31Cc&pp=ygURdGhlIGV4b3JjaXN0IDE5NzM%3D",
        duration: 122
      },
      {
        id: 69,
        name: "Psycho",
        description: "A secretary embezzles money and checks into a secluded motel, where she meets the mysterious owner, Norman Bates.",
        backgroundImage: psycho,
        comments: [
          { name: "David", comment: "A perfect thriller with a shocking twist." },
          { name: "Emily", comment: "One of Hitchcock's finest." }
        ],
        rating: 8.5,
        videoLink: "https://youtu.be/NG3-GlvKPcg?si=7QUg6ZGvIFkZ6maj",
        duration: 109
      },
      {
        id: 70,
        name: "Midsommar",
        description: "A group of friends travel to Sweden to attend a midsummer festival, only to find themselves part of a terrifying ritual.",
        backgroundImage: midsommar,
        comments: [
          { name: "Grace", comment: "A disturbing and visually stunning horror film." },
          { name: "Jake", comment: "Surprisingly eerie and intense." }
        ],
        rating: 7.1,
        videoLink: "https://www.youtube.com/watch?v=1Vnghdsjmd0&pp=ygUJbWlkc29tbWFy",
        duration: 147
      }
    ]
  },
  
  // Romance
  {
    genre: "Romance",
    movies: [
      {
        id: 71,
        name: "The Notebook",
        description: "A young couple falls in love during the summer, but life and circumstances tear them apart.",
        backgroundImage: Notebook,
        comments: [
          { name: "Emily", comment: "A classic love story that always makes me cry." },
          { name: "Ben", comment: "Such a heartfelt and emotional movie." }
        ],
        rating: 7.8,
        videoLink: "https://www.youtube.com/watch?v=FC6biTjEyZw",
        duration: 123
      },
      {
        id: 72,
        name: "La La Land",
        description: "An aspiring actress and a jazz musician fall in love but struggle to balance their dreams and their relationship.",
        backgroundImage: lalaland,
        comments: [
          { name: "Grace", comment: "A stunning film, the music is incredible!" },
          { name: "Sophia", comment: "A modern love story with breathtaking visuals." }
        ],
        rating: 8.0,
        videoLink: "https://youtu.be/0pdqf4P9MB8?si=S15dm4Addf8B96RK",
        duration: 128
      },
      {
        id: 73,
        name: "Titanic",
        description: "A young couple falls in love aboard the ill-fated Titanic, leading to a tragic and unforgettable journey.",
        backgroundImage: titanic,
        comments: [
          { name: "Lily", comment: "The love story is timeless, and the tragedy hits hard." },
          { name: "Olivia", comment: "A heartbreaking yet beautiful movie." }
        ],
        rating: 7.8,
        videoLink: "https://youtu.be/kVrqfYjkTdQ?si=9y9f64jZXFDQNxy-",
        duration: 195
      },
      {
        id: 74,
        name: "Pride and Prejudice",
        description: "In 19th century England, a strong-willed young woman navigates her feelings for the wealthy and aloof Mr. Darcy.",
        backgroundImage: prideandprejudice,
        comments: [
          { name: "Sophia", comment: "A timeless and beautifully crafted romance." },
          { name: "Emma", comment: "Such a classic and elegant film." }
        ],
        rating: 7.8,
        videoLink: "https://youtu.be/1dYv5u6v55Y?si=LxGRoj_ORKtTYIYj",
        duration: 129
      },
      {
        id: 75,
        name: "A Walk to Remember",
        description: "A rebellious teenager falls in love with a shy, religious girl, leading to a transformative journey of love and loss.",
        backgroundImage: walktoremember,
        comments: [
          { name: "Maya", comment: "Such a touching and emotional love story." },
          { name: "Grace", comment: "A heartwarming and tear-jerking film." }
        ],
        rating: 7.4,
        videoLink: "https://youtu.be/k3B2XBcp7vA?si=T7AjKUa_Iwa4akZl",
        duration: 101
      },
      {
        id: 76,
        name: "Before Sunrise",
        description: "Two strangers meet on a train and spend a night walking around Vienna, forming a deep connection.",
        backgroundImage: beforesunrise,
        comments: [
          { name: "Anna", comment: "A beautifully real and intimate love story." },
          { name: "Jack", comment: "So romantic, with great chemistry between the leads." }
        ],
        rating: 8.1,
        videoLink: "https://youtu.be/6MUcuqbGTxc?si=5DH8pgBAGs1U7DAp",
        duration: 101
      },
      {
        id: 77,
        name: "Notting Hill",
        description: "An ordinary bookseller falls in love with a famous film star, leading to a whirlwind romance and media scrutiny.",
        backgroundImage: nottinghill,
        comments: [
          { name: "Lucas", comment: "A charming and endearing romantic comedy." },
          { name: "Olivia", comment: "Hugh Grant and Julia Roberts are perfect together!" }
        ],
        rating: 7.1,
        videoLink: "https://youtu.be/4RI0QvaGoiI?si=xqj3szpDN2karZDw",
        duration: 124
      },
      {
        id: 78,
        name: "10 Things I Hate About You",
        description: "A teenager must find a way to get her rebellious sister to date in order to win a bet, leading to unexpected romance.",
        backgroundImage: tenthingsihate,
        comments: [
          { name: "Tom", comment: "A funny and charming teen rom-com." },
          { name: "Grace", comment: "Heath Ledger's performance is unforgettable!" }
        ],
        rating: 7.3,
        videoLink: "https://youtu.be/yEmcEuS6xm4?si=SV-OA83I1l1Cdm3S",
        duration: 97
      },
      {
        id: 79,
        name: "The Vow",
        description: "A woman loses her memory in a car accident, and her husband must help her fall in love with him again.",
        backgroundImage: vow,
        comments: [
          { name: "Rachel", comment: "Such a beautiful and emotional love story." },
          { name: "David", comment: "A tearjerker, but so worth watching." }
        ],
        rating: 6.8,
        videoLink: "https://youtu.be/GEA_PbJQCLE?si=AJuuP-b3yfEIQsi3",
        duration: 104
      },
      {
        id: 80,
        name: "Eternal Sunshine of the Spotless Mind",
        description: "After a painful breakup, a couple undergoes a procedure to erase their memories of each other, only to realize they still love one another.",
        backgroundImage: eternalsunshine,
        comments: [
          { name: "Sophia", comment: "Such a unique and beautiful love story." },
          { name: "Zoe", comment: "A perfect mix of romance and sci-fi." }
        ],
        rating: 8.3,
        videoLink: "https://youtu.be/yE-f1alkq9I",
        duration: 108
      }
    ]
  }
  ];


  