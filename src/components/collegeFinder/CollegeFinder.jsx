import { useState } from 'react';

const CollegeFinder = () => {
  const [formData, setFormData] = useState({
    course: '',
    location: '',
    budget: '',
    examScore: '',
    entranceExam: '',
    preferredFacilities: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [featuredColleges, setFeaturedColleges] = useState([
    {
      name: 'Engineering Institute of Delhi',
      course: 'Engineering',
      location: 'Delhi',
      fees: '₹1,00,000/year',
      exam: 'JEE',
      rank: 'A+',
      facilities: 'Hostel, Library, Campus Placement',
    },
    {
      name: 'Maharashtra Medical College',
      course: 'Medical',
      location: 'Maharashtra',
      fees: '₹2,00,000/year',
      exam: 'NEET',
      rank: 'A',
      facilities: 'Hostel, Research Labs, Hospital',
    },
    {
      name: 'Bangalore Business School',
      course: 'Business Administration (MBA)',
      location: 'Bangalore',
      fees: '₹1,50,000/year',
      exam: 'CAT',
      rank: 'A++',
      facilities: 'Incubation Center, Global Exchange Programs',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }
    
    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }
    
    if (!formData.budget) {
      newErrors.budget = 'Budget range is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit the form data to server 
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // In a real application, you would fetch colleges based on the form data
      // For now, we'll just show the existing featured colleges
      
      // Reset form
      setFormData({
        course: '',
        location: '',
        budget: '',
        examScore: '',
        entranceExam: '',
        preferredFacilities: '',
      });
    }
  };

  const courseOptions = [
    "Engineering",
    "Medical",
    "Business Administration (MBA)",
    "Law",
    "Arts & Humanities",
    "Science",
    "Computer Applications",
    "Design",
    "Architecture",
    "Pharmacy"
  ];

  const locationOptions = [
    "Delhi",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "West Bengal",
    "Uttar Pradesh",
    "Gujarat",
    "Telangana",
    "Kerala",
    "Punjab"
  ];

  const budgetOptions = [
    "Under ₹50,000/year",
    "₹50,000 - ₹1,00,000/year",
    "₹1,00,000 - ₹2,00,000/year",
    "₹2,00,000 - ₹5,00,000/year",
    "Above ₹5,00,000/year"
  ];

  const entranceExamOptions = [
    "JEE",
    "NEET",
    "CAT",
    "CLAT",
    "GATE",
    "XAT",
    "NATA",
    "GPAT",
    "None"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            College Finder
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
          Find the perfect college that matches your preferences, budget, and career goals.
          </p>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Top Colleges You May Be Interested In</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Here are some featured colleges that might be a great match based on common student preferences.
            These are selected based on rankings, reputation, and academic excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredColleges.map((college, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{college.name}</h3>
                  <div className="mb-4">
                    <p className="text-gray-700"><span className="font-medium">Course:</span> {college.course}</p>
                    <p className="text-gray-700"><span className="font-medium">Location:</span> {college.location}</p>
                    <p className="text-gray-700"><span className="font-medium">Fees:</span> {college.fees}</p>
                    <p className="text-gray-700"><span className="font-medium">Entrance Exam:</span> {college.exam}</p>
                    <p className="text-gray-700"><span className="font-medium">Rank:</span> {college.rank}</p>
                    <p className="text-gray-700"><span className="font-medium">Facilities:</span> {college.facilities}</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    View College Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore More Colleges
            </button>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-2xl font-bold mb-4">Your college search has been submitted!</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    We've found some colleges that match your criteria. Check them out below.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Start a New Search
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Find Your Ideal College</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
                          Preferred Course *
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.course ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a course</option>
                          {courseOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                          Preferred Location *
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.location ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a location</option>
                          {locationOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                          Budget Range *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.budget ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                      </div>
                      <div>
                        <label htmlFor="entranceExam" className="block text-gray-700 font-medium mb-2">
                          Entrance Exam (Optional)
                        </label>
                        <select
                          id="entranceExam"
                          name="entranceExam"
                          value={formData.entranceExam}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select entrance exam</option>
                          {entranceExamOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="examScore" className="block text-gray-700 font-medium mb-2">
                          Exam Score/Percentile (Optional)
                        </label>
                        <input
                          type="text"
                          id="examScore"
                          name="examScore"
                          value={formData.examScore}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your score or percentile"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredFacilities" className="block text-gray-700 font-medium mb-2">
                          Preferred Facilities (Optional)
                        </label>
                        <input
                          type="text"
                          id="preferredFacilities"
                          name="preferredFacilities"
                          value={formData.preferredFacilities}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Hostel, Labs, Placement Cell"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        Find Colleges
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Tips for Choosing the Right College</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700 mb-6 text-center">
              Choosing the right college is a critical decision that can shape your future. Here are some important 
              tips to consider:
            </p>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Research thoroughly</h3>
              <p className="text-gray-700">
                Research the college's reputation, rankings, and faculty credentials before making a decision.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Consider the location and facilities</h3>
              <p className="text-gray-700">
                Consider the location, campus facilities, and extracurricular opportunities available at the college.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Understand fees and scholarships</h3>
              <p className="text-gray-700">
                Understand the complete fee structure and research available scholarships or financial aid options.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Consider career prospects</h3>
              <p className="text-gray-700">
                Think about your long-term career goals and the industry connections the college provides through placement cells and alumni networks.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default CollegeFinder;