// import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Effie's Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Section grid style={{ overflowY: "scroll" }}>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        {/* <Timeline /> */}
        {/* <Acomplishments /> */}
      </Layout>
    </div>
  );
};
//THS IS WHERE IT HAPPENS
export default Home;
