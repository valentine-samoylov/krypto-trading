// Data
// navLinks
export const navLinks = [
  { scrollToId: '#howToSection', linkLabel: 'How it works' },
  { scrollToId: '#cryptosSection', linkLabel: 'Cryptos' },
  { scrollToId: '#featuresSection', linkLabel: 'Features' },
  { scrollToId: '#testimonialsSection', linkLabel: 'Testimonials' },
  { scrollToId: '#uniSection', linkLabel: 'University' },
]

// howToContent
import imgHowTo01 from '@assets/images/bg/how-to-01.jpg?as=webp'
import imgHowTo02 from '@assets/images/bg/how-to-02.jpg?as=webp'
import imgHowTo03 from '@assets/images/bg/how-to-03.jpg?as=webp'
import imgHowTo04 from '@assets/images/bg/how-to-04.jpg?as=webp'
import movHowTo01 from '@assets/videos/how-to-01.mp4'
import movHowTo02 from '@assets/videos/how-to-02.mp4'
import movHowTo03 from '@assets/videos/how-to-03.mp4'
import movHowTo04 from '@assets/videos/how-to-04.mp4'

export const howToContent = [
  { btnText: 'Create an account', previewSrc: imgHowTo01, videoSrc: movHowTo01 },
  { btnText: 'Download platform', previewSrc: imgHowTo02, videoSrc: movHowTo02 },
  { btnText: 'Select crypto', previewSrc: imgHowTo03, videoSrc: movHowTo03 },
  { btnText: 'Start trading', previewSrc: imgHowTo04, videoSrc: movHowTo04 },
]

// featuresContent
import IconContest from '@assets/images/svg/features-icon-01.svg'
import IconCommission from '@assets/images/svg/features-icon-02.svg'
import IconSecurity from '@assets/images/svg/features-icon-03.svg'
import IconWithdraw from '@assets/images/svg/features-icon-04.svg'
import IconMonthly from '@assets/images/svg/features-icon-05.svg'
import IconSupport from '@assets/images/svg/features-icon-06.svg'

export const featuresContent = [
  {
    featureIcon: <IconContest className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Weekly Trading Contest',
    featureDescr:
      'Every week, 5 winners will earn real cash prizes. Trade and win with Krypto platform!',
  },
  {
    featureIcon: <IconCommission className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Less Commission On Trade',
    featureDescr: 'Millions of Krypto platform users enjoy the lowest commissions in the industry!',
  },
  {
    featureIcon: <IconSecurity className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Safe and Secure Trading platform',
    featureDescr: 'We use the latest blockchain technology to protect your transactions.',
  },
  {
    featureIcon: <IconWithdraw className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Instant Withdraw Process',
    featureDescr: 'You can always withdraw funds from your account quickly and safely.',
  },
  {
    featureIcon: <IconMonthly className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Monthly Bonuses and Promotions',
    featureDescr: 'Our users get nice monthly bonuses and hot promotional offers.',
  },
  {
    featureIcon: <IconSupport className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: '24/7 Support Team',
    featureDescr:
      'Any questions or suggestions? You can contact our professionals at any time of the day or night.',
  },
]

// testimonialsContent
import authorImg01 from '@assets/images/content/author-01.jpg?as=webp'
import authorImg02 from '@assets/images/content/author-02.jpg?as=webp'
import authorImg03 from '@assets/images/content/author-03.jpg?as=webp'
import authorImg04 from '@assets/images/content/author-04.jpg?as=webp'
import authorImg05 from '@assets/images/content/author-05.jpg?as=webp'
import authorImg06 from '@assets/images/content/author-06.jpg?as=webp'

export const testimonialsContent = [
  {
    authorText: 'Withdrawal to any account or bank card is very easy in Krypto.',
    authorImgSrc: authorImg01,
    authorName: 'Cameron Williamson',
    authorPos: 'FX Trader',
  },
  {
    authorText:
      'I pumped up my investment portfolio in a year, and at that time I started with Krypto.',
    authorImgSrc: authorImg02,
    authorName: 'Bessie Cooper',
    authorPos: 'Stock Manager',
  },
  {
    authorText: 'Very low transaction fees and a wide range of currencies for investments.',
    authorImgSrc: authorImg03,
    authorName: 'Albert Flores',
    authorPos: 'Crypto Analyst',
  },
  {
    authorText: 'For last year with Krypto, I have made many trades and received nice bonuses.',
    authorImgSrc: authorImg04,
    authorName: 'Matthew Foster',
    authorPos: 'Crypto Research Analyst',
  },
  {
    authorText: "With the mobile app, I'm aware of everything that's going on in the market.",
    authorImgSrc: authorImg05,
    authorName: 'Eric Jones',
    authorPos: 'Customer Service Agent',
  },
  {
    authorText: 'I can see handy analytics and predict my investment strategy accordingly.',
    authorImgSrc: authorImg06,
    authorName: "David O'Gallagher",
    authorPos: 'Research Analyst',
  },
]

// universityContent
import articleImg01 from '@assets/images/content/blogs-01.jpg?as=webp'
import articleImg02 from '@assets/images/content/blogs-02.jpg?as=webp'
import articleImg03 from '@assets/images/content/blogs-03.jpg?as=webp'
import articleImg04 from '@assets/images/content/blogs-04.jpg?as=webp'

export const universityContent = [
  {
    imgSrc: articleImg01,
    title: 'How to trade Bitcoin',
    text: 'What is bitcoin? How to choose the best deal? In this article, you will learn everything you need to get started.',
    linkHref: '#',
  },
  {
    imgSrc: articleImg02,
    title: 'Gain the best exchange',
    text: 'How to choose the best course? Current interviews with traders and analysts.',
    linkHref: '#',
  },
  {
    imgSrc: articleImg03,
    title: 'Reduce your loosing',
    text: 'Learn how to minimize risks and reduce losses in future investments. The best reliable strategies',
    linkHref: '#',
  },
  {
    imgSrc: articleImg04,
    title: 'Win 50-50 trading strategy',
    text: 'Futures live in a 50/50 world that requires successful traders to change the odds just a few percentage points in their favor.',
    linkHref: '#',
  },
]
