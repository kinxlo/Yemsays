import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import Container from '../../layout/Container'
import { MdPlayArrow } from 'react-icons/md'
import { HOME_CONTENT } from './content'
import Banner from '../../components/banner/Banner'
import PropertyCard from '../../components/property-card/PropertyCard'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import QuestionBanner from '../../components/banner/QuestionBanner'

const Home = () => {
  const { hero, sectionTwo, sectionThree, Testimonials } = HOME_CONTENT
  return (
    <>
      {/* hero section */}
      <Box
        bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677665416/project-yemsays/unsplash_JQUrgUn_pr4_maw4p0.png`}
        backgroundRepeat={`no-repeat`}
        bgSize={`100%`}
        bgPosition={`center`}
        height={`706`}
      >
        <Container>
          <Box mt={32}>
            <Heading fontSize={`7xl`} fontWeight={`bold`}>
              {hero.title[0]}
            </Heading>
            <Box display={`flex`} gap={5}>
              <Heading fontSize={`7xl`} fontWeight={`bold`}>
                {hero.title[1]}
              </Heading>
              <Heading fontSize={`7xl`} fontWeight={`bold`} color={`primary`}>
                {hero.title[2]}
              </Heading>
            </Box>
          </Box>
          <Text width={`50%`}>{hero.subTitle}</Text>
          <Box display={`flex`} alignItems={`center`} gap={4} mt={22}>
            <LinkButton width={167} text={`View Properties`} height={`40px`} />
            <Box bg={`white`} borderRadius={`100%`} padding={1}>
              <MdPlayArrow size={`1.5rem`} color={`orange`} />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* section two */}
      <Box bgColor={`black`} color={`white`}>
        <Container>
          <Heading fontSize={`5xl`} textAlign={`center`} marginBottom={10}>
            {sectionTwo.title}
          </Heading>
          {/* card list */}
          <Box display={`flex`} gap={16}>
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
          <Box display={`flex`} marginTop={44} gap={20}>
            {/* article Picture */}
            <Box flex={1}>
              <Box width={444}>
                <img
                  src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1677762969/project-yemsays/unsplash_o_9YmCY0bag_ipyuwz.png'
                  alt='img1'
                />
              </Box>
              <Box transform={`translate(12rem, -12rem)`} width={341}>
                <img
                  src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1677762980/project-yemsays/unsplash_UV81E0oXXWQ_tbozsp.png'
                  alt='img2'
                />
              </Box>
            </Box>
            {/* article text */}
            <Box flex={1} marginTop={24}>
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
                text={`View Properties`}
                width={179}
                height={`40px`}
              />
            </Box>
          </Box>
        </Container>
        {/* the banner component */}
        <Banner />
      </Box>
      <Box
        bgColor={`black`}
        color={`white`}
        bgImage={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677823600/project-yemsays/Section_5_rhsutv.png`}
        bgRepeat={`no-repeat`}
        bgPos={`center`}
      >
        <Container paddingBlock={0}>
          <Box textAlign={`center`} pt={115} mb={14}>
            <Heading fontSize={`5xl`}>{sectionThree.title}</Heading>
            <Text color={`GrayText`} fontWeight={`bold`}>
              {sectionThree.subTitle}
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={2} gap={`32px`}>
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
            <Text fontSize={`5xl`} color={`textLight`} fontWeight={`bold`}>
              {Testimonials.subTitle}
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={2} gap={`32px`}>
              <TestimonialCard />
              <TestimonialCard />
            </SimpleGrid>
          </Box>
          <Box mt={`138px`}>
            <QuestionBanner />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Home
