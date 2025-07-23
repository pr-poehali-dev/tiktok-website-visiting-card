import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-tiktok-pink/10 via-dark-bg to-tiktok-cyan/10"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-tiktok-pink rounded-full opacity-10"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-tiktok-cyan rounded-full opacity-15"></div>
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan rounded-full opacity-10"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/6fa075c6-a07e-4079-b6ce-80f835a76199.png" 
              alt="realkelpie" 
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-tiktok-pink shadow-2xl hover:scale-110 transition-transform duration-300 object-cover"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-tiktok-pink via-white to-tiktok-cyan bg-clip-text text-transparent">
              REALKELPIE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in font-light">
            Никита • TikTok Creator • Живу на полную
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
            <div className="px-6 py-3 bg-gradient-to-r from-tiktok-pink/80 to-purple-500/80 rounded-lg text-white font-medium hover:from-tiktok-pink hover:to-purple-500 transition-all duration-200 cursor-pointer">
              🍺 Пиво
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-tiktok-cyan/80 to-blue-500/80 rounded-lg text-white font-medium hover:from-tiktok-cyan hover:to-blue-500 transition-all duration-200 cursor-pointer">
              💃 Танцы
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-lg text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-200 cursor-pointer">
              🎬 Видосы
            </div>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-tiktok-pink to-tiktok-cyan hover:from-tiktok-pink/80 hover:to-tiktok-cyan/80 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-xl border-0"
          >
            Смотреть контент
            <Icon name="Play" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tiktok-pink/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan bg-clip-text text-transparent">
            ОБО МНЕ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-tiktok-pink transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-tiktok-pink/20">
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">🍺</div>
                <h3 className="text-2xl font-bold mb-4 text-tiktok-pink">Пивной Эксперт</h3>
                <p className="text-gray-300">
                  Знаю все о крафтовом пиве и лучших барах города. Регулярно делюсь обзорами и рекомендациями со своими подписчиками.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 hover:border-tiktok-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-tiktok-cyan/20">
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">💃</div>
                <h3 className="text-2xl font-bold mb-4 text-tiktok-cyan">Король Танцпола</h3>
                <p className="text-gray-300">
                  Танцую с детства, создаю вирусные челленджи и учу других крутым движениям. Моя страсть - это ритм и движение!
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Контент Мейкер</h3>
                <p className="text-gray-300">
                  Создаю яркий и качественный контент каждый день. Мои видео - это mix веселья, креатива и настоящих эмоций.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Networks Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tiktok-cyan/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-16 bg-gradient-to-r from-tiktok-cyan to-tiktok-pink bg-clip-text text-transparent">
            СОЦИАЛЬНЫЕ СЕТИ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="#" 
              className="group bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-tiktok-pink transition-all duration-200 hover:shadow-xl hover:shadow-tiktok-pink/10"
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">TikTok</h3>
              <p className="text-tiktok-pink font-semibold">@realkelpie</p>
              <p className="text-gray-400 text-sm mt-2">Основной контент</p>
            </a>
            
            <a 
              href="#" 
              className="group bg-gradient-to-br from-purple-900 to-pink-900 p-8 rounded-2xl border border-purple-500 hover:border-white transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-pink-300 font-semibold">@realkelpie</p>
              <p className="text-gray-300 text-sm mt-2">Фото и Stories</p>
            </a>
            
            <a 
              href="#" 
              className="group bg-gradient-to-br from-blue-900 to-cyan-900 p-8 rounded-2xl border border-blue-500 hover:border-white transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
              <p className="text-cyan-300 font-semibold">@realkelpie</p>
              <p className="text-gray-300 text-sm mt-2">Личное общение</p>
            </a>
            
            <a 
              href="#" 
              className="group bg-gradient-to-br from-red-900 to-orange-900 p-8 rounded-2xl border border-red-500 hover:border-white transition-all duration-200 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="text-5xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-white mb-2">YouTube</h3>
              <p className="text-red-300 font-semibold">realkelpie</p>
              <p className="text-gray-300 text-sm mt-2">Длинные видео</p>
            </a>
          </div>
          
          <div className="mt-16">
            <p className="text-2xl text-gray-300 mb-8">
              Присоединяйся к моему комьюнити! 🚀
            </p>
            <Button 
              className="bg-gradient-to-r from-tiktok-pink to-tiktok-cyan hover:from-tiktok-pink/90 hover:to-tiktok-cyan/90 text-white px-12 py-6 text-xl font-semibold rounded-lg transition-all duration-200 hover:shadow-xl"
            >
              Подписаться на все
              <Icon name="Users" className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 border-t border-gray-800">
        <p>© 2024 realkelpie • Никита • Создано с 💖 и энергией</p>
      </footer>
    </div>
  );
};

export default Index;