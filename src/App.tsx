import { ArrowRight, Check, Sparkles, Zap, Shield, TrendingUp, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold text-white">Lumina</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Prices</a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-950 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Introducing the future of productivity</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform your workflow into something{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                extraordinary
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Experience the blend of simplicity and power. Built for teams who demand excellence and individuals who deserve better tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start free trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-700 text-white rounded-lg hover:border-gray-600 transition-colors">
                Watch demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-300">
              Powerful features designed to help you work smarter, not harder
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimized for speed and performance. Experience instant responses and seamless workflows that keep you in flow.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure by Default</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security with end-to-end encryption. Your data is protected with the highest standards.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scale with Ease</h3>
              <p className="text-gray-300 leading-relaxed">
                From startup to enterprise, our platform grows with you. Handle millions of requests without breaking a sweat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by thousands worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "This tool has completely transformed how our team collaborates. We've seen a 40% increase in productivity since switching."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The best investment we've made this year. Intuitive, powerful, and the support team is incredible."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-sm text-gray-500">CTO, StartupHub</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Simple yet powerful. It does exactly what we need without the complexity of other tools we've tried."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-white">Emily Rodriguez</div>
                  <div className="text-sm text-gray-500">Designer, Creative Co</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-gray-700 transition-colors">
              <div className="text-sm font-semibold text-gray-400 mb-2">STARTER</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Up to 10 team members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">5GB storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Basic analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-gray-700 text-white rounded-lg hover:border-gray-600 transition-colors">
                Get started
              </button>
            </div>
            <div className="bg-blue-950 p-8 rounded-2xl relative transform md:scale-105 shadow-2xl border-2 border-blue-800">
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-400 mb-2">PROFESSIONAL</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$79</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">Unlimited team members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">50GB storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get started
              </button>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-gray-700 transition-colors">
              <div className="text-sm font-semibold text-gray-400 mb-2">ENTERPRISE</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Unlimited everything</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">Custom contracts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <span className="text-gray-300">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-gray-700 text-white rounded-lg hover:border-gray-600 transition-colors">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of teams already using Lumina to transform their workflow
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start your free trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-700 text-white rounded-lg hover:border-gray-600 transition-colors">
              Schedule a demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-semibold text-white">Lumina</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the future of productivity, one workflow at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2026 Lumina. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
