import { BlogPost, Category, Resource } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'adidas-case-study',
    title: 'Adidas: When Culture Eats Strategy for Breakfast',
    subtitle: 'How Adidas regained its cool factor by focusing on subcultures rather than mass appeal.',
    category: Category.CASE_STUDY,
    tags: ['Branding', 'Culture', 'Fashion'],
    image: '/images/adidas.jpg',
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
    image: '/images/romano.jpg',
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
    image: '/images/starbucks.png',
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
  },
  {
    id: 'tiktok-strategy',
    title: 'TikTok Marketing in SEA: Beyond Dance Trends',
    subtitle: 'How brands are winning on TikTok without looking desperate.',
    category: Category.STRATEGY,
    tags: ['TikTok', 'Social Media', 'SEA'],
    image: 'https://picsum.photos/800/400?random=8',
    date: 'Mar 05, 2024',
    readTime: '7 min read',
    content: {
      intro: "TikTok isn't just for Gen Z anymore. Brands that master the platform's unique language are seeing massive returns. But most get it wrong.",
      keyPoints: [
        'Native content beats polished ads 10:1',
        'Sound strategy > visual strategy on TikTok',
        'Micro-trends move faster than your approval process'
      ],
      sections: [
        {
          heading: 'The TikTok Paradox',
          body: "The more 'professional' your content looks, the worse it performs. TikTok rewards authenticity, speed, and participation in cultural moments."
        }
      ],
      takeaways: "Stop treating TikTok like Instagram. It's a different game with different rules."
    }
  },
  {
    id: 'pricing-psychology',
    title: 'The Psychology of Pricing: Why $99 Still Works',
    subtitle: 'Behavioral economics principles every marketer should know.',
    category: Category.CONSUMER,
    tags: ['Pricing', 'Psychology', 'Conversion'],
    image: 'https://picsum.photos/800/400?random=9',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    content: {
      intro: "Pricing is not just math. It's psychology, positioning, and perception management all rolled into one decision.",
      keyPoints: [
        'Charm pricing ($99 vs $100) increases conversion by 24%',
        'Anchoring: Show expensive option first',
        'Decoy pricing creates perceived value'
      ],
      sections: [
        {
          heading: 'The Power of Context',
          body: "A $50 wine feels cheap at a high-end restaurant but expensive at a grocery store. Context shapes perception more than actual price."
        }
      ],
      takeaways: "Price is a story you tell. Make sure it's the right one."
    }
  },
  {
    id: 'content-distribution',
    title: 'Content Distribution > Content Creation',
    subtitle: 'Why your best content is probably invisible.',
    category: Category.GROWTH,
    tags: ['Content', 'Distribution', 'SEO'],
    image: 'https://picsum.photos/800/400?random=10',
    date: 'Mar 18, 2024',
    readTime: '5 min read',
    content: {
      intro: "You spent 40 hours creating the perfect guide. It got 47 views. The problem isn't your content—it's your distribution.",
      keyPoints: [
        'Spend 20% creating, 80% distributing',
        'Repurpose content across 10+ channels',
        "Distribution compounds; creation doesn't"
      ],
      sections: [
        {
          heading: 'The One-to-Many Strategy',
          body: "Take one pillar piece and break it into: 10 tweets, 5 LinkedIn posts, 3 Instagram carousels, 1 podcast episode, and 15 newsletter snippets."
        }
      ],
      takeaways: "Great content with poor distribution loses to mediocre content with great distribution. Every time."
    }
  },
  {
    id: 'grab-case-study',
    title: 'Grab: The Super App Strategy That Changed SEA',
    subtitle: 'How Grab became more than just a ride-hailing app.',
    category: Category.CASE_STUDY,
    tags: ['Platform', 'SEA', 'Growth'],
    image: 'https://picsum.photos/800/400?random=11',
    date: 'Mar 25, 2024',
    readTime: '8 min read',
    isFeatured: false,
    caseStudyMeta: {
      brand: 'Grab',
      industry: 'Tech / Mobility',
      problem: 'How to compete with Uber while being profitable in a price-sensitive market.',
      approach: 'Build a super app ecosystem instead of just ride-hailing.',
      keyInsight: 'In SEA, customers want everything in one app. Convenience > specialization.'
    },
    content: {
      intro: "Grab didn't just beat Uber. They redefined what a mobility company could be by becoming the operating system for Southeast Asian daily life.",
      keyPoints: [
        'Expanded from rides to food, payments, and financial services',
        'Localized for each market (GrabPay, GrabFood, etc.)',
        'Built network effects across services'
      ],
      sections: [
        {
          heading: 'The Super App Thesis',
          body: "While Western markets prefer specialized apps, SEA users want one app for everything. Grab recognized this cultural difference early."
        },
        {
          heading: 'The Cash-to-Digital Bridge',
          body: "GrabPay became a Trojan horse for financial inclusion, bringing millions of unbanked users into the digital economy."
        }
      ],
      takeaways: "Platform thinking beats product thinking in emerging markets. Build ecosystems, not features."
    }
  },
  {
    id: 'email-marketing-2024',
    title: 'Email Marketing in 2024: Still Not Dead',
    subtitle: 'Why email outperforms social media for ROI.',
    category: Category.GROWTH,
    tags: ['Email', 'Retention', 'ROI'],
    image: 'https://picsum.photos/800/400?random=12',
    date: 'Apr 02, 2024',
    readTime: '6 min read',
    content: {
      intro: "Everyone chases social media. Smart marketers quietly build email lists. Email marketing returns $42 for every $1 spent.",
      keyPoints: [
        'You own your email list; you rent social media audiences',
        'Email converts 3x better than social media',
        'Segmentation is the difference between spam and relevance'
      ],
      sections: [
        {
          heading: 'The Ownership Advantage',
          body: "Instagram could ban you tomorrow. TikTok's algorithm could change. Your email list? That's yours forever."
        }
      ],
      takeaways: "Treat email like a product, not a broadcast channel. Respect the inbox."
    }
  },
  {
    id: 'community-marketing',
    title: 'Community-Led Growth: The New Playbook',
    subtitle: 'Why communities beat ads in the long run.',
    category: Category.STRATEGY,
    tags: ['Community', 'Growth', 'Retention'],
    image: 'https://picsum.photos/800/400?random=13',
    date: 'Apr 10, 2024',
    readTime: '7 min read',
    content: {
      intro: "Communities are the moat ads can't build. They create belonging, not just transactions.",
      keyPoints: [
        'Community members have 3x higher LTV',
        'Word-of-mouth from communities converts at 50%+',
        'Communities provide free market research'
      ],
      sections: [
        {
          heading: 'From Audience to Community',
          body: "An audience consumes your content. A community creates with you. The shift requires letting go of control."
        }
      ],
      takeaways: "Build a community around your mission, not your product. The product is the excuse to gather."
    }
  },
  {
    id: 'influencer-marketing-roi',
    title: 'Influencer Marketing: Measuring What Actually Matters',
    subtitle: 'Beyond vanity metrics to real business impact.',
    category: Category.GROWTH,
    tags: ['Influencer', 'ROI', 'Measurement'],
    image: 'https://picsum.photos/800/400?random=14',
    date: 'Apr 18, 2024',
    readTime: '5 min read',
    content: {
      intro: "Most brands measure influencer success by likes and reach. Meanwhile, their CFO is asking about actual revenue.",
      keyPoints: [
        'Engagement rate > follower count',
        'Use unique promo codes to track conversions',
        'Micro-influencers (10K-100K) often deliver better ROI'
      ],
      sections: [
        {
          heading: 'The Attribution Problem',
          body: "Influencer marketing works best as brand building, not direct response. Set expectations accordingly with stakeholders."
        }
      ],
      takeaways: "Treat influencer partnerships like media buys. Demand measurement, not just 'exposure'."
    }
  },
  {
    id: 'brand-storytelling',
    title: 'Brand Storytelling: Framework Not Fluff',
    subtitle: 'The anatomy of stories that sell.',
    category: Category.STRATEGY,
    tags: ['Storytelling', 'Branding', 'Content'],
    image: 'https://picsum.photos/800/400?random=15',
    date: 'Apr 25, 2024',
    readTime: '8 min read',
    content: {
      intro: "Every brand says they tell stories. Few actually do. Here's the difference between a story and a sales pitch.",
      keyPoints: [
        'Stories need conflict, not just benefits',
        'Your customer is the hero; you are the guide',
        'Emotion drives decision; logic justifies it'
      ],
      sections: [
        {
          heading: "The Hero's Journey for Brands",
          body: "Customer has problem → Meets your brand → Transformation occurs. Simple structure, infinite variations."
        },
        {
          heading: "Show Don't Tell",
          body: "Don't say 'We're innovative.' Show a story of how you solved an impossible problem."
        }
      ],
      takeaways: "Facts tell, stories sell. But only if you're telling the right story."
    }
  },
  {
    id: 'seo-content-strategy',
    title: 'SEO in 2024: Create for Humans, Optimize for Bots',
    subtitle: 'Modern SEO is about user intent, not keywords.',
    category: Category.GROWTH,
    tags: ['SEO', 'Content', 'Search'],
    image: 'https://picsum.photos/800/400?random=16',
    date: 'May 02, 2024',
    readTime: '7 min read',
    content: {
      intro: "Google's algorithm is now smart enough to understand context and intent. Keyword stuffing is dead. Understanding your audience is everything.",
      keyPoints: [
        'Topic clusters > individual keywords',
        'Search intent determines content format',
        'Page experience is a ranking factor'
      ],
      sections: [
        {
          heading: 'The Intent Mapping Framework',
          body: "Every search query has intent: informational, navigational, commercial, or transactional. Match your content to intent."
        }
      ],
      takeaways: "Win SEO by being the best answer, not the best optimizer."
    }
  },
  {
    id: 'marketing-attribution',
    title: 'Marketing Attribution: The Unsolvable Problem',
    subtitle: 'Why attribution models are broken and what to do instead.',
    category: Category.STRATEGY,
    tags: ['Attribution', 'Analytics', 'Measurement'],
    image: 'https://picsum.photos/800/400?random=17',
    date: 'May 10, 2024',
    readTime: '6 min read',
    content: {
      intro: "Every marketing team wants perfect attribution. No marketing team has it. Here's how to make peace with ambiguity.",
      keyPoints: [
        'Multi-touch attribution is directionally correct, not precisely accurate',
        'Incrementality testing > attribution models',
        'Focus on contribution, not attribution'
      ],
      sections: [
        {
          heading: 'The Dark Funnel Problem',
          body: "Most B2B buying happens in Slack channels, private LinkedIn DMs, and podcast conversations. Your attribution model sees none of it."
        }
      ],
      takeaways: "Accept that marketing is part science, part art. Use data to reduce uncertainty, not eliminate it."
    }
  },
  {
    id: 'nike-dtc-strategy',
    title: 'Nike: The Direct-to-Consumer Revolution',
    subtitle: 'How Nike ditched wholesalers to own the customer relationship.',
    category: Category.CASE_STUDY,
    tags: ['DTC', 'Retail', 'Digital'],
    image: 'https://picsum.photos/800/400?random=20',
    date: 'May 20, 2024',
    readTime: '7 min read',
    caseStudyMeta: {
      brand: 'Nike',
      industry: 'Apparel / Sports',
      problem: 'Over-reliance on wholesale partners diluting brand control and margins.',
      approach: 'Massive shift to DTC through Nike.com, Nike App, and owned retail.',
      keyInsight: 'Own the customer data, own the future. Wholesale is a commodity business.'
    },
    content: {
      intro: "Nike made a bold bet: cut ties with major retailers to sell directly to consumers. The result? Higher margins, better data, and complete brand control.",
      keyPoints: [
        'DTC now represents 40%+ of total revenue',
        'Nike App creates a flywheel of data and personalization',
        'Membership programs drive loyalty and LTV'
      ],
      sections: [
        {
          heading: 'The Wholesale Problem',
          body: "When you sell through Amazon or Foot Locker, you lose pricing power, customer data, and brand presentation. Nike decided that control was worth the investment."
        }
      ],
      takeaways: "The future of retail is owning the customer relationship. Distribution partners are necessary today, but DTC is the strategic direction."
    }
  },
  {
    id: 'netflix-content-strategy',
    title: 'Netflix: Spending $17B on Content Strategy',
    subtitle: 'Why Netflix treats content as a product, not art.',
    category: Category.STRATEGY,
    tags: ['Entertainment', 'Content', 'Data'],
    image: 'https://picsum.photos/800/400?random=21',
    date: 'May 25, 2024',
    readTime: '8 min read',
    content: {
      intro: "Netflix spends more on content than any studio in history. But they approach it like engineers, not artists. Every show is a hypothesis tested with data.",
      keyPoints: [
        'Thumbnails are A/B tested to maximize click-through',
        'Watch time is the primary metric, not ratings',
        'Localization strategy: create for local markets, distribute globally'
      ],
      sections: [
        {
          heading: 'The Algorithm-Driven Greenlight',
          body: "Netflix knows what you will watch before you do. Their recommendation engine is the product; content is the inventory."
        }
      ],
      takeaways: "Treat content as product. Test, iterate, measure. Art is still art, but packaging is science."
    }
  },
  {
    id: 'apple-ecosystem-lock',
    title: 'Apple: The Ecosystem Lock-In Strategy',
    subtitle: 'How Apple makes switching brands feel impossible.',
    category: Category.CASE_STUDY,
    tags: ['Tech', 'Product', 'Retention'],
    image: 'https://picsum.photos/800/400?random=22',
    date: 'Jun 01, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Apple',
      industry: 'Technology / Consumer Electronics',
      problem: 'How to maintain premium pricing in a commoditized hardware market.',
      approach: 'Build an ecosystem where each product makes the others more valuable.',
      keyInsight: 'Lock-in is not evil if the cage is luxurious. Make switching painful through value, not contracts.'
    },
    content: {
      intro: "Apple does not sell products. They sell membership to an exclusive club where everything just works together. The ecosystem is the moat.",
      keyPoints: [
        'AirPods work seamlessly across all Apple devices',
        'iMessage creates social pressure to stay (green bubbles stigma)',
        'Services revenue (App Store, iCloud, Apple Music) drives retention'
      ],
      sections: [
        {
          heading: 'The Network Effect Within a Household',
          body: "Once one family member has an iPhone, the friction to switch the whole household to Android is massive. Apple designs for this."
        }
      ],
      takeaways: "Build ecosystems, not features. Each product should make the others more valuable."
    }
  },
  {
    id: 'spotify-playlist-culture',
    title: 'Spotify: How Playlists Became the New Radio',
    subtitle: 'The platform that turned music discovery into a data game.',
    category: Category.GROWTH,
    tags: ['Music', 'Platform', 'Data'],
    image: 'https://picsum.photos/800/400?random=23',
    date: 'Jun 08, 2024',
    readTime: '6 min read',
    content: {
      intro: "Spotify did not just digitize music. They reinvented how we discover it. Playlists are the new gatekeepers, and algorithms are the new DJs.",
      keyPoints: [
        'Discover Weekly has 40M+ active users',
        'Playlists drive 31% of all listening',
        'Data shows taste patterns humans miss'
      ],
      sections: [
        {
          heading: 'The Personalization Engine',
          body: "Spotify Wrapped is genius: it turns your listening data into social currency. People share it because it makes them look interesting."
        }
      ],
      takeaways: "Give users a reason to share their data. Make the output cooler than the input."
    }
  },
  {
    id: 'airbnb-trust-design',
    title: 'Airbnb: Designing Trust Between Strangers',
    subtitle: 'How design and policy create safety in the sharing economy.',
    category: Category.CASE_STUDY,
    tags: ['Platform', 'Trust', 'Design'],
    image: 'https://picsum.photos/800/400?random=24',
    date: 'Jun 15, 2024',
    readTime: '7 min read',
    caseStudyMeta: {
      brand: 'Airbnb',
      industry: 'Travel / Hospitality',
      problem: 'Convincing people to sleep in a stranger\'s home requires massive trust.',
      approach: 'Multi-layered trust design: reviews, verified photos, host guarantees, insurance.',
      keyInsight: 'Trust is designed, not assumed. Every pixel should reduce anxiety.'
    },
    content: {
      intro: "Airbnb's biggest competitor was not hotels. It was fear. They designed every detail to make strangers feel safe.",
      keyPoints: [
        'Reviews are bidirectional (guests rate hosts, hosts rate guests)',
        'Professional photography program to standardize listings',
        '$1M host guarantee removed the biggest objection'
      ],
      sections: [
        {
          heading: 'The Safety Stack',
          body: "Identity verification, secure payments, 24/7 support, insurance, and social proof. Each layer reduces one type of risk."
        }
      ],
      takeaways: "In marketplace businesses, trust is the product. Build systems that create it at scale."
    }
  },
  {
    id: 'coca-cola-brand-consistency',
    title: 'Coca-Cola: 130 Years of Brand Consistency',
    subtitle: 'The marketing playbook that never gets old.',
    category: Category.STRATEGY,
    tags: ['Branding', 'Consistency', 'Heritage'],
    image: 'https://picsum.photos/800/400?random=25',
    date: 'Jun 22, 2024',
    readTime: '5 min read',
    content: {
      intro: "Coca-Cola has been saying the same thing for over a century: happiness. The execution changes, but the essence never does.",
      keyPoints: [
        'Red and white color scheme is globally recognizable',
        'Share a Coke campaign: personalization at scale',
        'Sponsorships create cultural moments (Olympics, FIFA)'
      ],
      sections: [
        {
          heading: 'Consistency as Strategy',
          body: "While competitors chase trends, Coca-Cola stays the course. The logo, the bottle shape, the message—all unchanged for decades."
        }
      ],
      takeaways: "Brand consistency compounds. Do not chase every trend. Pick a lane and own it for decades."
    }
  },
  {
    id: 'tesla-no-marketing',
    title: 'Tesla: The $0 Marketing Budget That Beat Everyone',
    subtitle: 'How Elon Musk turned himself into the ad campaign.',
    category: Category.CASE_STUDY,
    tags: ['Automotive', 'PR', 'Social Media'],
    image: 'https://picsum.photos/800/400?random=26',
    date: 'Jun 28, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Tesla',
      industry: 'Automotive / Technology',
      problem: 'How to compete with legacy automakers spending billions on ads.',
      approach: 'Zero paid advertising. Pure earned media and social buzz.',
      keyInsight: 'The CEO is the channel. Product is the message. Customers are the salesforce.'
    },
    content: {
      intro: "Tesla does not buy ads. They create news. Every product launch is a cultural event, and Elon Musk is the amplification engine.",
      keyPoints: [
        'Product launches are live-streamed spectacles',
        'Referral program turns customers into salespeople',
        'Elon\'s Twitter (X) is free media distribution'
      ],
      sections: [
        {
          heading: 'The Earned Media Machine',
          body: "Every outrageous claim (Cybertruck, flamethrower, tunnel boring) generates millions in free press. Controversy is a feature, not a bug."
        }
      ],
      takeaways: "If your product is remarkable, you do not need ads. But you need a megaphone. For Tesla, that is Elon."
    }
  },
  {
    id: 'dove-real-beauty',
    title: 'Dove: Real Beauty as a Movement',
    subtitle: 'When a soap brand becomes a cultural force.',
    category: Category.CASE_STUDY,
    tags: ['Beauty', 'Purpose', 'Branding'],
    image: 'https://picsum.photos/800/400?random=27',
    date: 'Jul 05, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Dove',
      industry: 'Beauty / Personal Care',
      problem: 'Competing in a beauty industry built on insecurity and unrealistic standards.',
      approach: 'Flip the script: celebrate real women, real bodies, real beauty.',
      keyInsight: 'Purpose is strategy when it aligns with the brand and the culture.'
    },
    content: {
      intro: "Dove\'s Real Beauty campaign was not just advertising. It was a cultural statement that repositioned an entire category.",
      keyPoints: [
        'Used real women instead of models in all campaigns',
        'Self-Esteem Project reached 60M+ young people',
        'Purpose-driven marketing drove 700% sales growth'
      ],
      sections: [
        {
          heading: 'Purpose with Proof',
          body: "Many brands claim to care. Dove funded research, created educational programs, and changed their entire visual language. Action beats words."
        }
      ],
      takeaways: "Purpose without action is PR. Purpose with commitment becomes brand equity."
    }
  },
  {
    id: 'amazon-prime-loyalty',
    title: 'Amazon Prime: The Loyalty Program That Changed E-Commerce',
    subtitle: 'How $139/year creates a shopping addiction.',
    category: Category.GROWTH,
    tags: ['E-commerce', 'Loyalty', 'Subscription'],
    image: 'https://picsum.photos/800/400?random=28',
    date: 'Jul 12, 2024',
    readTime: '7 min read',
    content: {
      intro: "Amazon Prime is not a shipping benefit. It is a psychological commitment device that makes you spend more.",
      keyPoints: [
        'Prime members spend 2x more than non-members',
        'Sunk cost fallacy: already paid, might as well use it',
        'Free shipping removes the biggest friction in e-commerce'
      ],
      sections: [
        {
          heading: 'The Moat of Habit',
          body: "Once Prime becomes your default, comparison shopping stops. Amazon wins not by being cheapest, but by being most convenient."
        }
      ],
      takeaways: "Subscription models create moats through habit formation. The best loyalty programs change behavior."
    }
  },
  {
    id: 'redbull-content-empire',
    title: 'Red Bull: The Media Company That Sells Energy Drinks',
    subtitle: 'Content marketing taken to the extreme.',
    category: Category.STRATEGY,
    tags: ['Content', 'Sports', 'Branding'],
    image: 'https://picsum.photos/800/400?random=29',
    date: 'Jul 18, 2024',
    readTime: '6 min read',
    content: {
      intro: "Red Bull owns media properties, sponsors athletes, and produces content—all while selling a $3 energy drink. They are a media company first.",
      keyPoints: [
        'Red Bull Media House produces feature films and documentaries',
        'Owns F1 teams, football clubs, and extreme sports events',
        'Stratos jump (Felix Baumgartner) was watched by 8M people live'
      ],
      sections: [
        {
          heading: 'Content as Brand Building',
          body: "Red Bull does not run ads about energy. They create content about extreme performance, then associate their product with that feeling."
        }
      ],
      takeaways: "Do not create content about your product. Create content about the lifestyle your product enables."
    }
  },
  {
    id: 'mcdonalds-localization',
    title: 'McDonald\'s: Global Brand, Local Taste',
    subtitle: 'How McDonald\'s adapts to every culture without losing identity.',
    category: Category.STRATEGY,
    tags: ['Localization', 'Fast Food', 'Global'],
    image: 'https://picsum.photos/800/400?random=30',
    date: 'Jul 25, 2024',
    readTime: '6 min read',
    content: {
      intro: "McDonald\'s sells McSpicy Paneer in India, Teriyaki Burgers in Japan, and Poutine in Canada. Local menus, global systems.",
      keyPoints: [
        'Localized menus account for 30-50% of items per region',
        'Core products (Big Mac, fries) remain consistent globally',
        'Regional marketing campaigns with local celebrities'
      ],
      sections: [
        {
          heading: 'The 80/20 Rule of Localization',
          body: "Keep 80% consistent (brand, operations, values), customize 20% (menu, messaging, cultural touchpoints)."
        }
      ],
      takeaways: "Global brands succeed by thinking globally, acting locally. Consistency in systems, flexibility in expression."
    }
  },
  {
    id: 'tiktok-algorithm',
    title: 'TikTok: The Algorithm That Knows You Better Than You Do',
    subtitle: 'Why TikTok\'s FYP is the most addictive feed ever built.',
    category: Category.CONSUMER,
    tags: ['Social Media', 'Algorithm', 'Psychology'],
    image: 'https://picsum.photos/800/400?random=31',
    date: 'Aug 01, 2024',
    readTime: '7 min read',
    content: {
      intro: "TikTok\'s For You Page is terrifyingly good. It learns your taste faster than any platform in history. Here is how.",
      keyPoints: [
        'Watch time > engagement (likes/comments)',
        'Fast feedback loop: every video is a data point',
        'Shows you content you did not know you wanted'
      ],
      sections: [
        {
          heading: 'The Interest Graph vs Social Graph',
          body: "Instagram shows you content from people you follow. TikTok shows you content it thinks you will like. The difference is massive."
        }
      ],
      takeaways: "Personalization at scale is the new competitive advantage. Platforms that know you win your time."
    }
  },
  {
    id: 'airbnb-experiences',
    title: 'Airbnb Experiences: Selling Memories, Not Beds',
    subtitle: 'How Airbnb expanded beyond accommodations into local culture.',
    category: Category.GROWTH,
    tags: ['Platform', 'Product Expansion', 'Travel'],
    image: 'https://picsum.photos/800/400?random=32',
    date: 'Aug 08, 2024',
    readTime: '5 min read',
    content: {
      intro: "Airbnb realized that travelers do not just want a place to sleep. They want authentic local experiences. So they built a marketplace for that too.",
      keyPoints: [
        'Experiences leverage the same host network',
        'Higher margins than accommodations',
        'Differentiates Airbnb from booking.com clones'
      ],
      sections: [
        {
          heading: 'Platform Expansion Done Right',
          body: "Airbnb used the same trust system (reviews, verified hosts) for Experiences. New product, same infrastructure."
        }
      ],
      takeaways: "Platform expansion works when you reuse your core assets (trust, network, brand) in new categories."
    }
  },
  {
    id: 'zara-fast-fashion',
    title: 'Zara: Fast Fashion Through Supply Chain Marketing',
    subtitle: 'Why Zara can go from design to store in 2 weeks.',
    category: Category.CASE_STUDY,
    tags: ['Retail', 'Operations', 'Fashion'],
    image: 'https://picsum.photos/800/400?random=33',
    date: 'Aug 15, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Zara',
      industry: 'Fashion / Retail',
      problem: 'Fashion trends move fast. Traditional 6-month production cycles miss the moment.',
      approach: 'Vertical integration and hyper-responsive supply chain.',
      keyInsight: 'Speed to market is a marketing advantage. Freshness creates urgency.'
    },
    content: {
      intro: "Zara does not predict trends. They respond to them in real-time. Their supply chain is their competitive moat.",
      keyPoints: [
        'New designs in stores within 2 weeks',
        'Low inventory creates scarcity and urgency',
        'Stores function as showrooms and data collection points'
      ],
      sections: [
        {
          heading: 'Scarcity by Design',
          body: "Zara ships limited quantities. If you see something you like, buy it now. It will not be there next week. FOMO drives conversion."
        }
      ],
      takeaways: "Operations can be marketing. Speed and scarcity create demand that ads cannot buy."
    }
  },
  {
    id: 'notion-bottom-up',
    title: 'Notion: Bottom-Up SaaS Growth',
    subtitle: 'How Notion grew without a sales team.',
    category: Category.GROWTH,
    tags: ['SaaS', 'PLG', 'Community'],
    image: 'https://picsum.photos/800/400?random=34',
    date: 'Aug 22, 2024',
    readTime: '6 min read',
    content: {
      intro: "Notion is worth $10B and has zero salespeople. They grew through product-led growth and community love.",
      keyPoints: [
        'Free tier is genuinely useful (not a trial)',
        'Templates marketplace created by users',
        'Community ambassadors spread the word organically'
      ],
      sections: [
        {
          heading: 'The Invite-Only Launch',
          body: "Notion launched invite-only, creating FOMO and exclusivity. Scarcity drove demand before they had a sales team."
        }
      ],
      takeaways: "PLG works when the product is 10x better. Make users into marketers by building something worth sharing."
    }
  },
  {
    id: 'lululemon-community',
    title: 'Lululemon: Yoga Studios as Marketing Channels',
    subtitle: 'Community building that drives $6B in revenue.',
    category: Category.STRATEGY,
    tags: ['Retail', 'Community', 'Lifestyle'],
    image: 'https://picsum.photos/800/400?random=35',
    date: 'Aug 29, 2024',
    readTime: '5 min read',
    content: {
      intro: "Lululemon does not sponsor yoga studios. They partner with instructors to create community. The result is a cult-like following.",
      keyPoints: [
        'Free yoga classes in stores build community',
        'Ambassadors (not paid influencers) spread the brand',
        'Product quality creates word-of-mouth'
      ],
      sections: [
        {
          heading: 'The Community Flywheel',
          body: "Yoga instructors wear Lululemon → Students ask about it → Store hosts classes → New customers join the community. Self-reinforcing."
        }
      ],
      takeaways: "Build community before scale. Loyal tribes beat mass audiences every time."
    }
  },
  {
    id: 'stripe-developer-first',
    title: 'Stripe: Marketing to Developers',
    subtitle: 'How Stripe won by making payments beautiful for engineers.',
    category: Category.CASE_STUDY,
    tags: ['FinTech', 'Developer', 'B2B'],
    image: 'https://picsum.photos/800/400?random=36',
    date: 'Sep 05, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Stripe',
      industry: 'FinTech / Payments',
      problem: 'Payment processing was painful for developers. APIs were terrible.',
      approach: 'Build the best API experience in the industry. Make integration a joy.',
      keyInsight: 'When selling to developers, the product is the marketing. Documentation is the sales team.'
    },
    content: {
      intro: "Stripe became a $95B company by obsessing over developer experience. Their documentation is legendary.",
      keyPoints: [
        'API-first design made integration 10x easier',
        'Documentation is beautiful, clear, and comprehensive',
        'Developer community became organic advocates'
      ],
      sections: [
        {
          heading: 'The Developer Experience Moat',
          body: "Switching from Stripe is technically possible but emotionally painful. Developers love the product, so CTOs approve it."
        }
      ],
      takeaways: "In B2B tech, product experience is the primary marketing channel. Make it amazing."
    }
  },
  {
    id: 'peloton-hardware-saas',
    title: 'Peloton: Selling Fitness as a Service',
    subtitle: 'The subscription model that reinvented home exercise.',
    category: Category.GROWTH,
    tags: ['Fitness', 'Subscription', 'Hardware'],
    image: 'https://picsum.photos/800/400?random=37',
    date: 'Sep 12, 2024',
    readTime: '6 min read',
    content: {
      intro: "Peloton sells a $1,495 bike. But the real business is the $44/month subscription. Hardware is the gateway to recurring revenue.",
      keyPoints: [
        'Content library with live and on-demand classes',
        'Leaderboards create social accountability',
        'Instructors become celebrities and retention drivers'
      ],
      sections: [
        {
          heading: 'The SoulCycle Strategy',
          body: "Peloton brought the cult-like energy of boutique fitness into homes. Instructors are not just teachers; they are influencers."
        }
      ],
      takeaways: "Hardware + software + content + community = moat. Single-product businesses are fragile."
    }
  },
  {
    id: 'duolingo-gamification',
    title: 'Duolingo: Gamification That Actually Works',
    subtitle: 'How a free app built a learning habit for 500M users.',
    category: Category.GROWTH,
    tags: ['EdTech', 'Gamification', 'Retention'],
    image: 'https://picsum.photos/800/400?random=38',
    date: 'Sep 19, 2024',
    readTime: '6 min read',
    content: {
      intro: "Duolingo is not a language app. It is a game that teaches language. Streak mechanics and guilt-tripping owls drive 93% retention.",
      keyPoints: [
        'Streaks create daily habit loops',
        'Push notifications are passive-aggressive genius',
        'Leaderboards and XP gamify learning'
      ],
      sections: [
        {
          heading: 'The Duo Push Notification Strategy',
          body: "Those sad owl notifications are not annoying—they are brilliant behavioral design. Guilt is a retention mechanic."
        }
      ],
      takeaways: "Gamification works when it reinforces the core value (learning). Points mean nothing; progress means everything."
    }
  },
  {
    id: 'glossier-instagram-native',
    title: 'Glossier: The Instagram-Native Beauty Brand',
    subtitle: 'How Glossier built a billion-dollar brand on social proof.',
    category: Category.CASE_STUDY,
    tags: ['Beauty', 'DTC', 'Social Media'],
    image: 'https://picsum.photos/800/400?random=39',
    date: 'Sep 26, 2024',
    readTime: '5 min read',
    caseStudyMeta: {
      brand: 'Glossier',
      industry: 'Beauty / Cosmetics',
      problem: 'Breaking into beauty without legacy retail distribution or celebrity endorsements.',
      approach: 'Build on Instagram. Turn customers into content creators.',
      keyInsight: 'User-generated content is more trusted than brand content. Make products Instagrammable.'
    },
    content: {
      intro: "Glossier does not need influencers. Their customers are the influencers. Pink packaging is designed to be shared.",
      keyPoints: [
        'Referral program gives both parties $10 credit',
        'Minimal product design optimized for flat-lays',
        'Community-driven product development (they listen to Instagram comments)'
      ],
      sections: [
        {
          heading: 'The Pink Pouch Effect',
          body: "Every order comes in a pink bubble-wrap pouch. It is not just packaging—it is a photo prop. Unboxing becomes marketing."
        }
      ],
      takeaways: "Design products to be shared. Packaging is media. Customers are your marketing team."
    }
  },
  {
    id: 'patagonia-activism',
    title: 'Patagonia: When Activism Becomes Brand Strategy',
    subtitle: 'The outdoor brand that told customers not to buy their products.',
    category: Category.STRATEGY,
    tags: ['Sustainability', 'Purpose', 'Branding'],
    image: 'https://picsum.photos/800/400?random=40',
    date: 'Oct 03, 2024',
    readTime: '7 min read',
    content: {
      intro: "Patagonia ran an ad that said \"Do not Buy This Jacket.\" Sales went up. This is counter-intuitive marketing at its finest.",
      keyPoints: [
        'Repair and reuse programs extend product life',
        '1% for the Planet donates to environmental causes',
        'Activism attracts customers who share values'
      ],
      sections: [
        {
          heading: 'Selling Less, Meaning More',
          body: "Patagonia\'s anti-consumption message attracts high-value customers who buy quality over quantity. Lower volume, higher margins, stronger loyalty."
        }
      ],
      takeaways: "Authenticity cannot be faked. If you stand for something, some people will love you for it. That is enough."
    }
  },
  {
    id: 'slack-freemium-viral',
    title: 'Slack: Freemium That Spreads Like a Virus',
    subtitle: 'How Slack grew to 12M+ daily users without cold calling.',
    category: Category.GROWTH,
    tags: ['SaaS', 'Freemium', 'B2B'],
    image: 'https://picsum.photos/800/400?random=41',
    date: 'Oct 10, 2024',
    readTime: '6 min read',
    content: {
      intro: "Slack\'s growth engine is simple: one team adopts it, invites partners/clients, those companies adopt it. Network effects within companies.",
      keyPoints: [
        'Free tier is unlimited users (contrast to Zoom)',
        'External collaboration spreads Slack across companies',
        'Message limit (10K) is the paywall trigger'
      ],
      sections: [
        {
          heading: 'The Trojan Horse Strategy',
          body: "Slack enters through one team, then spreads to the entire company. Bottom-up adoption beats top-down sales."
        }
      ],
      takeaways: "In B2B, end-user love beats enterprise sales. Build for users first, sell to execs later."
    }
  },
  {
    id: 'warby-parker-dtc',
    title: 'Warby Parker: The DTC Blueprint',
    subtitle: 'How Warby Parker disrupted eyewear by cutting out middlemen.',
    category: Category.CASE_STUDY,
    tags: ['DTC', 'Retail', 'Disruption'],
    image: 'https://picsum.photos/800/400?random=42',
    date: 'Oct 17, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Warby Parker',
      industry: 'Eyewear / Retail',
      problem: 'Luxottica monopoly made glasses unnecessarily expensive ($300+ markups).',
      approach: 'Vertical integration + DTC model = $95 glasses with same quality.',
      keyInsight: 'Transparency is a marketing message. Show the markup, win the customer.'
    },
    content: {
      intro: "Warby Parker proved that you could sell eyewear online. The secret? Home try-on and radical transparency about pricing.",
      keyPoints: [
        'Home try-on removes the biggest objection (fit/style)',
        'Buy-one-give-one creates social mission',
        'Owned manufacturing cuts costs by 80%'
      ],
      sections: [
        {
          heading: 'The Try-Before-You-Buy Innovation',
          body: "Let customers try 5 frames at home for free. Genius conversion optimization meets customer service."
        }
      ],
      takeaways: "Remove friction, not features. The biggest objection is your biggest opportunity."
    }
  },
  {
    id: 'linkedin-b2b-growth',
    title: 'LinkedIn: The B2B Social Network That Won',
    subtitle: 'How LinkedIn became essential by focusing on utility over virality.',
    category: Category.GROWTH,
    tags: ['Social Media', 'B2B', 'Platform'],
    image: 'https://picsum.photos/800/400?random=43',
    date: 'Oct 24, 2024',
    readTime: '6 min read',
    content: {
      intro: "LinkedIn won by being boring. While Facebook chased engagement, LinkedIn focused on professional utility. Result: $15B in annual revenue.",
      keyPoints: [
        'Premium subscriptions (Sales Navigator, Recruiter) drive revenue',
        'Professional content outperforms personal content',
        'Network effects: your value grows as your network grows'
      ],
      sections: [
        {
          heading: 'The Utility Moat',
          body: "LinkedIn is not fun, but it is necessary. That is a stronger moat than entertainment. You check LinkedIn because you have to."
        }
      ],
      takeaways: "Build for utility, not entertainment. In B2B, boring but essential beats fun but optional."
    }
  },
  {
    id: 'oatly-controversy-marketing',
    title: 'Oatly: Using Controversy as Fuel',
    subtitle: 'How Oatly turned dairy industry lawsuits into marketing gold.',
    category: Category.STRATEGY,
    tags: ['Food', 'Branding', 'Controversy'],
    image: 'https://picsum.photos/800/400?random=44',
    date: 'Oct 31, 2024',
    readTime: '5 min read',
    content: {
      intro: "Oatly got sued by the dairy industry for saying their product is better for the environment. They turned the lawsuit into billboards.",
      keyPoints: [
        'Lawsuit became free PR worth millions',
        'Bold packaging copy stands out in grocery aisles',
        'Environmental message attracts Gen Z/Millennials'
      ],
      sections: [
        {
          heading: 'Embrace the Haters',
          body: "If the establishment is against you, lean into it. Controversy signals disruption. Disruption attracts early adopters."
        }
      ],
      takeaways: "Controversy is not always bad. For challenger brands, it is validation. Embrace it strategically."
    }
  },
  {
    id: 'canva-democratize-design',
    title: 'Canva: Democratizing Design for Non-Designers',
    subtitle: 'How Canva built a $40B company on simplicity.',
    category: Category.GROWTH,
    tags: ['Design', 'SaaS', 'PLG'],
    image: 'https://picsum.photos/800/400?random=45',
    date: 'Nov 07, 2024',
    readTime: '6 min read',
    content: {
      intro: "Canva took design—a skill that took years to learn—and made it accessible to anyone. The freemium model did the rest.",
      keyPoints: [
        'Templates lower the barrier to entry',
        'Freemium model: free tier is genuinely useful',
        'Collaboration features drive team adoption'
      ],
      sections: [
        {
          heading: 'The Template Marketplace',
          body: "Canva does not just provide tools. They provide starting points. Templates are 80% of the value for most users."
        }
      ],
      takeaways: "Simplify complex workflows. The market for \"easy\" is 100x larger than the market for \"powerful.\""
    }
  },
  {
    id: 'supreme-scarcity',
    title: 'Supreme: Scarcity as a Business Model',
    subtitle: 'How Supreme turned hype into a billion-dollar streetwear empire.',
    category: Category.STRATEGY,
    tags: ['Fashion', 'Scarcity', 'Hype'],
    image: 'https://picsum.photos/800/400?random=46',
    date: 'Nov 14, 2024',
    readTime: '5 min read',
    content: {
      intro: "Supreme releases limited quantities every Thursday at 11am. Items sell out in seconds. Resale market explodes. This is manufactured scarcity at its peak.",
      keyPoints: [
        'Weekly drops create ritualized shopping behavior',
        'Limited quantities drive resale market',
        'Collaborations with high-end brands (Louis Vuitton) elevate status'
      ],
      sections: [
        {
          heading: 'Hype as Strategy',
          body: "Supreme does not advertise. They create artificial scarcity, then let hype culture do the marketing. Every drop is an event."
        }
      ],
      takeaways: "Scarcity creates desire. Abundance kills premium. In some categories, limiting supply increases demand."
    }
  },
  {
    id: 'zoom-covid-growth',
    title: 'Zoom: From B2B Tool to Cultural Phenomenon',
    subtitle: 'How COVID turned Zoom into a verb.',
    category: Category.GROWTH,
    tags: ['SaaS', 'Timing', 'Product'],
    image: 'https://picsum.photos/800/400?random=47',
    date: 'Nov 21, 2024',
    readTime: '6 min read',
    content: {
      intro: "Zoom was the right product at the right time. But their freemium model and ease-of-use made them THE video platform when the world needed one.",
      keyPoints: [
        'Free 40-minute calls removed friction during lockdown',
        'One-click joining (no account needed) reduced barriers',
        'Scaled from 10M to 300M users in 3 months'
      ],
      sections: [
        {
          heading: 'The Network Effect of Necessity',
          body: "Zoom won because everyone else was already on it. Network effects accelerated by global crisis."
        }
      ],
      takeaways: "Timing matters. But you also need to be ready to scale when opportunity hits. Zoom was."
    }
  },
  {
    id: 'ikea-experience-design',
    title: 'IKEA: The Store Layout as Marketing',
    subtitle: 'Why you can never leave IKEA without buying something extra.',
    category: Category.CONSUMER,
    tags: ['Retail', 'Psychology', 'Experience'],
    image: 'https://picsum.photos/800/400?random=48',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    content: {
      intro: "IKEA\'s maze-like layout is not an accident. It is designed to maximize exposure to products you did not know you needed.",
      keyPoints: [
        'One-way layout forces you past all departments',
        'Showrooms create aspiration (not just product displays)',
        'Impulse items at checkout (meatballs, candles, snacks)'
      ],
      sections: [
        {
          heading: 'The Gruen Transfer',
          body: "IKEA uses the \"Gruen effect\"—disorienting shoppers to encourage impulse buying. You enter for a lamp, leave with a cart full."
        }
      ],
      takeaways: "Environment shapes behavior. Design spaces (digital or physical) to guide customers toward conversion."
    }
  },
  {
    id: 'airpods-status-symbol',
    title: 'AirPods: How White Earbuds Became a Status Symbol',
    subtitle: 'The product-led marketing of Apple\'s most viral accessory.',
    category: Category.CONSUMER,
    tags: ['Product', 'Status', 'Design'],
    image: 'https://picsum.photos/800/400?random=49',
    date: 'Dec 05, 2024',
    readTime: '5 min read',
    content: {
      intro: "AirPods were mocked when they launched. Now they are a cultural icon. The secret? Visibility + ecosystem + social proof.",
      keyPoints: [
        'White color makes them recognizable (not hidden like competitors)',
        'Seamless pairing with iPhone reduces friction',
        'Wireless design signaled future-forward tech'
      ],
      sections: [
        {
          heading: 'Visible Consumption',
          body: "AirPods are a social signal. They say: I am in the Apple ecosystem. I value simplicity. I can afford premium. All without words."
        }
      ],
      takeaways: "Design for visibility when you want social proof. Hidden products do not create status."
    }
  },
  {
    id: 'tinder-swipe-innovation',
    title: 'Tinder: The Swipe That Changed Apps Forever',
    subtitle: 'How one UX decision created a cultural behavior.',
    category: Category.CONSUMER,
    tags: ['Dating', 'UX', 'Psychology'],
    image: 'https://picsum.photos/800/400?random=50',
    date: 'Dec 12, 2024',
    readTime: '5 min read',
    content: {
      intro: "Tinder did not invent online dating. They made it addictive with one mechanic: the swipe. Gamification meets romance.",
      keyPoints: [
        'Swipe right/left reduces cognitive load',
        'Mutual match creates dopamine hit',
        'Gamification makes rejection feel less personal'
      ],
      sections: [
        {
          heading: 'The Slot Machine Mechanic',
          body: "Every swipe is a lottery ticket. You do not know when you will get a match, so you keep swiping. Variable rewards drive addiction."
        }
      ],
      takeaways: "Great UX is not just usability. It is psychology. Make your core action feel rewarding."
    }
  },
  {
    id: 'headspace-meditation-mainstream',
    title: 'Headspace: Making Meditation Mainstream',
    subtitle: 'How Headspace packaged mindfulness for skeptics.',
    category: Category.STRATEGY,
    tags: ['Wellness', 'Branding', 'Subscription'],
    image: 'https://picsum.photos/800/400?random=51',
    date: 'Dec 19, 2024',
    readTime: '5 min read',
    content: {
      intro: "Meditation had a hippie problem. Headspace rebranded it as a productivity tool for busy professionals. Positioning matters.",
      keyPoints: [
        'Simple, non-spiritual branding appeals to skeptics',
        'Free trial lowers barrier to entry',
        'Corporate partnerships (B2B growth) drive revenue'
      ],
      sections: [
        {
          heading: 'The Repositioning Play',
          body: "Not \"become enlightened.\" Instead: \"be more focused, less stressed, sleep better.\" Functional benefits for the mass market."
        }
      ],
      takeaways: "Reposition niche products for mainstream adoption. Change the language, expand the market."
    }
  },
  {
    id: 'casper-mattress-dtc',
    title: 'Casper: The Mattress-in-a-Box Revolution',
    subtitle: 'How Casper used content and DTC to disrupt mattress retail.',
    category: Category.CASE_STUDY,
    tags: ['DTC', 'Retail', 'Content'],
    image: 'https://picsum.photos/800/400?random=52',
    date: 'Dec 26, 2024',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Casper',
      industry: 'Home Goods / Retail',
      problem: 'Mattress shopping is painful: pushy salespeople, confusing options, high prices.',
      approach: 'One perfect mattress, shipped in a box, with 100-night trial.',
      keyInsight: 'Reduce choice to increase conversion. Make returns effortless to reduce anxiety.'
    },
    content: {
      intro: "Casper simplified a $15B market by offering one mattress. Choice paradox solved. DTC eliminated markup. Genius.",
      keyPoints: [
        '100-night trial removes purchase anxiety',
        'One SKU reduces decision fatigue',
        'Content marketing (Van Winkles blog) drove SEO'
      ],
      sections: [
        {
          heading: 'The One-Mattress Strategy',
          body: "While competitors offered 20+ options, Casper said: trust us, this is the one. Simplicity is the ultimate sophistication."
        }
      ],
      takeaways: "More choice does not always mean more sales. Sometimes, the best strategy is radical simplification."
    }
  },
  {
    id: 'booking-urgency',
    title: 'Booking.com: Urgency and Scarcity Dark Patterns',
    subtitle: 'The psychology of FOMO in travel booking.',
    category: Category.CONSUMER,
    tags: ['Travel', 'Psychology', 'Conversion'],
    image: 'https://picsum.photos/800/400?random=53',
    date: 'Jan 02, 2025',
    readTime: '5 min read',
    content: {
      intro: "Booking.com is a masterclass in urgency design. Every page has countdown timers, limited availability, and social proof. Manipulative? Maybe. Effective? Absolutely.",
      keyPoints: [
        'Only 1 room left at this price!',
        '23 people are looking at this property',
        'Last booked 3 minutes ago'
      ],
      sections: [
        {
          heading: 'The Ethics of Urgency',
          body: "These tactics work because scarcity is real in travel. But the presentation amplifies anxiety. Use with caution and honesty."
        }
      ],
      takeaways: "Urgency drives action, but false urgency destroys trust. Use it when it is real."
    }
  },
  {
    id: 'mailchimp-smb-focus',
    title: 'Mailchimp: Winning by Serving Small Businesses',
    subtitle: 'Why focusing on SMBs created a $12B company.',
    category: Category.GROWTH,
    tags: ['SaaS', 'SMB', 'Email'],
    image: 'https://picsum.photos/800/400?random=54',
    date: 'Jan 09, 2025',
    readTime: '6 min read',
    content: {
      intro: "While competitors chased enterprise clients, Mailchimp built for small businesses. The long tail is longer than you think.",
      keyPoints: [
        'Forever Free plan creates brand loyalty',
        'Simple UX designed for non-technical users',
        'Affordable pricing scales with customer growth'
      ],
      sections: [
        {
          heading: 'The Small Business Bet',
          body: "Enterprise deals are big but few. SMBs are small but infinite. Mailchimp chose volume over deal size."
        }
      ],
      takeaways: "Do not ignore small customers. They outnumber enterprises 1000:1. Build for them first."
    }
  },
  {
    id: 'allbirds-sustainable-fashion',
    title: 'Allbirds: Sustainability as Differentiator',
    subtitle: 'How Allbirds made eco-friendly shoes cool.',
    category: Category.CASE_STUDY,
    tags: ['Fashion', 'Sustainability', 'DTC'],
    image: 'https://picsum.photos/800/400?random=55',
    date: 'Jan 16, 2025',
    readTime: '5 min read',
    caseStudyMeta: {
      brand: 'Allbirds',
      industry: 'Footwear / Fashion',
      problem: 'Sustainable products have a "hippie" stigma. Eco-friendly usually means ugly.',
      approach: 'Make sustainability stylish. Simple design, premium feel, transparent sourcing.',
      keyInsight: 'Sustainability is a bonus, not the primary reason to buy. Lead with product, support with values.'
    },
    content: {
      intro: "Allbirds proved that sustainable products do not have to sacrifice design. Merino wool sneakers became a Silicon Valley uniform.",
      keyPoints: [
        'Carbon footprint listed on every product',
        'Material innovation (sugarcane soles, tree fiber)',
        'Minimal design appeals to modern aesthetics'
      ],
      sections: [
        {
          heading: 'The Green Premium',
          body: "Customers will pay more for sustainability, but only if the product is already great. Values amplify, they do not replace."
        }
      ],
      takeaways: "Lead with product quality, support with purpose. Not the other way around."
    }
  },
  {
    id: 'robinhood-gamification',
    title: 'Robinhood: Gamifying the Stock Market',
    subtitle: 'How confetti animations turned investing into a game.',
    category: Category.CONSUMER,
    tags: ['FinTech', 'Gamification', 'Controversy'],
    image: 'https://picsum.photos/800/400?random=56',
    date: 'Jan 23, 2025',
    readTime: '6 min read',
    content: {
      intro: "Robinhood made stock trading feel like a mobile game. Confetti when you buy. Push notifications about trending stocks. The SEC was not amused.",
      keyPoints: [
        'Zero commissions removed the biggest barrier',
        'Simple UX made trading accessible to Gen Z',
        'Gamification drove engagement (and controversy)'
      ],
      sections: [
        {
          heading: 'The Ethics Question',
          body: "Making investing easy is good. Making it feel like a casino is problematic. Robinhood learned this the hard way."
        }
      ],
      takeaways: "Gamification drives engagement, but context matters. What works for Duolingo might not work for financial products."
    }
  },
  {
    id: 'dollar-shave-club',
    title: 'Dollar Shave Club: The Viral Launch That Changed DTC',
    subtitle: 'How a $4,500 video led to a $1B acquisition.',
    category: Category.CASE_STUDY,
    tags: ['DTC', 'Video', 'Viral'],
    image: 'https://picsum.photos/800/400?random=57',
    date: 'Jan 30, 2025',
    readTime: '5 min read',
    caseStudyMeta: {
      brand: 'Dollar Shave Club',
      industry: 'Personal Care / Subscription',
      problem: 'Gillette owned the razor market. Premium pricing, confusing options, retail dependence.',
      approach: 'Simple subscription, funny viral video, DTC delivery.',
      keyInsight: 'One great piece of content can launch a billion-dollar business. Make it memorable.'
    },
    content: {
      intro: "\"Our Blades Are F***ing Great.\" That video got 27M views and launched a company that sold to Unilever for $1B.",
      keyPoints: [
        'Video cost $4,500, generated millions in free PR',
        'Subscription model creates predictable revenue',
        'Simple pricing: $1, $6, $9 per month'
      ],
      sections: [
        {
          heading: 'The Launch Video Effect',
          body: "The video was not just funny. It communicated the value prop perfectly: cheap, good quality, convenient. All in 90 seconds."
        }
      ],
      takeaways: "One viral moment can change everything. But make sure it communicates your value, not just entertainment."
    }
  },
  {
    id: 'uber-growth-tactics',
    title: 'Uber: Aggressive Growth Tactics That Worked',
    subtitle: 'How Uber used referrals, surge pricing, and city-by-city blitzkrieg.',
    category: Category.GROWTH,
    tags: ['Rideshare', 'Growth Hacking', 'Platform'],
    image: 'https://picsum.photos/800/400?random=58',
    date: 'Feb 06, 2025',
    readTime: '7 min read',
    content: {
      intro: "Uber did not play nice. They launched in cities without permission, subsidized rides to kill competition, and used surge pricing to balance supply/demand.",
      keyPoints: [
        'Referral program: give $20, get $20',
        'Launch city-by-city with local promotions',
        'Surge pricing solved the supply problem'
      ],
      sections: [
        {
          heading: 'The Blitzscaling Playbook',
          body: "Uber burned billions to achieve market dominance in each city. Once dominant, network effects made them hard to displace."
        }
      ],
      takeaways: "In winner-take-all markets, speed matters more than profitability. Subsidize growth to capture the market."
    }
  },
  {
    id: 'glossier-micro-influencers',
    title: 'Glossier: Micro-Influencers Over Celebrities',
    subtitle: 'Why Glossier bet on real people with small followings.',
    category: Category.STRATEGY,
    tags: ['Beauty', 'Influencer', 'Community'],
    image: 'https://picsum.photos/800/400?random=59',
    date: 'Feb 13, 2025',
    readTime: '5 min read',
    content: {
      intro: "Glossier does not hire Kardashians. They partner with micro-influencers who actually use the products. Authenticity over reach.",
      keyPoints: [
        'Micro-influencers (10K-100K followers) have higher engagement',
        'Real customers create more trustworthy content',
        'Lower cost, higher ROI than celebrity endorsements'
      ],
      sections: [
        {
          heading: 'The Authenticity Premium',
          body: "Gen Z can smell fake endorsements. They trust people who look like them, talk like them, and actually use the product."
        }
      ],
      takeaways: "Reach is vanity. Resonance is revenue. Micro-influencers deliver both authenticity and performance."
    }
  },
  {
    id: 'zappos-customer-service',
    title: 'Zappos: Customer Service as Marketing',
    subtitle: 'How Zappos built a $2B brand on free returns and 24/7 support.',
    category: Category.STRATEGY,
    tags: ['E-commerce', 'CX', 'Retention'],
    image: 'https://picsum.photos/800/400?random=60',
    date: 'Feb 20, 2025',
    readTime: '6 min read',
    content: {
      intro: "Zappos spent $0 on traditional marketing. Their marketing budget went to free shipping, free returns, and the best customer service in e-commerce.",
      keyPoints: [
        '365-day return policy removes all risk',
        'Customer service reps have no scripts, no time limits',
        'WOW moments create word-of-mouth'
      ],
      sections: [
        {
          heading: 'Service as Differentiation',
          body: "When everyone sells the same shoes at similar prices, service becomes the only differentiator. Zappos made it their superpower."
        }
      ],
      takeaways: "In commodity markets, experience is the product. Invest in service like you would invest in ads."
    }
  },
  {
    id: 'discord-gaming-community',
    title: 'Discord: From Gaming Chat to Community Platform',
    subtitle: 'How Discord became the infrastructure for online communities.',
    category: Category.GROWTH,
    tags: ['Gaming', 'Community', 'Platform'],
    image: 'https://picsum.photos/800/400?random=61',
    date: 'Feb 27, 2025',
    readTime: '6 min read',
    content: {
      intro: "Discord started as a tool for gamers. Now it is where communities live: crypto, education, creators, even brands.",
      keyPoints: [
        'Free tier is genuinely robust (not a trial)',
        'Voice + text + video in one place',
        'Server structure allows infinite community types'
      ],
      sections: [
        {
          heading: 'The Platform Pivot',
          body: "Discord did not pivot away from gaming. They expanded beyond it. Serve the core, but allow flexibility for other use cases."
        }
      ],
      takeaways: "Build for one audience first, then expand. Do not be everything to everyone from day one."
    }
  },
  {
    id: 'chipotle-ingredient-transparency',
    title: 'Chipotle: Transparency as Competitive Advantage',
    subtitle: 'Food with Integrity became a $50B brand promise.',
    category: Category.STRATEGY,
    tags: ['Food', 'Transparency', 'Branding'],
    image: 'https://picsum.photos/800/400?random=62',
    date: 'Mar 05, 2025',
    readTime: '5 min read',
    content: {
      intro: "Chipotle lists every ingredient source. They show you the food being made. Transparency became their moat in fast-casual dining.",
      keyPoints: [
        'Food with Integrity marketing campaign',
        'No microwaves, no freezers, no can openers',
        'Visible kitchen builds trust'
      ],
      sections: [
        {
          heading: 'The Open Kitchen Strategy',
          body: "When customers watch their burrito being made, they trust the process. Transparency is not just honesty—it is theater."
        }
      ],
      takeaways: "Show your work. In food, health, and finance, transparency builds trust faster than claims."
    }
  },
  {
    id: 'hubspot-inbound-marketing',
    title: 'HubSpot: Inventing Inbound Marketing',
    subtitle: 'How HubSpot created a category and owned it.',
    category: Category.STRATEGY,
    tags: ['B2B', 'Content', 'SaaS'],
    image: 'https://picsum.photos/800/400?random=63',
    date: 'Mar 12, 2025',
    readTime: '7 min read',
    content: {
      intro: "HubSpot did not just build software. They created a methodology (Inbound Marketing) and became the authority. Category creation is the ultimate positioning.",
      keyPoints: [
        'Free certifications build brand affinity',
        'Blog and educational content drive SEO',
        'Freemium CRM is the top-of-funnel'
      ],
      sections: [
        {
          heading: 'The Education Moat',
          body: "HubSpot trains marketers on inbound methodology. Those marketers then buy HubSpot tools. Education is lead generation."
        }
      ],
      takeaways: "Create the category, own the definition. Education-based marketing builds authority and demand simultaneously."
    }
  },
  {
    id: 'gymshark-influencer-empire',
    title: 'Gymshark: Built by Influencers, For Influencers',
    subtitle: 'How a teenager built a $1.3B fitness brand on YouTube.',
    category: Category.CASE_STUDY,
    tags: ['Fitness', 'Influencer', 'DTC'],
    image: 'https://picsum.photos/800/400?random=64',
    date: 'Mar 19, 2025',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Gymshark',
      industry: 'Apparel / Fitness',
      problem: 'Competing with Nike and Under Armour with zero budget.',
      approach: 'Partner with micro-influencers before they blow up. Grow together.',
      keyInsight: 'Influencer marketing works best when you grow with them, not pay them when they are big.'
    },
    content: {
      intro: "Gymshark founder Ben Francis sent free gear to YouTubers with 5K followers. Those YouTubers now have millions. Gymshark grew with them.",
      keyPoints: [
        'Early influencer partnerships before they were famous',
        'Athlete community creates authentic content',
        'Product drops create hype and scarcity'
      ],
      sections: [
        {
          heading: 'The Long-Term Influencer Strategy',
          body: "Gymshark did not pay for posts. They built relationships. When influencers grew, Gymshark grew."
        }
      ],
      takeaways: "Bet on people early. Relationships beat transactions in influencer marketing."
    }
  },
  {
    id: 'miro-remote-work',
    title: 'Miro: Riding the Remote Work Wave',
    subtitle: 'How Miro became essential when everyone went remote.',
    category: Category.GROWTH,
    tags: ['SaaS', 'Remote Work', 'Collaboration'],
    image: 'https://picsum.photos/800/400?random=65',
    date: 'Mar 26, 2025',
    readTime: '5 min read',
    content: {
      intro: "Miro was growing slowly. Then COVID hit. Suddenly, every company needed virtual whiteboards. Right product, right time.",
      keyPoints: [
        'Free tier allowed instant team adoption',
        'Integrations with Zoom, Slack made it essential',
        'Templates reduced time-to-value'
      ],
      sections: [
        {
          heading: 'The Remote Work Stack',
          body: "Miro became part of the remote work toolkit: Zoom for calls, Slack for chat, Miro for collaboration. Category positioning matters."
        }
      ],
      takeaways: "Position your product in the customer\'s workflow. Be part of the stack, not a standalone tool."
    }
  },
  {
    id: 'liquid-death-water',
    title: 'Liquid Death: Selling Water Like Energy Drinks',
    subtitle: 'The beverage brand that made hydration heavy metal.',
    category: Category.STRATEGY,
    tags: ['Beverage', 'Branding', 'Differentiation'],
    image: 'https://picsum.photos/800/400?random=66',
    date: 'Apr 02, 2025',
    readTime: '5 min read',
    content: {
      intro: "Liquid Death is water in a can with skull branding and punk rock messaging. It is absurd. It is genius. It works.",
      keyPoints: [
        'Extreme branding differentiates in commodity category',
        'Tallboy can format fits in social settings (bars, concerts)',
        'Environmental message (infinitely recyclable aluminum)'
      ],
      sections: [
        {
          heading: 'The Anti-Water Water',
          body: "Water is boring. Liquid Death made it rebellious. Same product, different story, different customer."
        }
      ],
      takeaways: "In commodity categories, branding is everything. Find an unserved audience and own them completely."
    }
  },
  {
    id: 'duolingo-owls-push',
    title: 'Duolingo: The Passive-Aggressive Owl Strategy',
    subtitle: 'How guilt-based notifications drove 500M downloads.',
    category: Category.CONSUMER,
    tags: ['EdTech', 'Notifications', 'Retention'],
    image: 'https://picsum.photos/800/400?random=67',
    date: 'Apr 09, 2025',
    readTime: '5 min read',
    content: {
      intro: "Duolingo\'s owl mascot guilt-trips you into studying. The notifications are passive-aggressive. The memes are everywhere. The retention is industry-leading.",
      keyPoints: [
        'Push notifications use emotional triggers (guilt, FOMO)',
        'Streak system creates daily habits',
        'Meme culture makes Duo a character, not just a logo'
      ],
      sections: [
        {
          heading: 'Behavioral Design Through Guilt',
          body: "Most apps beg you to return. Duo makes you feel bad for leaving. Emotional triggers work when the tone matches the brand."
        }
      ],
      takeaways: "Notifications are not just reminders. They are storytelling opportunities. Make your brand voice memorable."
    }
  },
  {
    id: 'calm-celebrity-voices',
    title: 'Calm: Celebrity Sleep Stories as Content Strategy',
    subtitle: 'How Matthew McConaughey reading bedtime stories sells subscriptions.',
    category: Category.STRATEGY,
    tags: ['Wellness', 'Content', 'Celebrity'],
    image: 'https://picsum.photos/800/400?random=68',
    date: 'Apr 16, 2025',
    readTime: '5 min read',
    content: {
      intro: "Calm pays celebrities to whisper bedtime stories. It sounds ridiculous. It is their most popular feature. Content differentiation matters.",
      keyPoints: [
        'Celebrity voices create PR and social buzz',
        'Sleep Stories are unique content you cannot get elsewhere',
        'High production value justifies premium pricing'
      ],
      sections: [
        {
          heading: 'The Celebrity Content Strategy',
          body: "Harry Styles, Matthew McConaughey, LeBron James—all reading you to sleep. Absurd? Yes. Shareable? Absolutely."
        }
      ],
      takeaways: "Content differentiation justifies subscription pricing. Build features competitors cannot copy."
    }
  },
  {
    id: 'uniqlo-basics-focus',
    title: 'Uniqlo: The Anti-Fashion Fashion Brand',
    subtitle: 'How Uniqlo won by being boring (on purpose).',
    category: Category.STRATEGY,
    tags: ['Fashion', 'Positioning', 'Retail'],
    image: 'https://picsum.photos/800/400?random=69',
    date: 'Apr 23, 2025',
    readTime: '6 min read',
    content: {
      intro: "While fashion chases trends, Uniqlo sells timeless basics. Their strategy is simplicity, quality, and functional innovation.",
      keyPoints: [
        'HeatTech and AIRism: innovation in fabric, not style',
        'Limited SKUs reduce inventory complexity',
        'Affordable quality: not cheap, but not premium'
      ],
      sections: [
        {
          heading: 'The Basics Opportunity',
          body: "Everyone needs plain t-shirts, comfortable jeans, and warm jackets. Uniqlo does not compete in fashion—they compete in essentials."
        }
      ],
      takeaways: "Not every brand needs to be exciting. Boring and reliable can be a billion-dollar strategy."
    }
  },
  {
    id: 'paypal-ebay-growth',
    title: 'PayPal: The eBay Growth Hack',
    subtitle: 'How PayPal used $20 referrals to achieve explosive growth.',
    category: Category.GROWTH,
    tags: ['FinTech', 'Growth Hacking', 'Referral'],
    image: 'https://picsum.photos/800/400?random=70',
    date: 'Apr 30, 2025',
    readTime: '6 min read',
    content: {
      intro: "PayPal gave $10 to every new user and $10 for every referral. They burned millions in cash but captured the market.",
      keyPoints: [
        'Referral program drove 7-10% daily growth',
        'Integration with eBay made it essential',
        'Network effects: more users = more value for everyone'
      ],
      sections: [
        {
          heading: 'The Viral Coefficient',
          body: "Every user brought 1.2 new users on average. That is exponential growth. The math works when LTV > CAC."
        }
      ],
      takeaways: "Paid acquisition can be growth hacking if the unit economics work. Model the payback period before you burn cash."
    }
  },
  {
    id: 'figma-collaborative-design',
    title: 'Figma: Multiplayer Design Killed Desktop Software',
    subtitle: 'How Figma beat Adobe by being collaborative-first.',
    category: Category.CASE_STUDY,
    tags: ['Design', 'SaaS', 'Collaboration'],
    image: 'https://picsum.photos/800/400?random=71',
    date: 'May 07, 2025',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Figma',
      industry: 'Software / Design Tools',
      problem: 'Adobe owned design tools but was single-player and desktop-locked.',
      approach: 'Build the first truly collaborative, browser-based design tool.',
      keyInsight: 'Multiplayer is the future of software. Make collaboration the default, not a feature.'
    },
    content: {
      intro: "Figma made design collaborative in real-time. Designers, developers, and PMs could work in the same file. Adobe paid $20B to acquire them.",
      keyPoints: [
        'Real-time collaboration like Google Docs',
        'Browser-based (no downloads)',
        'Free tier for education creates generational loyalty'
      ],
      sections: [
        {
          heading: 'The Collaboration Wedge',
          body: "Once your team is in Figma, switching back to Adobe means losing real-time collaboration. That friction is the moat."
        }
      ],
      takeaways: "Collaborative features create network effects. The more people on the platform, the more valuable it becomes."
    }
  },
  {
    id: 'costco-membership-model',
    title: 'Costco: Making Customers Pay to Shop',
    subtitle: 'How the membership model flips traditional retail.',
    category: Category.STRATEGY,
    tags: ['Retail', 'Subscription', 'Loyalty'],
    image: 'https://picsum.photos/800/400?random=72',
    date: 'May 14, 2025',
    readTime: '6 min read',
    content: {
      intro: "Costco makes profit from memberships, not merchandise. This allows them to sell products near cost and still win.",
      keyPoints: [
        'Membership fees are 70%+ of operating income',
        'Bulk buying creates value perception',
        'Limited SKUs (4,000 vs Walmart\'s 100,000) simplify operations'
      ],
      sections: [
        {
          heading: 'The Treasure Hunt Model',
          body: "Costco rotates inventory frequently. You never know what you will find. This creates treasure hunt behavior and repeat visits."
        }
      ],
      takeaways: "Membership models shift the revenue equation. Serve members, not margins."
    }
  },
  {
    id: 'linkedin-creator-program',
    title: 'LinkedIn: The Rise of Thought Leadership',
    subtitle: 'How LinkedIn became the platform for professional creators.',
    category: Category.GROWTH,
    tags: ['Social Media', 'B2B', 'Content'],
    image: 'https://picsum.photos/800/400?random=73',
    date: 'May 21, 2025',
    readTime: '5 min read',
    content: {
      intro: "LinkedIn used to be resumes and job posts. Now it is where professionals build personal brands. The shift was intentional.",
      keyPoints: [
        'Algorithm favors native content over links',
        'Creator program rewards top voices',
        'Long-form posts get more reach than Twitter threads'
      ],
      sections: [
        {
          heading: 'The Professional Creator Economy',
          body: "LinkedIn realized that creators drive engagement. More engagement = more ad revenue. Win-win."
        }
      ],
      takeaways: "Platform shifts happen when incentives align. LinkedIn paid creators in reach; creators paid LinkedIn in content."
    }
  },
  {
    id: 'nintendo-switch-innovation',
    title: 'Nintendo Switch: Blue Ocean Strategy in Gaming',
    subtitle: 'How Nintendo stopped competing and created a new market.',
    category: Category.CASE_STUDY,
    tags: ['Gaming', 'Product', 'Innovation'],
    image: 'https://picsum.photos/800/400?random=74',
    date: 'May 28, 2025',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Nintendo',
      industry: 'Gaming / Entertainment',
      problem: 'Cannot compete with PlayStation and Xbox on graphics/power.',
      approach: 'Stop competing. Create a hybrid console that does something neither can do.',
      keyInsight: 'Blue Ocean Strategy: create uncontested market space instead of fighting in red oceans.'
    },
    content: {
      intro: "Nintendo Switch is portable AND home console. Neither Sony nor Microsoft had that. Nintendo created a new category.",
      keyPoints: [
        'Play anywhere flexibility is unique value prop',
        'Family-friendly games (Mario, Zelda) vs mature competitors',
        'Lower price point expands market'
      ],
      sections: [
        {
          heading: 'The Non-Comparison',
          body: "Switch is not weaker than PlayStation. It is different. When you create a new category, comparisons become irrelevant."
        }
      ],
      takeaways: "When you cannot win on existing dimensions, create new ones. Blue Ocean Strategy is real."
    }
  },
  {
    id: 'outdoor-voices-rec-not-comp',
    title: 'Outdoor Voices: Recreation Not Competition',
    subtitle: 'Positioning against the performance-obsessed fitness culture.',
    category: Category.STRATEGY,
    tags: ['Fitness', 'Positioning', 'Community'],
    image: 'https://picsum.photos/800/400?random=75',
    date: 'Jun 04, 2025',
    readTime: '5 min read',
    content: {
      intro: "While Nike and Adidas sell peak performance, Outdoor Voices says: just move. Exercise for fun, not medals.",
      keyPoints: [
        '#DoingThings campaign celebrates casual movement',
        'Community over competition messaging',
        'Inclusive sizing and diverse models'
      ],
      sections: [
        {
          heading: 'The Anti-Athlete Athlete',
          body: "Outdoor Voices targets people who do not identify as athletes but want to be active. Huge underserved market."
        }
      ],
      takeaways: "Find the unserved segment. Competitors all zig? Zag. Contrarian positioning can create category leaders."
    }
  },
  {
    id: 'coursera-online-education',
    title: 'Coursera: Democratizing Elite Education',
    subtitle: 'How Coursera brought Ivy League classes to millions.',
    category: Category.GROWTH,
    tags: ['EdTech', 'Platform', 'Freemium'],
    image: 'https://picsum.photos/800/400?random=76',
    date: 'Jun 11, 2025',
    readTime: '6 min read',
    content: {
      intro: "Coursera partnered with Yale, Stanford, and Google to offer courses for free (or $49 for certificates). Education as a subscription business.",
      keyPoints: [
        'University partnerships provide credibility',
        'Freemium model: audit for free, pay for certificates',
        'Skill-based learning for career advancement'
      ],
      sections: [
        {
          heading: 'The Credential Economy',
          body: "Coursera certificates signal competence to employers. The value is not the course—it is the credential."
        }
      ],
      takeaways: "Freemium works when free provides value but paid provides status or credentials."
    }
  },
  {
    id: 'ryanair-no-frills',
    title: 'Ryanair: Race to the Bottom (On Purpose)',
    subtitle: 'How Ryanair became Europe\'s largest airline by being the cheapest.',
    category: Category.STRATEGY,
    tags: ['Travel', 'Pricing', 'Operations'],
    image: 'https://picsum.photos/800/400?random=77',
    date: 'Jun 18, 2025',
    readTime: '5 min read',
    content: {
      intro: "Ryanair removes everything: legroom, free bags, customer service. They are the cheapest, and proud of it. Cost leadership as strategy.",
      keyPoints: [
        'Unbundle everything: charge for bags, seats, water',
        'Secondary airports reduce landing fees',
        'Point-to-point routes (no hubs) cut costs'
      ],
      sections: [
        {
          heading: 'The No-Frills Premium',
          body: "Ryanair is not trying to be loved. They are trying to be cheap. That is enough for millions of price-sensitive travelers."
        }
      ],
      takeaways: "Cost leadership is a valid strategy. If you choose it, commit fully. Half-cheap does not work."
    }
  },
  {
    id: 'morning-brew-newsletter',
    title: 'Morning Brew: The Newsletter That Became a Media Empire',
    subtitle: 'How two college students built a $75M media company.',
    category: Category.CASE_STUDY,
    tags: ['Media', 'Newsletter', 'Content'],
    image: 'https://picsum.photos/800/400?random=78',
    date: 'Jun 25, 2025',
    readTime: '6 min read',
    caseStudyMeta: {
      brand: 'Morning Brew',
      industry: 'Media / Publishing',
      problem: 'Business news is boring. How to make Gen Z/Millennials care about stocks and startups.',
      approach: 'Write business news like you talk to friends. Witty, concise, actually fun.',
      keyInsight: 'Tone is differentiation. Same news, different voice, different audience.'
    },
    content: {
      intro: "Morning Brew turned Wall Street Journal content into memes and one-liners. 4M+ subscribers in 6 years.",
      keyPoints: [
        'Referral program drove 30%+ of growth',
        'Witty writing makes business news entertaining',
        'Free newsletter builds audience for premium products'
      ],
      sections: [
        {
          heading: 'The Referral Engine',
          body: "Refer 3 friends, get a Morning Brew mug. Gamification meets SWAG. The mug is a walking billboard."
        }
      ],
      takeaways: "Same content, different packaging. Voice and tone are competitive advantages in media."
    }
  },
  {
    id: 'revolut-growth-europe',
    title: 'Revolut: How Revolut Conquered Europe Without Branches',
    subtitle: 'The digital bank that grew to 30M customers purely through mobile.',
    category: Category.GROWTH,
    tags: ['FinTech', 'Mobile', 'Europe'],
    image: 'https://picsum.photos/800/400?random=79',
    date: 'Jul 02, 2025',
    readTime: '6 min read',
    content: {
      intro: "Revolut has zero physical branches. Their app is the product. Rapid feature releases and referral mechanics drove hyper-growth.",
      keyPoints: [
        'Free forex for travelers removed a pain point',
        'Feature expansion (crypto, stocks, vaults) increases engagement',
        'Referral program gives both parties rewards'
      ],
      sections: [
        {
          heading: 'The Feature Blitz Strategy',
          body: "Revolut releases features weekly. Some fail, some win. Speed of iteration is the competitive advantage."
        }
      ],
      takeaways: "In digital-first businesses, distribution is product. Build fast, test fast, iterate fast."
    }
  },
  {
    id: 'crocs-ugly-cool',
    title: 'Crocs: From Ugly Shoes to Fashion Statement',
    subtitle: 'How Crocs embraced their haters and won.',
    category: Category.STRATEGY,
    tags: ['Fashion', 'Branding', 'Comeback'],
    image: 'https://picsum.photos/800/400?random=80',
    date: 'Jul 09, 2025',
    readTime: '5 min read',
    content: {
      intro: "Crocs were mocked for a decade. Then they leaned into the ugly. Now they are cool. Celebrity collabs and self-awareness saved the brand.",
      keyPoints: [
        'Limited-edition collabs with Justin Bieber, Post Malone',
        'Jibbitz customization creates personalization',
        'Comfort > aesthetics resonates post-COVID'
      ],
      sections: [
        {
          heading: 'The Ironic Cool',
          body: "Crocs stopped defending themselves. They embraced the ugly. Ironically wearing Crocs became a statement. Self-awareness is powerful."
        }
      ],
      takeaways: "Own your weaknesses. If you cannot hide the flaw, make it the feature. Authenticity beats perfection."
    }
  },
  {
    id: 'substack-creator-economy',
    title: 'Substack: Empowering Writers to Own Their Audience',
    subtitle: 'How Substack challenged Medium by betting on paid subscriptions.',
    category: Category.GROWTH,
    tags: ['Media', 'Creator Economy', 'Subscription'],
    image: 'https://picsum.photos/800/400?random=81',
    date: 'Jul 16, 2025',
    readTime: '6 min read',
    content: {
      intro: "Substack gave writers one thing Medium did not: direct revenue from readers. The platform takes 10%, writers keep 90%.",
      keyPoints: [
        'Simple paid subscription model',
        'Writers own their email lists (can export anytime)',
        'No algorithm—pure subscription relationship'
      ],
      sections: [
        {
          heading: 'The Ownership Economy',
          body: "Substack aligned incentives: writers succeed when subscribers pay. Platform grows when writers succeed. Pure alignment."
        }
      ],
      takeaways: "In creator platforms, ownership matters. Rent-seeking platforms lose to ownership-enabling platforms."
    }
  },
  {
    id: 'yeti-premium-cooler',
    title: 'YETI: Selling $400 Coolers to People Who Have $40 Coolers',
    subtitle: 'How YETI turned a commodity into a status symbol.',
    category: Category.CASE_STUDY,
    tags: ['Outdoor', 'Premium', 'Branding'],
    image: 'https://picsum.photos/800/400?random=82',
    date: 'Jul 23, 2025',
    readTime: '5 min read',
    caseStudyMeta: {
      brand: 'YETI',
      industry: 'Outdoor / Consumer Goods',
      problem: 'Coolers are commodities. How to charge 10x more for the same function.',
      approach: 'Premium branding, extreme durability, lifestyle marketing.',
      keyInsight: 'People do not buy coolers. They buy identity. Sell the lifestyle, not the product.'
    },
    content: {
      intro: "YETI coolers are engineer-grade. But the marketing is pure lifestyle: hunting, fishing, adventure. It is Patagonia for outdoorsmen.",
      keyPoints: [
        'Premium pricing signals quality',
        'Influencer partnerships with hunters/anglers',
        'Logo becomes status symbol (YETI stickers everywhere)'
      ],
      sections: [
        {
          heading: 'The Aspirational Cooler',
          body: "A YETI is not just functional. It signals: I am serious about the outdoors. I value quality. I am part of the tribe."
        }
      ],
      takeaways: "Premiumization works in any category. Find the enthusiasts, serve them perfectly, charge accordingly."
    }
  },
  {
    id: 'trader-joes-private-label',
    title: 'Trader Joe\'s: The Private Label Playbook',
    subtitle: 'How Trader Joe\'s wins by eliminating choice and owning brands.',
    category: Category.STRATEGY,
    tags: ['Retail', 'Food', 'Branding'],
    image: 'https://picsum.photos/800/400?random=83',
    date: 'Jul 30, 2025',
    readTime: '6 min read',
    content: {
      intro: "Trader Joe\'s sells 80% private label products. No Coca-Cola, no Tide, no national brands. This is category strategy.",
      keyPoints: [
        'Private label = higher margins',
        'Smaller stores reduce real estate costs',
        'Curated selection (vs Whole Foods\' 50,000 SKUs)'
      ],
      sections: [
        {
          heading: 'The Curation Advantage',
          body: "Trader Joe\'s does not give you 20 pasta sauce options. They give you 3 great ones. Decision fatigue solved."
        }
      ],
      takeaways: "Curation is strategy. Less choice, higher satisfaction. Control the assortment, control the margin."
    }
  },
  {
    id: 'transferwise-transparency',
    title: 'Wise (TransferWise): Radical Transparency in FinTech',
    subtitle: 'How Wise killed hidden fees and won customer trust.',
    category: Category.GROWTH,
    tags: ['FinTech', 'Transparency', 'Disruption'],
    image: 'https://picsum.photos/800/400?random=84',
    date: 'Aug 06, 2025',
    readTime: '5 min read',
    content: {
      intro: "Banks hide fees in exchange rates. Wise shows you exactly what you pay. Transparency became their moat.",
      keyPoints: [
        'Real exchange rate (not marked up)',
        'Transparent fee structure',
        'Comparison tool shows you bank vs Wise cost'
      ],
      sections: [
        {
          heading: 'The Anti-Bank Positioning',
          body: "Wise does not just compete with banks. They call out banks for deceptive practices. Challenger brand energy."
        }
      ],
      takeaways: "In industries with hidden fees, transparency is a weapon. Expose the old guard, win the customer."
    }
  },
  {
    id: 'gojek-super-app',
    title: 'Gojek: Indonesia\'s Answer to the Super App',
    subtitle: 'How Gojek became the operating system for Indonesian daily life.',
    category: Category.CASE_STUDY,
    tags: ['Platform', 'SEA', 'Mobility'],
    image: 'https://picsum.photos/800/400?random=85',
    date: 'Aug 13, 2025',
    readTime: '7 min read',
    caseStudyMeta: {
      brand: 'Gojek',
      industry: 'Tech / Mobility',
      problem: 'Indonesian infrastructure is fragmented. How to serve all daily needs in one app.',
      approach: 'Build super app: rides, food, payments, logistics, services.',
      keyInsight: 'In emerging markets, convenience beats specialization. One app to rule them all.'
    },
    content: {
      intro: "Gojek started with motorcycle taxis. Now they do food delivery, payments, massage services, and logistics. Integration is the strategy.",
      keyPoints: [
        'GoPay creates payment network effects',
        'Driver network serves multiple services',
        'Local solutions (motorcycle taxis) for local problems (traffic)'
      ],
      sections: [
        {
          heading: 'The Super App Advantage',
          body: "Cross-selling services is easier when users are already in your app daily. Rides bring them in, payments keep them."
        }
      ],
      takeaways: "Platform thinking scales better than product thinking. Build ecosystems in markets that reward integration."
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