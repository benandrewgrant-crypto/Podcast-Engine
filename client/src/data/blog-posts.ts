import image1 from "@assets/Dec_1_1_1765798293355.png";
import image_hooks from "@assets/IMG_0132_1765798633216.png";
import image_sandwich from "@assets/IMG_0134_1765798983947.png";
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
    title: "Stop Hoping For Hooks: How To Build Them Before You Hit Record",
    excerpt: "Most creators treat hooks like lottery wins. Reality is, hooks are not found, they are built.",
    date: "Aug 21, 2025",
    author: "Tony Walsh",
    category: "Guides",
    image: image_hooks,
    content: `
      <p class="lead text-xl text-gray-600 font-medium mb-8">
        Most creators treat hooks like lottery wins. They record for hours, then pray they’ll “find something” in the edit that works for YouTube or short form. That is why so many videos open with 15 seconds of slow death.
      </p>
      
      <p>
        The reality is this.. hooks are not found, they are built. And the best ones are locked in during pre production.
      </p>

      <p>
        Here is how you actually do it.
      </p>

      <h2>1. Start with the title and thumbnail in mind</h2>
      <p>
        On YouTube, your hook starts before the video even plays. If you know the promise you’re making in the title and thumbnail, you can design your opening moments to deliver on it immediately. No generic intros, no “thanks for joining us” fluff. The viewer should feel they’re already mid-conversation when the video starts.
      </p>

      <h2>2. Script your first 15 seconds like it’s a trailer</h2>
      <p>
        The first line should create tension, surprise, or an unanswered question. You can even script two or three options before recording and see which one lands better in the room. Do not trust yourself to improvise brilliance when the cameras are rolling.
      </p>

      <h2>3. Plant hook moments throughout the conversation</h2>
      <p>
        A great hook does not have to live at the very start. Drop intentional “mini hooks” every few minutes. These are moments of high intrigue, strong emotion, or bold claims you can repurpose for clips and shorts. Think of them as checkpoints for retention.
      </p>

      <h2>4. Direct your guest towards them</h2>
      <p>
        If you are interviewing, guide the conversation toward topics you know will yield hookable lines. That might mean framing a question to provoke a surprising opinion or asking them to recall a turning point story with detail and emotion.
      </p>

      <h2>5. Leave something unsaid</h2>
      <p>
        In both long and short form, curiosity is a weapon. A hook works when it gives just enough information to make the viewer need the rest. Your job in pre production is to decide what to reveal and what to hold back until they’ve committed to watching longer.
      </p>

      <h2>6. Rehearse it</h2>
      <p>
        Yes, rehearse. Say the line out loud. Test the pacing, tone, and emphasis. Record it into your phone and listen back. The best hooks sound natural, not read.
      </p>

      <p>
        When you walk into a recording with hooks already in your pocket, the edit stops being a rescue mission. You are not rummaging through hours of footage for something that might work. You are executing a plan that was built to win before the camera even turned on.
      </p>
    `
  },
  {
    id: 3,
    title: "Stop Making Content That Looks Like Everyone Else’s Half-Eaten Sandwich",
    excerpt: "The internet is drowning in copy-paste creativity. Every feed you scroll is just a conveyor belt of the same talking heads.",
    date: "Aug 15, 2025",
    author: "Tony Walsh",
    category: "Opinion",
    image: image_sandwich,
    content: `
      <p class="lead text-xl text-gray-600 font-medium mb-8">
        The internet is drowning in copy-paste creativity. Every feed you scroll is just a conveyor belt of the same talking heads, the same camera angles, the same “five secrets they don’t want you to know” headlines. If I see one more reel start with “No one’s talking about this…”, I might actually lie down in traffic.
      </p>

      <p>
        It wasn’t always like this. People used to create because they had something worth saying. Now most of it is designed to be algorithm bait… a quick dopamine hit dressed in a TikTok-friendly font. And yes, it works. The clicks go up, the followers roll in, and you can convince yourself you are building community while really you are just making fast food for eyeballs.
      </p>

      <p>
        Here’s the problem. When you start choosing topics because they will trend instead of because you care about them, you quietly swap your voice for a formula. Your “brand” becomes another beige wall in a hallway of beige walls.
      </p>

      <p>
        The antidote is not complicated, but it is hard. Stop thinking in terms of “how do I get more people in the door” and start asking “how do I make the people already here feel like they have found something worth their time”.
      </p>

      <p>
        That means digging deep. Making things that take time. Building spaces and experiences where your audience feels fed, not harvested. Honest updates. Experiments that could flop but might also become the thing people remember you for. And for the love of all that is holy, resist the urge to fill every silence with a viral hook.
      </p>

      <p>
        Growth might still happen. It might even explode. But it will be the kind of growth that sticks… not the kind that vanishes the second your clip gets buried under 300 other “must-see” moments. The internet already has enough shallow paddling pools. Be the deep end. The kind where people have to leave their phone on the side and actually swim.
      </p>
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
