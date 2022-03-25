// HowToTrade
import { useParallax } from 'react-scroll-parallax'
import { Tab } from '@headlessui/react'
import useClassNames from '@hooks/useClassNames/'
import Section from '@components/Section/Section'
import VideoPlayer from '@components/VideoPlayer/VideoPlayer'
import { howToContent } from './howToContent'
import coinETH from '@assets/images/bg/coin-ETH.png?as=webp'

const sectionTextContent = {
  headingText: 'How to Trade With Krypto',
  paragraphText: 'Becoming a cryptotrader on our platform has never been easier!',
}

const HowToTrade = () => {
  const ethPlx = useParallax({ speed: -10 })

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
          ref={ethPlx.ref}
        ></div>

        <Tab.Group vertical>
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Tab.Panels className="w-full max-w-[25rem] sm:w-1/2 sm:max-w-none">
              {howToContent.map((item, idx) => (
                <Tab.Panel key={idx}>
                  <VideoPlayer data={item} />
                </Tab.Panel>
              ))}
            </Tab.Panels>

            <Tab.List className="flex flex-col items-center sm:w-1/2 md:p-4 lg:p-8 lg:px-20">
              <h3 className="mb-10 text-4xl text-center text-red-500 font-bold sm:text-left">
                Steps to trade
              </h3>
              <ul className="flex flex-col items-start gap-6 counter-parent">
                {howToContent.map((item, idx) => (
                  <li key={idx}>
                    <Tab
                      className={({ selected }) =>
                        useClassNames(
                          'flex items-center min-w-[18rem] pl-16 py-[1.188rem] pr-14 rounded-[5rem] border-none text-lg text-red-500 font-medium transition cursor-pointer overflow-hidden counter-item lg:hover:shadow-glow-md lg:hover:scale-105 lg:active:bg-black/10 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:will-change-transform',
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
