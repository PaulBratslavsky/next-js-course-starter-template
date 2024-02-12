export const globalData = {
  topNav: {
    logoText: { text: "Strapi + Next", href: "/" },
    navItems: [
      { text: "Home", href: "/" },
      { text: "Blog", href: "/blog" },
      { text: "About", href: "/about" },
    ],
    cta: {
      text: "Login",
      href: "/login",
    },
  },
  footer: {
    socialLinks: [
      { text: "Twitter", href: "http://www.twitter.com", icon: "TWITTER" },
      { text: "You Tube", href: "http://www.youtube.com", icon: "YOUTUBE" },
      { text: "Facebook", href: "http://www.facebook.com", icon: "FACEBOOK" },
    ],
  },
};

export const heroData = {
  heading: "Box Office News!",
  text: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  image: {
    url: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    alternativeText: "Hero Image",
  },
  link: {
    text: "Latest Posts",
    href: "/blog",
  },
};

export const featuresData = {
  feature: [
    {
      id: 1,
      text: "1 Unlimited inboxes",
      description:
        "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    },
    {
      id: 2,
      text: "2 Manage team members",
      description:
        "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    },
    {
      id: 3,
      text: "3 Spam report",
      description:
        "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    },
  ],
};

export const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    slug: "/blog/slug-to-post",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    image: {
      url: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      alternateText: "Boost your conversion rate",
    },
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: {
        url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alternateText: "Michael Foster",
      },
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    slug: "/blog/slug-to-post",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    image: {
      url: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      alternateText: "Boost your conversion rate",
    },
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: {
        url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alternateText: "Michael Foster",
      },
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    slug: "/blog/slug-to-post",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    image: {
      url: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      alternateText: "Boost your conversion rate",
    },
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: {
        url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alternateText: "Michael Foster",
      },
    },
  },
];

export const post = {
  id: 1,
  title: "Boost your conversion rate",
  slug: "/blog/slug-to-post",
  description:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  image: {
    url: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    alternateText: "Boost your conversion rate",
  },
  date: "Mar 16, 2020",
  createdAt: "2020-03-16",
  category: { title: "Marketing" },
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    image: {
      url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      alternateText: "Michael Foster",
    },
  },
  content:
    "# The Beauty of Autumn",
};

export const activity = [
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment:
      "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
];
