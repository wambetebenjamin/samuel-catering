import type {Metadata} from 'next';import './globals.css';import {Header,Footer,Floating,Loading} from '@/components/Site';
export const metadata:Metadata={title:'Samuel Catering | Great food. Every occasion.',description:'Food catering and event meals for corporates, weddings, parties and schools in Nairobi, Kenya.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Loading/><Header/><main>{children}</main><Footer/><Floating/></body></html>}
