import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-600">Portfolio</div>
          <div className="text-sm text-gray-500">2024</div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6">
        <section className="py-16">
          {/* Profile Photo */}
          <div className="mb-12">
            <div className="w-24 h-24 rounded-full mx-auto mb-8 overflow-hidden">
              <Image
                src="/images/profile-placeholder.svg"
                alt="Nikita Kaminskiy"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-light text-center mb-6">
            Nikita Kaminskiy
          </h1>

          {/* Manifest */}
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            AI automation engineer for SMBs
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">€4k/mo</div>
              <div className="text-sm text-gray-500">Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">3</div>
              <div className="text-sm text-gray-500">Years</div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-light mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-medium mb-3">CRM-бот</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Telegram-бот, интегрированный с Bitrix24 — сэкономил бизнес-клиенту 15 часов в неделю.
                </p>
                <div className="text-xs text-gray-500 mb-4">
                  Результат: 15 часов/неделю экономии
                </div>
                <a 
                  href="#" 
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Подробнее →
                </a>
              </div>

              {/* Project 2 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-medium mb-3">Email-автоответ</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  GPT-бот, отвечающий на запросы-лиды, интегрированный с CRM.
                </p>
                <div className="text-xs text-gray-500 mb-4">
                  Результат: 80% автоматизации
                </div>
                <a 
                  href="#" 
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Подробнее →
                </a>
              </div>

              {/* Project 3 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-medium mb-3">Отчетчик</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Автоматический отчет из Excel → Google Sheets, с рассылкой.
                </p>
                <div className="text-xs text-gray-500 mb-4">
                  Результат: 5 часов/день экономии
                </div>
                <a 
                  href="#" 
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Подробнее →
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <footer className="border-t border-gray-200 pt-12 pb-8">
            <div className="text-center">
              <h3 className="text-lg font-light mb-6">Get in touch</h3>
              <div className="flex justify-center space-x-8 text-sm">
                <a 
                  href="mailto:nikita@example.com" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://t.me/nikita_kaminskiy" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Telegram
                </a>
                <a 
                  href="https://linkedin.com/in/nikita-kaminskiy" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}