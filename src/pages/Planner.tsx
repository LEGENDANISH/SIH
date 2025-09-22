import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Planner = () => {
  const [activeTab, setActiveTab] = useState("My Diet");
  const [selectedMeals, setSelectedMeals] = useState<number>(2);
  const [mealItems, setMealItems] = useState<string[]>(["Food 1", "Food 2", "Drink 1", "Drink 2"]);
  const [selectedItem, setSelectedItem] = useState<string>("Select");

  // Mock calorie calculation
  const handleCalculateCalories = () => {
    alert("Calorie needs calculated!");
  };

  const handleManualEntry = () => {
    alert("Enter manually mode activated.");
  };

  const handleMealClick = (meals: number) => {
    setSelectedMeals(meals);
  };

  const handleItemChange = (item: string) => {
    setSelectedItem(item);
  };

  const handleAutofill = () => {
    alert("AI is suggesting meals...");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
      <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("My Diet")}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === "My Diet"
                ? "text-black border-b-2 border-pink-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            My Diet
          </button>
          <button
            onClick={() => setActiveTab("Food Suggestions")}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === "Food Suggestions"
                ? "text-black border-b-2 border-pink-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Food Suggestions
          </button>
        </div>

        {/* Calorie Need Section */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">My calorie need</p>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-pink-500 text-pink-600 hover:bg-pink-50 px-4 py-2 text-sm font-medium rounded-lg"
              onClick={handleCalculateCalories}
            >
              Calculate now
            </Button>
            <span className="text-sm text-gray-500">or</span>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 text-sm font-medium rounded-lg"
              onClick={handleManualEntry}
            >
              Enter manually
            </Button>
          </div>
        </div>

        {/* Select Number of Meals */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">Select no of meals/day</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[2, 3, 4, 5, "Other"].map((mealCount) => (
              <div
                key={mealCount}
                onClick={() => handleMealClick(typeof mealCount === 'number' ? mealCount : 2)}
                className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  selectedMeals === mealCount
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className={`text-2xl font-bold ${selectedMeals === mealCount ? "text-pink-600" : "text-gray-900"}`}>
                    {mealCount}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {mealCount === 2 && "2 food + 2 drinks"}
                    {mealCount === 3 && "3 food + 3 drinks"}
                    {mealCount === 4 && "3 food + 3 drinks + snacks"}
                    {mealCount === 5 && "4 food + 4 drinks + snacks"}
                    {mealCount === "Other" && "Custom"}
                  </div>
                </div>
                {selectedMeals === mealCount && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Meal Selection Panel */}
        <div className="bg-gray-50 p-5 rounded-xl mb-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="text-sm font-medium text-gray-700">Select Meal</div>
            <div className="flex-1"></div>
            <div className="text-sm font-medium text-gray-700">Select Items</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {mealItems.map((item) => (
              <Button
                key={item}
                variant="outline"
                size="sm"
                className="text-xs px-3 py-1 border-gray-300 hover:bg-gray-100"
              >
                {item}
              </Button>
            ))}
            <select
              value={selectedItem}
              onChange={(e) => handleItemChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
            >
              <option value="Select">Select</option>
              <option value="Food 1">Food 1</option>
              <option value="Food 2">Food 2</option>
              <option value="Drink 1">Drink 1</option>
              <option value="Drink 2">Drink 2</option>
            </select>
          </div>

          <div className="flex justify-end items-center space-x-4">
            <Button
              variant="link"
              className="text-pink-600 hover:text-pink-700 text-sm font-medium"
            >
              Suggestions
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-600 hover:bg-pink-50 text-sm font-medium px-4 py-2 rounded-lg"
              onClick={handleAutofill}
            >
              Autofill with AI
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button variant="ghost" className="text-sm">Reset</Button>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-sm font-medium rounded-lg">
            Start
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Planner;