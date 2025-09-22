import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Heart } from 'lucide-react';

const HealthAuth = () => {
  const [currentView, setCurrentView] = useState('welcome'); // welcome, register, login
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    countryCode: '+91'
  });

  const languages = {
    'English': {
      changeLanguage: 'Change Language?',
      yourHealth: 'Your Health.',
      anytime: 'Anytime.',
      anywhere: 'Anywhere',
      subtitle: 'A digital health platform that gives every migrant worker a unique ID, secure medical records, and instant access to care across India.',
      email: 'Email',
      password: 'Password',
      phone: 'Phone',
      register: 'Register',
      login: 'Login',
      or: 'or',
      continueGoogle: 'Continue with google',
      continueApple: 'Continue with apple',
      emailPlaceholder: 'email',
      passwordPlaceholder: 'password',
      phonePlaceholder: 'Phone',
      copyright: '2025 ©. All Rights Reserved. Made in India (with Pride)',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: 'Don\'t have an account?'
    },
    'हिंदी': {
      changeLanguage: 'भाषा बदलें?',
      yourHealth: 'आपका स्वास्थ्य.',
      anytime: 'कभी भी.',
      anywhere: 'कहीं भी',
      subtitle: 'एक डिजिटल स्वास्थ्य प्लेटफॉर्म जो हर प्रवासी कामगार को एक अनूठी पहचान, सुरक्षित चिकित्सा रिकॉर्ड और भारत भर में देखभाल तक तुरंत पहुंच देता है।',
      email: 'ईमेल',
      password: 'पासवर्ड',
      phone: 'फोन',
      register: 'पंजीकरण',
      login: 'लॉगिन',
      or: 'या',
      continueGoogle: 'गूगल के साथ जारी रखें',
      continueApple: 'एप्पल के साथ जारी रखें',
      emailPlaceholder: 'ईमेल',
      passwordPlaceholder: 'पासवर्ड',
      phonePlaceholder: 'फोन',
      copyright: '2025 © सभी अधिकार सुरक्षित। भारत में बनाया गया (गर्व के साथ)',
      alreadyHaveAccount: 'पहले से खाता है?',
      dontHaveAccount: 'खाता नहीं है?'
    },
    'বাংলা': {
      changeLanguage: 'ভাষা পরিবর্তন?',
      yourHealth: 'আপনার স্বাস্থ্য.',
      anytime: 'যেকোনো সময়.',
      anywhere: 'যেকোনো জায়গায়',
      subtitle: 'একটি ডিজিটাল স্বাস্থ্য প্ল্যাটফর্ম যা প্রতিটি অভিবাসী শ্রমিকের জন্য একটি অনন্য আইডি, নিরাপদ চিকিৎসা রেকর্ড এবং ভারত জুড়ে যত্নের তাৎক্ষণিক অ্যাক্সেস প্রদান করে।',
      email: 'ইমেইল',
      password: 'পাসওয়ার্ড',
      phone: 'ফোন',
      register: 'নিবন্ধন',
      login: 'লগইন',
      or: 'অথবা',
      continueGoogle: 'গুগলের সাথে চালিয়ে যান',
      continueApple: 'অ্যাপলের সাথে চালিয়ে যান',
      emailPlaceholder: 'ইমেইল',
      passwordPlaceholder: 'পাসওয়ার্ড',
      phonePlaceholder: 'ফোন',
      copyright: '২০২৫ © সমস্ত অধিকার সংরক্ষিত। ভারতে তৈরি (গর্বের সাথে)',
      alreadyHaveAccount: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে?',
      dontHaveAccount: 'অ্যাকাউন্ট নেই?'
    },
    'தமிழ்': {
      changeLanguage: 'மொழியை மாற்றவா?',
      yourHealth: 'உங்கள் ஆரோக்கியம்.',
      anytime: 'எப்பொழுதும்.',
      anywhere: 'எங்கும்',
      subtitle: 'ஒவ்வொரு புலம்பெயர்ந்த தொழிலாளருக்கும் தனித்துவமான அடையாளம், பாதுகாப்பான மருத்துவ பதிவுகள் மற்றும் இந்தியா முழுவதும் உடனடி பராமரிப்பு அணுகலை வழங்கும் டிஜிட்டல் சுகாதார தளம்।',
      email: 'மின்னஞ்சல்',
      password: 'கடவுச்சொல்',
      phone: 'தொலைபேசி',
      register: 'பதிவு செய்யவும்',
      login: 'உள்நுழைவு',
      or: 'அல்லது',
      continueGoogle: 'கூகுளுடன் தொடரவும்',
      continueApple: 'ஆப்பிளுடன் தொடரவும்',
      emailPlaceholder: 'மின்னஞ்சல்',
      passwordPlaceholder: 'கடவுச்சொல்',
      phonePlaceholder: 'தொலைபேசி',
      copyright: '2025 © அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை। இந்தியாவில் தயாரிக்கப்பட்டது (பெருமையுடன்)',
      alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
      dontHaveAccount: 'கணக்கு இல்லையா?'
    },
    'తెలుగు': {
      changeLanguage: 'భాషను మార్చాలా?',
      yourHealth: 'మీ ఆరోగ్యం.',
      anytime: 'ఎప్పుడైనా.',
      anywhere: 'ఎక్కడైనా',
      subtitle: 'ప్రతి వలస కార్మికునికి ప్రత్యేక ID, సురక్షితమైన వైద్య రికార్డులు మరియు భారతదేశం అంతటా తక్షణ సంరక్షణ యాక్సెస్‌ను అందించే డిజిటల్ ఆరోగ్య వేదిక.',
      email: 'ఇమెయిల్',
      password: 'పాస్‌వర్డ్',
      phone: 'ఫోన్',
      register: 'నమోదు చేయండి',
      login: 'లాగిన్',
      or: 'లేదా',
      continueGoogle: 'గూగుల్‌తో కొనసాగించండి',
      continueApple: 'యాపిల్‌తో కొనసాగించండి',
      emailPlaceholder: 'ఇమెయిల్',
      passwordPlaceholder: 'పాస్‌వర్డ్',
      phonePlaceholder: 'ఫోన్',
      copyright: '2025 © అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి. భారతదేశంలో తయారు చేయబడింది (గర్వంతో)',
      alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
      dontHaveAccount: 'ఖాతా లేదా?'
    },
    'ગુજરાતી': {
      changeLanguage: 'ભાષા બદલો?',
      yourHealth: 'તમારું સ્વાસ્થ્ય.',
      anytime: 'કોઈપણ સમયે.',
      anywhere: 'ગમે ત્યાં',
      subtitle: 'એક ડિજિટલ હેલ્થ પ્લેટફોર્મ જે દરેક સ્થળાંતર કામદારને અનોખી ID, સુરક્ષિત તબીબી રેકોર્ડ અને ભારતમાં સંભાળની તત્કાલ પહોંચ આપે છે.',
      email: 'ઈમેલ',
      password: 'પાસવર્ડ',
      phone: 'ફોન',
      register: 'નોંધણી',
      login: 'લોગિન',
      or: 'અથવા',
      continueGoogle: 'ગૂગલ સાથે ચાલુ રાખો',
      continueApple: 'એપલ સાથે ચાલુ રાખો',
      emailPlaceholder: 'ઈમેલ',
      passwordPlaceholder: 'પાસવર્ડ',
      phonePlaceholder: 'ફોન',
      copyright: '2025 © બધા અધિકારો અનામત. ભારતમાં બનાવેલ (ગર્વ સાથે)',
      alreadyHaveAccount: 'પહેલેથી એકાઉન્ટ છે?',
      dontHaveAccount: 'એકાઉન્ટ નથી?'
    }
  };

  const t = languages[selectedLanguage] || languages['English'];

  const countryCodes = [
    { code: '+91', country: 'IN' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+971', country: 'AE' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderWelcomeScreen = () => (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        {t.yourHealth} <span className="text-pink-500">{t.anytime}</span> <span className="text-pink-500">{t.anywhere}</span>
      </h1>
      
      <p className="text-gray-600 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
        {t.subtitle}
      </p>

      <div className="flex gap-4 justify-center mb-8">
        <button 
          onClick={() => setCurrentView('login')}
          className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
        >
          {t.login}
        </button>
        <button 
          onClick={() => setCurrentView('register')}
          className="px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
        >
          {t.register}
        </button>
      </div>

      <div className="text-gray-400 mb-6">{t.or}</div>

      <div className="flex flex-col gap-3">
        <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {t.continueGoogle}
        </button>
        
        <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {t.continueApple}
        </button>
      </div>
    </div>
  );

  const renderRegisterScreen = () => (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        {t.yourHealth} <span className="text-pink-500">{t.anytime}</span> <span className="text-pink-500">{t.anywhere}</span>
      </h1>
      
      <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
        {t.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
        <div>
          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder={t.password}
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium flex items-center justify-center gap-2"
        >
          {t.register} <ArrowRight size={18} />
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          {t.alreadyHaveAccount}{' '}
          <button
            onClick={() => setCurrentView('login')}
            className="text-pink-500 hover:text-pink-600 font-medium underline"
          >
            {t.login}
          </button>
        </p>
      </div>

      <div className="text-center mt-8 pt-6 border-t border-gray-100">
        <div className="text-gray-400 mb-4">{t.or}</div>
        
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t.continueGoogle}
          </button>
          
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            {t.continueApple}
          </button>
        </div>
      </div>
    </div>
  );

  const renderLoginScreen = () => (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        {t.yourHealth} <span className="text-pink-500">{t.anytime}</span> <span className="text-pink-500">{t.anywhere}</span>
      </h1>
      
      <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
        {t.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
        <div>
          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder={t.password}
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium flex items-center justify-center gap-2"
        >
          {t.login} <ArrowRight size={18} />
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          {t.dontHaveAccount}{' '}
          <button
            onClick={() => setCurrentView('register')}
            className="text-pink-500 hover:text-pink-600 font-medium underline"
          >
            {t.register}
          </button>
        </p>
      </div>

      <div className="text-center mt-8 pt-6 border-t border-gray-100">
        <div className="text-gray-400 mb-4">{t.or}</div>
        
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t.continueGoogle}
          </button>
          
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            {t.continueApple}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center gap-3">
  <div className="w-10 h-10 flex items-center justify-center">
    <img
              src="healthlogo1.png"
              alt="Health Logo"
              className="ml-32 h-auto max-w-52 "
            />
  </div>
</div>

        
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm underline"
          >
            <span>{t.changeLanguage}</span>
            <span className="font-medium">{selectedLanguage}</span>
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {showLanguageDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
              {Object.keys(languages).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setShowLanguageDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm border-b border-gray-100 last:border-b-0"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8">
        <div className="w-full max-w-lg">
          {currentView === 'welcome' && renderWelcomeScreen()}
          {currentView === 'register' && renderRegisterScreen()}
          {currentView === 'login' && renderLoginScreen()}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6">
        <p className="text-xs text-gray-400">
          {t.copyright}
        </p>
      </div>

      {/* Click outside to close dropdown */}
      {showLanguageDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowLanguageDropdown(false)}
        ></div>
      )}
    </div>
  );
};

export default HealthAuth;