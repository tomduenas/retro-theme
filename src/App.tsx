import { Check, Zap, Shield, TrendingUp, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-lg font-bold text-white">L</span>
            </div>
            <span className="text-xl font-bold text-black">Lumina</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-black hover:text-gray-600 transition-colors text-sm font-semibold">Features</a>
            <a href="#testimonials" className="text-black hover:text-gray-600 transition-colors text-sm font-semibold">Testimonials</a>
            <a href="#pricing" className="text-black hover:text-gray-600 transition-colors text-sm font-semibold">Pricing</a>
            <button className="px-4 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors text-sm font-semibold">
              Start Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 mb-8 border border-black">
              <span className="text-xs font-bold">NEW</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-black mb-6 leading-tight">
              Transform Your Workflow
            </h1>
            <p className="text-lg text-black mb-10 leading-relaxed font-semibold max-w-2xl mx-auto">
              A clean, minimal approach to productivity. Simple, powerful, and built for teams who value efficiency and elegance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-black text-white border border-black hover:bg-white hover:text-black transition-all font-bold text-sm">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-bold text-sm">
                Watch Demo
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-6 font-semibold">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-t-2 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border border-black p-6">
              <div className="text-3xl font-black text-black mb-2">50K+</div>
              <div className="text-gray-700 font-semibold text-sm">Active Users</div>
            </div>
            <div className="text-center border border-black p-6">
              <div className="text-3xl font-black text-black mb-2">99.9%</div>
              <div className="text-gray-700 font-semibold text-sm">Uptime</div>
            </div>
            <div className="text-center border border-black p-6">
              <div className="text-3xl font-black text-black mb-2">4.9/5</div>
              <div className="text-gray-700 font-semibold text-sm">Rating</div>
            </div>
            <div className="text-center border border-black p-6">
              <div className="text-3xl font-black text-black mb-2">150+</div>
              <div className="text-gray-700 font-semibold text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              Everything You Need
            </h2>
            <p className="text-base text-gray-700 font-semibold">
              Simple, powerful tools built for modern teams
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border-2 border-black">
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Lightning Fast</h3>
              <p className="text-gray-700 leading-relaxed font-semibold text-sm">
                Optimized for speed. Instant responses keep you in flow.
              </p>
            </div>
            <div className="p-8 bg-white border-2 border-black">
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Secure by Default</h3>
              <p className="text-gray-700 leading-relaxed font-semibold text-sm">
                Enterprise-grade encryption. Your data is always protected.
              </p>
            </div>
            <div className="p-8 bg-white border-2 border-black">
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">Scale with Ease</h3>
              <p className="text-gray-700 leading-relaxed font-semibold text-sm">
                Grows with you. From startup to enterprise seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-100 border-t-2 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              Loved by Teams
            </h2>
            <p className="text-base text-gray-700 font-semibold">
              What users are saying about Lumina
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-black">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-black fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed font-semibold text-sm">
                "Transformed how we work. Productivity up 40%. Simple and powerful."
              </p>
              <div>
                <div className="font-bold text-black text-sm">Sarah Johnson</div>
                <div className="text-xs text-gray-600 font-semibold">CEO, TechCorp</div>
              </div>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-black fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed font-semibold text-sm">
                "Best tool we've used. Intuitive design with powerful features. Stellar support."
              </p>
              <div>
                <div className="font-bold text-black text-sm">Michael Chen</div>
                <div className="text-xs text-gray-600 font-semibold">CTO, StartupHub</div>
              </div>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-black fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed font-semibold text-sm">
                "Exactly what we needed. Clean, simple, and does the job perfectly."
              </p>
              <div>
                <div className="font-bold text-black text-sm">Emily Rodriguez</div>
                <div className="text-xs text-gray-600 font-semibold">Designer, Creative Co</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              Simple Pricing
            </h2>
            <p className="text-base text-gray-700 font-semibold">
              Choose the plan that works for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 border-2 border-black">
              <div className="text-sm font-bold text-black mb-2">STARTER</div>
              <div className="mb-6">
                <span className="text-3xl font-black text-black">$29</span>
                <span className="text-gray-600 font-bold text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Up to 10 team members</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">5GB storage</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Basic analytics</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Email support</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-bold text-sm">
                Get Started
              </button>
            </div>
            <div className="bg-black text-white p-8 border-2 border-black relative md:scale-105 md:shadow-lg">
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <span className="bg-white text-black text-xs font-black px-3 py-1 border border-black">
                  POPULAR
                </span>
              </div>
              <div className="text-sm font-bold text-white mb-2">PROFESSIONAL</div>
              <div className="mb-6">
                <span className="text-3xl font-black text-white">$79</span>
                <span className="text-gray-300 font-bold text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-100 font-semibold">Unlimited team members</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-100 font-semibold">50GB storage</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-100 font-semibold">Advanced analytics</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-100 font-semibold">Priority support</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-gray-100 font-semibold">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 bg-white text-black border border-white hover:bg-black hover:text-white transition-colors font-bold text-sm">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <div className="text-sm font-bold text-black mb-2">ENTERPRISE</div>
              <div className="mb-6">
                <span className="text-3xl font-black text-black">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Unlimited everything</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Dedicated support</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">Custom contracts</span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-bold text-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white border-t-2 border-b-2 border-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base text-gray-300 mb-10 font-semibold">
            Join thousands of teams using Lumina
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-white text-black border border-white hover:bg-black hover:text-white transition-all font-bold text-sm">
              Start Your Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-bold text-sm">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-black flex items-center justify-center">
                  <span className="text-sm font-bold text-white">L</span>
                </div>
                <span className="text-base font-bold text-black">Lumina</span>
              </div>
              <p className="text-gray-600 text-xs font-semibold leading-relaxed">
                Clean. Simple. Powerful. The minimal approach to productivity.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Features</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Pricing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Security</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Careers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Privacy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Terms</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Cookies</a></li>
                <li><a href="#" className="text-gray-700 hover:text-black transition-colors font-semibold">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t-2 border-black text-center text-xs text-gray-600 font-semibold">
            <p>© 2026 Lumina. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
