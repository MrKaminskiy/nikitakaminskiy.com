
export default function Home() {
  return (
    <div className="min-h-screen bg-custom-primary text-custom-primary">
      <main className="flex h-screen">
        {/* Left Column - Personal Info (40% width, fixed) */}
        <div className="w-2/5 p-12 pt-20 flex flex-col justify-start space-y-8">
            {/* Profile Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src="/images/profile.svg"
                alt="Nikita Kaminskiy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold">
              Nikita Kaminskiy
            </h1>

            {/* Location and Revenue */}
            <div className="flex items-center gap-6">
              <p className="text-custom-primary flex items-center gap-2">
                <span>📍</span>
                Berlin
              </p>
              <p className="text-custom-primary flex items-center gap-2">
                <span>💰</span>
                €4k/month
              </p>
            </div>

            {/* Manifest */}
            <p className="text-xl italic text-custom-primary leading-relaxed">
              &ldquo;I automate business processes with AI to save time and money for SMBs.&rdquo;
            </p>

            {/* Stats */}
            <div>
              <p className="text-xl font-semibold text-custom-primary">
                15+ entrepreneurs automated their workflows:
              </p>
              <p className="text-custom-primary mt-2">
                I help businesses find automation opportunities, implement AI solutions, and get profitable
              </p>
            </div>

            {/* Contact Section */}
            <div className="pt-8">
              <div className="flex space-x-6">
                <a
                  href="mailto:nikam0811@gmail.com"
                  className="text-custom-primary hover:text-custom-accent transition-colors"
                  title="nikam0811@gmail.com"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/prophet0811"
                  className="text-custom-primary hover:text-custom-accent transition-colors"
                  title="@prophet0811"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nikita-kaminskiy-58132424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-custom-primary hover:text-custom-accent transition-colors"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/T0NBigBrain"
                  className="text-custom-primary hover:text-custom-accent transition-colors"
                  title="@T0NBigBrain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        {/* Right Column - Projects Grid (60% width, scrollable) */}
        <div className="w-3/5 overflow-y-auto p-12">
          <div className="grid grid-cols-2 gap-6">
          {/* Project 1 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">CRM</span>
              </div>
              <div className="font-bold text-custom-primary">CRM-бот</div>
            </div>
            <div className="text-sm text-custom-primary">Telegram bot integrated with Bitrix24</div>
          </a>

          {/* Project 2 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">AI</span>
              </div>
              <div className="font-bold text-custom-primary">Email-автоответ</div>
            </div>
            <div className="text-sm text-custom-primary">GPT bot for lead responses</div>
          </a>

          {/* Project 3 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">RPT</span>
              </div>
              <div className="font-bold text-custom-primary">Отчетчик</div>
            </div>
            <div className="text-sm text-custom-primary">Excel to Google Sheets automation</div>
          </a>

          {/* Project 4 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">API</span>
              </div>
              <div className="font-bold text-custom-primary">API Integration</div>
            </div>
            <div className="text-sm text-custom-primary">Custom API connections for businesses</div>
          </a>

          {/* Project 5 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">WF</span>
              </div>
              <div className="font-bold text-custom-primary">Workflow Automation</div>
            </div>
            <div className="text-sm text-custom-primary">Zapier and custom workflow solutions</div>
          </a>

          {/* Project 6 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">DB</span>
              </div>
              <div className="font-bold text-custom-primary">Database Sync</div>
            </div>
            <div className="text-sm text-custom-primary">Real-time data synchronization</div>
          </a>

          {/* Project 7 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">CHAT</span>
              </div>
              <div className="font-bold text-custom-primary">Chatbot Integration</div>
            </div>
            <div className="text-sm text-custom-primary">AI-powered customer support</div>
          </a>

          {/* Project 8 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">WEB</span>
              </div>
              <div className="font-bold text-custom-primary">Web Scraping</div>
            </div>
            <div className="text-sm text-custom-primary">Automated data collection</div>
          </a>

          {/* Project 9 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">ML</span>
              </div>
              <div className="font-bold text-custom-primary">ML Pipeline</div>
            </div>
            <div className="text-sm text-custom-primary">Machine learning automation</div>
          </a>

          {/* Project 10 */}
          <a href="#" className="block bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-custom-accent rounded-full flex items-center justify-center">
                <span className="text-custom-primary font-bold text-sm">CLOUD</span>
              </div>
              <div className="font-bold text-custom-primary">Cloud Migration</div>
            </div>
            <div className="text-sm text-custom-primary">AWS/Azure infrastructure setup</div>
          </a>
          </div>
        </div>
      </main>
    </div>
  );
}