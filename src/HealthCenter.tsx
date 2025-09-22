import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HealthCenter = () => {
  const healthCenters = [
    {
      name: "Holistic Health Center",
      address: "246 Wellness Blvd, Cochin, India",
      description: "Green Leaf Clinic, 369 Organic Way, Kolkata, India. Enjoy a variety of drinks, 3 refreshing drinks, and some delightful snacks.",
      id: 1,
    },
    {
      name: "Serenity Health Center",
      address: "852 Calm St, Mysore, India",
      description: "Pure Health Hub, 147 Clean St, Agra, India. Indulge in 3 nutritious meals, 3 revitalizing drinks, and a selection of snacks.",
      id: 2,
    },
    {
      name: "Unity Wellness Center",
      address: "258 Together Rd, Nashik, India",
      description: "Balance Health Clinic, 369 Equilibrium St, Varanasi, India. Enjoy 3 wholesome meals, 3 refreshing drinks, and some tasty snacks.",
      id: 3,
    },
    {
      name: "Aspire Health Center",
      address: "159 Ambition Ave, Indore, India",
      description: "Energize Health Hub, 753 Power St, Visakhapatnam, India. Savor 3 delicious meals, 3 thirst-quenching drinks, and a variety of snacks.",
      id: 4,
    },
    {
      name: "Aspire Health Center",
      address: "159 Ambition Ave, Indore, India",
      description: "Energize Health Hub, 753 Power St, Visakhapatnam, India. Savor 3 delicious meals, 3 thirst-quenching drinks, and a variety of snacks.",
      id: 5,
    },
    {
      name: "Aspire Health Center",
      address: "159 Ambition Ave, Indore, India",
      description: "Energize Health Hub, 753 Power St, Visakhapatnam, India. Savor 3 delicious meals, 3 thirst-quenching drinks, and a variety of snacks.",
      id: 6,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
 
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-gray-900">Find a health centre</h1>
            <a href="#" className="text-pink-600 text-sm font-medium hover:underline flex items-center">
              All health centres
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input
                type="text"
                placeholder="Search by name, location or postcode"
                className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            <Button className="rounded-full h-10 w-10 p-0" variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5h-11a8 8 0 1011 0z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Health Centers Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Health centres near me</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Quickly locate nearby hospitals, clinics, and support services tailored for migrants. Get directions, contact details, and trusted care at your fingertips.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full px-6 py-3">
              Find health centres
            </Button>
            <Button variant="outline" className="rounded-full px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2H4zm10 0a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2zM4 12a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H4zm10 0a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Health Center Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {healthCenters.map((center) => (
            <Card key={center.id} className="rounded-2xl shadow-sm border-gray-200">
              <CardHeader className="p-5">
                <CardTitle className="text-lg font-semibold text-gray-900">{center.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{center.address}</CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <p className="text-sm text-gray-600 mb-4">{center.description}</p>
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1 rounded-full border-gray-300 text-gray-700 font-medium hover:bg-gray-100">
                    Call
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-full border-gray-300 text-gray-700 font-medium hover:bg-gray-100">
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-2 bg-pink-500 text-white hover:bg-pink-600">1</Button>
          <Button variant="outline" className="rounded-full px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100">2</Button>
          <Button variant="outline" className="rounded-full px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100">3</Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HealthCenter;