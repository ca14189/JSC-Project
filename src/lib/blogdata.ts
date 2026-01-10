export type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  authorImage: string;
  content: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "How smart design increases business growth",
    excerpt:
      "Discover how thoughtful UI/UX choices can directly impact conversions, trust, and user engagement.",
    image: "/images/blog1.png",
    date: "12 Mar 2025",
    category: "Design",
    author: "Adarsh Bhargav",
    authorImage: "/images/dummyUser.png",
    content: `
      Design is no longer just about how a product looks — it’s about how it works, feels, and performs for users. In today’s competitive digital world, smart design has become a powerful business tool that directly influences growth, trust, and customer loyalty.

      ###The business impact of good design
      Companies that invest in thoughtful UI/UX design often see:
      - Higher conversion rates
      - Stronger brand credibility
      - Better customer retention
      - Reduced support and onboarding costs

      ### How design builds trust
      When users land on a well-designed website or app, they immediately feel more confident.
      Clear layouts, readable typography, and consistent colors send a message of professionalism and reliability.

      A confusing interface, on the other hand, creates doubt and pushes users away.

      ### Design that drives conversions
      Smart design focuses on guiding users smoothly toward their goals:
      - Clear call-to-action buttons
      - Simple navigation
      - Fast load times
      - Accessible layouts for all users

      Every small improvement in usability can lead to measurable business growth.

      ### Turning design into a growth strategy
      Successful companies treat design as a strategic investment, not just a visual upgrade.
      They test layouts, study user behavior, and continuously refine experiences based on real feedback.

      In the end, smart design doesn’t just make things look better —  
      it makes businesses perform better.
      `,
  },
  {
    id: 2,
    title: "The future of remote work culture",
    excerpt:
      "Remote work is no longer a trend — it’s the future. Here’s how companies can adapt.",
    image: "/images/blog2.png",
    date: "18 Mar 2025",
    category: "Business",
    author: "Pradip Madheshiya",
    authorImage: "/images/dummyUser.png",
    content: `
      Remote work is no longer just a temporary solution — it has become a permanent part of modern work culture.

      Companies across the world are realizing that flexibility, autonomy, and trust lead to happier and more productive teams.

      ### Why remote work is here to stay
      - Access to global talent
      - Reduced operational costs
      - Better work-life balance for employees
      - Increased job satisfaction and retention

      ### Challenges businesses must solve
      While remote work offers many benefits, it also comes with challenges:
      - Maintaining team collaboration
      - Avoiding burnout and isolation
      - Ensuring data security
      - Building strong company culture

      ### How companies can adapt
      To succeed in a remote-first world, organizations should:
      - Invest in the right collaboration tools
      - Encourage clear communication practices
      - Focus on results, not hours worked
      - Create opportunities for virtual team bonding

      The future of work is flexible, digital, and people-focused.  
      Companies that adapt today will lead tomorrow.
      `,
  },
  {
    id: 3,
    title: "Why performance matters in modern web apps",
    excerpt:
      "Speed is the new SEO. Learn how performance directly affects user experience.",
    image: "/images/blog3.png",
    date: "22 Mar 2025",
    category: "Technology",
    author: "Ankur Jaiswal",
    authorImage: "/images/dummyUser.png",
    content: `
      Performance is no longer optional in modern web applications.
      Users expect fast load times, smooth animations, and instant feedback.

      A delay of even one second can reduce conversions by up to 20%.

      ### Why performance matters
      - Better SEO rankings
      - Higher user retention
      - Improved accessibility
      - Lower bounce rate

      ### Key optimization tips
      - Use image optimization
      - Enable caching
      - Reduce bundle size
      - Use server components wisely

      In the end, performance is not just a technical concern — 
      it’s a business advantage.
      `,
  },
];
