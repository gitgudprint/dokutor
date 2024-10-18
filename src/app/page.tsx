'use client'
import React from 'react';
import Link from 'next/link'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Image  from 'next/image';
import { FlipWordsDemo } from '@/components/Flipwords';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TimelineDemo } from '@/components/Timeline';
import { NavbarDemo } from '@/components/Navbar';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';


export default async function Home() {
  return (
    <>  
      <AuroraBackground>
        <MaxWidthWrapper className=' bg-transparent mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <NavbarDemo></NavbarDemo> 
            <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
              <RegisterLink>Reg</RegisterLink>
            </div>
            <div>
              <FlipWordsDemo />
              <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                Understand in seconds
              </p>
            </div>
           
            <Link className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })} href='/dashboard' target='_blank'>
              Get Started <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
   
          
          <div  className='mx-auto max-w-6xl'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className=' -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:pd-4'>
                <Image src="/dashboard-preview.jpg" width={1364} height={866} alt='preview' className='rounded-xl' />
              </div>
            </div>
          </div>

          <div>
            <TimelineDemo></TimelineDemo>
          </div>
        </MaxWidthWrapper>
      </AuroraBackground>
    </>
  );
};