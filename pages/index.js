import { useRef, useEffect } from 'react';
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '@/utils/data';
import Image from 'next/image';
import { init } from "ityped";
import { useRouter } from 'next/router';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Buy Airtime, Raise Funds", "Unleash Your Fundraising Potential: Airtime Sales, Impactful Donations"],
    });
  }, []);

  return (
    <Layout>
      <Carousel showThumbs={false} autoPlay swipeable infiniteLoop>
        {data.users.map((record) => (
          <div key={record.id} className="flex">
            <Image width="1000" height="10" src={record.banner} alt="slide" />
          </div>
        ))}
      </Carousel>
      <div className="uppercase text-center font-black w-100" >
        <h1 className='text-5xl '>Empower your fundraiser</h1><br />
        <h1 className='text-2xl'><span ref={textRef} /></h1>
        <button
        onClick={() => router.push('login?redirect=/admin/createdonation')}
          className="animate-wavey bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-80 mt-5 mb-5"
        >
          Start Fundraiser course
        </button>
      </div>
    </Layout>
  )
}
