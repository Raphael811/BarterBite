import React, { useState } from 'react';
import { Home, User, Search, ShoppingCart, Plus, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');

  const navigate = (screen) => setCurrentScreen(screen);

  // Minimal onboarding screen
  const OnboardingScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to BarterBite!</h1>
      <p className="text-gray-700 mb-6 text-center">
        Swap fresh food with your community. No cash required.
      </p>
      <button
        onClick={() => navigate('storeSetup')}
        className="bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition"
      >
        Get Started
      </button>
    </div>
  );

  // Minimal store setup screen
  const StoreSetupScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-2">Create Your Store</h2>
      <p className="text-gray-700 mb-4">Set up your mini-store profile</p>
      <button
        onClick={() => navigate('search')}
        className="bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition"
      >
        Continue
      </button>
    </div>
  );

  // Minimal marketplace screen
  const SearchScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <p className="text-gray-700 text-center mb-6">
        Listings will appear here.
      </p>
      <button
        onClick={() => navigate('onboarding')}
        className="bg-gray-300 py-2 px-4 rounded-lg"
      >
        Back
      </button>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch(currentScreen) {
      case 'onboarding': return <OnboardingScreen />;
      case 'storeSetup': return <StoreSetupScreen />;
      case 'search': return <SearchScreen />;
      default: return <OnboardingScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>{renderScreen()}</AnimatePresence>
    </div>
  );
}
