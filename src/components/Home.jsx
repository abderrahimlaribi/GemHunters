import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/images/Untitled-1.png'
import GettingStartedBg from '../assets/images/getting-started-bg.svg'
import PhoneNumberValidation from './PhoneNumber'
import FAQList from './FAQList'
import { Link as ScrollLink } from 'react-scroll'
import { useQuery } from '@tanstack/react-query'
import Form from './From'

import img1 from '../assets/images/image-1.svg'
import img2 from '../assets/images/image-2.svg'
import img3 from '../assets/images/image-3.svg'
import img4 from '../assets/images/image-4.svg'
import img5 from '../assets/images/image-5.svg'
import img6 from '../assets/images/image-6.svg'
import img7 from '../assets/images/image-7.svg'
import img8 from '../assets/images/image-8.svg'
import img9 from '../assets/images/image-9.svg'
import img10 from '../assets/images/image-10.svg'
import img11 from '../assets/images/image-11.svg'
import img12 from '../assets/images/image-12.svg'
import img13 from '../assets/images/image-13.svg'
import img14 from '../assets/images/image-14.svg'
import img15 from '../assets/images/image-15.svg'

import ShapeBg from '../assets/images/reports-shape.svg'

import HammerStepLeft from '../assets/images/hammer-step-left.webp'
import DiamondStepRight from '../assets/images/diamond-step-right.webp'

import StarAnimation from './StarsAnimation'

const Home = () => {
  const TestImages = [
    {
      url: 'https://gemhunters.co/images/community-profit-1.jpeg',
      percentage: '+43%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-2.png',
      percentage: '+126.53%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-3.png',
      percentage: '+156.40%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-4.png',
      percentage: '+17841.16%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-5.jpeg',
      percentage: '+81%',
    },

    {
      url: 'https://gemhunters.co/images/community-profit-6.png',
      percentage: '+61.50%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-7.png',
      percentage: '+85.82%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-8.jpeg',
      percentage: '+58.97%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-9.png',
      percentage: '+1,223.80%',
    },

    {
      url: 'https://gemhunters.co/images/community-profit-10.png',
      percentage: '+28.35%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-11.png',
      percentage: '+1,346.33%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-12.png',
      percentage: '+201.75%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-13.png',
      percentage: '+2,742.64%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-14.png',
      percentage: '+226.32%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-15.png',
      percentage: '+34.63%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-16.png',
      percentage: '+61.61%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-17.jpeg',
      percentage: '+83.20%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-18.png',
      percentage: '+94.47%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-19.png',
      percentage: '+172.60%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-20.png',
      percentage: '+2,172.73%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-21.png',
      percentage: '+92.56%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-22.png',
      percentage: '+60.45%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-23.png',
      percentage: '+32.73%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-24.png',
      percentage: '+177.45%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-25.png',
      percentage: '+47.45%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-26.png',
      percentage: '+238.70%',
    },
    {
      url: 'https://gemhunters.co/images/community-profit-27.png',
      percentage: '+15,880.76%',
    },
  ]

  const [visible, setVisible] = useState(9)

  const handlleShowMore = () => {
    setVisible(visible + 9)
  }

  const reports = [
    {
      imgSrc: 'https://gemhunters.co/images/seasoned-analysts-1.webp',
      title: 'Seasoned Analysts',
      description:
        "Our team is comprised of some of the world's best experts in multiple niches of crypto, including low/mid/high cap gems, memecoins, airdrops, and compelling new narratives ensuring that you can always stay ahead.",
    },
    {
      imgSrc: 'https://gemhunters.co/images/gem-reports-2.webp',
      title: 'Gem Reports',
      description:
        'In-depth reports that are selected and voted by the Gem Hunters council with over 10 expert analysts. Each report consists of over 20 hours of expert analysis.',
    },
    {
      imgSrc: 'https://gemhunters.co/images/daily-market-updates.webp',
      title: 'Daily Market Updates',
      description:
        "Get fresh daily market updates that cover BTC & ETH updates, altcoin market trends, key news topics, technical analysis, on-chain metrics, and much more by some of the world's top crypto analysts.",
    },
    {
      imgSrc: 'https://gemhunters.co/images/simplified-research.webp',
      title: 'Simplified Research',
      description:
        'We take complex topics and simplify them, helping accelerate your learning curve and optimize your crypto journey. We distill hard topics and make them easy to understand.',
    },
    {
      imgSrc: 'https://gemhunters.co/images/regular-livestreams.webp',
      title: 'Regular Livestreams',
      description:
        'New market opportunities are constantly emerging. Our team is always working to provide fresh insights and multiple weekly livestreams on different crypto trends.',
    },
    {
      imgSrc: 'https://gemhunters.co/images/education-icon.png',
      title: 'Crypto Education',
      description:
        'Learn the cryptocurrency basics and essential concepts with Gem Academy full of courses, livestreams, reports, and guides.',
    },
  ]

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ]

  const duplicatedImages = [...images, ...images]

  return (
    <div className='home-container flex flex-col items-center gap-5'>
      <div className='firstpart w-full'>
        <div className='part1 flex flex-col items-center gap-8 '>
          <div className='p1 flex justify-center'>
            <h1 className='bold hero-text ff w-3/5 text-center'>
              Simplifying The crypto markets
            </h1>
          </div>
          <p className='w-2/3 text-size1 text-center'>
            Uncovering hidden gems with in-depth analysis & strategic market
            research since 2017.
          </p>
          <ScrollLink
            className='text-xs sm:text-base button-3 shadow-button-3 sm:!shadow-none'
            to='signup-form'
            smooth={true}
            duration={1500}
          >
            JOIN NOW
          </ScrollLink>
        </div>
        <div className='hero-image-wrapper w-full'>
          <div className='hero-image-fade'>
            <img
              src='https://gemhunters.co/images/gem-header-3.webp'
              loading='eager'
              data-w-id='244a0ba8-64b0-7ac9-d30b-09f97e434703'
              alt=''
              className='image-13 moving-element gem-02'
            />
            <img
              src='https://gemhunters.co/images/gem-header-1.webp'
              loading='eager'
              data-w-id='b17ecee3-ef42-320c-7156-a6659bb10262'
              alt=''
              className='image-13 moving-element'
            />
            <img
              src='https://gemhunters.co/images/gem-header-2.webp'
              loading='eager'
              data-w-id='4ba9ed17-098c-99a2-905b-7cf33efbb9ab'
              alt=''
              className='image-13 gem03 moving-element'
            />
          </div>
          <img
            src='https://gemhunters.co/images/header-main-1.png'
            loading='eager'
            width='960'
            sizes='(max-width: 991px) 100vw, (max-width: 1919px) 85vw, 75vw'
            alt=''
            srcSet='
          https://gemhunters.co/images/header-main-1.png 500w,
          https://gemhunters.co/images/header-main-1.png 800w,
          https://gemhunters.co/images/header-main-1.png 1080w,
          https://gemhunters.co/images/header-main-1.png 1600w,
          https://gemhunters.co/images/header-main-1.png 1920w'
            className='image-9'
          />
        </div>
      </div>
      <div className='secondpart w-full'>
        <div className='px-5 lg:px-32 flex justify-center'>
          <div className='minw container flex items-center justify-center flex-col gap-8 lg:flex-row'>
            <div className='p1 hero_bottom-content-wrapper'>
              <div className='hero_bottom-text-wrapper flex px-10 lg:px-16'>
                <h2 className='heading-style-h1-2'>About Us</h2>
                <p className='paragraph-14'>
                  Gem Hunters is a decentralized group focused on the
                  crypto/internet landscape. Our gem hunting approach involves
                  deep community work, access to actionable reports, and pooling
                  of expert research to uncover undervalued opportunities.
                  <br />
                  <br />
                  In 2017, we uncovered gems like ADA, TRX, XRP, BNB, and VERGE.
                  This was followed up in 2020 with CAKE, BAKE, BAYC, Pudgy
                  Penguins, ETH, ONE, and MANA. Upon entering the bear market,
                  the Gem Hunters team rotated to undervalued tech stocks such
                  as META, SHOP, COIN, and MSFT. In 2024, we capitalized on the
                  bull market with lucrative gems such as SUI, HYPE, BRETT, KAS,
                  TON, RENDER, JUP and ONDO.
                </p>
              </div>
              <div className='hero_marquee-wrapper'>
                <div className='slider'>
                  <div className='slider-track'>
                    {duplicatedImages.map((img, index) => (
                      <div key={index} className='slide'>
                        <img src={img} alt={`Slide ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img src={Avatar} alt='' className='image-10' />
          </div>
        </div>
      </div>
      <div className='section_getting-started relative w-full'>
        <div className='getting-started_bg-wrapper'>
          <img
            src={GettingStartedBg}
            alt=''
            className='getting-started-shape'
          />
          <div className='getting-started_glow'></div>
        </div>
        <div className='padding-global'>
          <div className='container-large padding-section-large'>
            <div className='getting-started_wrapper'>
              <h2 className='heading-style-h1-2 titlesimple top-margin-3'>
                Signing up is simple
              </h2>
              <div className='getting-started_steps-wrapper'>
                <div className='getting-started_step is-1 hover-int'>
                  <h3 className='heading-style-h1-2 max-width-full'>step 1</h3>
                  <p className='paragraph-11'>
                    Click "Join Now" at the bottom of the page and confirm your
                    information.&nbsp;
                  </p>
                  <img
                    src={HammerStepLeft}
                    loading='eager'
                    alt='Hammer icon'
                    className='gettin-started_image getting-started_image-step1 isleft to-right axe'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <img
                    src={DiamondStepRight}
                    loading='eager'
                    alt='Diamond icon'
                    className='gettin-started_image getting-started_image-step1 is-right to-left'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <div className='getting-started_number'>01</div>
                </div>
                <div className='getting-started_step hover-int'>
                  <h3 className='heading-style-h1-2 max-width-full'>step 2</h3>
                  <p className='paragraph-11'>
                    Once verified to join Gem Hunters, you will receive a
                    private invitation via email.
                  </p>
                  <img
                    src='https://gemhunters.co/images/01_1.webp'
                    loading='eager'
                    alt='Stone icon'
                    className='getting-started_image-step3 gettin-started_image is-stone to-right person-laptop'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <img
                    src='https://gemhunters.co/images/02_1.webp'
                    loading='eager'
                    alt='Human illustration'
                    className='getting-started_image-step3-human gettin-started_image to-left'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <div className='getting-started_number'>02</div>
                </div>

                <div className='getting-started_step hover-int'>
                  <h3 className='heading-style-h1-2 max-width-full'>step 3</h3>
                  <p className='paragraph-11'>
                    Accept your invite and gain access to the digital lobbies
                    and all prior Gem Hunter research.
                  </p>
                  <img
                    src='https://gemhunters.co/images/step-3-stone.webp'
                    loading='eager'
                    alt='Stone icon'
                    className='getting-started_image-step3 is-stone to-right'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <img
                    src='https://gemhunters.co/images/image-step-3-main.webp'
                    loading='eager'
                    alt='Human illustration'
                    className='getting-started_image-step3-human to-left'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <div className='getting-started_number'>03</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section_reports'>
        <div className='padding-global'>
          <div className='container-large padding-section-large'>
            <div className='wins_wrapper'>
              <div className='wins_text-wrapper'>
                <h2 className='heading-style-h1-2'>Why Choose Gem Hunters?</h2>
                <p className='paragraph-26'>
                  Join the 1,400+ other Gem Hunters and unlock instant access to
                  ground breaking analysis that distill complex cryptocurrency
                  markets into clear, actionable information. Gem Hunters is an
                  exclusive private community with opportunities to connect with
                  other members throughout the entire world.
                </p>
                <ScrollLink
                  className='text-xs sm:text-base button-3 shadow-button-3 sm:!shadow-none'
                  to='signup-form'
                  smooth={true}
                  duration={1500}
                >
                  JOIN NOW
                </ScrollLink>
              </div>
              <div className='reports-item-wrapper'>
                {reports.map((report, index) => (
                  <div className='reports-item' key={index}>
                    <img
                      src={report.imgSrc}
                      loading='eager'
                      alt=''
                      className='reports-item-image'
                    />
                    <h4 className='reports-item-title'>{report.title}</h4>
                    <p className='paragraph-24'>{report.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className='section_testimonial33'>
        <div className='padding-global'>
          <div className='container-large'>
            <div className='padding-section-medium'>
              <div className='testimonial33_component'>
                <div className='wins_text-wrapper margin-btm-4-5rem'>
                  <h2 className='heading-style-h1-2'>Community Profits</h2>
                  <p className='text-center paragraph-26 centered'>
                    With over 550+ verified wins, Gem Hunter's members have made
                    more than $20 million from our community.
                  </p>
                </div>

                <div className='w-dyn-list'>
                  <div className='masonry__collection-list w-dyn-items'>
                    {TestImages.slice(0, visible).map((image, index) => (
                      <div className='masonry__item w-dyn-item' key={index}>
                        <div className='masonry__item-wrapper'>
                          <div className='masonry__item-content'>
                            <div className='success-image-wrapper'>
                              <img
                                src={image.url}
                                alt=''
                                className='success-snapshot-image'
                              />
                              <div className='success-image-overlay'>
                                <p className='heading-style-h5-3 text-color-white'>
                                  {image.percentage}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {visible < TestImages.length && (
                  <div className='w-pagination-wrapper'>
                    <button
                      aria-label='Load More'
                      className='w-pagination-next button-3'
                      onClick={handlleShowMore}
                    >
                      <div className='w-inline-block'>SHOW{'\u00A0'}MORE</div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='section_digital w-full'>
        <div className='digital_glow'></div>
        <StarAnimation />
        <div className='padding-global'>
          <div className='digital_container'>
            <div className='padding-section-medium'>
              <div className='digital_wrapper'>
                <img
                  src='https://gemhunters.co/images/iPhone-15-3.png'
                  width={452}
                  sizes='(max-width: 479px) 240px, (max-width: 991px) 320px, 452px'
                  alt=''
                  srcSet='https://gemhunters.co/images/iPhone-15-3-p-500.png 500w, https://gemhunters.co/images/iPhone-15-3.png 700w'
                  className='digital_image'
                />

                <div className='digital_text-wrapper'>
                  <h3 className='heading-style-h1-2'>Digital Lobbies</h3>
                  <p className='paragraph-15'>
                    Gem Hunters grants you unmatched digital access to
                    comprehensive resources, private market data, and digital
                    lobbies to help you navigate the markets. <br />
                    <br />
                    When you join Gem Hunters, you'll receive access to our
                    ecosystem allowing you to gain insights and private alpha in
                    real time. Weeks of analysis at your fingertips in minutes.
                  </p>

                  <ScrollLink
                    className='text-xs sm:text-base button-3 shadow-button-3 sm:!shadow-none'
                    to='signup-form'
                    smooth={true}
                    duration={1500}
                  >
                    JOIN NOW
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section_what w-full relative'>
        <StarAnimation></StarAnimation>
        <div className='padding-global'>
          <div className='container-large padding-section-what-else'>
            <div className='what_wrapper'>
              <div className='wins_text-wrapper'>
                <div className='career-badge'>
                  <div className='text-block-2'>No junk, just gems</div>
                </div>
                <h1 className='heading-style-h1-2'>What else do you get?</h1>
              </div>
              <div className='what_item-wrapper'>
                <div className='what_item'>
                  <h4 className='reports_item-title max-width-full'>
                    IRL Events
                  </h4>
                  <p className='paragraph-10'>
                    Gem Hunters annual members grants access to regular meets
                    hosted during some of the most established crypto events in
                    the world. Being a Gem Hunter grants you access to these IRL
                    opportunities.
                  </p>
                  <img
                    src='https://gemhunters.co/images/what-globe_1what-globe.webp'
                    loading='eager'
                    sizes='(max-width: 479px) 100vw, (max-width: 767px) 242.546875px, (max-width: 991px) 44vw, 379px'
                    srcSet='https://gemhunters.co/images/what-globe_1-p-500.png 500w, https://gemhunters.co/images/what-globe_1what-globe.webp 761w'
                    alt=''
                    className='what_item-image is-1'
                  />
                  <img
                    src='https://gemhunters.co/images/what-joystick_1what-joystick.webp'
                    loading='eager'
                    alt=''
                    className='what_item-image is-2'
                  />
                </div>
                <div className='what_item is-reversed hide'></div>
                <div className='what_item is-reversed'>
                  <img
                    src='https://gemhunters.co/images/Group-332-2.png'
                    alt=''
                    className='what_item-image is-4'
                  />
                  <h4 className='reports_item-title max-width-full'>
                    MemeCoin analysis
                  </h4>
                  <div className='paragraph-18'>
                    <p>
                      Our Memecoin analysts are in the trenches day and night to
                      give you constant meme coin opportunities. Gem Hunters is
                      constantly providing up-to-date information.
                    </p>
                  </div>
                </div>
              </div>

              <Form/>

            </div>
          </div>
        </div>
      </div>

      <div className='section_faq w-full'>
        <div className='padding-global'>
          <div className='faq_container'>
            <div className='padding-section-large-3 _5rem'>
              <div className='faq_wrapper open'>
                <h2 className='heading-style-h1-2 faq'>FAQs</h2>
                <FAQList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section_get-access'>
        <div className='padding-global'>
          <div className='get-access_container padding-section-large _4'>
            <div className='padding-section-medium'>
              <div className='get-access_wrapper'>
                <img
                  src='https://gemhunters.co/images/get-access-blue-bg.svg'
                  loading='eager'
                  alt=''
                  className='get-access_blue-shape'
                />

                <img
                  src='https://gemhunters.co/images/get-access-gem-right_1get-access-gem-right.webp'
                  loading='eager'
                  alt=''
                  className='get-access_gem-right to-right'
                  style={{
                    willChange: 'transform',
                    transform:
                      'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                  }}
                />

                <img
                  src='https://gemhunters.co/images/get-access-gem-left_1get-access-gem-left.webp'
                  loading='eager'
                  alt=''
                  className='get-access_gem-left to-left'
                  style={{
                    willChange: 'transform',
                    transform:
                      'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                  }}
                />

                <div className='get-access_content-wrapper'>
                  <img
                    src='https://gemhunters.co/images/get-access-bg_1get-access-bg.webp'
                    loading='eager'
                    sizes='(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 1919px) 92vw, 982px'
                    srcSet='https://gemhunters.co/images/get-access-bg_1-p-500.png 500w, https://gemhunters.co/images/get-access-bg_1-p-800.png 800w, https://gemhunters.co/images/get-access-bg_1get-access-bg.webp 984w'
                    alt=''
                    className='get-access_bg'
                  />
                  <img
                    src='https://gemhunters.co/images/get-access-right_1get-access-right.webp'
                    loading='eager'
                    width={314}
                    alt=''
                    className='get-access-image-right to-left'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <img
                    src='https://gemhunters.co/images/get-access-left_1get-access-left.webp'
                    loading='eager'
                    width={314}
                    sizes='(max-width: 479px) 74vw, (max-width: 767px) 130px, (max-width: 991px) 190px, 314px'
                    alt=''
                    srcSet='https://gemhunters.co/images/get-access-left_1-p-500.png 500w, https://gemhunters.co/images/get-access-left_1get-access-left.webp 628w'
                    className='get-access-image-left to-right'
                    style={{
                      willChange: 'transform',
                      transform:
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <h3 className='heading-style-h1-2 cta-heading'>
                    ONE PLAN. ONE PRICE INFINITE OPPORTUNITIES
                  </h3>
                  <div className='get-access_eth-wrapper'>
                    <div className='text-block-4'>
                      <sub>$99/month</sub>
                    </div>
                  </div>

                  <ScrollLink
                    className='text-xs sm:text-base button-3 shadow-button-3 sm:!shadow-none'
                    to='signup-form'
                    smooth={true}
                    duration={1500}
                  >
                    JOIN NOW
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
