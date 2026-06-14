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
    title: "Identify the Pattern",
    description:
      "Every question on the SAT and ACT follows a structure the testmakers reuse again and again. We train you to recognize it on sight.",
  },
  {
    number: "02",
    title: "Apply the Strategy",
    description:
      "Once the pattern is clear, a specific, proven strategy takes over — built for speed, accuracy, and consistency under timed conditions.",
  },
  {
    number: "03",
    title: "Eliminate Confusion",
    description:
      "We strip away the tricks, traps, and overcomplicated explanations that waste your time and shake your confidence.",
  },
  {
    number: "04",
    title: "Improve Your Score",
    description:
      "The result isn't luck. It's a measurable, repeatable jump in score, backed by a system that works every time.",
  },
];

const subjects: SubjectItem[] = [
  {
    title: "SAT",
    description:
      "Strategy-driven prep across Reading, Writing & Language, and Math — built for the digital SAT format.",
    link: "/sat",
  },
  {
    title: "ACT",
    description:
      "Pattern-based pacing and technique for every ACT section, engineered to beat the clock.",
    link: "/act",
  },
];

const resources: ResourceItem[] = [
  {
    title: "SAT Grammar Rules",
    description:
      "The handful of grammar rules that show up on nearly every SAT, broken down simply.",
  },
  {
    title: "Reading Traps",
    description:
      "Learn to spot the wrong-answer traps testmakers hide inside reading passages.",
  },
  {
    title: "Math Strategies",
    description:
      "Shortcuts and techniques that cut solve-time without sacrificing accuracy.",
  },
];

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Hero
        title="STRATEGY OVER GUESSWORK"
        subtitle="Master SAT and ACT patterns through efficient strategies."
        ctaText="Start Improving"
        ctaLink="/sat"
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
              Standard prep treats these as academic tests. We treat them as a
              baseline to improve — fast, and without the guesswork. Sitting
              at the average won't help many students get into the colleges
              they're aiming for.
            </p>
          </div>
        </div>
      </section>

      {/* The Akaash Approach */}
      <section className="px-6 md:px-16 py-24">
        <SectionTitle
          title="THE AKAASH APPROACH"
          subtitle="A repeatable system, not a guessing game."
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
          subtitle="Start building your edge today, at no cost."
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
          Join Akaash Academy and start replacing guesswork with strategy
          today.
        </p>
        <Link
          to="/sat"
          className="inline-block font-['Bebas_Neue'] text-lg tracking-[0.2em] px-10 py-4 border-2 border-[#FF0000] text-white hover:bg-[#FF0000] transition-colors duration-300"
        >
          START IMPROVING
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
