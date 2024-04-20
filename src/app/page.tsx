import Link from 'next/link'
import Image from 'next/image'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { AlignVerticalDistributeEndIcon, MailIcon, PlusIcon } from 'lucide-react'

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

const features = [
  {
    name: 'Room Creation',
    description:
      'Easily create dedicated project rooms with defined goals, milestones, and deadlines for collaborative discussions.',
    icon: PlusIcon,
  },
  {
    name: 'Invite System',
    description:
      'Invite both known and unknown developers via email or username, ensuring seamless collaboration and effective team building.',
    icon: AlignVerticalDistributeEndIcon,
  },
  {
    name: 'Real-time Messaging',
    description:
      ' Instantly communicate with team members through text, code snippets, file sharing, and voice/video calls within project rooms.',
    icon: MailIcon,
  },
  {
    name: 'Task Management',
    description:
      'Efficiently assign, track, and prioritize project tasks with deadlines, status updates, comments, and file attachments for clear accountability.',
    icon: ArrowPathRoundedSquareIcon,
  },
]

export default function LandingPage() {

  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  return (
    <div className="container mx-auto">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-12">
          <div className="text-center">
            <Image className='inline-block' src="/icon.png" width="550" height="550" alt="hero logo" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              your project with other devlopers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              This platform is allows you to share your screen and work with other known or unknown developers online.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/browse"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div className="relative isolate py-44 pt-140 sm:py-32">
        <div
          className="absolute inset-x-0 -top-200 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-200"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
              Everything you need to collaborate with other developers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              Discuss Design Develop empowers you to engage with fellow developers, fostering collaboration to craft outstanding projects
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 dark:text-white text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="relative isolate dark:text-gray-100 py-44 pt-140 sm:py-32">
        <div
          className="absolute inset-x-0 -top-400 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-400"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-3/6 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">What is Discuss, Design, Develop?</summary>
              <div className="px-4 pb-4 text-gray-600">
                <p>Discuss, Design, Develop is a collaborative platform tailored for developers to exchange ideas, work together on projects, and innovate collectively. It offers a suite of tools and features to streamline communication and project management, ultimately facilitating the creation of exceptional projects.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How can I start using Discuss, Design, Develop?</summary>
              <div className="px-4 pb-4 text-gray-600">
                <p>Getting started with Discuss, Design, Develop is simple! Just sign up for an account, create or join project rooms, invite collaborators, and start discussing ideas, designing solutions, and developing projects in real-time.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Can I invite developers who are not registered on the platform?</summary>
              <div className="px-4 pb-4 text-gray-600">
                <p>Yes, you can invite both registered and unregistered developers to join your project rooms. Simply send them an invitation via email or share a unique link, but they can not join the discussion without an account they need to create first.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">What features are available for project collaboration?</summary>
              <div className="px-4 pb-4 text-gray-600">
                <p>Our platform offers a range of features to enhance project collaboration, including real-time messaging, file sharing, code snippet sharing, task management, and video conferencing. These tools are designed to facilitate seamless communication and effective coordination among team members.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Is Discuss, Design, Develop suitable for both small and large projects?</summary>
              <div className="px-4 pb-4 text-gray-600">
                <p>Absolutely! Whether you're working on a small-scale project with a few collaborators or managing a large-scale development initiative with multiple teams, Discuss, Design, Develop provides the flexibility and scalability to accommodate projects of any size and complexity.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How secure is my data on Discuss, Design, Develop?</summary>
              <div className="px-4 pb-4 text-gray-600">
                <p>We take data security and privacy seriously. Our platform employs robust security measures to protect your information and ensure confidentiality. All data transmission is encrypted, and we adhere to strict privacy policies to safeguard your data from unauthorized access or misuse.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-800 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-800"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="container mx-auto py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <Image className="w-[28rem]" src="/icon.png" width="1500" height="1500" alt="footer_logo" />
              <p className="text-[15px] font-medium text-[#646464]">
                Fostering creativity and innovation through seamless collaboration, Discuss, Design, Develop is your platform for bringing projects to life, together.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#3c4d8b] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Discuss Design Develop <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dhanwalkarjay.github.io/Jay_Dhanwalkar_Portfolio/"
                >
                  Jay Dhanwalkar
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Features</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#3c4d8b]"></span>

              <p className="text-[16px] hover:text-[#3c4d8b] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Screen Sharing
              </p>
              <p className="text-[16px] hover:text-[#3c4d8b] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Real-time Chat
              </p>
              <p className="text-[16px] hover:text-[#3c4d8b] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Task Management
              </p>
              <p className="text-[16px] hover:text-[#3c4d8b] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Invite System
              </p>
            </div>

            {/* right div */}
            {/* <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">About</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div> */}

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
