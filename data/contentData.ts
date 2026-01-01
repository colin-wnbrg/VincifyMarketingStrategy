
import { VideoScript, ContentCategory, TimeSlot } from '../types';

/**
 * All 90 scripts for the 30-day marketing campaign.
 * Populated with specific Narrator Scripts and Strategic Breakdowns.
 */
const fixedPosts: Record<string, Partial<VideoScript>> = {
  // --- DAY 1 ---
  "1-Morning": {
    category: ContentCategory.A,
    narratorScript: "In 1504, the smartest man on earth wrote a reminder to himself: 'Describe the jaw of a crocodile.' Leonardo da Vinci didn't just learn 'Art' or 'Science.' He treated his curiosity like a job. He literally wrote down every random thought, from measuring city suburbs to asking a master about a goose's foot. But today, most of us lose those fleeting thoughts because we have nowhere to put them. And that's exactly why we built Vincify. It’s a digital home for your curiosity where you can capture your own 'crocodile jaw' questions. You simply type it in, and our AI builds a micro-lesson for you instantly. So start your list today and download Vincify.",
    hook: "In 1504, the smartest man on earth wrote a reminder to himself: 'Describe the jaw of a crocodile.'",
    value: "Leonardo da Vinci didn't just learn 'Art' or 'Science.' He treated his curiosity like a job. He literally wrote down every random thought, from measuring city suburbs to asking a master about a goose's foot. But today, most of us lose those fleeting thoughts because we have nowhere to put them.",
    product: "And that's exactly why we built Vincify. It’s a digital home for your curiosity where you can capture your own 'crocodile jaw' questions. You simply type it in, and our AI builds a micro-lesson for you instantly.",
    cta: "So start your list today and download Vincify.",
    description: "Da Vinci’s to-do lists were wild. 🐊 What’s on yours? #DaVinci #Polymath #Curiosity #Vincify #EdTech",
    keywords: ["DaVinci", "Polymath", "Curiosity"]
  },
  "1-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Stop pretending you learned something just because you read a 5-minute book summary. Summaries are passive; you are just eating someone else's chewed-up food. Real intelligence comes from active inquiry—when YOU ask the question first. That is how the brain actually retains information. And that's exactly why we built Vincify. We wanted to flip the script. Instead of reading what an app tells you to read, you tell Vincify what you want to learn, and the AI generates the lesson based on your specific interests. So stop consuming and start questioning—check the link in my bio.",
    hook: "Stop pretending you learned something just because you read a 5-minute book summary.",
    value: "Summaries are passive; you are just eating someone else's chewed-up food. Real intelligence comes from active inquiry—when YOU ask the question first. That is how the brain actually retains information.",
    product: "And that's exactly why we built Vincify. We wanted to flip the script. Instead of reading what an app tells you to read, you tell Vincify what you want to learn, and the AI generates the lesson based on your specific interests.",
    cta: "So stop consuming and start questioning—check the link in my bio.",
    description: "Passive learning is dead. Long live curiosity. 🧠 #ActiveLearning #StopScrolling #ProductivityHacks #AI",
    keywords: ["ActiveLearning", "Habits", "AI"]
  },
  "1-Evening": {
    category: ContentCategory.A,
    narratorScript: "This notebook is worth 30 million dollars. Do you know why? It’s not because of the pretty drawings. It’s because it proves a specific habit. Da Vinci never let an idea escape; he carried this notebook on his belt everywhere he went. Today, we carry phones, but we mostly use them for distraction, not observation. And that's exactly why we built Vincify. We wanted to turn your phone back into a tool for genius, effectively creating a digital Codex. You list the topic, and you get the knowledge—no distractions. Build your own Codex on Vincify today.",
    hook: "This notebook is worth 30 million dollars. Do you know why?",
    value: "It’s not because of the pretty drawings. It’s because it proves a specific habit. Da Vinci never let an idea escape; he carried this notebook on his belt everywhere he went. Today, we carry phones, but we mostly use them for distraction, not observation.",
    product: "And that's exactly why we built Vincify. We wanted to turn your phone back into a tool for genius, effectively creating a digital Codex. You list the topic, and you get the knowledge—no distractions.",
    cta: "Build your own Codex on Vincify today.",
    description: "Bill Gates bought Da Vinci’s notebook for $30M. You can build yours for free. 📓 #HistoryFacts #DaVinci #SelfGrowth",
    keywords: ["Codex", "History", "Growth"]
  },

  // --- DAY 2 ---
  "2-Morning": {
    category: ContentCategory.B,
    narratorScript: "We’ve all fallen down a Wikipedia rabbit hole. You know the feeling—you look up a movie actor and end up reading about Roman concrete at 3 AM. It feels good, but it’s inefficient. You spend 2 hours clicking links and remember about 10% of it. Your curiosity is there, but the structure isn't. And that's exactly why we built Vincify. It’s the structured rabbit hole. You get that same dopamine hit of learning something random, but the AI structures it into a micro-lesson with a quiz so you actually learn it in 5 minutes. Get your rabbit holes optimized and download Vincify.",
    hook: "We’ve all fallen down a Wikipedia rabbit hole.",
    value: "You spend 2 hours clicking links and remember about 10% of it. Your curiosity is there, but the structure isn't.",
    product: "And that's exactly why we built Vincify. It’s the structured rabbit hole. You get that same dopamine hit of learning something random, but the AI structures it into a micro-lesson with a quiz so you actually learn it in 5 minutes.",
    cta: "Get your rabbit holes optimized and download Vincify.",
    description: "3 AM curiosity hits different. Make it count. 🦉 #Wikipedia #RabbitHole #Learning #Vincify",
    keywords: ["Wikipedia", "RabbitHole", "Efficiency"]
  },
  "2-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci discovered that the heart pumps blood 100 years before doctors did. How? He didn't go to medical school. He just asked 'How does this work?' and didn't stop until he found out. He was the ultimate autodidact. And that's exactly why we built Vincify. We believe you don't need a degree to learn complex things anymore. You just need the right tool. Type in 'Cardiology basics' or 'Fluid dynamics' into the app, and get the knowledge instantly. Become an autodidact and download Vincify.",
    hook: "Da Vinci discovered that the heart pumps blood 100 years before doctors did. How?",
    value: "He didn't go to medical school. He just asked 'How does this work?' and didn't stop until he found out. He was the ultimate autodidact.",
    product: "And that's exactly why we built Vincify. We believe you don't need a degree to learn complex things anymore. You just need the right tool. Type in 'Cardiology basics' or 'Fluid dynamics' into the app, and get the knowledge instantly.",
    cta: "Become an autodidact and download Vincify.",
    description: "You don't need a degree. You need curiosity. 🫀 #Autodidact #Anatomy #History #EdTech",
    keywords: ["Autodidact", "Anatomy", "Genius"]
  },
  "2-Evening": {
    category: ContentCategory.B,
    narratorScript: "Your Notes app is where ideas go to die. Be honest, how many times have you written down 'Learn Spanish' or 'Look up Stoicism' in your notes, and never looked at it again? A static list is useless because it doesn't help you take action. And that's exactly why we built Vincify. We made a list that is actually alive. When you write 'Stoicism' in Vincify, it doesn't just sit there. You tap it, and it immediately teaches you the core concepts. Turn your To-Do into a Done—clean up your notes and get Vincify.",
    hook: "Your Notes app is where ideas go to die.",
    value: "A static list is useless because it doesn't help you take action.",
    product: "And that's exactly why we built Vincify. We made a list that is actually alive. When you write 'Stoicism' in Vincify, it doesn't just sit there. You tap it, and it immediately teaches you the core concepts.",
    cta: "Turn your To-Do into a Done—clean up your notes and get Vincify.",
    description: "Stop hoarding ideas. Start learning them. 🗑️➡️🧠 #SecondBrain #Notion #Productivity #Vincify",
    keywords: ["Notes", "Productivity", "Action"]
  },

  // --- DAY 3 ---
  "3-Morning": {
    category: ContentCategory.A,
    narratorScript: "What do Elon Musk, Benjamin Franklin, and Da Vinci have in common? They are Polymaths. They didn't specialize in just one thing. They transferred knowledge from one field to another, and that is the secret to true innovation. But modern education tries to force you into a box. And that's exactly why we built Vincify. It is designed to help you nurture your inner Polymath. Don't just learn coding; learn coding, history, and psychology all in one place. Link in bio to start.",
    hook: "What do Elon Musk, Benjamin Franklin, and Da Vinci have in common?",
    value: "They are Polymaths. They didn't specialize in just one thing. They transferred knowledge from one field to another, and that is the secret to true innovation.",
    product: "And that's exactly why we built Vincify. It is designed to help you nurture your inner Polymath. Don't just learn coding; learn coding, history, and psychology all in one place.",
    cta: "Link in bio to start.",
    description: "Specialization is for insects. Be a Polymath. 🐜🚫 #Polymath #ElonMusk #DaVinci #Learning",
    keywords: ["ElonMusk", "Polymath", "Innovation"]
  },
  "3-Mid-Day": {
    category: ContentCategory.C,
    narratorScript: "They say the Renaissance is over. They say we are too distracted to master anything. They are wrong. The tools have changed, but the hunger is the same. You don't need a patron or a university anymore. You just need curiosity, and a place to keep it. And that's exactly why we built Vincify. It’s the pocket tutor for the modern Renaissance man. Join the movement and check the link in bio.",
    hook: "They say the Renaissance is over.",
    value: "The tools have changed, but the hunger is the same. You don't need a patron or a university anymore. You just need curiosity, and a place to keep it.",
    product: "And that's exactly why we built Vincify. It’s the pocket tutor for the modern Renaissance man.",
    cta: "Join the movement and check the link in bio.",
    description: "Romanticize your education. 🕯️☕ #DarkAcademia #StudyWithMe #Aesthetic #Vincify",
    keywords: ["DarkAcademia", "Renaissance", "Aesthetic"]
  },
  "3-Evening": {
    category: ContentCategory.B,
    narratorScript: "This device has all of human knowledge in it, and you’re using it to watch cats? It’s not your fault. The algorithms are designed to keep you dumb because they want you addicted. But you can fight back. And that's exactly why we built Vincify. It’s the one app designed to make you smarter, not addicted, by turning your screen time into brain time. Outsmart the algorithm and download Vincify.",
    hook: "This device has all of human knowledge in it, and you’re using it to watch cats?",
    value: "The algorithms are designed to keep you dumb because they want you addicted. But you can fight back.",
    product: "And that's exactly why we built Vincify. It’s the one app designed to make you smarter, not addicted, by turning your screen time into brain time.",
    cta: "Outsmart the algorithm and download Vincify.",
    description: "Your phone is a tool. Don't let it use you. 📱🔨 #DigitalMinimalism #SmartPhone #SelfImprovement",
    keywords: ["DigitalMinimalism", "Focus", "Algorithm"]
  },

  // --- DAY 4 ---
  "4-Morning": {
    category: ContentCategory.A,
    narratorScript: "Why was an Italian genius obsessed with ice in Belgium? Da Vinci had a note to himself: 'Ask Benedetto how they go on ice in Flanders.' He wanted to understand friction, and he didn't care that it was 'irrelevant' to his painting. He knew everything is connected. But usually, it's hard to find answers to specific, random questions. And that's exactly why we built Vincify. We let you connect the dots. Learn Physics today, Art tomorrow, and see the world like he did. Download Vincify and start connecting.",
    hook: "Why was an Italian genius obsessed with ice in Belgium?",
    value: "He wanted to understand friction, and he didn't care that it was 'irrelevant' to his painting. He knew everything is connected.",
    product: "And that's exactly why we built Vincify. We let you connect the dots. Learn Physics today, Art tomorrow, and see the world like he did.",
    cta: "Download Vincify and start connecting.",
    description: "Everything is connected if you look close enough. ⛸️ #Flanders #Physics #Curiosity #DaVinci",
    keywords: ["Friction", "Physics", "DaVinci"]
  },
  "4-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "School killed your curiosity. AI is bringing it back. Think about it: School tells you what to learn, and that’s boring. True learning happens when you choose the topic. But until now, creating your own curriculum was hard work. And that's exactly why we built Vincify. It’s the anti-school. No curriculum. No grades. Just pure, personalized learning generated by AI on whatever topic you choose. Learn on your terms and check the link in bio.",
    hook: "School killed your curiosity. AI is bringing it back.",
    value: "True learning happens when you choose the topic. But until now, creating your own curriculum was hard work.",
    product: "And that's exactly why we built Vincify. It’s the anti-school. No curriculum. No grades. Just pure, personalized learning generated by AI on whatever topic you choose.",
    cta: "Learn on your terms and check the link in bio.",
    description: "School is over. Learning is forever. 🎓🔥 #EdTech #SchoolSystem #SelfEducation #AI",
    keywords: ["AI", "Education", "Curiosity"]
  },
  "4-Evening": {
    category: ContentCategory.A,
    narratorScript: "Do you actually know why the sky is blue? Like, scientifically? Da Vinci was the first person to correctly hypothesize it was due to particles in the air scattering light. He asked 'Why?' like a toddler, and never stopped. Most of us stop asking because we don't have time to research. And that's exactly why we built Vincify. So you never have to accept the world as it is. Put your questions in the app and get the answers immediately. Never stop asking why—get Vincify.",
    hook: "Do you actually know why the sky is blue?",
    value: "Da Vinci correctly hypothesized it was due to particles in the air scattering light. Most of us stop asking because we don't have time to research.",
    product: "And that's exactly why we built Vincify. So you never have to accept the world as it is. Put your questions in the app and get the answers immediately.",
    cta: "Never stop asking why—get Vincify.",
    description: "Be as curious as a toddler, but with better tools. ☁️ #ScienceFacts #Sky #Physics #Vincify",
    keywords: ["Science", "Physics", "Why"]
  },

  // --- DAY 5 ---
  "5-Morning": {
    category: ContentCategory.B,
    narratorScript: "Listening to a 3-hour podcast is not 'productivity.' It’s entertainment. If you can't recall the 3 main points a week later, you didn't learn it. You need bite-sized, active engagement to actually retain anything. And that's exactly why we built Vincify. We give you the core concepts in 3 minutes, followed by a quiz to lock it in. It’s high-yield learning for busy people. Save time and learn more—download Vincify.",
    hook: "Listening to a 3-hour podcast is not 'productivity.'",
    value: "If you can't recall the 3 main points a week later, you didn't learn it. You need bite-sized, active engagement to actually retain anything.",
    product: "And that's exactly why we built Vincify. We give you the core concepts in 3 minutes, followed by a quiz to lock it in. It’s high-yield learning for busy people.",
    cta: "Save time and learn more—download Vincify.",
    description: "Efficiency > Volume. 🎧 #Podcast #LearningTips #Productivity #TimeManagement",
    keywords: ["Podcast", "Productivity", "Retention"]
  },
  "5-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Describe the tongue of a woodpecker. That was literally on Da Vinci's to-do list. He found out it wraps around the bird's brain to protect it from impact. He was obsessed with nature's engineering. But you probably don't have a woodpecker to dissect. And that's exactly why we built Vincify. Nature, engineering, biology—if you’re curious about it, our AI generates a lesson for it. Feed your brain and click the link in bio.",
    hook: "Describe the tongue of a woodpecker.",
    value: "It wraps around the bird's brain to protect it from impact. Da Vinci was obsessed with nature's engineering.",
    product: "And that's exactly why we built Vincify. Nature, engineering, biology—if you’re curious about it, our AI generates a lesson for it.",
    cta: "Feed your brain and click the link in bio.",
    description: "Nature is the best engineer. 🐦 #Biology #Engineering #DaVinci #FunFacts",
    keywords: ["Nature", "Anatomy", "Engineering"]
  },
  "5-Evening": {
    category: ContentCategory.B,
    narratorScript: "The most useful skill in the 21st century is 'Just-in-Time' learning. You don't need to memorize everything. You just need to be able to learn what you need, right when you need it. But digging through Google results takes too long. And that's exactly why we built Vincify. It is the ultimate Just-in-Time tool. Need to understand Wine for a dinner? Crypto for a meeting? Type it in, learn it in 5 minutes. Learn fast and download Vincify.",
    hook: "The most useful skill in the 21st century is 'Just-in-Time' learning.",
    value: "You don't need to memorize everything. You just need to be able to learn what you need, right when you need it.",
    product: "And that's exactly why we built Vincify. It is the ultimate Just-in-Time tool. Need to understand Wine for a dinner? Crypto for a meeting? Type it in, learn it in 5 minutes.",
    cta: "Learn fast and download Vincify.",
    description: "Knowledge on demand. That is the future. ⚡ #LifeHacks #Skills #GrowthMindset",
    keywords: ["JustInTime", "Skills", "Growth"]
  },

  // --- DAY 6 ---
  "6-Morning": {
    category: ContentCategory.A,
    narratorScript: "Why did Da Vinci write backwards? Some say it was to keep secrets. Others say it was because he was left-handed and didn't want to smudge ink. Either way, he thought differently. He didn't follow the crowd. Today, algorithms force us all to think the same. And that's exactly why we built Vincify. To help you think differently by exposing you to topics you’d never see on your social media feed. Break the echo chamber and get Vincify.",
    hook: "Why did Da Vinci write backwards?",
    value: "Some say it was to keep secrets. Others say it was because he was left-handed and didn't want to smudge ink. Today, algorithms force us all to think the same.",
    product: "And that's exactly why we built Vincify. To help you think differently by exposing you to topics you’d never see on your social media feed.",
    cta: "Break the echo chamber and get Vincify.",
    description: "Lefty genius or secret keeper? ✍️ #LeftHanded #DaVinci #Mystery #Vincify",
    keywords: ["Thinking", "Secrets", "DaVinci"]
  },
  "6-Mid-Day": {
    category: ContentCategory.C,
    narratorScript: "They say university is the only path. But imagine building your own curriculum. No tuition. No debt. Just pure knowledge. The world is noisy, but knowledge is quiet. And that's exactly why we built Vincify. To give you the University of the Future in your pocket. You select the subjects, the AI is the professor. Join the new Renaissance—link in bio.",
    hook: "They say university is the only path.",
    value: "No tuition. No debt. Just pure knowledge. The world is noisy, but knowledge is quiet.",
    product: "And that's exactly why we built Vincify. To give you the University of the Future in your pocket. You select the subjects, the AI is the professor.",
    cta: "Join the new Renaissance—link in bio.",
    description: "The university of the future is in your pocket. 🏛️ #EdTech #SelfTaught #Library #Vincify",
    keywords: ["University", "Future", "Education"]
  },
  "6-Evening": {
    category: ContentCategory.B,
    narratorScript: "Great, you learned how to say 'The apple is red' in Spanish. But can you explain how the economy works? Language apps are great, but don't limit your daily streak to just words. You need to be well-rounded. And that's exactly why we built Vincify. With us, you can have a streak in Physics, Philosophy, and Art History all at once. Upgrade your streak and download Vincify.",
    hook: "Great, you learned how to say 'The apple is red' in Spanish.",
    value: "Language apps are great, but don't limit your daily streak to just words. You need to be well-rounded.",
    product: "And that's exactly why we built Vincify. With us, you can have a streak in Physics, Philosophy, and Art History all at once.",
    cta: "Upgrade your streak and download Vincify.",
    description: "Be more than bilingual. Be a polymath. 🌍 #LanguageLearning #GeneralKnowledge #Trivia #AI",
    keywords: ["Language", "Polymath", "Knowledge"]
  },

  // --- DAY 7 ---
  "7-Morning": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci needed to know the height of the Cortex in Milan. He measured everything. He quantified his world to understand it. But most of us have no idea how much we are actually learning every day. And that's exactly why we built Vincify. We help you quantify your learning. Track your progress, see your 'Renaissance Score' grow, and measure your own potential. Get Vincify today.",
    hook: "Da Vinci needed to know the height of the Cortex in Milan.",
    value: "He measured everything. He quantified his world to understand it. But most of us have no idea how much we are actually learning every day.",
    product: "And that's exactly why we built Vincify. We help you quantify your learning. Track your progress, see your 'Renaissance Score' grow, and measure your own potential.",
    cta: "Get Vincify today.",
    description: "What gets measured gets managed. Even knowledge. 📏 #Milan #History #Growth #Vincify",
    keywords: ["Metrics", "Growth", "Milan"]
  },
  "7-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "A private tutor costs $50 an hour. This one is free. Imagine having an expert on every single topic in your pocket, ready to teach you 24/7. That is the dream of education. And that's exactly why we built Vincify. It’s not just Google. It’s a tutor that breaks complex topics down into lessons, quizzes you, and ensures you understand. Get your personal tutor and download Vincify.",
    hook: "A private tutor costs $50 an hour.",
    value: "Imagine having an expert on every single topic in your pocket, ready to teach you 24/7. That is the dream of education.",
    product: "And that's exactly why we built Vincify. It’s not just Google. It’s a tutor that breaks complex topics down into lessons, quizzes you, and ensures you understand.",
    cta: "Get your personal tutor and download Vincify.",
    description: "Democratizing education, one micro-lesson at a time. 💸 #Education #Tutor #AI #FreeLearning",
    keywords: ["Tutor", "Education", "Free"]
  },
  "7-Evening": {
    category: ContentCategory.A,
    narratorScript: "We have 7,000 pages of Da Vinci’s notes. He likely wrote 4x that amount that was lost. He was a graphomaniac because he knew that writing down what you want to learn is the first step to learning it. But writing it on paper is slow. And that's exactly why we built Vincify. Step 1: Download the app. Step 2: Write down what you want to learn. Step 3: Let AI do the rest. Start writing your future—link in bio.",
    hook: "We have 7,000 pages of Da Vinci’s notes.",
    value: "He knew that writing down what you want to learn is the first step to learning it. But writing it on paper is slow.",
    product: "And that's exactly why we built Vincify. Step 1: Download the app. Step 2: Write down what you want to learn. Step 3: Let AI do the rest.",
    cta: "Start writing your future—link in bio.",
    description: "7,000 pages of pure genius. Start your page 1 today. 📜 #Writing #Journaling #DaVinci #AppRecommendation",
    keywords: ["Notes", "Writing", "AI"]
  },

  // --- DAY 8 ---
  "8-Morning": {
    category: ContentCategory.B,
    narratorScript: "One of these rots your brain. The other builds it. You check your phone 80 times a day. If you swapped just 5 of those checks for learning, you’d read 50 books' worth of knowledge in a year. But it's hard to swap when learning feels like work. And that's exactly why we built Vincify. We made learning as fast and easy as social media. Swap the scroll and download Vincify.",
    hook: "One of these rots your brain. The other builds it.",
    value: "If you swapped just 5 of your checks for learning, you’d read 50 books' worth of knowledge in a year.",
    product: "And that's exactly why we built Vincify. We made learning as fast and easy as social media. Swap the scroll and download Vincify.",
    cta: "Swap the scroll and download Vincify.",
    description: "Small habits, massive results. 📉📈 #AtomicHabits #Doomscrolling #Focus #Vincify",
    keywords: ["Habits", "Doomscrolling", "Productivity"]
  },
  "8-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci failed. A lot. He left tons of art unfinished because he got distracted by... Math. But that wasn't a failure. That was his process. He followed his interest wherever it led. But society tells us we have to 'focus' on one thing. And that's exactly why we built Vincify. To be the app for people who want to learn everything. Don't feel bad about having 50 different interests—put them all in Vincify.",
    hook: "Da Vinci failed. A lot.",
    value: "That wasn't a failure. That was his process. He followed his interest wherever it led.",
    product: "And that's exactly why we built Vincify. To be the app for people who want to learn everything.",
    cta: "Don't feel bad about having 50 different interests—put them all in Vincify.",
    description: "Distraction or diverse interests? We say the latter. 🐎 #ADHD #Polymath #Creative #Vincify",
    keywords: ["Focus", "Process", "Curiosity"]
  },
  "8-Evening": {
    category: ContentCategory.B,
    narratorScript: "Why learn about Mitochondria if you actually want to learn about Crypto? Standard education forces you to learn things you don't care about, and that kills the joy. Learning should be selfish. And that's exactly why we built Vincify. It is 100% interest-based. You drive the curriculum. When you care, you learn faster. Take the wheel and download Vincify.",
    hook: "Why learn about Mitochondria if you actually want to learn about Crypto?",
    value: "Standard education forces you to learn things you don't care about, and that kills the joy. Learning should be selfish.",
    product: "And that's exactly why we built Vincify. It is 100% interest-based. You drive the curriculum. When you care, you learn faster.",
    cta: "Take the wheel and download Vincify.",
    description: "Learning should be selfish. Learn what YOU love. ❤️ #SelfCare #Education #Crypto #Biology",
    keywords: ["Interests", "Learning", "Personalization"]
  },

  // --- DAY 9 ---
  "9-Morning": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci wasn't just a painter. He was the head of kitchen entertainment. He invented conveyor belts for food and applied engineering to cooking. He saw no difference between art and utility. But we tend to separate our hobbies from our learning. And that's exactly why we built Vincify. Apply the Da Vinci mindset—learn 'The Science of Cooking' or 'The History of Wine' today. Cook up some knowledge—link in bio.",
    hook: "Da Vinci wasn't just a painter.",
    value: "He invented conveyor belts for food and applied engineering to cooking. He saw no difference between art and utility.",
    product: "And that's exactly why we built Vincify. Apply the Da Vinci mindset—learn 'The Science of Cooking' or 'The History of Wine' today.",
    cta: "Cook up some knowledge—link in bio.",
    description: "The original MasterChef. 👨‍🍳 #Cooking #History #Invention #Vincify",
    keywords: ["Cooking", "Engineering", "Art"]
  },
  "9-Mid-Day": {
    category: ContentCategory.C,
    narratorScript: "You hit the gym to feed your body. But what are you feeding your mind? A true glow-up isn't just physical. It's mental. But it's hard to find time to read a whole book every day. And that's exactly why we built Vincify. To give you total optimization in 5 minutes a day. Feed your body, feed your mind. Start smart and check the link in bio.",
    hook: "You hit the gym to feed your body.",
    value: "A true glow-up isn't just physical. It's mental. But it's hard to find time to read a whole book every day.",
    product: "And that's exactly why we built Vincify. To give you total optimization in 5 minutes a day.",
    cta: "Feed your body, feed your mind. Start smart and check the link in bio.",
    description: "Glow up your brain. ✨ #ThatGirl #ThatGuy #Routine #Vincify",
    keywords: ["GlowUp", "Routine", "Intelligence"]
  },
  "9-Evening": {
    category: ContentCategory.B,
    narratorScript: "You forget 50% of what you learn within 1 hour. It’s called the Ebbinghaus Forgetting Curve. The only way to beat it is Spaced Repetition and Micro-learning. But doing that manually is impossible. And that's exactly why we built Vincify. Our AI breaks topics into small chunks and quizzes you specifically to stop the forgetting curve. Hack your memory and get Vincify.",
    hook: "You forget 50% of what you learn within 1 hour.",
    value: "The only way to beat the Ebbinghaus Forgetting Curve is Spaced Repetition and Micro-learning. But doing that manually is impossible.",
    product: "And that's exactly why we built Vincify. Our AI breaks topics into small chunks and quizzes you specifically to stop the forgetting curve.",
    cta: "Hack your memory and get Vincify.",
    description: "Don't let your brain leak. 🧠💧 #Psychology #MemoryHack #Studying #Vincify",
    keywords: ["Memory", "Psychology", "Learning"]
  },

  // --- DAY 10 ---
  "10-Morning": {
    category: ContentCategory.A,
    narratorScript: "People thought he was crazy for drawing this. A pyramid-shaped parachute. 500 years later, we tested it, and it worked perfectly. His imagination was ahead of his technology. But imagination needs knowledge to work. And that's exactly why we built Vincify. Imagine what you could dream up if you had the knowledge. Use us to fill your brain with the building blocks of innovation. Innovate and download Vincify.",
    hook: "People thought he was crazy for drawing this.",
    value: "A pyramid-shaped parachute. His imagination was ahead of his technology. But imagination needs knowledge to work.",
    product: "And that's exactly why we built Vincify. Imagine what you could dream up if you had the knowledge. Use us to fill your brain with the building blocks of innovation.",
    cta: "Innovate and download Vincify.",
    description: "He was 500 years ahead. Catch up. 🪂 #Innovation #Tech #History #Vincify",
    keywords: ["Innovation", "Imagination", "Technology"]
  },
  "10-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "What if you could binge-watch intelligence? We spend hours binging shows. Imagine if you binged Astrophysics or Philosophy with that same intensity. But textbooks aren't binge-able. And that's exactly why we built Vincify. We made learning as addictive as a TV show. But when you turn it off, you're actually smarter. Binge better—get Vincify.",
    hook: "What if you could binge-watch intelligence?",
    value: "Imagine if you binged Astrophysics or Philosophy with the same intensity as a Netflix show.",
    product: "And that's exactly why we built Vincify. We made learning as addictive as a TV show. But when you turn it off, you're actually smarter.",
    cta: "Binge better—get Vincify.",
    description: "The only subscription you actually need. 📺 #Netflix #BingeWatch #Smart #Vincify",
    keywords: ["Binge", "Addictive", "Learning"]
  },
  "10-Evening": {
    category: ContentCategory.A,
    narratorScript: "The Renaissance didn't happen because of money. It happened because of Curiosity. A group of people decided to relearn the wisdom of the ancients and push it further. We are in a new AI Renaissance right now. But you need the right tools to participate. And that's exactly why we built Vincify. Are you going to watch it happen, or join in? Join the New Renaissance and download Vincify.",
    hook: "The Renaissance didn't happen because of money.",
    value: "It happened because of Curiosity. We are in a new AI Renaissance right now. But you need the right tools to participate.",
    product: "And that's exactly why we built Vincify. Are you going to watch it happen, or join in?",
    cta: "Join the New Renaissance and download Vincify.",
    description: "It’s time for a new Renaissance. And you’re invited. 🚀 #Renaissance #Future #AI #Vincify",
    keywords: ["Renaissance", "Curiosity", "Future"]
  },

  // --- DAY 11-20 (MAPPED TO NARRATOR SCRIPTS) ---
  "11-Morning": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci slept for 20 minutes every 4 hours. That’s it. It’s called the Uberman cycle. He believed sleep was a waste of life. Now, I don't recommend you do that, but it shows how desperate he was to squeeze every drop of time out of his day to learn. Most of us waste time because learning takes too long. And that's exactly why we built Vincify. You don’t need to sleep less; you just need to learn faster. Vincify condenses hours of research into 3-minute lessons so you can learn efficiently. Hack your time and download Vincify.",
    hook: "Da Vinci slept for 20 minutes every 4 hours. That’s it.",
    value: "He believed sleep was a waste of life. It shows how desperate he was to squeeze every drop of time out of his day to learn.",
    product: "And that's exactly why we built Vincify. You don’t need to sleep less; you just need to learn faster. Vincify condenses hours of research into 3-minute lessons so you can learn efficiently.",
    cta: "Hack your time and download Vincify.",
    description: "You have the same 24 hours as Da Vinci. How are you using them? ⏳ #TimeManagement #Uberman #SleepHacks #Vincify",
    keywords: ["TimeManagement", "Uberman", "Efficiency"]
  },
  "11-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Highlighting a book does not mean you learned it. Psychologists call this the 'Illusion of Competence.' Your brain recognizes the text, so you think you know it, but you don't. You only know it if you can retrieve it without looking. But most apps just let you read passively. And that's exactly why we built Vincify. We force you to retrieve the info. Every AI lesson ends with a quiz, and if you can't pass, you didn't learn. Stop highlighting, start testing—get Vincify.",
    hook: "Highlighting a book does not mean you learned it.",
    value: "Psychologists call this the 'Illusion of Competence.' Your brain recognizes the text, so you think you know it, but you don't.",
    product: "And that's exactly why we built Vincify. We force you to retrieve the info. Every AI lesson ends with a quiz, and if you can't pass, you didn't learn.",
    cta: "Stop highlighting, start testing—get Vincify.",
    description: "Highlighting is a lie we tell ourselves. 🖍️🚫 #StudyTips #ActiveRecall #Psychology #EdTech",
    keywords: ["StudyTips", "Retention", "ActiveRecall"]
  },
  "11-Evening": {
    category: ContentCategory.A,
    narratorScript: "Michelangelo hated Da Vinci's guts. They literally insulted each other in the streets of Florence. It was the original battle of Specialist vs. Generalist. Michelangelo was the intense specialist, while Da Vinci was the cool polymath who did everything. History shows the Generalist had more fun. And that's exactly why we built Vincify. To help you be the Generalist. Be the one who knows Art, Engineering, and Biology. Pick your team and check the link in bio.",
    hook: "Michelangelo hated Da Vinci's guts.",
    value: "Michelangelo was the intense specialist, while Da Vinci was the cool polymath who did everything. History shows the Generalist had more fun.",
    product: "And that's exactly why we built Vincify. To help you be the Generalist. Be the one who knows Art, Engineering, and Biology.",
    cta: "Pick your team and check the link in bio.",
    description: "Beef in the 1500s was intellectual. 🎨🥊 #ArtHistory #Michelangelo #DaVinci #Rivalry",
    keywords: ["Rivalry", "Polymath", "ArtHistory"]
  },

  "12-Morning": {
    category: ContentCategory.B,
    narratorScript: "You've been using this quote wrong your entire life: 'Jack of all trades, master of none.' The full quote is actually: 'A jack of all trades is a master of none, but oftentimes better than a master of one.' The world rewards people who can connect the dots between different fields. But schools force you to pick just one. And that's exactly why we built Vincify. It’s the app for the Jack of all trades. Connect Coding with Philosophy or Design with Economics. Connect the dots and download Vincify.",
    hook: "You've been using this quote wrong your entire life.",
    value: "The world rewards people who can connect the dots between different fields. But schools force you to pick just one.",
    product: "And that's exactly why we built Vincify. It’s the app for the Jack of all trades. Connect Coding with Philosophy or Design with Economics.",
    cta: "Connect the dots and download Vincify.",
    description: "Don't let them box you in. Be a Jack. 🃏 #Quotes #Generalist #CareerAdvice #Vincify",
    keywords: ["Generalist", "Career", "Innovation"]
  },
  "12-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "This isn't just a drawing of a naked guy. It's the solution to an ancient math problem called 'Squaring the Circle.' Da Vinci used the human body to prove that geometry and biology are linked. He didn't see walls between subjects. But our education system builds walls everywhere. And that's exactly why we built Vincify. To break down the walls in your brain. Learn Math, Biology, and Art all in one place. Break the walls and get Vincify.",
    hook: "This isn't just a drawing of a naked guy.",
    value: "It's the solution to an ancient math problem called 'Squaring the Circle.' Da Vinci proved geometry and biology are linked.",
    product: "And that's exactly why we built Vincify. To break down the walls in your brain. Learn Math, Biology, and Art all in one place.",
    cta: "Break the walls and get Vincify.",
    description: "The most famous drawing in history is a math problem. 📐 #Geometry #VitruvianMan #MathFacts #Learning",
    keywords: ["Math", "Biology", "Geometry"]
  },
  "12-Evening": {
    category: ContentCategory.C,
    narratorScript: "The world is noisy. Social media is loud. But knowledge is quiet. It requires a space where you can actually hear yourself think. Most apps add to the noise, but we wanted to subtract from it. And that's exactly why we built Vincify. To give you a quiet place to focus. Whether it's Stoic Philosophy or Astrophysics, find your quiet. Check the link in bio.",
    hook: "The world is noisy.",
    value: "Knowledge is quiet. It requires a space where you can actually hear yourself think. Most apps add to the noise.",
    product: "And that's exactly why we built Vincify. To give you a quiet place to focus.",
    cta: "Find your quiet. Check the link in bio.",
    description: "3 AM is for the scholars. 🕯️ #DarkAcademia #NightOwl #Stoicism #Vincify",
    keywords: ["Stoicism", "Focus", "Silence"]
  },

  "13-Morning": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci invented the Navy SEALs in 1500. He designed a leather diving suit with a breathing tube so soldiers could walk underwater and cut holes in enemy ships. He was an engineer of war. But most people only know him as a painter. And that's exactly why we built Vincify. To show you the full picture. You can learn the mechanics of history, engineering, and strategy all in one app. Dive deep and download Vincify.",
    hook: "Da Vinci invented the Navy SEALs in 1500.",
    value: "He designed a leather diving suit so soldiers could walk underwater. He was an engineer of war, not just a painter.",
    product: "And that's exactly why we built Vincify. To show you the full picture. You can learn the mechanics of history, engineering, and strategy all in one app.",
    cta: "Dive deep and download Vincify.",
    description: "500 years ahead of his time. 🤿 #Invention #Historybuff #Engineering #Vincify",
    keywords: ["NavySEALs", "History", "Engineering"]
  },
  "13-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "You are suffering from Information Obesity. You consume thousands of 'calories' of junk information every day—celebrity gossip, memes, rage bait. It’s clogging your mental arteries and making it hard to focus. You need a diet. And that's exactly why we built Vincify. Think of it as pure protein for your brain. We provide high-quality, dense knowledge that actually makes you stronger. Start the diet and get Vincify.",
    hook: "You are suffering from Information Obesity.",
    value: "You consume junk info every day—gossip, memes, rage bait. It’s clogging your mental arteries.",
    product: "And that's exactly why we built Vincify. Think of it as pure protein for your brain. We provide high-quality, dense knowledge that actually makes you stronger.",
    cta: "Start the diet and get Vincify.",
    description: "Stop eating junk info. 🍔🧠 #DigitalDiet #MentalHealth #Focus #Vincify",
    keywords: ["DigitalDiet", "Focus", "Knowledge"]
  },
  "13-Evening": {
    category: ContentCategory.A,
    narratorScript: "Item number 4 on Da Vinci's to-do list: 'Get a skull.' He didn't just want to read about bones; he needed to see them. He approached learning with extreme practical intensity. Today, we are too passive. We just watch videos. And that's exactly why we built Vincify. What is your 'Get a skull'? What do you need to understand right now? Put it in your list and learn it today. Download Vincify.",
    hook: "Item number 4 on Da Vinci's to-do list: 'Get a skull.'",
    value: "He needed to see them. Today, we are too passive. We just watch videos.",
    product: "And that's exactly why we built Vincify. What is your 'Get a skull'? What do you need to understand right now?",
    cta: "Put it in your list and learn it today. Download Vincify.",
    description: "His shopping list: Bread, Wine, Human Skull. 💀 #Curiosity #DaVinci #Anatomy #App",
    keywords: ["Skull", "Anatomy", "Curiosity"]
  },

  "14-Morning": {
    category: ContentCategory.A,
    narratorScript: "This is the best Resume ever written. When Da Vinci applied for a job, he didn't call himself an artist. He listed 10 points: 'I can build bridges. I can drain moats. I can build cannons.' Point 11 was 'Also, I can paint.' He was a stack of skills. But most people today only have one skill. And that's exactly why we built Vincify. To help you build your skill stack. Don't just be one thing. Stack your skills—link in bio.",
    hook: "This is the best Resume ever written.",
    value: "He listed engineering skills first. Point 11 was 'Also, I can paint.' He was a stack of skills.",
    product: "And that's exactly why we built Vincify. To help you build your skill stack. Don't just be one thing.",
    cta: "Stack your skills—link in bio.",
    description: "How to get hired by a Duke. 📜 #CareerAdvice #ResumeTips #Polymath #Vincify",
    keywords: ["Resume", "Skills", "Career"]
  },
  "14-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "University is for credentials. Vincify is for education. Don't confuse the two. You can get a degree without learning anything, and you can learn everything without a degree. The only difference is the debt. And that's exactly why we built Vincify. If you want the knowledge without the $100,000 debt, use AI. We generate the curriculum of a degree, personalized to you, for free. Educate yourself and download Vincify.",
    hook: "University is for credentials. Vincify is for education.",
    value: "You can get a degree without learning, and learn without a degree. The only difference is the debt.",
    product: "And that's exactly why we built Vincify. If you want the knowledge without the $100,000 debt, use AI. We generate a personalized curriculum for free.",
    cta: "Educate yourself and download Vincify.",
    description: "Credentials open doors. Knowledge keeps them open. 🎓 #StudentDebt #SelfEducation #College #AI",
    keywords: ["College", "SelfTaught", "Education"]
  },
  "14-Evening": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci would stare at water for hours. People thought he was zoning out, but he was actually analyzing flow dynamics, spirals, and chaos theory. He saw math in the mundane. Most of us walk past these miracles every day. And that's exactly why we built Vincify. To help you decode the world. Learn Fluid Dynamics or Chaos Theory today, and you'll never look at a puddle the same way. See the math and get Vincify.",
    hook: "Da Vinci would stare at water for hours.",
    value: "He was analyzing flow dynamics and chaos theory. He saw math in the mundane miracles we walk past.",
    product: "And that's exactly why we built Vincify. To help you decode the world. Learn Fluid Dynamics or Chaos Theory today.",
    cta: "See the math and get Vincify.",
    description: "Chaos is just math you don't understand yet. 💧 #Physics #ChaosTheory #Observation #Vincify",
    keywords: ["Physics", "ChaosTheory", "Math"]
  },

  "15-Morning": {
    category: ContentCategory.B,
    narratorScript: "You don't need to be the top 1% to be successful. You just need to be in the top 25% of two different things. If you are good at Coding and good at Writing, you are unstoppable. That is 'Skill Stacking.' But learning a second field is intimidating. And that's exactly why we built Vincify. It is the ultimate Skill Stacking tool. Learn the basics of a new field every week and stack your odds. Download Vincify.",
    hook: "You don't need to be the top 1% to be successful.",
    value: "You just need to be in the top 25% of two different things. That is 'Skill Stacking.'",
    product: "And that's exactly why we built Vincify. It is the ultimate Skill Stacking tool. Learn the basics of a new field every week and stack your odds.",
    cta: "Download Vincify.",
    description: "Math + Art = Da Vinci. What is your stack? 📊 #ScottAdams #SuccessTips #SkillStacking #Vincify",
    keywords: ["Success", "Skills", "Strategy"]
  },
  "15-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Why was Da Vinci digging up graves at night? To dissect bodies. It was illegal and dangerous. But he realized that ancient medical texts were wrong, and he trusted his eyes more than the books. Today, we blindly trust whatever is on the internet. And that's exactly why we built Vincify. We encourage you to go to the source. Don't just trust what you're told—verify it. Dig for truth and get Vincify.",
    hook: "Why was Da Vinci digging up graves at night?",
    value: "To dissect bodies and verify truth. Today, we blindly trust the internet.",
    product: "And that's exactly why we built Vincify. We encourage you to go to the source. Don't just trust what you're told—verify it.",
    cta: "Dig for truth and get Vincify.",
    description: "Trust your eyes, not the textbooks. 🪦 #History #Science #Rebel #Vincify",
    keywords: ["Truth", "Research", "Verify"]
  },
  "15-Evening": {
    category: ContentCategory.C,
    narratorScript: "Wins are made in the morning. You can scroll through drama, or you can scroll through wisdom. How you start the day defines how you end it. But finding good things to read takes time. And that's exactly why we built Vincify. Upgrade your morning scroll. Start smart, stay smart. Check the link in bio.",
    hook: "Wins are made in the morning.",
    value: "You can scroll through drama, or wisdom. Finding good content takes time.",
    product: "And that's exactly why we built Vincify. Upgrade your morning scroll.",
    cta: "Start smart, stay smart. Check the link in bio.",
    description: "Wins are made in the morning. ☕☀️ #MorningRoutine #Productivity #ThatGirl #Vincify",
    keywords: ["Morning", "Routine", "Wisdom"]
  },

  "16-Morning": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci's tank had a fatal flaw. Was it on purpose? If you built the tank according to his plans, the wheels would spin in opposite directions and it wouldn't move. Some historians think he did this as a security key so enemies couldn't steal his design. Genius is in the details. But we are trained to skim and skip details. And that's exactly why we built Vincify. To sharpen your attention to detail with daily micro-learning. Check the details and download Vincify.",
    hook: "Da Vinci's tank had a fatal flaw.",
    value: "The plans would make it fail. It might have been a security key. We are trained to skim and skip details.",
    product: "And that's exactly why we built Vincify. To sharpen your attention to detail with daily micro-learning.",
    cta: "Check the details and download Vincify.",
    description: "A bug or a feature? 🛡️ #MilitaryHistory #Tank #Conspiracy #Vincify",
    keywords: ["Tank", "Details", "Strategy"]
  },
  "16-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Why learn things you don't use every day? Because you don't know what you'll need until you need it. A diverse mental toolbox makes you adaptable. But it's hard to carry a toolbox in your head. And that's exactly why we built Vincify. To fill your toolbox. One day, that lesson on 'Negotiation Tactics' or 'Basic First Aid' will save you. Fill your toolbox and get Vincify.",
    hook: "Why learn things you don't use every day?",
    value: "A diverse mental toolbox makes you adaptable. But it's hard to carry a toolbox in your head.",
    product: "And that's exactly why we built Vincify. To fill your toolbox. One day, that lesson will save you.",
    cta: "Fill your toolbox and get Vincify.",
    description: "Better to have it and not need it. 🛠️ #LifeSkills #Preparedness #Learning #Vincify",
    keywords: ["Skills", "Preparedness", "Adaptability"]
  },
  "16-Evening": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci was a troll. He once took a real lizard, glued fake dragon wings and a beard to it, and kept it in a box just to scare his friends. He didn't take himself too seriously. Curiosity should be playful, not boring. But school makes learning feel like a chore. And that's exactly why we built Vincify. Explore weird topics, have fun, and play with ideas. Link in bio.",
    hook: "Da Vinci was a troll.",
    value: "He pranked friends with fake dragon-lizards. Curiosity should be playful, not boring.",
    product: "And that's exactly why we built Vincify. Explore weird topics, have fun, and play with ideas.",
    cta: "Link in bio.",
    description: "Even geniuses like to prank people. 🦎 #FunFacts #DaVinci #Prank #Vincify",
    keywords: ["Prank", "Playful", "Creativity"]
  },

  "17-Morning": {
    category: ContentCategory.B,
    narratorScript: "Stop multitasking. It makes you stupid. Your brain cannot parallel process. It just switches rapidly, losing IQ points every time. Deep learning requires single-tasking. But our phones are designed to interrupt us. And that's exactly why we built Vincify. It is designed for Monotasking. 5 minutes. One topic. Zero distractions. That’s how you actually learn. Focus up and download Vincify.",
    hook: "Stop multitasking. It makes you stupid.",
    value: "Your brain cannot parallel process. It switches rapidly, losing IQ points.",
    product: "And that's exactly why we built Vincify. It is designed for Monotasking. 5 minutes. One topic. Zero distractions.",
    cta: "Focus up and download Vincify.",
    description: "Multitasking is just doing two things badly. 🤹‍♂️ #Focus #DeepWork #Neuroscience #Vincify",
    keywords: ["Focus", "Multitasking", "Neuroscience"]
  },
  "17-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Why does the Mona Lisa look... smoky? Da Vinci invented a technique called 'Sfumato'—literally 'evaporating like smoke.' He realized there are no sharp lines in nature, only transitions. He mastered the technique of his craft. But where do you go to learn techniques like that today? And that's exactly why we built Vincify. Learn the secrets of Art, Design, and Architecture all in one place. Master the craft and get Vincify.",
    hook: "Why does the Mona Lisa look... smoky?",
    value: "Da Vinci invented 'Sfumato'. There are no sharp lines in nature, only transitions.",
    product: "And that's exactly why we built Vincify. Learn the secrets of Art, Design, and Architecture all in one place.",
    cta: "Master the craft and get Vincify.",
    description: "No sharp lines. Only shadows. 🌫️ #ArtTechniques #MonaLisa #Design #Vincify",
    keywords: ["Sfumato", "Art", "MonaLisa"]
  },
  "17-Evening": {
    category: ContentCategory.A,
    narratorScript: "The first robot was built in 1495. Da Vinci built a mechanical knight that could sit, stand, and lift its visor using pulleys. He was building robotics before electricity existed. He saw the future. You need to see the future too. And that's exactly why we built Vincify. Trace the history of tech so you can understand where it's going. See the future and download Vincify.",
    hook: "The first robot was built in 1495.",
    value: "A mechanical knight using pulleys. He was building robotics before electricity existed. He saw the future.",
    product: "And that's exactly why we built Vincify. Trace the history of tech so you can understand where it's going.",
    cta: "See the future and download Vincify.",
    description: "The Medieval Ironman. 🤖 #Robotics #TechHistory #Invention #Vincify",
    keywords: ["Robotics", "History", "Tech"]
  },

  "18-Morning": {
    category: ContentCategory.A,
    narratorScript: "The Renaissance had a goal: Uomo Universale. The Universal Man. Someone who developed their body, their mind, their social skills, and their art equally. Today we call it 'self-improvement,' but we lack the roadmap. And that's exactly why we built Vincify. It is your pocket tool for becoming a Universal Man or Woman. Don't settle for being partial. Become Universal—link in bio.",
    hook: "The Renaissance had a goal: Uomo Universale.",
    value: "Developing body, mind, and skills equally. Today we lack the roadmap.",
    product: "And that's exactly why we built Vincify. It is your pocket tool for becoming a Universal Man or Woman.",
    cta: "Become Universal—link in bio.",
    description: "Be everything. 🏛️ #RenaissanceMan #SelfImprovement #Goals #Vincify",
    keywords: ["Renaissance", "SelfImprovement", "Universal"]
  },
  "18-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Why do you grind for XP in a game, but not in real life? In games, you love leveling up. In life, you stagnate. You need to gamify your knowledge. But real life doesn't have a progress bar. And that's exactly why we built Vincify. We turn learning into XP. Finish a lesson, pass the quiz, and level up your brain. It’s addictive, but good for you. Level up IRL and get Vincify.",
    hook: "Why do you grind for XP in a game, but not in real life?",
    value: "In games, you love leveling up. In life, you stagnate. You need to gamify your knowledge.",
    product: "And that's exactly why we built Vincify. We turn learning into XP. Finish a lesson, pass the quiz, and level up your brain.",
    cta: "Level up IRL and get Vincify.",
    description: "Your brain is the main character. 🎮 #Gamification #LevelUp #Grindset #Vincify",
    keywords: ["Gamification", "LevelUp", "XP"]
  },
  "18-Evening": {
    category: ContentCategory.C,
    narratorScript: "Some people collect shoes. Some collect cars. But the only collection that stays with you forever is knowledge. You can build a Library of Alexandria in your mind, or you can fill it with noise. The choice is yours. And that's exactly why we built Vincify. To help you build your mind palace. Start your collection today—link in bio.",
    hook: "Some people collect shoes. Some collect cars.",
    value: "Knowledge is the only collection that stays forever. You can build a mind palace or fill it with noise.",
    product: "And that's exactly why we built Vincify. To help you build your mind palace.",
    cta: "Start your collection today—link in bio.",
    description: "The only collection that matters. 📚 #BookLover #Library #MindPalace #Vincify",
    keywords: ["Collection", "Knowledge", "MindPalace"]
  },

  "19-Morning": {
    category: ContentCategory.A,
    narratorScript: "He bought birds just to let them go. Da Vinci spent a fortune buying caged birds in the market to release them. He wanted to watch how their wings moved because he was obsessed with human flight. He followed his obsession. Most of us suppress our obsessions because they seem 'useless.' And that's exactly why we built Vincify. What is your obsession? Feed it. Fly high and download Vincify.",
    hook: "He bought birds just to let them go.",
    value: "He wanted to watch wings move to understand flight. Most of us suppress 'useless' obsessions.",
    product: "And that's exactly why we built Vincify. What is your obsession? Feed it.",
    cta: "Fly high and download Vincify.",
    description: "Obsession is a gift. 🕊️ #Flight #Freedom #Passion #Vincify",
    keywords: ["Flight", "Obsession", "Passion"]
  },
  "19-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "If you can't explain it to a 5-year-old, you don't understand it. This is the Feynman Technique. Complexity is the enemy of understanding. True mastery is simple. But most textbooks are written to sound smart, not to be understood. And that's exactly why we built Vincify. Our AI simplifies complex topics. It breaks down Quantum Physics into language you can actually understand. Keep it simple and get Vincify.",
    hook: "If you can't explain it to a 5-year-old, you don't understand it.",
    value: "Complexity is the enemy of understanding. Most textbooks are written to sound smart, not clear.",
    product: "And that's exactly why we built Vincify. Our AI simplifies complex topics into language you can understand.",
    cta: "Keep it simple and get Vincify.",
    description: "Smart people make things simple. 🧠 #Feynman #LearningHacks #Physics #Vincify",
    keywords: ["Feynman", "Simplicity", "Mastery"]
  },
  "19-Evening": {
    category: ContentCategory.A,
    narratorScript: "The Black Death killed half of Milan. Da Vinci knew why. He realized filth caused disease, so he designed a futuristic city with two levels: sewage and wagons below, pedestrians and clean air above. He used design to solve problems. You can do the same. And that's exactly why we built Vincify. Learn Urban Planning, Architecture, and Epidemiology. Build better—link in bio.",
    hook: "The Black Death killed half of Milan.",
    value: "Da Vinci realized filth caused disease and designed a two-level city to solve it.",
    product: "And that's exactly why we built Vincify. Learn Urban Planning, Architecture, and Epidemiology.",
    cta: "Build better—link in bio.",
    description: "He designed the future in 1485. 🏙️ #UrbanPlanning #BlackDeath #History #Vincify",
    keywords: ["UrbanPlanning", "History", "Solution"]
  },

  "20-Morning": {
    category: ContentCategory.A,
    narratorScript: "The eye is the window to the soul. Da Vinci wrote that. But he didn't just write poetry; he dissected eyes to understand how light enters the retina. He needed to know the physics of sight to paint the soul. He mixed Science and Art. We keep them separated. And that's exactly why we built Vincify. It is where Physics meets Soul. Open your eyes and download Vincify.",
    hook: "The eye is the window to the soul.",
    value: "He dissected eyes to understand the physics of sight. He mixed Science and Art.",
    product: "And that's exactly why we built Vincify. It is where Physics meets Soul.",
    cta: "Open your eyes and download Vincify.",
    description: "Look closer. 👁️ #Optics #Philosophy #Art #Vincify",
    keywords: ["Optics", "Soul", "Physics"]
  },
  "20-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Does your inner voice sound like a TikTok comment section? 'Skibidi', 'Rizz', 'Gyatt'. Your vocabulary defines your reality. If you only consume 'Brain Rot,' your thoughts will rot. You need new words to think new thoughts. And that's exactly why we built Vincify. We teach you concepts, mental models, and vocabulary to upgrade your internal software. Delete the rot and get Vincify.",
    hook: "Does your inner voice sound like a TikTok comment section?",
    value: "Your vocabulary defines your reality. If you only consume 'Brain Rot,' your thoughts will rot.",
    product: "And that's exactly why we built Vincify. We teach you concepts, mental models, and vocabulary to upgrade your internal software.",
    cta: "Delete the rot and get Vincify.",
    description: "You are what you consume. 🗣️ #BrainRot #Vocabulary #Mindset #Vincify",
    keywords: ["BrainRot", "Vocabulary", "Reality"]
  },
  "20-Evening": {
    category: ContentCategory.A,
    narratorScript: "What will you leave behind? Da Vinci left 7,000 pages of ideas. He didn't just exist; he documented his mind. You have the same potential, but you need to start. And that's exactly why we built Vincify. Start your notebook. Start your journey. Become a Polymath. It starts with one tap. Begin today and download Vincify.",
    hook: "What will you leave behind?",
    value: "Da Vinci documented his mind in 7,000 pages. You have the same potential.",
    product: "And that's exactly why we built Vincify. Start your notebook. Start your journey. Become a Polymath.",
    cta: "Begin today and download Vincify.",
    description: "Your journey starts now. 🚀 #Legacy #Motivation #Vincify #TheEnd",
    keywords: ["Legacy", "Journey", "Polymath"]
  },

  // --- DAY 21-30 (MAPPED TO NARRATOR SCRIPTS) ---
  "21-Morning": {
    category: ContentCategory.A,
    narratorScript: "There is a difference between looking and seeing. Da Vinci had a motto: Saper Vedere. It means 'knowing how to see.' He didn't just look at a tree; he looked at the branching patterns, the mathematics of growth, and the light on the leaves. Most of us walk through life blind to these details. And that's exactly why we built Vincify. To teach you how to see. When you learn the basics of Botany or Architecture on our app, you start seeing the world differently. You gain new lenses. Get new lenses and download Vincify.",
    hook: "There is a difference between looking and seeing.",
    value: "Saper Vedere means 'knowing how to see'. Most of us walk through life blind to the branching patterns and mathematics of nature.",
    product: "And that's exactly why we built Vincify. To teach you how to see. When you learn on our app, you start seeing the world differently.",
    cta: "Get new lenses and download Vincify.",
    description: "Do you know how to see? 👁️ #SaperVedere #Mindfulness #Observation #Vincify",
    keywords: ["Observation", "SaperVedere", "Botany"]
  },
  "21-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "'Niche down' is the worst career advice for the 2020s. In an AI world, specialists get automated first. The AI can write code better than you. It can write copy better than you. But it cannot connect Coding to Psychology to History. Only a Polymath can do that. And that's exactly why we built Vincify. It is the anti-niche app. We help you branch out so you become irreplaceable. Don't be automated—get Vincify.",
    hook: "'Niche down' is the worst career advice for the 2020s.",
    value: "Specialists get automated first. AI can't connect Coding to Psychology to History.",
    product: "And that's exactly why we built Vincify. It is the anti-niche app. We help you branch out so you become irreplaceable.",
    cta: "Don't be automated—get Vincify.",
    description: "AI eats specialists for breakfast. Be a generalist. 🤖 #FutureOfWork #AI #CareerAdvice #Generalist",
    keywords: ["Career", "AI", "Polymath"]
  },
  "21-Evening": {
    category: ContentCategory.A,
    narratorScript: "What color is a shadow? If you said 'black', you're wrong. Da Vinci was the first to write down that shadows are actually blue. He observed that they reflect the color of the sky. He questioned the most basic assumptions of reality. We stop questioning things as we grow up. And that's exactly why we built Vincify. To help you question your reality. Learn Physics, Optics, and Color Theory. Stop accepting things as 'black and white' and click the link in bio.",
    hook: "What color is a shadow?",
    value: "Shadows are actually blue; they reflect the sky. We stop questioning things as we grow up.",
    product: "And that's exactly why we built Vincify. To help you question your reality. Learn Physics, Optics, and Color Theory.",
    cta: "Stop accepting things as 'black and white' and click the link in bio.",
    description: "Nothing is black and white. Not even shadows. 🎨 #ArtTheory #Physics #DaVinci #Vincify",
    keywords: ["Physics", "Shadows", "Reality"]
  },

  "22-Morning": {
    category: ContentCategory.B,
    narratorScript: "You don't need a $2,000 setup to be a genius. Da Vinci used scraps of paper and chalk. The tool doesn't matter; the habit matters. You are procrastinating by buying gear instead of learning. And that's exactly why we built Vincify. It is a simple tool. A list. An AI. A lesson. No complex setup. Just pure learning. Stop configuring and start learning—download Vincify.",
    hook: "You don't need a $2,000 setup to be a genius.",
    value: "The tool doesn't matter; the habit matters. You are procrastinating by buying gear instead of learning.",
    product: "And that's exactly why we built Vincify. It is a simple tool. No complex setup. Just pure learning.",
    cta: "Stop configuring and start learning—download Vincify.",
    description: "It’s not the gear, it’s the user. 📱 #Productivity #iPadKid #StudySetup #Vincify",
    keywords: ["Gear", "Productivity", "Habit"]
  },
  "22-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci wasn't famous for painting. He was famous for... partying. When he first moved to Milan, he was introduced as a musician who played a silver lyre shaped like a horse's skull. He understood that music was just math in the air. He saw the connection. And that's exactly why we built Vincify. To show you the connections. Music theory is just math. Learn the connection between frequency and geometry. Hear the math and get Vincify.",
    hook: "Da Vinci wasn't famous for painting.",
    value: "He was introduced as a musician playing a silver horse-skull lyre. He understood music was math in the air.",
    product: "And that's exactly why we built Vincify. To show you the connections. Music theory is just math.",
    cta: "Hear the math and get Vincify.",
    description: "He was the original rockstar. 🎸 #MusicTheory #DaVinci #History #Vincify",
    keywords: ["Music", "Math", "History"]
  },
  "22-Evening": {
    category: ContentCategory.C,
    narratorScript: "The grind doesn't have to be ugly. We think studying means suffering, but it should be a ritual. Your mind is a temple, so decorate it with knowledge. And that's exactly why we built Vincify. To give you a beautiful place to grow. Whether it's Philosophy or Art, romanticize your education. Decorate your mind—link in bio.",
    hook: "The grind doesn't have to be ugly.",
    value: "Studying should be a ritual. Your mind is a temple, decorate it with knowledge.",
    product: "And that's exactly why we built Vincify. To give you a beautiful place to grow.",
    cta: "Decorate your mind—link in bio.",
    description: "The grind doesn't have to be ugly. 🕯️ #DarkAcademia #StudyMotivation #Aesthetic #Vincify",
    keywords: ["Ritual", "Knowledge", "Grind"]
  },

  "23-Morning": {
    category: ContentCategory.A,
    narratorScript: "Why did Da Vinci find seashells on top of mountains? The church said it was the Great Flood. Da Vinci said 'No.' He realized the mountains were once underwater and had risen up over millions of years. He discovered Plate Tectonics 400 years before science did. He read the earth like a book. And that's exactly why we built Vincify. To teach you the language of the earth. Geology, Paleontology, Deep Time. Learn to read the story of the planet. Download Vincify.",
    hook: "Why did Da Vinci find seashells on top of mountains?",
    value: "He realized mountains were once underwater. He discovered Plate Tectonics 400 years early.",
    product: "And that's exactly why we built Vincify. To teach you the language of the earth. Geology, Paleontology, Deep Time.",
    cta: "Download Vincify.",
    description: "He questioned the flood. He found the truth. 🐚🏔️ #Geology #ScienceFacts #DaVinci #Vincify",
    keywords: ["Geology", "Tectonics", "Science"]
  },
  "23-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "'I can just Google it' is making you stupid. Access to information is not the same as knowledge. Knowledge is what you can conjure up in your mind when the wifi goes out. You need mental models installed in your brain, not on a server. And that's exactly why we built Vincify. We don't just give you the answer; we teach you the concept so you keep it forever. Own your knowledge and get Vincify.",
    hook: "'I can just Google it' is making you stupid.",
    value: "Access is not knowledge. Knowledge is what you can conjure up when the wifi goes out.",
    product: "And that's exactly why we built Vincify. We don't just give you the answer; we teach you the concept so you keep it forever.",
    cta: "Own your knowledge and get Vincify.",
    description: "Don't outsource your brain to Google. 🧠 #Learning #Memory #Smart #Vincify",
    keywords: ["Google", "Memory", "Knowledge"]
  },
  "23-Evening": {
    category: ContentCategory.A,
    narratorScript: "This number controls the universe. 1.618. The Golden Ratio. Da Vinci used it in the Mona Lisa. Nature uses it in pinecones and galaxies. It is the code of beauty. But math class made it boring. And that's exactly why we built Vincify. To show you that Mathematics is the language of nature. Learn the 'Sacred Geometry' topic today. Decode the universe—link in bio.",
    hook: "This number controls the universe.",
    value: "1.618. The Golden Ratio. It's the code of beauty in nature and galaxies.",
    product: "And that's exactly why we built Vincify. To show you that Mathematics is the language of nature.",
    cta: "Decode the universe—link in bio.",
    description: "Math is beautiful. 🌻 #Fibonacci #Math #GoldenRatio #Vincify",
    keywords: ["GoldenRatio", "Math", "Nature"]
  },

  "24-Morning": {
    category: ContentCategory.A,
    narratorScript: "It took him 16 years to paint the Mona Lisa. Da Vinci was a massive procrastinator. He carried the painting around for decades, adding one tiny brushstroke at a time. He knew that perfection takes time. But we want instant results. And that's exactly why we built Vincify. To build a habit of slow, steady progress. You don't need to learn everything today. Just learn one thing. Start your masterpiece and download Vincify.",
    hook: "It took him 16 years to paint the Mona Lisa.",
    value: "Da Vinci was a massive procrastinator. He knew that perfection takes time, but we want instant results.",
    product: "And that's exactly why we built Vincify. To build a habit of slow, steady progress.",
    cta: "Start your masterpiece and download Vincify.",
    description: "Slow progress is still progress. 🐢 #MonaLisa #Procrastination #Art #Vincify",
    keywords: ["Patience", "Progress", "MonaLisa"]
  },
  "24-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Speed reading is a scam. You aren't absorbing information; you are skimming. If you want to actually understand deep concepts, you need to slow down and engage. You can't speed-read wisdom. And that's exactly why we built Vincify. We prioritize comprehension over speed. It’s micro-learning, but it’s deep. Read to learn, not to finish. Get Vincify.",
    hook: "Speed reading is a scam.",
    value: "You are skimming, not absorbing. You can't speed-read wisdom.",
    product: "And that's exactly why we built Vincify. We prioritize comprehension over speed. It’s micro-learning, but it’s deep.",
    cta: "Read to learn, not to finish. Get Vincify.",
    description: "Stop skimming. Start understanding. 📖 #SpeedReading #BookTok #Learning #Vincify",
    keywords: ["Reading", "Skimming", "Mastery"]
  },
  "24-Evening": {
    category: ContentCategory.A,
    narratorScript: "The Prior of the monastery wanted to fire Da Vinci. Why? Because Da Vinci would stand in front of 'The Last Supper' for 3 days without painting a single stroke. He said, 'Men of lofty genius sometimes accomplish the most when they work the least.' He was thinking. And that's exactly why we built Vincify. Thinking is work. Give yourself the tools to think better. Load your brain with ideas worth thinking about. Link in bio.",
    hook: "The Prior of the monastery wanted to fire Da Vinci.",
    value: "He spent 3 days thinking before painting. 'Men of lofty genius accomplish most when they work least'.",
    product: "And that's exactly why we built Vincify. Thinking is work. Give yourself the tools to think better.",
    cta: "Link in bio.",
    description: "Staring at a wall is productive... if you're a genius. 🖼️ #DeepWork #Creativity #History #Vincify",
    keywords: ["Thinking", "DeepWork", "Genius"]
  },

  "25-Morning": {
    category: ContentCategory.B,
    narratorScript: "Steve Jobs stole his philosophy from Da Vinci. Jobs said, 'Creativity is just connecting things.' That is exactly what Da Vinci did. He connected art to engineering. But you cannot connect dots if you don't have any dots to begin with. And that's exactly why we built Vincify. To help you collect more dots. Learn History, Economics, and Science. The more you know, the more creative you become. Collect dots and download Vincify.",
    hook: "Steve Jobs stole his philosophy from Da Vinci.",
    value: "'Creativity is just connecting things.' You cannot connect dots if you don't have any dots to begin with.",
    product: "And that's exactly why we built Vincify. To help you collect more dots. Learn History, Economics, and Science.",
    cta: "Collect dots and download Vincify.",
    description: "Creativity is an input/output game. Increase the input. 🍎 #SteveJobs #Creativity #Innovation #Vincify",
    keywords: ["Jobs", "Creativity", "Innovation"]
  },
  "25-Mid-Day": {
    category: ContentCategory.A,
    narratorScript: "Why did Da Vinci dissect a bear? He wanted to design a better mechanical glove. He realized the bear's paw had the perfect pulley system for strength. This is called Biomimicry. Innovation comes from looking outside your field. And that's exactly why we built Vincify. If you're a designer, learn biology. If you're a coder, learn architecture. Look outside and get Vincify.",
    hook: "Why did Da Vinci dissect a bear?",
    value: "To design a better glove. Biomimicry means looking outside your field for innovation.",
    product: "And that's exactly why we built Vincify. If you're a designer, learn biology. If you're a coder, learn architecture.",
    cta: "Look outside and get Vincify.",
    description: "Nature did it first. 🐻 #Biomimicry #Design #Engineering #Vincify",
    keywords: ["Biomimicry", "Design", "Nature"]
  },
  "25-Evening": {
    category: ContentCategory.C,
    narratorScript: "They built this without electricity. When you look at history, you realize giants walked the earth. They didn't have the internet, but they had focus. We have the internet, but we have no focus. And that's exactly why we built Vincify. To give you the knowledge of the ancients with the technology of the future. Build a legacy and check the link in bio.",
    hook: "They built this without electricity.",
    value: "History's giants had focus. We have the internet, but no focus.",
    product: "And that's exactly why we built Vincify. To give you the knowledge of the ancients with the technology of the future.",
    cta: "Build a legacy and check the link in bio.",
    description: "Giants walked the earth. 🏛️ #Museum #Motivation #History #Vincify",
    keywords: ["History", "Legacy", "Focus"]
  },

  "26-Morning": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci loved ugly people. He would follow interesting-looking people around Milan for hours just to memorize their noses and chins. He found beauty in the 'grotesque' and unique. He was the ultimate people watcher. And that's exactly why we built Vincify. To help you understand people better. Learn Psychology, Sociology, and Anatomy. Understand humans and download Vincify.",
    hook: "Da Vinci loved ugly people.",
    value: "He followed people for hours to memorize their unique features. He was the ultimate people watcher.",
    product: "And that's exactly why we built Vincify. To help you understand people better. Learn Psychology, Sociology, and Anatomy.",
    cta: "Understand humans and download Vincify.",
    description: "Weird is interesting. 👃 #Art #PeopleWatching #Psychology #Vincify",
    keywords: ["Psychology", "Anatomy", "People"]
  },
  "26-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Is listening the same as reading? Controversial take: No. Reading requires more cognitive effort, which means higher retention. Audio is great, but text forces your brain to visualize the concept. You can't skim deep work. And that's exactly why we built Vincify. We use text-based micro-learning to ensure you are actually focusing, not just listening while doing laundry. Focus your eyes and get Vincify.",
    hook: "Is listening the same as reading?",
    value: "Reading requires more cognitive effort and leads to higher retention. You can't skim deep work.",
    product: "And paradoxically that's exactly why we built Vincify. We use text-based micro-learning to ensure you are actually focusing.",
    cta: "Focus your eyes and get Vincify.",
    description: "Do the hard work. Read. 📚 #Audiobooks #Reading #Cognition #Vincify",
    keywords: ["Reading", "Retention", "Effort"]
  },
  "26-Evening": {
    category: ContentCategory.A,
    narratorScript: "This is the only tattoo a Polymath should get: Ostinato Rigore. Da Vinci signed his later works with this phrase. It means 'Stubborn Rigor.' He didn't rely on talent. He relied on stubborn, relentless discipline. But discipline is hard to maintain alone. And that's exactly why we built Vincify. Build your daily rigor with a learning streak. Be stubborn and check the link in bio.",
    hook: "This is the only tattoo a Polymath should get: Ostinato Rigore.",
    value: "It means 'Stubborn Rigor'. He relied on stubborn, relentless discipline, not just talent.",
    product: "And that's exactly why we built Vincify. Build your daily rigor with a learning streak.",
    cta: "Be stubborn and check the link in bio.",
    description: "Stubborn Rigor. Make it your mantra. 💪 #Discipline #Mantra #DaVinci #Vincify",
    keywords: ["Discipline", "Rigor", "Mantra"]
  },

  "27-Morning": {
    category: ContentCategory.A,
    narratorScript: "Helicopters didn't exist in 1480. Except on paper. Da Vinci sketched the 'Aerial Screw'. Engineers analyzed it recently—it wouldn't have flown because of weight, but the physics were correct. He was limited by materials, not by his mind. And that's exactly why we built Vincify. Don't let your current skills limit your imagination. Expand your mind so you're ready when the technology catches up. Dream big and download Vincify.",
    hook: "Helicopters didn't exist in 1480. Except on paper.",
    value: "He was limited by materials, not by his mind. The physics were correct.",
    product: "And that's exactly why we built Vincify. Don't let your current skills limit your imagination. Expand your mind.",
    cta: "Dream big and download Vincify.",
    description: "Vision > Materials. 🚁 #Helicopter #Invention #Physics #Vincify",
    keywords: ["Helicopter", "Physics", "Imagination"]
  },
  "27-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Will AI replace you? Here is the truth: AI will replace the doers. It will not replace the thinkers. It will not replace the people who ask the right questions. But asking good questions requires deep knowledge. And that's exactly why we built Vincify. We train you to ask better questions. Build the curiosity that AI cannot replicate. Stay human and get Vincify.",
    hook: "Will AI replace you?",
    value: "AI replaces doers, not thinkers. Asking good questions requires deep knowledge.",
    product: "And that's exactly why we built Vincify. We train you to ask better questions. Build the curiosity that AI cannot replicate.",
    cta: "Stay human and get Vincify.",
    description: "AI gives answers. You give questions. 🤖❓ #AI #Future #Philosophy #Vincify",
    keywords: ["AI", "Future", "Questions"]
  },
  "27-Evening": {
    category: ContentCategory.A,
    narratorScript: "Da Vinci didn't have a satellite. Yet he drew this map of Imola from a bird's eye view. He used geometry and pacing to calculate the exact angles from the ground and reconstructed the city in his mind. He had superpowers of spatial awareness. And that's exactly why we built Vincify. Geometry, Cartography, Spatial Awareness. These are superpowers you can learn. Map your world and check the link in bio.",
    hook: "Da Vinci didn't have a satellite.",
    value: "He used geometry to reconstruct the city in his mind from a bird's eye view. He had incredible spatial awareness.",
    product: "And that's exactly why we built Vincify. Geometry, Cartography, Spatial Awareness. These are superpowers you can learn.",
    cta: "Map your world and check the link in bio.",
    description: "The first satellite image was drawn by hand. 🗺️ #Maps #Cartography #Genius #Vincify",
    keywords: ["Maps", "Geometry", "Satellite"]
  },

  "28-Morning": {
    category: ContentCategory.A,
    narratorScript: "The most expensive painting ever sold has a mistake. The Salvator Mundi sold for 450 million dollars, but the crystal orb in Jesus' hand doesn't refract the light correctly. Da Vinci knew optics perfectly. So why did he paint it 'wrong'? Was it a message? Or is the painting a fake? And that's exactly why we built Vincify. Art History is full of mysteries. Solve them. Learn Art History today. Download Vincify.",
    hook: "The most expensive painting ever sold has a mistake.",
    value: "The crystal orb doesn't refract light correctly. Why did he paint it 'wrong'?",
    product: "And that's exactly why we built Vincify. Art History is full of mysteries. Solve them. Learn Art History today.",
    cta: "Download Vincify.",
    description: "A mistake? Or a code? 🔮 #ArtMystery #SalvatorMundi #DaVinci #Vincify",
    keywords: ["Art", "Mystery", "Optics"]
  },
  "28-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Life is just a series of algorithms. Evolution is an algorithm. The stock market is an algorithm. Social interactions are algorithms. If you understand the code, you can hack the system. But most people only see the surface. And that's exactly why we built Vincify. To teach you the underlying code. Game Theory. Computer Science. Evolutionary Biology. Learn the code of reality. Hack the system and get Vincify.",
    hook: "Life is just a series of algorithms.",
    value: "Evolution and markets are algorithms. If you understand the code, you can hack the system.",
    product: "And that's exactly why we built Vincify. To teach you the underlying code. Game Theory. Computer Science. Evolutionary Biology.",
    cta: "Hack the system and get Vincify.",
    description: "Everything is code. 💻 #SimulationTheory #Algorithms #Learning #Vincify",
    keywords: ["Algorithms", "Reality", "Hack"]
  },
  "28-Evening": {
    category: ContentCategory.C,
    narratorScript: "We use our phones to escape reality. But what if you used it to understand reality? Digital Detox doesn't mean throwing your phone away. It means using it with intention. And that's exactly why we built Vincify. To change your relationship with your screen. Don't escape. Learn. Be present and check the link in bio.",
    hook: "We use our phones to escape reality.",
    value: "Digital Detox means using your phone with intention, not throwing it away.",
    product: "And that's exactly why we built Vincify. To change your relationship with your screen.",
    cta: "Be present and check the link in bio.",
    description: "Use tech with intention. 🍂 #DigitalWellness #FallVibes #Stoicism #Vincify",
    keywords: ["DigitalDetox", "Intention", "Wellness"]
  },

  "29-Morning": {
    category: ContentCategory.A,
    narratorScript: "Elon Musk uses it. Da Vinci invented it. First Principles Thinking. Da Vinci didn't accept 'that's how it's done.' He broke everything down to its fundamental truths—anatomy, physics, light—and built up from there. But school teaches you to memorize by analogy. And that's exactly why we built Vincify. We teach you the foundations of every subject so you can think from the bottom up. Build from the bottom and download Vincify.",
    hook: "Elon Musk uses it. Da Vinci invented it.",
    value: "First Principles Thinking. Da Vinci broke everything down to its fundamental truths. School just teaches analogies.",
    product: "And that's exactly why we built Vincify. We teach you the foundations of every subject so you can think from the bottom up.",
    cta: "Build from the bottom and download Vincify.",
    description: "Boil it down to the truth. 🧱 #FirstPrinciples #ElonMusk #ThinkingModels #Vincify",
    keywords: ["FirstPrinciples", "ElonMusk", "Thinking"]
  },
  "29-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Even Da Vinci felt like a failure. On his deathbed, he apologized to God and Man, saying he 'had not executed his work as he should have.' Imagine that. If the greatest genius in history felt like an imposter, you are doing just fine. And that's exactly why we built Vincify. To be your companion on the long road of self-improvement. Keep going. Keep learning. Get Vincify.",
    hook: "Even Da Vinci felt like a failure.",
    value: "He apologized on his deathbed for not doing enough. If he felt like an imposter, you are doing fine.",
    product: "And that's exactly why we built Vincify. To be your companion on the long road of self-improvement.",
    cta: "Keep going. Keep learning. Get Vincify.",
    description: "You are not an imposter. You are a student. 😔 #ImposterSyndrome #Motivation #MentalHealth #Vincify",
    keywords: ["ImposterSyndrome", "Motivation", "Failure"]
  },
  "29-Evening": {
    category: ContentCategory.A,
    narratorScript: "Did Leonardo da Vinci actually invent the bicycle? A sketch of a bike was found in his notebooks in the 1970s. Some say it's a fake added by monks later. Others say he foresaw it. The controversy is huge. History isn't a straight line; it's a messy debate. And that's exactly why we built Vincify. Dive into historical controversies and decide for yourself. Ride the history—link in bio.",
    hook: "Did Leonardo da Vinci actually invent the bicycle?",
    value: "The sketch is a massive historical controversy. History is a messy debate.",
    product: "And that's exactly why we built Vincify. Dive into historical controversies and decide for yourself.",
    cta: "Ride the history—link in bio.",
    description: "Fake or Fortune? 🚲 #HistoryMystery #Bicycle #DaVinci #Vincify",
    keywords: ["Bicycle", "Controversy", "History"]
  },

  "30-Morning": {
    category: ContentCategory.A,
    narratorScript: "The hardest subject to learn is yourself. Da Vinci used mirrors constantly. To write, to check his art, and metaphorically to check his own bias. He was obsessed with self-correction. But we often lack the tools to see ourselves clearly. And that's exactly why we built Vincify. It isn't just about facts. Use the 'Psychology' lessons to hold a mirror to your own mind. Know thyself and download Vincify.",
    hook: "The hardest subject to learn is yourself.",
    value: "Da Vinci used mirrors to check his own bias. He was obsessed with self-correction.",
    product: "And that's exactly why we built Vincify. Use the 'Psychology' lessons to hold a mirror to your own mind.",
    cta: "Know thyself and download Vincify.",
    description: "The ultimate subject is You. 🪞 #SelfAwareness #Psychology #Growth #Vincify",
    keywords: ["SelfAwareness", "Psychology", "Reflection"]
  },
  "30-Mid-Day": {
    category: ContentCategory.B,
    narratorScript: "Are you an 'I' or a 'T'? An 'I' person has deep knowledge in one thing. A 'T' person has deep knowledge in one thing AND broad knowledge in everything else. 'T' people run the world. But your job only trains you to be an 'I'. And that's exactly why we built Vincify. Your job gives you the vertical bar. Vincify gives you the horizontal bar. Be a T-shaped person. Get the T-shape and get Vincify.",
    hook: "Are you an 'I' or a 'T'?",
    value: "T-shaped people run the world. Your job only trains the vertical bar.",
    product: "And that's exactly why we built Vincify. Your job gives you the vertical bar. Vincify gives you the horizontal bar.",
    cta: "Get the T-shape and get Vincify.",
    description: "Width + Depth = Unstoppable. 🏗️ #CareerGoals #TShaped #Skills #Vincify",
    keywords: ["Career", "Skills", "Generalist"]
  },
  "30-Evening": {
    category: ContentCategory.A,
    narratorScript: "If Da Vinci were alive today, he wouldn't use paper. He was an innovator. He used the best technology available. Today, that technology is AI. He would have loved having a tool that could answer his questions instantly. But he didn't have it. You do. And that's exactly why we built Vincify. Carry his spirit in your pocket. It is the Codex Leicester for the digital age. Fill it with your curiosity. Become the next Renaissance Man and download Vincify.",
    hook: "If Da Vinci were alive today, he wouldn't use paper.",
    value: "He used the best tech available. Today, that is AI. He would have loved instant answers.",
    product: "And that's exactly why we built Vincify. Carry his spirit in your pocket.",
    cta: "Become the next Renaissance Man and download Vincify.",
    description: "30 Days of Polymathy. Keep the streak alive. 📱✨ #Vincify #DaVinci #TheEnd #NewBeginning",
    keywords: ["Renaissance", "AI", "Curiosity"]
  }
};

/**
 * Procedural logic to generate the full 30-day schedule.
 * Now fully populated with 90 specific narrative scripts.
 */
export const generateStaticSchedule = (): VideoScript[] => {
  const scripts: VideoScript[] = [];
  const slots = [TimeSlot.Morning, TimeSlot.MidDay, TimeSlot.Evening];

  for (let day = 1; day <= 30; day++) {
    slots.forEach((slot, i) => {
      const key = `${day}-${slot}`;
      const fixed = fixedPosts[key];

      if (fixed) {
        scripts.push({
          id: `script-${day}-${i}`,
          day,
          slot,
          category: fixed.category || ContentCategory.A,
          narratorScript: fixed.narratorScript || "",
          hook: fixed.hook || "",
          value: fixed.value || "",
          product: fixed.product || "",
          cta: fixed.cta || "",
          description: fixed.description || "",
          keywords: fixed.keywords || [],
          completed: false
        });
      } else {
        // Fallback (should not be hit if all 90 are defined above)
        scripts.push({
          id: `script-${day}-${i}`,
          day,
          slot,
          category: ContentCategory.A,
          narratorScript: "Master your curiosity with Vincify.",
          hook: "Strategy Awaiting Input",
          value: "Master your curiosity with Vincify.",
          product: "Download Vincify on the App Store.",
          cta: "Download Now.",
          description: "Curiosity mastered. #Vincify",
          keywords: ["Vincify"],
          completed: false
        });
      }
    });
  }

  return scripts;
};
