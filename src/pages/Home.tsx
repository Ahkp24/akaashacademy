import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

interface SubjectItem {
  title: string;
  description: string;
  link: string;
}

interface ResourceItem {
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Understand the Content",
    description:
      "Bite-size videos easily explain rules and methods to solve questions.",
  },
  {
    number: "02",
    title: "Notice the Pattern",
    description:
      "You know what to do now and how to apply content onto the context of the question.",
  },
  {
    number: "03",
    title: "Avoid Traps",
    description:
      "You easily learn common tricks the tests pull on you and how to avoid them.",
  },
  {
    number: "04",
    title: "Improve Your Score",
    description:
      "By the end of just a few small videos and practice questions, your scores can do nothing but improve.",
  },
];

const subjects: SubjectItem[] = [
  {
    title: "Reading, Writing, and English",
    description:
      "Despite knowing the language well, the SAT and ACT trip us up with rules and tricks that make English difficult. But with bite-sized videos and practice, those tricks become so easy to avoid.",
    link: "/reading",
  },
  {
    title: "Math",
    description:
      "The SAT and ACT both cover a large amount of math topics that we easily condence for you to understand the basics and apply them in confusing word problems.",
    link: "/math",
  },
];

const resources: ResourceItem[] = [
  {
    title: "Grammar",
    description:
      "Break down every grammar rule in about 10 minutes with our reels.",
  },
  {
    title: "Traps",
    description:
      "Learn to spot the wrong-answer traps testmakers hide.",
  },
  {
    title: "Tips",
    description:
      "Shortcuts and techniques to save you time and guarantee a high score.",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Hero
        title="LEARN IT QUICK, MAKE IT STICK"
        subtitle="Master SAT and ACT patterns through efficient strategies."
        ctaText="Start Improving"
        ctaLink="/reading"
      />

      {/* The Baseline / The Akaash Difference */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-['Bebas_Neue'] text-3xl md:text-5xl tracking-wide mb-6">
              THE <span className="text-[#FF0000]">BASELINE</span>
            </h3>
            <p className="font-['DM_Sans'] text-lg md:text-xl text-white/80 leading-relaxed">
              The national average is{" "}
              <span className="text-white font-semibold">1029</span> on the
              SAT and{" "}
              <span className="text-white font-semibold">19.4</span> on the
              ACT.
            </p>
          </div>
          <div>
            <h3 className="font-['Bebas_Neue'] text-3xl md:text-5xl tracking-wide mb-6">
              THE AKAASH <span className="text-[#FF0000]">DIFFERENCE</span>
            </h3>
            <p className="font-['DM_Sans'] text-lg md:text-xl text-white/80 leading-relaxed">
              Most standard prep treats these tests as academic and wants you to match or go above that baseline. 
              But we want you to not only go above the average, but absolutely demolish it with
              thorough understanding and tips that will remain with you every time you take a test.
            </p>
          </div>
        </div>
      </section>

      {/* The Akaash Approach */}
      <section className="px-6 md:px-16 py-24">
        <SectionTitle
          title="THE AKAASH APPROACH"
          subtitle="Focused on content and EDUCATED tips, not guessing."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {approachSteps.map((step) => (
            <Card
              key={step.number}
              title={step.title}
              description={step.description}
              number={step.number}
            />
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="px-6 md:px-16 py-24 bg-white/[0.02] border-t border-b border-white/10">
        <SectionTitle
          title="CHOOSE YOUR PATH"
          subtitle="Strategy-built programs for every test."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {subjects.map((subject) => (
            <Card
              key={subject.title}
              title={subject.title}
              description={subject.description}
              link={subject.link}
            />
          ))}
        </div>
      </section>

      {/* Free Resources */}
      <section className="px-6 md:px-16 py-24">
        <SectionTitle
          title="FREE RESOURCES"
          subtitle="Akaash Academy's key to success will remain free forever, unlike other prep resources."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 py-32 text-center border-t border-white/10">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide mb-6">
          READY TO <span className="text-[#FF0000]">IMPROVE</span>?
        </h2>
        <p className="font-['DM_Sans'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Join Akaash Academy and get your scores up today!
        </p>
        <Link
          to="/reading"
          className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] transition-colors duration-300"
        >
          START IMPROVING
        </Link>
      </section>

    </div>
  );
};

export default Home;
