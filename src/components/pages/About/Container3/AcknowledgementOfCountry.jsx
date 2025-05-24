import Container3Pic1 from "../../../../assets/about/Container3Pic1.jpg";
import Container3Pic2 from "../../../../assets/about/Container3Pic2.jpg";
import Container3Pic3 from "../../../../assets/about/Container3Pic3.jpg";

const AcknowledgementOfCountry = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">
              <span className="border-b-2 border-blue-900 pb-2">
                Acknowledgement of Industry
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-6">
             One of the defining features of Campus Dost is that it is not just another training center — it is an institution that is acknowledged by the industry . The name carries weight among recruiters, HR managers, and technical leads across various sectors. Industry experts are not only aware of Campus Dost , but they actively seek out its trainees because of the consistent quality and readiness of the candidates it produces.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              The institute has built a reputation over the years for delivering top-tier talent that requires minimal onboarding and can contribute from day one. This recognition didn’t come overnight; it was earned through years of dedication, innovation, and a deep understanding of what industries truly need in terms of skill sets and professional behavior.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Main artwork image */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={Container3Pic1}
                alt="Sentient artwork by Hollie Johnson"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-sm">
                  Campus Dost -- Your Path to Professional Success
                </p>
              </div>
            </div>

            {/* Flags row */}
            <div className="flex gap-4">
              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img
                  src={Container3Pic2}
                  alt="Australian flag"
                  className="h-full object-cover"
                />
              </div>

              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img
                  src={Container3Pic3}
                  alt="Indian flag"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcknowledgementOfCountry;
