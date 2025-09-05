import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="flex h-screen">
        {/* Left Column - Personal Info (40% width, fixed) */}
        <div className="w-2/5 p-8 flex flex-col justify-center space-y-6">
            {/* Profile Photo */}
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/images/profile-placeholder.svg"
                alt="Nikita Kaminskiy"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold">
              Nikita Kaminskiy
            </h1>

            {/* Location */}
            <p className="text-gray-600">
              Remote
            </p>

            {/* Revenue */}
            <p className="text-2xl font-bold">
              €4k/month
            </p>

            {/* Manifest */}
            <p className="text-lg italic text-gray-700">
              I automate business processes with AI to save time and money for SMBs.
            </p>

            {/* Contact Section */}
            <div className="pt-8">
              <div className="flex space-x-6 text-sm">
                <a 
                  href="mailto:nikita@example.com" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://t.me/nikita_kaminskiy" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Telegram
                </a>
                <a 
                  href="https://linkedin.com/in/nikita-kaminskiy" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/nikita_kaminskiy" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

        {/* Right Column - Projects Grid (60% width, scrollable) */}
        <div className="w-3/5 overflow-y-auto p-8">
          <div className="space-y-4">
          {/* Project 1 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">CRM</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">CRM-бот</div>
              <div className="text-sm text-gray-600">Telegram bot integrated with Bitrix24</div>
            </div>
            <div className="text-sm font-medium text-green-600">€1.2k/mo</div>
          </div>

          {/* Project 2 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">AI</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Email-автоответ</div>
              <div className="text-sm text-gray-600">GPT bot for lead responses</div>
            </div>
            <div className="text-sm font-medium text-green-600">€800/mo</div>
          </div>

          {/* Project 3 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">RPT</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Отчетчик</div>
              <div className="text-sm text-gray-600">Excel to Google Sheets automation</div>
            </div>
            <div className="text-sm font-medium text-green-600">€600/mo</div>
          </div>

          {/* Project 4 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
              <span className="text-orange-600 font-bold text-sm">API</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">API Integration</div>
              <div className="text-sm text-gray-600">Custom API connections for businesses</div>
            </div>
            <div className="text-sm font-medium text-green-600">€700/mo</div>
          </div>

          {/* Project 5 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">WF</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Workflow Automation</div>
              <div className="text-sm text-gray-600">Zapier and custom workflow solutions</div>
            </div>
            <div className="text-sm font-medium text-green-600">€500/mo</div>
          </div>

          {/* Project 6 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-sm">DB</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Database Sync</div>
              <div className="text-sm text-gray-600">Real-time data synchronization</div>
            </div>
            <div className="text-sm font-medium text-green-600">€200/mo</div>
          </div>

          {/* Project 7 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center">
              <span className="text-pink-600 font-bold text-sm">CHAT</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Chatbot Integration</div>
              <div className="text-sm text-gray-600">AI-powered customer support</div>
            </div>
            <div className="text-sm font-medium text-green-600">€350/mo</div>
          </div>

          {/* Project 8 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
              <span className="text-yellow-600 font-bold text-sm">WEB</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Web Scraping</div>
              <div className="text-sm text-gray-600">Automated data collection</div>
            </div>
            <div className="text-sm font-medium text-green-600">€150/mo</div>
          </div>

          {/* Project 9 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center">
              <span className="text-teal-600 font-bold text-sm">ML</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">ML Pipeline</div>
              <div className="text-sm text-gray-600">Machine learning automation</div>
            </div>
            <div className="text-sm font-medium text-green-600">€900/mo</div>
          </div>

          {/* Project 10 */}
          <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-cyan-100 rounded flex items-center justify-center">
              <span className="text-cyan-600 font-bold text-sm">CLOUD</span>
            </div>
            <div className="flex-1">
              <div className="font-medium">Cloud Migration</div>
              <div className="text-sm text-gray-600">AWS/Azure infrastructure setup</div>
            </div>
            <div className="text-sm font-medium text-green-600">€1.1k/mo</div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}