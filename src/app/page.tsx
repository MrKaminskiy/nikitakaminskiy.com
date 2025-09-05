import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="flex h-screen">
        {/* Left Column - Personal Info (40% width, fixed) */}
        <div className="w-2/5 p-12 flex flex-col justify-center space-y-8">
            {/* Profile Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/profile-placeholder.svg"
                alt="Nikita Kaminskiy"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold text-center">
              Nikita Kaminskiy
            </h1>

            {/* Location and Revenue */}
            <div className="text-center space-y-2">
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span>📍</span>
                Remote
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span>💰</span>
                €4k/month
              </p>
            </div>

            {/* Manifest */}
            <p className="text-xl italic text-gray-700 text-center leading-relaxed">
              &ldquo;I automate business processes with AI to save time and money for SMBs.&rdquo;
            </p>

            {/* Stats */}
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                15+ entrepreneurs automated their workflows:
              </p>
              <p className="text-gray-600 mt-2">
                I help businesses find automation opportunities, implement AI solutions, and get profitable
              </p>
            </div>

            {/* Contact Section */}
            <div className="pt-8">
              <div className="flex justify-center space-x-8 text-lg">
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
                <a
                  href="https://twitter.com/nikita_kaminskiy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

        {/* Right Column - Projects Grid (60% width, scrollable) */}
        <div className="w-3/5 overflow-y-auto p-12">
          <div className="space-y-6">
          {/* Project 1 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">CRM</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">CRM-бот</div>
              <div className="text-gray-600">Telegram bot integrated with Bitrix24</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€1.2k/mo</div>
          </div>

          {/* Project 2 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">AI</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Email-автоответ</div>
              <div className="text-gray-600">GPT bot for lead responses</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€800/mo</div>
          </div>

          {/* Project 3 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold text-lg">RPT</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Отчетчик</div>
              <div className="text-gray-600">Excel to Google Sheets automation</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€600/mo</div>
          </div>

          {/* Project 4 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">API</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">API Integration</div>
              <div className="text-gray-600">Custom API connections for businesses</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€700/mo</div>
          </div>

          {/* Project 5 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">WF</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Workflow Automation</div>
              <div className="text-gray-600">Zapier and custom workflow solutions</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€500/mo</div>
          </div>

          {/* Project 6 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-lg">DB</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Database Sync</div>
              <div className="text-gray-600">Real-time data synchronization</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€200/mo</div>
          </div>

          {/* Project 7 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-600 font-bold text-lg">CHAT</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Chatbot Integration</div>
              <div className="text-gray-600">AI-powered customer support</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€350/mo</div>
          </div>

          {/* Project 8 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-yellow-600 font-bold text-lg">WEB</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Web Scraping</div>
              <div className="text-gray-600">Automated data collection</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€150/mo</div>
          </div>

          {/* Project 9 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-teal-600 font-bold text-lg">ML</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">ML Pipeline</div>
              <div className="text-gray-600">Machine learning automation</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€900/mo</div>
          </div>

          {/* Project 10 */}
          <div className="flex items-center space-x-4 p-6 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <span className="text-cyan-600 font-bold text-lg">CLOUD</span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">Cloud Migration</div>
              <div className="text-gray-600">AWS/Azure infrastructure setup</div>
            </div>
            <div className="text-lg font-semibold text-green-600">€1.1k/mo</div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}