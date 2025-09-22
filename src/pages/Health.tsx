import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Health = () => {
  const [activeTab, setActiveTab] = useState("Manual");
  const [heartRate, setHeartRate] = useState("60-80");
  const [temperature, setTemperature] = useState("36.1°C - 37.2°C");
  const [bloodPressure, setBloodPressure] = useState("<120 / <80");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <main className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Hero content */}
          <div className="space-y-8">
            {/* Hero text and buttons */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Health Monitoring
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                Monitor your basic health stats and get valuable insights our in-house AI to
                self-diagnose and the vitals auto-sync with your certified medical partner
              </p>

              <div className="flex gap-4 mb-8">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium">
                  Get Started with AI
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Left illustration space */}
            <div className="w">
              <img
                src="left.png"
                alt="Health monitoring illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col space-y-6">
            
            {/* Right illustration space */}
            <div className="w-full max-w-sm mx-auto">
              <img
                src="right.png"
                alt="Health device illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Form Card */}
            <Card className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-md mx-auto p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Basic health monitoring</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fill in details manually or sync a connected health accessory like your apple watch
                    to do a basic self-diagnosis. <a href="#" className="text-pink-600 hover:text-pink-700 underline">Check supported devices.</a>
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("Manual")}
                    className={`pb-3 text-sm font-medium transition-colors relative ${
                      activeTab === "Manual"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Manual
                    {activeTab === "Manual" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("Sync Device")}
                    className={`pb-3 text-sm font-medium transition-colors relative ml-8 ${
                      activeTab === "Sync Device"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Sync Device
                    {activeTab === "Sync Device" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                    )}
                  </button>
                </div>

                {/* Form Inputs */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="heart-rate" className="text-sm font-medium text-gray-700 min-w-[100px]">
                      Heart Rate
                    </Label>
                    <Input
                      id="heart-rate"
                      value={heartRate}
                      onChange={(e) => setHeartRate(e.target.value)}
                      className="flex-1 ml-4 border-gray-200 focus:ring-pink-500 focus:border-pink-500 bg-gray-50 rounded-lg"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="temperature" className="text-sm font-medium text-gray-700 min-w-[100px]">
                      Temperature
                    </Label>
                    <Input
                      id="temperature"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                      className="flex-1 ml-4 border-gray-200 focus:ring-pink-500 focus:border-pink-500 bg-gray-50 rounded-lg"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="blood-pressure" className="text-sm font-medium text-gray-700 min-w-[100px]">
                      Blood Pressure
                    </Label>
                    <Input
                      id="blood-pressure"
                      value={bloodPressure}
                      onChange={(e) => setBloodPressure(e.target.value)}
                      className="flex-1 ml-4 border-gray-200 focus:ring-pink-500 focus:border-pink-500 bg-gray-50 rounded-lg"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white flex-1 py-3 rounded-full font-medium">
                    Start
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 flex-1 py-3 rounded-full font-medium">
                    Reset
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Health;