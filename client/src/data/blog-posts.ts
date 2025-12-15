import image1 from "@assets/Dec_1_1_1765798293355.png";
import image2 from "@assets/stock_images/professional_podcast_79da8552.jpg";
import image3 from "@assets/stock_images/audio_editing_softwa_98a48239.jpg";
import image4 from "@assets/stock_images/youtube_video_record_6e72da94.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string; // HTML or Markdown content
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "You Need To Know What You Are Aiming At",
    excerpt: "Most podcasts fail because they copy success instead of building something sustainable. Reality matters.",
    date: "Dec 14, 2025",
    author: "Tony Walsh",
    category: "Strategy",
    image: image1,
    content: `
      <p class="lead text-xl text-gray-600 font-medium mb-8">
        Many podcasts move people. Many more keep doing the exact same thing and expect a different result.
      </p>

      <p>
        The amount of job posts I see from people recording in their bedroom with AirPods and expecting Diary of a CEO level edits is wild. Reality matters. Managing your budget and staying consistent is far more important than having an intro with fancy motion graphics.
      </p>

      <p>
        Being able to speak well, keep things interesting, avoid asking the same questions every episode, find guests who actually have something to say, and stay within your lane while slowly expanding it. That matters more than chasing the audience of the next so called superstar guest, which usually ends up being their family and colleagues anyway.
      </p>

      <p>
        From what I see in the podcast industry, there is a massive cohort of people who have a new business idea at 2am and convince themselves they somehow have the grit, budget, and stamina to bring it into reality.
      </p>

      <p>
        The barrier to entry keeps getting lower. Tools are everywhere. But if you think a 30 dollar subscription and a webcam will turn your podcast into a revenue generating machine, you will not last longer than three months. You will burn out, or the analytics on your best performing reels will deflate you enough to quit.
      </p>

      <p>
        There is a lot of snake oil in this industry. As far as I am concerned, there is no playbook beyond authenticity and consistency.
      </p>

      <p>
        You can hire a strategist, a new editor, a social media manager, or someone who thinks SEO is the answer to everything. But if you choose a subject and refuse to adapt when something clearly works, you end up strangling your own success. Things stay the same. One hundred views here. Ten thousand views on a reel there. No consistent fanbase. No community. No foundation.
      </p>

      <p>
        The algorithm does not reward quantity for the sake of it. Providing value to a community is the only sane attitude to start with.
      </p>

      <p>
        The most successful podcasts in the world talk about many topics, but those topics affect everyone. Usually business, health, and well being.
      </p>

      <p>
        When I got my first break with a big client, they were in a slump. They did not know how to proceed or why things had stalled. I asked them why they started. Something they clearly had not thought about in a long time. They had become victims of their own success and were burned out.
      </p>

      <p>
        But they had done one thing right. They focused on topics people genuinely needed education on. They built a community around that. That community carried them to national success.
      </p>

      <p>
        I am not claiming to have all the answers. But if you believe there is a fixed playbook for succeeding in podcasting, you will not last. You will burn money thinking engagement is your problem, copying the style of someone else’s success, when what you really need is a stable foundation and a plan you can maintain mentally and financially for at least six months.
      </p>

      <p>
        Building a good team. Communicating properly. Quality over quantity. Recognising that LinkedIn echo chambers do not equal real success.
      </p>

      <p>
        At the end of the day, who are you actually helping?
      </p>
      
      <ul class="list-disc pl-6 space-y-2 my-6 font-medium text-gray-800">
        <li>Your bottom line?</li>
        <li>Your analytics?</li>
        <li>Your ego?</li>
      </ul>

      <p>
        A podcast is now a core arm of many companies’ marketing efforts. But without planning, nothing changes.
      </p>

      <p>
        Value matters more than ticking boxes. Not every episode needs this, this, and this. The algorithm sees AI slop instantly. No value. No community. No reason to care.
      </p>

      <p>
        I am lucky to work in an industry I genuinely believe in. Podcasts have brought expert insight and education to millions for free.
      </p>

      <p>
        Ask yourself honestly...
      </p>

      <ul class="list-disc pl-6 space-y-2 my-6 font-medium text-gray-800">
        <li>Are you an expert?</li>
        <li>Do you speak to experts?</li>
        <li>Can you talk fluently about your topic without repeating the same talking points every episode?</li>
        <li>How could you prepare better?</li>
        <li>What do you actually want from this podcast in one year?</li>
        <li>Is it self sustaining?</li>
      </ul>

      <p>
        You need to know what you are aiming at if you want any chance of hitting it.
      </p>
    `
  },
  {
    id: 2,
    title: "How to Launch a Podcast in 2025: The Ultimate Guide",
    excerpt: "Everything you need to know about equipment, hosting, and promoting your new show.",
    date: "Dec 10, 2025",
    author: "Tony Walsh",
    category: "Guides",
    image: image2,
    content: `
      <p class="lead text-xl text-gray-600 font-medium mb-8">
        Starting a podcast is easier than ever, but standing out is harder. Here is everything you need to know to launch successfully this year.
      </p>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      <h2>1. Choose Your Niche</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <blockquote>
        "The medium of podcasting is the most intimate way to connect with an audience."
      </blockquote>

      <h2>2. Get the Right Equipment</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      
      <ul class="list-disc pl-6 space-y-2 my-6 font-medium text-gray-800">
        <li>High quality microphone (USB or XLR)</li>
        <li>Audio interface (if using XLR)</li>
        <li>Pop filter and boom arm</li>
        <li>Closed-back headphones</li>
      </ul>

      <h2>3. Recording and Editing</h2>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    `
  },
  {
    id: 3,
    title: "5 Audio Editing Tips for Crisp Vocals",
    excerpt: "Learn the secrets of compression and EQ to make your voice sound professional.",
    date: "Dec 05, 2025",
    author: "Tony Walsh",
    category: "Production",
    image: image3,
    content: `
      <p class="lead text-xl text-gray-600 font-medium mb-8">
        Crisp vocals are the hallmark of a professional podcast. Here's how to achieve that studio-quality sound from your home setup.
      </p>
      <p>Content coming soon...</p>
    `
  },
  {
    id: 4,
    title: "Why Video Podcasts are Taking Over YouTube",
    excerpt: "The data behind the rise of video podcasting and why you should switch today.",
    date: "Nov 28, 2025",
    author: "Tony Walsh",
    category: "Trends",
    image: image4,
    content: `
      <p class="lead text-xl text-gray-600 font-medium mb-8">
        YouTube is now the biggest podcast listening platform. If you aren't doing video, you're missing out on massive growth.
      </p>
      <p>Content coming soon...</p>
    `
  }
];
