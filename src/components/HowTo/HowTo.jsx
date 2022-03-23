// HowToTrade
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Section from '@components/Section/Section'
import VideoPlayer from '@components/VideoPlayer/VideoPlayer'
import { howToContent } from './howToContent'
import coinETH from '@assets/images/bg/coin-ETH.png?as=webp'

const sectionTextContent = {
  headingText: 'How to Trade With Krypto',
  paragraphText: 'Tincidunt id nibh orci nibh just nulla elementum, sed vel.',
}

const HowToTrade = () => {
  return (
    <Section
      className="pb-8"
      id="howToTradeSection"
      heading={sectionTextContent.headingText}
      paragraph={sectionTextContent.paragraphText}
    >
      <div className="relative z-0">
        <div
          className="absolute -bottom-[11%] -right-[20%] -z-[1] w-[14.815vh] h-[14.815vh] bg-contain pointer-events-none lg:-right-[8%] "
          style={{ backgroundImage: `url(${coinETH})` }}
        ></div>

        <Tabs
          className="flex flex-col items-center gap-8 sm:flex-row"
          selectedTabClassName="shadow-glow-md"
        >
          <div className="w-full max-w-[25rem] sm:w-1/2 sm:max-w-none">
            {howToContent.map((item, idx) => (
              <TabPanel key={idx}>
                <VideoPlayer item={item} />
              </TabPanel>
            ))}
          </div>

          <TabList className="flex flex-col items-center sm:w-1/2 md:p-4 lg:p-8 lg:px-20 lg:items-start">
            <h3 className="mb-10 text-4xl text-center text-red-500 font-bold sm:text-left">
              Steps to trade
            </h3>
            <ul className="flex flex-col items-start gap-6 counter-parent">
              {howToContent.map((item, idx) => (
                <Tab
                  className="flex items-center min-w-[18rem] pl-16 py-6 pr-14 rounded-[5rem] border-none shadow-glow-xs text-lg text-red-500 font-medium leading-none transition ease-in-out duration-300 overflow-hidden counter-item hover:shadow-glow-md hover:scale-105 active:bg-black/10 focus:outline-none focus:ring-2 focus:ring-red-500/40"
                  selectedTabClassName="shadow-glow-md"
                  key={idx}
                >
                  <span>{item.btnText}</span>
                </Tab>
              ))}
            </ul>
          </TabList>
        </Tabs>
      </div>
    </Section>
  )
}

export default HowToTrade
