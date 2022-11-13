import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Agents from '../components/Agents';
import Blog from '../components/Blog';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OnSaleProperty from '../components/OnSaleProperty';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Simla Realestate</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-2 text-center'>
        <Carousel />

        <Services />

        <Projects />

        <OnSaleProperty />

        <Agents />

        <Blog />

        <Testimonials />

        <div className='mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
          <a
            href='https://nextjs.org/docs'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
            <p className='mt-4 text-xl'>
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Examples &rarr;</h3>
            <p className='mt-4 text-xl'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>Deploy &rarr;</h3>
            <p className='mt-4 text-xl'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
