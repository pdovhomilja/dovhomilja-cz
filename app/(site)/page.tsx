import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <p className="text-xl opacity-30 pb-5"> Hi, my name is,</p>
        <h1 className="text-3xl text-white">Pavel Dovhomilja</h1>
        <p className="opacity-50 text-justify py-5 text-xs md:text-lg">
          I am an entrepreneur who has founded several tech startups, each with
          its unique challenges and rewards. Among my many accomplishments, I am
          most proud of my successful M&A process, where I played a key role as
          a co-founder in acquiring a major company and subsequently selling my
          share to my co-founder. This deal not only required business acumen
          but also the ability to navigate complex negotiations and secure a
          favorable outcome for all involved.
          <br />
          <br />
          In addition to my business expertise, I have a strong technical
          background. As a Linux admin, full-stack developer, and DevOps
          engineer, I am skilled in utilizing open-source technologies to drive
          innovation and growth. I have a passion for finding the best ways to
          leverage open-source tools and continuously seek to expand my
          knowledge in this area.
          <br />
          <br />
          My skills extend beyond the technical realm, as I am also highly
          skilled in managing IT companies. I have a proven track record of
          building and leading successful teams that are capable of delivering
          high-quality products and services. I believe that effective
          management is crucial to the success of any business, and I take great
          pride in my ability to lead and inspire teams to achieve their full
          potential.
          <br />
          <br />
          Overall, I am a well-rounded entrepreneur with both technical and
          business skills. I am passionate about utilizing open-source
          technologies to drive innovation and growth, and I have a proven
          ability to lead and manage IT companies successfully. I am committed
          to continued learning and growth, and I look forward to the challenges
          and opportunities that lie ahead.
        </p>
      </div>
    </main>
  );
}
