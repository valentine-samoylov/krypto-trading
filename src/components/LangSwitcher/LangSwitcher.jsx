// LangSwitcher
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import US from '@assets/images/svg/lang-en-us.svg'
import GB from '@assets/images/svg/lang-en-gb.svg'
import ES from '@assets/images/svg/lang-es.svg'
import ArrowDown from '@assets/images/svg/ui-arrow-down.svg'
import ItemCheck from '@assets/images/svg/ui-check.svg'

const languages = [
  { id: 1, flag: <US title="English (USA)" />, abbr: 'EN-US' },
  { id: 2, flag: <GB title="English (GB)" />, abbr: 'EN-GB' },
  { id: 3, flag: <ES title="Español" />, abbr: 'ES' },
]

const LangSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <div className="flex text-lg ">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <div className="relative flex">
          <Listbox.Button className="relative flex py-2 pl-3 pr-10 rounded-[1.25rem] border-2 border-red-500 transition-colors lg:hover:bg-white/5 lg:active:shadow-inner lg:focus:outline-none lg:focus:ring-2 focus:ring-red-500/40">
            {selectedLanguage.flag}
            <ArrowDown className="absolute inset-y-auto right-3" />
          </Listbox.Button>
          <Listbox.Options className="absolute top-12 right-0 z-10 space-y-1 py-1 min-w-max bg-white rounded-md shadow-md max-h-60">
            {languages.map((lang) => (
              <Listbox.Option
                className={({ active }) =>
                  `relative flex items-center py-1 pr-2 pl-9 cursor-pointer ${
                    active ? 'bg-red-100 text-red-400' : 'text-neutral-300'
                  } transition-colors`
                }
                key={lang.id}
                value={lang}
                disabled={lang.unavailable}
              >
                {({ selected }) => (
                  <>
                    {lang.flag}
                    {selected ? (
                      <ItemCheck className="absolute top-1/2 left-2 text-red-400 -translate-y-1/2" />
                    ) : null}
                    <span className="ml-2 text-sm">{lang.abbr}</span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default LangSwitcher
