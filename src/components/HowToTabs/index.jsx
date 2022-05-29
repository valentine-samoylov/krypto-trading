// HowToTabs
import { Tab } from '@headlessui/react'
import useClassNames from '@/hooks/useClassNames'
import VideoPlayer from '@/components/VideoPlayer'

const HowToTabs = ({ data }) => {
  return (
    <Tab.Group vertical>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <Tab.Panels className="w-full max-w-[25rem] sm:w-1/2 sm:max-w-none">
          {data.map((item, idx) => (
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
            {data.map((item, idx) => (
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
  )
}

export default HowToTabs
