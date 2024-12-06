import {
  Body,
  Button,
  Column,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

// Mock
import { contactInfo } from "@/mock";

interface ICustomerInfoProps {
  username: string;
  email: string;
  message: string;
}

export default function CustomerInfo({
  username,
  email,
  message,
}: ICustomerInfoProps) {
  return (
    <Html>
      <Preview>New Customer</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                color: {
                  blue: "#8075FF",
                  violet: "#6320EE",
                  kidnapper: "#EEF2E5",
                  grey: "#8D9E8D",
                  greyLight: "#CAD5CA",
                  black: "#211A1D",
                  pink: "#FF758E",
                },
              },
              fontFamily: {
                poppins: "var(--font-poppins)",
                trap: "var(--font-trap)",
              },
              transitionDuration: {
                DEFAULT: "200ms",
              },
              transitionTimingFunction: {
                DEFAULT: "linear",
              },
              zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
              },
              borderWidth: {
                DEFAULT: "0.0625rem",
              },
              backgroundImage: {
                "benefit-card-1": "url(assets/benefits/card-1.svg)",
              },
            },
          },
        }}
      >
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-semibold text-center p-0 my-[30px] mx-0">
              New Customer
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              You have new message!
            </Text>
            <Section className=" border-[1px] border-solid border-color-kidnapper py-4 px-2">
              <Row>
                <Column>
                  <Text>Name</Text>
                  <Text>{username}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text>Email</Text>
                  <Link href={`mailto:${email}`}>{email}</Link>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text>Message</Text>
                  <Text>{message}</Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
