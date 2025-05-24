import aboutHeroSection from "../../../../assets/about/aboutHeroSection.png";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 px-4 text-white bg-black/80"
      style={{
        backgroundImage: `url(${aboutHeroSection})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-transparent to-transparent opacity-90"></div>

      <div className="max-w-6xl mx-auto relative z-10 py-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            <span className="border-b-2 border-blue-900 pb-2">
              About Campus Dost
            </span>
          </h2>

          <p className="md:text-lg leading-relaxed">
            At Campus Dost, we don’t just teach — we prepare you for a
            successful tech career. Our carefully designed programs focus on
            real-world skills for roles like Web Developer, Software Engineer,
            and Data Analyst, helping you become job-ready in just 3–4 months.
            <br />
            <br />
            With live classes led by industry experts and personalized
            mentorship, you get hands-on experience through internships,
            hackathons, and capstone projects that build your portfolio and
            confidence.
            <br />
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
