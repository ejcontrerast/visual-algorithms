import React, { createContext } from 'react';
import {ChevronLast, MoreVertical} from "lucide-react"
import {ChevronFirst} from "lucide-react"

const SidebarContext = createContext<{ expanded: boolean }>({ expanded: false })
export const Navbar: React.FC<React.PropsWithChildren> = ({children}) => {
const [expanded, setExpanded] = React.useState(true);

  return (
    <aside className="h-screen">
      <nav className="flex flex-col items-center justify-center h-full shadow-sm">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-2xl font-bold">
            <img src="https://img.icons8.com/ios/452/algorithm.png" alt="Algorithm Visualizer" 
                className={`
                    w-10 h-10
                    overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}
                `}/>
            <button 
            onClick={() => setExpanded((curr) => !curr)}
            className="w-10 h-10 bg-blue-500 text-white text-2xl font-bold">
                {expanded? <ChevronFirst />: <ChevronLast />}
            </button>
        </div>  

        <SidebarContext.Provider value={{expanded}}>
            <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>

        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-2xl font-bold">
            <img src="https://img.icons8.com/ios/452/algorithm.png" alt="Algorithm Visualizer" className="w-10 h-10" />
            <div className={
                `flex justify-between items-center
                overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
                `
            }>
               <div className='leading-4'>
                <h4 className='text-sm font-semibold'>Algorithm Visualizer</h4>
                <span className='text-xs'>some@gmail.com</span>    
               </div>
               <MoreVertical size={20}/>
            </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
    icon: string;
    text: string;
    active?: boolean;
    alert?: boolean;
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
    const { expanded } = React.useContext(SidebarContext)

    return (
        <li className={`
            flex items-center w-full h-16 px-3 group
            ${active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100'}`
            }>
            <img src={icon} alt={text} className='w-6 h-6' />
            <span className={`
                overflow-hidden transition-all ${expanded ? 'ml-32' : 'ml-0'}
                `}>{text}</span>
            {alert && (<div className={`
            absolute right-0 w-2 h-2 bg-red-500 rounded 
            ${expanded ? '' : 'top-2'}
            `} />
            )}

            {!expanded && (<div className={`
             absolute left-full rounded-md px-2 py-1 ml-6
                bg-blue-500 text-white text-xs
                invisible opacity -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}>
                {text}
            </div>
            )}
        </li>

    )
}