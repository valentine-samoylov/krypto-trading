// Features
import Section from '@components/Section/Section'
import FeatureCard from '@components/FeatureCard/FeatureCard'
import IconContest from '@assets/images/svg/features-icon-01.svg'
import IconCommission from '@assets/images/svg/features-icon-02.svg'
import IconSecurity from '@assets/images/svg/features-icon-03.svg'
import IconWithdraw from '@assets/images/svg/features-icon-04.svg'
import IconMonthly from '@assets/images/svg/features-icon-05.svg'
import IconSupport from '@assets/images/svg/features-icon-06.svg'
import coinBTC from '@assets/images/decorations/coin-BTC.png?as=webp'

const sectionTextContent = {
  headingText: 'Attractive Features',
  paragraphText: "Windaful makes playing the UK's best raffles easy and fun.",
}

const featuresContent = [
  {
    featureIcon: <IconContest className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Weekly Trading Contest',
    featureDescr: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
  },
  {
    featureIcon: <IconCommission className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Less Commission On Trade',
    featureDescr: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
  },
  {
    featureIcon: <IconSecurity className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Safe And Secure Trading platform',
    featureDescr: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
  },
  {
    featureIcon: <IconWithdraw className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Instant Withdraw Process',
    featureDescr: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
  },
  {
    featureIcon: <IconMonthly className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: 'Monthly Commition',
    featureDescr: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
  },
  {
    featureIcon: <IconSupport className="flex-shrink-0" width="4.063rem" height="4.063rem" />,
    featureTitle: '24/7 Support Team',
    featureDescr: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.',
  },
]

const Features = () => {
  return (
    <Section
      className="pb-20 md:pb-28 lg:pb-36"
      id="featuresSection"
      heading={sectionTextContent.headingText}
      paragraph={sectionTextContent.paragraphText}
    >
      <div className="relative z-0">
        <div
          className="absolute -top-[18%] -right-[15%] sm:-right-[6%] -z-[1] w-[8.796vh] h-[8.796vh] bg-contain pointer-events-none sm:-top-[25%] lg:-top-[40%]"
          style={{ backgroundImage: `url(${coinBTC})` }}
        ></div>

        <div className="grid gap-8 justify-center sm:grid-cols-2 xl:grid-cols-3 ">
          {featuresContent.map((item, idx) => (
            <FeatureCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
