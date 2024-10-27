const users = [
  {
    id: 1,
    username: "john_doe",
    fullName: "John Doe",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Traveler | Photographer | Dreamer",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/92c952", viewed: false },
      { id: 2, image: "https://via.placeholder.com/600/771796", viewed: true },
    ],
    posts: [
      {
        id: 101,
        image: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Enjoying the sunset 🌅",
        likes: 120,
        comments: [
          { id: 1, username: "jane_doe", text: "Wow, so beautiful!" },
          { id: 2, username: "alex_smith", text: "I wish I were there!" },
        ],
        timestamp: "2 hours ago",
      },
      {
        id: 102,
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Hiking through the mountains ⛰️",
        likes: 85,
        comments: [],
        timestamp: "5 hours ago",
      },
    ],
  },
  {
    id: 2,
    username: "jane_doe",
    fullName: "Jane Doe",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Food lover | Avid reader | Wanderlust",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/92c952", viewed: false },
      { id: 2, image: "https://via.placeholder.com/600/91c84a", viewed: false },
    ],
    posts: [
      {
        id: 201,
        image: "https://images.pexels.com/photos/5593153/pexels-photo-5593153.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Delicious homemade pizza 🍕",
        likes: 150,
        comments: [{ id: 1, username: "john_doe", text: "Looks amazing!" }],
        timestamp: "1 day ago",
      },
    ],
  },
  {
    id: 3,
    username: "alex_smith",
    fullName: "Alex Smith",
    profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Fitness | Tech enthusiast | Traveler",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/8f209a", viewed: true },
      { id: 2, image: "https://via.placeholder.com/600/4c842b", viewed: true },
    ],
    posts: [
      {
        id: 301,
        image: "https://images.pexels.com/photos/15917306/pexels-photo-15917306/free-photo-of-close-up-of-man-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Morning workout 💪",
        likes: 200,
        comments: [
          { id: 1, username: "john_doe", text: "Keep pushing!" },
          { id: 2, username: "jane_doe", text: "Great job!" },
        ],
        timestamp: "3 hours ago",
      },
    ],
  },
  {
    id: 4,
    username: "emily_clark",
    fullName: "Emily Clark",
    profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
    bio: "Fashionista | Blogger | Traveler",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/c0c0c0", viewed: false },
    ],
    posts: [
      {
        id: 401,
        image: "https://images.pexels.com/photos/1621693/pexels-photo-1621693.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "New blog post about fall fashion 🍁",
        likes: 180,
        comments: [{ id: 1, username: "sara_lee", text: "Love this!" }],
        timestamp: "4 hours ago",
      },
    ],
  },
  {
    id: 5,
    username: "michael_jordan",
    fullName: "Michael Jordan",
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Basketball lover | Sports analyst",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/ff0000", viewed: false },
      { id: 2, image: "https://via.placeholder.com/600/00ff00", viewed: true },
    ],
    posts: [
      {
        id: 501,
        image: "https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Game time! 🏀",
        likes: 220,
        comments: [{ id: 1, username: "alex_smith", text: "Go team!" }],
        timestamp: "1 day ago",
      },
    ],
  },
  {
    id: 6,
    username: "sara_lee",
    fullName: "Sara Lee",
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Bookworm | Coffee addict | Writer",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/abcdef", viewed: true },
    ],
    posts: [
      {
        id: 601,
        image: "https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Reading a great novel 📚",
        likes: 95,
        comments: [{ id: 1, username: "jane_doe", text: "What book is that?" }],
        timestamp: "2 days ago",
      },
    ],
  },
  {
    id: 7,
    username: "daniel_brown",
    fullName: "Daniel Brown",
    profileImage: "https://randomuser.me/api/portraits/men/77.jpg",
    bio: "Musician | Guitar lover | Dreamer",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/c49a68", viewed: false },
    ],
    posts: [
      {
        id: 701,
        image: "https://images.pexels.com/photos/7502187/pexels-photo-7502187.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Jamming with friends 🎸",
        likes: 300,
        comments: [
          { id: 1, username: "john_doe", text: "Sounds amazing!" },
        ],
        timestamp: "3 days ago",
      },
    ],
  },
  {
    id: 8,
    username: "linda_white",
    fullName: "Linda White",
    profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
    bio: "Traveler | Foodie | Adventure seeker",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/f6b73c", viewed: false },
      { id: 2, image: "https://via.placeholder.com/600/d2b5a4", viewed: true },
    ],
    posts: [
      {
        id: 801,
        image: "https://images.pexels.com/photos/18914992/pexels-photo-18914992/free-photo-of-new-zealand-landscape.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Exploring new places 🌍",
        likes: 140,
        comments: [{ id: 1, username: "alex_smith", text: "Looks awesome!" }],
        timestamp: "4 days ago",
      },
    ],
  },
  {
    id: 9,
    username: "paul_green",
    fullName: "Paul Green",
    profileImage: "https://randomuser.me/api/portraits/men/99.jpg",
    bio: "Tech geek | Gamer | Coder",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/42f489", viewed: true },
    ],
    posts: [
      {
        id: 901,
        image: "https://images.pexels.com/photos/7776101/pexels-photo-7776101.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Gaming night 🎮",
        likes: 260,
        comments: [
          { id: 1, username: "daniel_brown", text: "What game is that?" },
        ],
        timestamp: "5 days ago",
      },
    ],
  },
  {
    id: 10,
    username: "megan_martin",
    fullName: "Megan Martin",
    profileImage: "https://randomuser.me/api/portraits/women/76.jpg",
    bio: "Artist | Painter | Nature lover",
    stories: [
      { id: 1, image: "https://via.placeholder.com/600/aabbcc", viewed: false },
    ],
    posts: [
      {
        id: 1001,
        image: "https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=6001",
        caption: "Nature-inspired painting 🎨",
        likes: 320,
        comments: [
          { id: 1, username: "linda_white", text: "Beautiful artwork!" },
        ],
        timestamp: "6 days ago",
      },
    ],
  },
    {
    "id": 11,
    "username": "chris_evans",
    "fullName": "Chris Evans",
    "profileImage": "https://randomuser.me/api/portraits/men/11.jpg",
    "bio": "Actor | Dog lover | Adventurer",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/ffcccb", "viewed": true }
    ],
    "posts": [
      {
        "id": 1101,
        "image": "https://images.pexels.com/photos/3244518/pexels-photo-3244518.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Hiking with my dog 🐕",
        "likes": 450,
        "comments": [{ "id": 1, "username": "linda_white", "text": "Adorable!" }],
        "timestamp": "1 hour ago"
      }
    ]
  },
  {
    "id": 12,
    "username": "samantha_brown",
    "fullName": "Samantha Brown",
    "profileImage": "https://randomuser.me/api/portraits/women/22.jpg",
    "bio": "Fitness | Yoga Instructor | Wellness Coach",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/green", "viewed": false }
    ],
    "posts": [
      {
        "id": 1201,
        "image": "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Morning yoga session 🧘‍♀️",
        "likes": 520,
        "comments": [{ "id": 1, "username": "alex_smith", "text": "Namaste 🙏" }],
        "timestamp": "3 hours ago"
      }
    ]
  },
  {
    "id": 13,
    "username": "mark_jones",
    "fullName": "Mark Jones",
    "profileImage": "https://randomuser.me/api/portraits/men/50.jpg",
    "bio": "Cyclist | Coffee enthusiast | Entrepreneur",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/5555ff", "viewed": true }
    ],
    "posts": [
      {
        "id": 1301,
        "image": "https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Cycling through the city 🚴",
        "likes": 210,
        "comments": [{ "id": 1, "username": "john_doe", "text": "Ride safe!" }],
        "timestamp": "6 hours ago"
      }
    ]
  },
  {
    "id": 14,
    "username": "rachel_green",
    "fullName": "Rachel Green",
    "profileImage": "https://randomuser.me/api/portraits/women/36.jpg",
    "bio": "Fashionista | Cat lover | Designer",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/888888", "viewed": false }
    ],
    "posts": [
      {
        "id": 1401,
        "image": "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "My cat's new photoshoot 😸",
        "likes": 330,
        "comments": [{ "id": 1, "username": "sara_lee", "text": "Adorable!" }],
        "timestamp": "1 day ago"
      }
    ]
  },
  {
    "id": 15,
    "username": "jason_kim",
    "fullName": "Jason Kim",
    "profileImage": "https://randomuser.me/api/portraits/men/27.jpg",
    "bio": "Traveler | Explorer | Adventure seeker",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/f0e68c", "viewed": true }
    ],
    "posts": [
      {
        "id": 1501,
        "image": "https://images.pexels.com/photos/3497585/pexels-photo-3497585.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Road trip vibes 🛣️",
        "likes": 190,
        "comments": [{ "id": 1, "username": "jane_doe", "text": "Safe travels!" }],
        "timestamp": "2 days ago"
      }
    ]
  },
  {
    "id": 16,
    "username": "emma_watson",
    "fullName": "Emma Watson",
    "profileImage": "https://randomuser.me/api/portraits/women/56.jpg",
    "bio": "Actress | Activist | Humanitarian",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/bbbbbb", "viewed": false }
    ],
    "posts": [
      {
        "id": 1601,
        "image": "https://images.pexels.com/photos/2852737/pexels-photo-2852737.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Saving the planet 🌍",
        "likes": 480,
        "comments": [{ "id": 1, "username": "alex_smith", "text": "Important message!" }],
        "timestamp": "3 days ago"
      }
    ]
  },
  {
    "id": 17,
    "username": "noah_smith",
    "fullName": "Noah Smith",
    "profileImage": "https://randomuser.me/api/portraits/men/66.jpg",
    "bio": "Chef | Foodie | Culinary artist",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/ff5733", "viewed": true }
    ],
    "posts": [
      {
        "id": 1701,
        "image": "https://images.pexels.com/photos/1860207/pexels-photo-1860207.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "New recipe creation 🍲",
        "likes": 400,
        "comments": [{ "id": 1, "username": "john_doe", "text": "Looks delicious!" }],
        "timestamp": "4 days ago"
      }
    ]
  },
  {
    "id": 18,
    "username": "olivia_clark",
    "fullName": "Olivia Clark",
    "profileImage": "https://randomuser.me/api/portraits/women/46.jpg",
    "bio": "Artist | Sculptor | Art lover",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/aaffaa", "viewed": false }
    ],
    "posts": [
      {
        "id": 1801,
        "image": "https://images.pexels.com/photos/699677/pexels-photo-699677.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Sculpture in progress 🗿",
        "likes": 380,
        "comments": [{ "id": 1, "username": "megan_martin", "text": "Incredible work!" }],
        "timestamp": "5 days ago"
      }
    ]
  },
  {
    "id": 19,
    "username": "liam_johnson",
    "fullName": "Liam Johnson",
    "profileImage": "https://randomuser.me/api/portraits/men/40.jpg",
    "bio": "Photographer | Videographer | Nature lover",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/999999", "viewed": false }
    ],
    "posts": [
      {
        "id": 1901,
        "image": "https://images.pexels.com/photos/712323/pexels-photo-712323.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "Capturing the beauty of nature 📷",
        "likes": 520,
        "comments": [{ "id": 1, "username": "sara_lee", "text": "Stunning!" }],
        "timestamp": "6 days ago"
      }
    ]
  },
  {
    "id": 20,
    "username": "zoe_baker",
    "fullName": "Zoe Baker",
    "profileImage": "https://randomuser.me/api/portraits/women/37.jpg",
    "bio": "Baker | Dessert enthusiast | Sweet tooth",
    "stories": [
      { "id": 1, "image": "https://via.placeholder.com/600/ffc0cb", "viewed": true }
    ],
    "posts": [
      {
        "id": 2001,
        "image": "https://images.pexels.com/photos/14913798/pexels-photo-14913798.jpeg?auto=compress&cs=tinysrgb&w=600",
        "caption": "New dessert creation 🍰",
        "likes": 280,
        "comments": [{ "id": 1, "username": "john_doe", "text": "Looks delicious!" }],
        "timestamp": "1 week ago"
      }
    ]
  },
];

export default users;