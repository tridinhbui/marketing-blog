import { BlogPost, Category, Resource } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'adidas-case-study',
    title: 'Adidas: When Culture Eats Strategy for Breakfast',
    subtitle: 'How Adidas regained its cool factor by focusing on subcultures rather than mass appeal.',
    category: Category.CASE_STUDY,
    tags: ['Branding', 'Culture', 'Fashion'],
    image: '/images/adidas-sneakers.jpg',
    date: 'Oct 12, 2023',
    readTime: '6 min read',
    isFeatured: true,
    caseStudyMeta: {
      brand: 'Adidas',
      industry: 'Apparel / Sports',
      problem: 'Losing relevance with Gen Z due to overly corporate messaging.',
      approach: 'Decentralized storytelling through local creators and subcultures.',
      keyInsight: 'You do not build culture. You support the people who do.',
    },
    content: {
      intro: "Adidas was stuck. While Nike was mastering the hero's journey, Adidas felt like a legacy player relying on past glory. This case study explores how they pivoted from top-down advertising to bottom-up cultural integration.",
      keyPoints: [
        'Shifted 30% of media budget to community activation.',
        'Partnered with micro-influencers instead of just mega-stars.',
        'Revived the Originals line by letting creators remix heritage assets.'
      ],
      sections: [
        {
          heading: 'The Relevance Gap',
          body: "In the mid-2010s, Adidas saw sales stagnate in key urban markets. Their data showed high awareness but low 'cool factor'. They were a gym brand, not a lifestyle brand."
        },
        {
          heading: 'The "Open Source" Strategy',
          body: "They opened their archives to collaborators like Kanye West, Pharrell, and later, thousands of local creators. The strategy was risky: give up control of the brand guidelines to gain authenticity."
        }
      ],
      takeaways: "Brands today must move from 'broadcasting' to 'facilitating'. Control is the enemy of cool."
    }
  },
  {
    id: 'romano-vip',
    title: 'Romano: Selling the Gentleman Dream in Vietnam',
    subtitle: 'Decoding the positioning that made Romano synonymous with male grooming.',
    category: Category.CASE_STUDY,
    tags: ['Local Market', 'Positioning', 'FMCG'],
    image: '/images/romano-shampoo.jpg',
    date: 'Sep 28, 2023',
    readTime: '5 min read',
    caseStudyMeta: {
      brand: 'Romano',
      industry: 'FMCG / Personal Care',
      problem: 'Competing with global giants like X-Men in a price-sensitive market.',
      approach: 'Distinct emotional positioning: The Italian Gentleman.',
      keyInsight: 'Men do not just want to smell good; they want to feel successful.',
    },
    content: {
      intro: "In a crowded shelf of blue bottles, Romano stood out by selling a specific fantasy: Italian sophistication. It wasn't about cleaning hair; it was about upgrading your status.",
      keyPoints: [
        'Consistent visual identity (Green) vs competitors (Blue/Red).',
        'Focused on the aspirational "VIP" lifestyle.',
        'Masterful use of scent as a brand signature.'
      ],
      sections: [
        {
          heading: 'Visual Differentiation',
          body: "While X-Men owned the 'Hero/Action' territory with blue packaging, Romano chose a deep, premium green. This immediately signaled a different shelf tier, even at a similar price point."
        },
        {
          heading: 'The VIP Narrative',
          body: "Their campaigns consistently feature the Romano man in suits, luxury settings, and commanding respect. They sell confidence in a bottle."
        }
      ],
      takeaways: "Functional benefits get you on the shelf. Emotional benefits get you in the cart."
    }
  },
  {
    id: 'starbucks-growth',
    title: 'Starbucks: The Third Place in a Digital World',
    subtitle: 'Is the physical experience still relevant when 30% of orders are mobile?',
    category: Category.GROWTH,
    tags: ['Retail', 'Digital Transformation', 'CX'],
    image: '/images/starbucks-drinks.jpg',
    date: 'Nov 02, 2023',
    readTime: '8 min read',
    isFeatured: true,
    content: {
      intro: "Starbucks built an empire on being the 'Third Place' between home and work. But with the rise of grab-and-go and mobile ordering, the company is fundamentally changing its operations without trying to lose its soul.",
      keyPoints: [
        'Mobile Order & Pay now accounts for huge revenue share.',
        'Store layouts are shrinking to accommodate pickup-only behaviors.',
        'Loyalty program drives frequency more than product innovation.'
      ],
      sections: [
        {
          heading: 'Friction vs. Connection',
          body: "The classic barista conversation is disappearing. Starbucks is betting that speed is a form of service. But the risk is becoming a vending machine for caffeine."
        },
        {
          heading: 'The Data Engine',
          body: "Deep Down, Starbucks is a data company. Their app knows your routine better than you do, pushing offers exactly when your habit loop triggers."
        }
      ],
      takeaways: "Convenience is a commodity. Experience is the differentiator. Balancing the two is the hardest act in modern retail."
    }
  },
  {
    id: 'shopee-machine',
    title: 'The Shopee Marketing Machine: Localized Gamification',
    subtitle: 'How Shopee beat Lazada by understanding the Southeast Asian love for noise and games.',
    category: Category.STRATEGY,
    tags: ['E-commerce', 'Gamification', 'Growth Hacking'],
    image: 'https://picsum.photos/800/400?random=4',
    date: 'Aug 15, 2023',
    readTime: '7 min read',
    content: {
      intro: "Shopee didn't just build a marketplace; they built an entertainment app that sells things. This 'Shoppertainment' model proved that in SEA, chaotic fun beats clean design.",
      keyPoints: [
        'Baby Shark adaptation was a masterclass in earworm marketing.',
        'In-app games drive daily active usage (DAU) even without purchase intent.',
        'Hyper-localization of campaigns per country.'
      ],
      sections: [
        {
          heading: 'The Engagement Loop',
          body: "Users open Shopee to water a digital tree or play a bubble game. Once they are in, they browse. It is a funnel that starts with dopamine, not search."
        },
        {
          heading: 'Viral Jingles',
          body: "They understood that mass awareness in SEA requires memorable, annoying, repetitive audio triggers. It is not high art, but it is high effectiveness."
        }
      ],
      takeaways: "Don't design for the design community. Design for the user's actual behavior."
    }
  },
  {
    id: 'psychology-viral',
    title: 'The Psychology Behind Viral Campaigns',
    subtitle: 'Why we share: Social currency, triggers, and emotion.',
    category: Category.CONSUMER,
    tags: ['Psychology', 'Viral', 'Content'],
    image: 'https://picsum.photos/800/400?random=5',
    date: 'Dec 01, 2023',
    readTime: '6 min read',
    content: {
      intro: "Virality isn't luck. It's engineering. By understanding the STEPPS framework (Jonah Berger), we can reverse engineer why some campaigns fly and others die.",
      keyPoints: [
        'Social Currency: Does sharing this make me look good?',
        'Triggers: What environmental cue makes me think of this product?',
        'Emotion: High arousal emotions (awe, anger) drive sharing.'
      ],
      sections: [
        {
          heading: 'The Ego of Sharing',
          body: "We share things that refine our identity. If a campaign makes the user feel smart, insider, or funny, they will spread it for you."
        }
      ],
      takeaways: "Stop trying to make a viral video. Start trying to make your users look cool."
    }
  },
  {
    id: 'positioning-sticks',
    title: 'Creating a Positioning That Sticks',
    subtitle: 'The battle for the mind is won with simplicity, not features.',
    category: Category.STRATEGY,
    tags: ['Positioning', 'Branding'],
    image: 'https://picsum.photos/800/400?random=6',
    date: 'Jan 10, 2024',
    readTime: '5 min read',
    content: {
      intro: "Positioning is not what you do to a product. Positioning is what you do to the mind of the prospect. It is about owning a word.",
      keyPoints: [
        'Volvo owns Safety.',
        'BMW owns Driving.',
        'What do you own?'
      ],
      sections: [
        {
          heading: 'The Trap of "More"',
          body: "Most brands try to be everything: high quality, low price, fast service. That is not positioning; that is wishful thinking. Sacrifice is the essence of strategy."
        }
      ],
      takeaways: "Be one thing to one person. That is enough to build a billion-dollar business."
    }
  },
  {
    id: 'data-decisions',
    title: 'Turning Data Into Marketing Decisions',
    subtitle: 'Stop looking at vanity metrics. Start looking at behavior flows.',
    category: Category.GROWTH,
    tags: ['Data', 'Analytics'],
    image: 'https://picsum.photos/800/400?random=7',
    date: 'Feb 14, 2024',
    readTime: '4 min read',
    content: {
      intro: "We are drowning in data but starving for insights. A dashboard full of green numbers means nothing if you don't know *why* they are green.",
      keyPoints: [
        'Focus on retention cohorts, not total users.',
        'CAC is useless without LTV context.',
        'Qualitative feedback explains the Quantitative spikes.'
      ],
      sections: [
        {
          heading: 'The "So What?" Test',
          body: "Every time you see a metric, ask 'So what?'. Traffic is up 20%. So what? Did conversion hold? Did lead quality drop? If you can't answer, the metric is vanity."
        }
      ],
      takeaways: "Data doesn't make decisions. You do. Data just reduces the risk of being wrong."
    }
  }
];

export const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'The Brand Positioning Canvas',
    type: 'Framework',
    description: 'A one-page template to define your brand core, value proposition, and reasons to believe.',
    link: '#'
  },
  {
    id: '2',
    title: 'Growth Loop Worksheet',
    type: 'Template',
    description: 'Map out your acquisition, activation, and referral loops visually.',
    link: '#'
  },
  {
    id: '3',
    title: 'Playing to Win',
    type: 'Book',
    description: 'By A.G. Lafley. The definitive guide on strategy: Where to play and how to win.',
    link: '#'
  },
  {
    id: '4',
    title: 'Marketing Trend Report 2024',
    type: 'Guide',
    description: 'My personal synthesis of the top 10 trends shifting the SEA market this year.',
    link: '#'
  }
];