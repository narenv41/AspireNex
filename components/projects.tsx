import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';
import img12 from './images/skillscape.jpg';
import img123 from './images/282283163-00c934ed-0557-4fc9-b7d8-0a5eb35fabf0.jpeg';
import block from './images/block.png';

export const projects = [
  {
    id: 1,
    title: 'Full Stack e-commerce Website',
    des: 'A full Stack commerce website developed to buy courses using PHP as backend',
    img: img12,
    iconLists: ['./images/php.svg', './images/html.svg', './images/css.svg'],
    link: 'https://github.com/narenv41',
  },
  {
    id: 2,
    title: 'Split the bill',
    des: 'An java application with an User freindly interface with firbase authentication and sms sending features',
    img: img123,
    iconLists: ['./images/java.svg'],
    link: 'https://github.com/narenv41',
  },
  {
    id: 3,
    title: 'BlockChain Explorer',
    des: 'A simple frontend application blockchain explorer',
    img: block,
    iconLists: ['./images/re.svg'],
    link: 'https://github.com/narenv41',
  },
];

export function Projects() {
  return (
    <section id="project">
      <div className="relative w-full dark:bg-black bg-black min-h-screen dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <div className="py-20">
          <h1 className="heading text-center ">
            Recent Projects
          </h1>
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 relative z-10">
            {projects.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer title={item.link} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 grid-flow-row1 col-span-3">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: '#000000' }}
                    >
                      <Image
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{ color: '#BEC1DD', margin: '1vh 0' }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {/* Assuming these are images, adjust if using icons */}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
