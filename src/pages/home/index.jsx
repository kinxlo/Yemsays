import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import Container from '../../layout/Container'
import { MdPlayArrow } from 'react-icons/md'
import { HOME_CONTENT } from './content'
import Banner from '../../components/banner/Banner'
import PropertyCard from '../../components/property-card/PropertyCard'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import QuestionBanner from '../../components/banner/QuestionBanner'
import SearchForm from '../../components/search-form/SearchForm'
import DefaultLayout from '../../layout/DefaultLayout'

const Home = () => {
  const { hero, sectionTwo, sectionThree, Testimonials } = HOME_CONTENT
  return (
    <DefaultLayout>
      {/* hero section */}
      <Box
        className='page_alignment'
        bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677665416/project-yemsays/unsplash_JQUrgUn_pr4_maw4p0.png`}
        backgroundRepeat={`no-repeat`}
        bgSize={`cover`}
        bgPosition={`center`}
        height={`706`}
      >
        <Container>
          <Box mt={32} width={`fit-content`}>
            <Heading fontSize={{ base: `5xl`, md: `7xl` }} fontWeight={`bold`}>
              {hero.title[0]}
            </Heading>
            <Box display={`flex`} gap={5}>
              <Heading
                fontSize={{ base: `5xl`, md: `7xl` }}
                fontWeight={`bold`}
              >
                {hero.title[1]}
              </Heading>
              <Heading
                fontSize={{ base: `5xl`, md: `7xl` }}
                fontWeight={`bold`}
                color={`primary`}
              >
                {hero.title[2]}
              </Heading>
            </Box>
          </Box>
          <Text width={{ md: `50%` }}>{hero.subTitle}</Text>
          <Box display={`flex`} alignItems={`center`} gap={4} mt={22}>
            <LinkButton
              to={`/properties`}
              width={167}
              text={`View Properties`}
              height={`40px`}
            />
            <Box bg={`white`} borderRadius={`100%`} padding={1}>
              <MdPlayArrow size={`1.5rem`} color={`orange`} />
            </Box>
          </Box>
        </Container>
        <Box
          display={{ base: `none`, lg: `block` }}
          transform={`translateY(3rem)`}
        >
          <SearchForm />
        </Box>
      </Box>
      {/* section two */}
      <Box className='page_alignment' bgColor={`black`} color={`white`}>
        <Container>
          <Heading
            fontSize={{ base: `3xl`, md: `5xl` }}
            textAlign={`center`}
            my={10}
          >
            {sectionTwo.title}
          </Heading>
          {/* card list */}
          <Box
            display={`flex`}
            flexDir={{ base: `column`, md: `row` }}
            gap={16}
          >
            <Box textAlign={`center`} display={`flex`} flexDir={`column`}>
              <Box boxSize={`64px`} margin={`auto`} marginBottom={5}>
                <img src={sectionTwo.cards[0].img} alt='icon' />
              </Box>
              <Heading fontSize={`xl`}>{sectionTwo.cards[0].title}</Heading>
              <Text fontSize={`sm`} color={`textGrey`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, non.
              </Text>
            </Box>
            <Box textAlign={`center`} display={`flex`} flexDir={`column`}>
              <Box boxSize={`64px`} margin={`auto`} marginBottom={5}>
                <img src={sectionTwo.cards[1].img} alt='icon' />
              </Box>
              <Heading fontSize={`xl`}>{sectionTwo.cards[1].title}</Heading>
              <Text fontSize={`sm`} color={`textGrey`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, non.
              </Text>
            </Box>
            <Box textAlign={`center`} display={`flex`} flexDir={`column`}>
              <Box boxSize={`64px`} margin={`auto`} marginBottom={5}>
                <img src={sectionTwo.cards[2].img} alt='icon' />
              </Box>
              <Heading fontSize={`xl`}>{sectionTwo.cards[2].title}</Heading>
              <Text fontSize={`sm`} color={`textGrey`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus, non.
              </Text>
            </Box>
          </Box>
          {/* section two B */}
          <Box
            display={`flex`}
            flexDir={{ base: `column`, md: `row` }}
            marginTop={44}
            gap={20}
          >
            {/* article Picture */}
            <Box flex={1}>
              <Box maxW={444}>
                <Image
                  className='cc-img-fluid'
                  src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1677762969/project-yemsays/unsplash_o_9YmCY0bag_ipyuwz.png'
                  alt='img1'
                />
              </Box>
              <Box
                transform={`translate(12rem, -12rem)`}
                maxW={341}
                display={{ base: `none`, xl: `block` }}
              >
                <Image
                  className='cc-img-fluid'
                  src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1677762980/project-yemsays/unsplash_UV81E0oXXWQ_tbozsp.png'
                  alt='img2'
                />
              </Box>
            </Box>
            {/* article text */}
            <Box flex={1} marginTop={{ xl: 24 }}>
              <Heading fontSize={`lg`} color={`primary`} mb={1.5}>
                About Us
              </Heading>
              <Heading>{sectionTwo.aboutUs.title}</Heading>
              <Text
                lineHeight={7}
                mt={11}
                mb={24}
                letterSpacing={`wide`}
                color={`GrayText`}
              >
                {sectionTwo.aboutUs.desc}
              </Text>
              <LinkButton
                to={`/properties`}
                text={`View Properties`}
                width={179}
                height={`40px`}
              />
            </Box>
          </Box>
        </Container>
        {/* the banner component */}
      </Box>
      <Banner />
      <Box
        className='page_alignment'
        bgColor={`black`}
        color={`white`}
        bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677823600/project-yemsays/Section_5_rhsutv.png`}
        bgRepeat={`no-repeat`}
        bgPos={`center`}
      >
        <Container paddingBlock={0}>
          <Box textAlign={`center`} pt={115} mb={14}>
            <Heading fontSize={{ base: `3xl`, md: `5xl` }}>
              {sectionThree.title}
            </Heading>
            <Text color={`GrayText`} fontWeight={`bold`}>
              {sectionThree.subTitle}
            </Text>
          </Box>
          <Box>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={`32px`}
              justifyItems={`center`}
            >
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </SimpleGrid>
          </Box>
        </Container>
        <Container>
          <Box textAlign={`center`} pt={115} mb={14}>
            <Heading color={`primary`} fontSize={`xl`}>
              {Testimonials.title}
            </Heading>
            <Text
              fontSize={{ base: `3xl`, md: `5xl` }}
              color={`textLight`}
              fontWeight={`bold`}
            >
              {Testimonials.subTitle}
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={`32px`}>
              <TestimonialCard />
              <TestimonialCard />
            </SimpleGrid>
          </Box>
          <Box mt={`138px`}>
            <QuestionBanner />
          </Box>
        </Container>
      </Box>
    </DefaultLayout>
  )
}

export default Home
