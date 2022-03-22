// HowToTrade
import { Tab } from '@headlessui/react'
import ReactPlayer from 'react-player'
import Section from '@components/Section/Section'
import useClassNames from '@hooks/useClassNames/'
import imgHowTo01 from '@assets/images/content/how-to-01.jpg?as=webp'
import imgHowTo02 from '@assets/images/content/how-to-02.jpg?as=webp'
import imgHowTo03 from '@assets/images/content/how-to-03.jpg?as=webp'
import imgHowTo04 from '@assets/images/content/how-to-04.jpg?as=webp'
import movHowTo01 from '@assets/videos/how-to-01.mp4'
import movHowTo02 from '@assets/videos/how-to-02.mp4'
import movHowTo03 from '@assets/videos/how-to-03.mp4'
import movHowTo04 from '@assets/videos/how-to-04.mp4'
import PlayIcon from '@assets/images/svg/ui-play.svg'
import CoinETH from '@assets/images/svg/coin-02.svg'

const sectionTextContent = {
  headingText: 'How to Trade With Krypto',
  paragraphText: 'Tincidunt id nibh orci nibh just nulla elementum, sed vel.',
}

const tabsData = [
  { btnText: 'Create an account', previewSrc: imgHowTo01, videoSrc: movHowTo01 },
  { btnText: 'Download platform', previewSrc: imgHowTo02, videoSrc: movHowTo02 },
  { btnText: 'Select crypto', previewSrc: imgHowTo03, videoSrc: movHowTo03 },
  { btnText: 'Start trading', previewSrc: imgHowTo04, videoSrc: movHowTo04 },
]

const HowToTrade = () => {
  return (
    <Section
      className="pb-8"
      id="howToTradeSection"
      heading={sectionTextContent.headingText}
      paragraph={sectionTextContent.paragraphText}
    >
      <div className="relative z-0">
        <CoinETH
          className="absolute -bottom-[11%] -right-[20%] -z-[1] lg:-right-[8%]"
          width="14.815vh"
          height="14.815vh"
        />
        <Tab.Group>
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Tab.Panels className="w-full max-w-[25rem] sm:w-1/2 sm:max-w-none">
              {tabsData.map((item, idx) => (
                <Tab.Panel key={idx}>
                  <ReactPlayer
                    className="width-full height-full rounded-xl aspect-540/673 overflow-hidden object-cover max-w-[25rem] sm:max-w-none"
                    url={item.videoSrc}
                    width="100%"
                    height="auto"
                    muted
                    loop
                    playing
                    playIcon={
                      <button className="flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 bg-red-500 rounded-full transition ease-in-out duration-300 hover:scale-105 active:bg-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-500/40">
                        <PlayIcon width="1.25rem" height="1.25rem" />
                      </button>
                    }
                    light={item.previewSrc}
                  ></ReactPlayer>
                </Tab.Panel>
              ))}
            </Tab.Panels>

            <Tab.List className="flex flex-col items-center sm:w-1/2 md:p-4 lg:p-8 lg:px-20">
              <h3 className="mb-10 text-4xl text-center text-red-500 font-bold sm:text-left">
                Steps to trade
              </h3>
              <ul className="flex flex-col items-start gap-6 counter-parent">
                {tabsData.map((item, idx) => (
                  <li key={idx}>
                    <Tab
                      className={({ selected }) =>
                        useClassNames(
                          'flex items-center min-w-[18rem] pl-16 py-6 pr-14 rounded-[5rem] text-lg text-red-500 font-medium leading-none transition ease-in-out duration-300 overflow-hidden counter-item hover:shadow-glow-md active:bg-black/10 focus:shadow-red-600/40',
                          selected ? 'shadow-glow-md' : 'shadow-glow-xs'
                        )
                      }
                    >
                      <span>{item.btnText}</span>
                    </Tab>
                  </li>
                ))}
              </ul>
            </Tab.List>
          </div>
        </Tab.Group>
      </div>
    </Section>
  )
}

export default HowToTrade
