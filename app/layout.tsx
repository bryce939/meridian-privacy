import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Meridian Privacy Policy',description:'Privacy notice for the personal Meridian application and its optional WHOOP integration.',metadataBase:new URL('https://meridian-privacy.bryce556321.chatgpt.site')};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
