import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Zap } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden  mx-4 sm:mx-6 lg:mx-8  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 text-left mb-10 lg:mb-0 lg:pr-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Your Health.
                <br />
                <span className="text-pink-600">Anytime. Anywhere</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                A digital health platform providing every migrant worker a unique ID, secure medical records, and instant access to care across India.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all hover:shadow-xl">
                  Get Started with AI
                </Button>
              <Link to="/healthcenter">
    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium">
      Find Health Centre
    </Button>
  </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative w-[500px] h-[450px] sm:w-[600px] sm:h-[540px]">
                <img
                  src="hero.png"
                  alt="Health illustration"
                  className="w-full h-full object-contain rounded-2xl "
                />
              </div>

         
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-pink-100 p-4 rounded-full">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Care Access</h3>
                <p className="text-gray-600 text-sm">
                  Connect with doctors, hospitals, and support services in your own language.
                </p>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Portable Health Identity</h3>
                <p className="text-gray-600 text-sm">
                  Carry your medical history anywhere in India with a unique digital QR ID.
                </p>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Safety</h3>
                <p className="text-gray-600 text-sm">
                  Smart health monitoring and SOS alerts ensure timely help when you need it most.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* More About Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">More About Us</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We are building a trusted health platform designed for India's migrant workers. With a unique digital ID, portable medical records, and AI-powered health monitoring, our mission is to make healthcare accessible, affordable, and continuous, no matter where life takes you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
