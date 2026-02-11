import { ArrowRight, Check, Zap, Shield, TrendingUp, Star, RotateCcw } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-amber-900 z-50 border-b-4 border-yellow-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-300 border-2 border-amber-900 flex items-center justify-center transform -rotate-45">
              <span className="text-xl font-bold text-amber-900 transform rotate-45">L</span>
            </div>
            <span className="text-2xl font-bold text-yellow-100" style={{fontFamily: 'serif', letterSpacing: '2px'}}>LUMINA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-yellow-100 hover:text-yellow-300 transition-colors font-bold text-sm uppercase tracking-widest">Features</a>
            <a href="#testimonials" className="text-yellow-100 hover:text-yellow-300 transition-colors font-bold text-sm uppercase tracking-widest">Testimonials</a>
            <a href="#pricing" className="text-yellow-100 hover:text-yellow-300 transition-colors font-bold text-sm uppercase tracking-widest">Prices</a>
            <button className="px-6 py-2 bg-yellow-300 text-amber-900 border-2 border-amber-900 hover:bg-yellow-100 transition-colors font-bold text-sm uppercase">
              Start Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-amber-700 text-yellow-100 px-6 py-3 mb-8 border-4 border-amber-900 shadow-lg">
              <RotateCcw className="w-4 h-4" />
              <span className="font-bold text-sm uppercase tracking-wider">Retro vibes for modern productivity</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-amber-900 mb-6 leading-tight uppercase" style={{fontFamily: 'serif', textShadow: '3px 3px 0px rgba(180,83,9,0.3)'}}>
              Transform Your Workflow
            </h1>
            <div className="text-2xl text-amber-700 mb-10 font-bold uppercase tracking-widest" style={{fontFamily: 'serif'}}>
              With Authentic Retro Style
            </div>
            <p className="text-lg text-amber-900 mb-10 leading-relaxed font-semibold max-w-2xl mx-auto">
              Experience the perfect blend of vintage charm and modern functionality. Built for teams who appreciate the good old days combined with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group px-8 py-4 bg-red-600 text-yellow-100 border-4 border-amber-900 hover:bg-red-700 transition-all font-bold text-lg uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Start Free Trial</span>
              </button>
              <button className="px-8 py-4 border-4 border-amber-900 text-amber-900 hover:bg-yellow-100 transition-colors font-bold text-lg uppercase bg-yellow-200">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-amber-700 mt-6 font-bold uppercase tracking-wider">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-orange-100 border-t-8 border-b-8 border-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-amber-700 border-4 border-amber-900 p-8 shadow-lg">
              <div className="text-4xl font-black text-yellow-300 mb-2 uppercase" style={{fontFamily: 'serif'}}>50K+</div>
              <div className="text-yellow-100 font-bold uppercase text-sm tracking-widest">Active Users</div>
            </div>
            <div className="text-center bg-red-600 border-4 border-amber-900 p-8 shadow-lg">
              <div className="text-4xl font-black text-yellow-300 mb-2 uppercase" style={{fontFamily: 'serif'}}>99.9%</div>
              <div className="text-yellow-100 font-bold uppercase text-sm tracking-widest">Uptime</div>
            </div>
            <div className="text-center bg-amber-700 border-4 border-amber-900 p-8 shadow-lg">
              <div className="text-4xl font-black text-yellow-300 mb-2 uppercase" style={{fontFamily: 'serif'}}>4.9/5</div>
              <div className="text-yellow-100 font-bold uppercase text-sm tracking-widest">Rating</div>
            </div>
            <div className="text-center bg-red-600 border-4 border-amber-900 p-8 shadow-lg">
              <div className="text-4xl font-black text-yellow-300 mb-2 uppercase" style={{fontFamily: 'serif'}}>150+</div>
              <div className="text-yellow-100 font-bold uppercase text-sm tracking-widest">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-yellow-50 border-t-8 border-b-8 border-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-4 uppercase" style={{fontFamily: 'serif'}}>
              Everything You Need
            </h2>
            <p className="text-xl text-amber-700 font-bold uppercase tracking-widest">
              Powerful features from a bygone era
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-yellow-100 border-4 border-amber-900 hover:shadow-xl transition-all shadow-lg">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6 border-2 border-amber-900">
                <Zap className="w-6 h-6 text-yellow-100" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3 uppercase">Lightning Fast</h3>
              <p className="text-amber-900 leading-relaxed font-semibold">
                Optimized for speed. Experience instant responses that keep you in the flow.
              </p>
            </div>
            <div className="group p-8 bg-amber-700 border-4 border-amber-900 hover:shadow-xl transition-all shadow-lg">
              <div className="w-12 h-12 bg-yellow-300 flex items-center justify-center mb-6 border-2 border-amber-900">
                <Shield className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold text-yellow-100 mb-3 uppercase">Secure by Default</h3>
              <p className="text-yellow-100 leading-relaxed font-semibold">
                Enterprise-grade security with encryption. Your data stays protected.
              </p>
            </div>
            <div className="group p-8 bg-red-600 border-4 border-amber-900 hover:shadow-xl transition-all shadow-lg">
              <div className="w-12 h-12 bg-yellow-300 flex items-center justify-center mb-6 border-2 border-amber-900">
                <TrendingUp className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold text-yellow-100 mb-3 uppercase">Scale with Ease</h3>
              <p className="text-yellow-100 leading-relaxed font-semibold">
                From startup to enterprise, grow without limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-4 uppercase" style={{fontFamily: 'serif'}}>
              Loved by Thousands
            </h2>
            <p className="text-xl text-amber-700 font-bold uppercase tracking-widest">
              What our retro fans are saying
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-700 p-8 border-4 border-amber-900 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-yellow-100 mb-6 leading-relaxed font-semibold">
                "Completely transformed how we work. Productivity up 40% since switching. Love the retro vibes!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-300 border-2 border-amber-900 flex items-center justify-center font-bold text-amber-900">SJ</div>
                <div>
                  <div className="font-bold text-yellow-100 uppercase text-sm">Sarah Johnson</div>
                  <div className="text-xs text-yellow-200 font-semibold">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-red-600 p-8 border-4 border-amber-900 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-yellow-100 mb-6 leading-relaxed font-semibold">
                "Best investment this year. Powerful yet intuitive. The support team is incredible and super helpful."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-300 border-2 border-amber-900 flex items-center justify-center font-bold text-amber-900">MC</div>
                <div>
                  <div className="font-bold text-yellow-100 uppercase text-sm">Michael Chen</div>
                  <div className="text-xs text-yellow-200 font-semibold">CTO, StartupHub</div>
                </div>
              </div>
            </div>
            <div className="bg-amber-700 p-8 border-4 border-amber-900 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-yellow-100 mb-6 leading-relaxed font-semibold">
                "Perfect balance of simplicity and power. Does exactly what we need without unnecessary complexity."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-300 border-2 border-amber-900 flex items-center justify-center font-bold text-amber-900">ER</div>
                <div>
                  <div className="font-bold text-yellow-100 uppercase text-sm">Emily Rodriguez</div>
                  <div className="text-xs text-yellow-200 font-semibold">Designer, Creative Co</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-yellow-50 border-t-8 border-b-8 border-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-4 uppercase" style={{fontFamily: 'serif'}}>
              Simple Retro Pricing
            </h2>
            <p className="text-xl text-amber-700 font-bold uppercase tracking-widest">
              Choose your vintage plan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-yellow-100 p-8 border-4 border-amber-900 hover:shadow-xl transition-all shadow-lg">
              <div className="text-sm font-bold text-amber-900 mb-2 uppercase tracking-widest">STARTER</div>
              <div className="mb-6">
                <span className="text-4xl font-black text-amber-900" style={{fontFamily: 'serif'}}>$29</span>
                <span className="text-amber-700 font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-amber-900 mt-0.5 font-bold" />
                  <span className="text-amber-900 font-semibold">Up to 10 team members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-amber-900 mt-0.5 font-bold" />
                  <span className="text-amber-900 font-semibold">5GB storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-amber-900 mt-0.5 font-bold" />
                  <span className="text-amber-900 font-semibold">Basic analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-amber-900 mt-0.5 font-bold" />
                  <span className="text-amber-900 font-semibold">Email support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-4 border-amber-900 text-amber-900 hover:bg-amber-100 transition-colors font-bold text-sm uppercase">
                Get Started
              </button>
            </div>
            <div className="bg-red-600 p-8 border-4 border-amber-900 relative shadow-2xl transform md:scale-105">
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <span className="bg-yellow-300 text-amber-900 text-xs font-black px-3 py-1 border-2 border-amber-900 uppercase">
                  POPULAR
                </span>
              </div>
              <div className="text-sm font-bold text-yellow-100 mb-2 uppercase tracking-widest">PROFESSIONAL</div>
              <div className="mb-6">
                <span className="text-4xl font-black text-yellow-300" style={{fontFamily: 'serif'}}>$79</span>
                <span className="text-yellow-100 font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Unlimited team members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">50GB storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Advanced analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Priority support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-yellow-300 text-amber-900 border-4 border-amber-900 hover:bg-yellow-200 transition-colors font-bold text-sm uppercase">
                Get Started
              </button>
            </div>
            <div className="bg-amber-700 p-8 border-4 border-amber-900 hover:shadow-xl transition-all shadow-lg">
              <div className="text-sm font-bold text-yellow-100 mb-2 uppercase tracking-widest">ENTERPRISE</div>
              <div className="mb-6">
                <span className="text-4xl font-black text-yellow-300" style={{fontFamily: 'serif'}}>Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Unlimited everything</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Dedicated support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">Custom contracts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 font-bold" />
                  <span className="text-yellow-100 font-semibold">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-4 border-yellow-100 text-yellow-100 hover:bg-amber-600 transition-colors font-bold text-sm uppercase">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-amber-900 border-t-8 border-b-8 border-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-100 mb-6 uppercase" style={{fontFamily: 'serif'}}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-yellow-200 mb-10 font-bold uppercase tracking-widest">
            Join thousands of teams using Lumina
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-yellow-300 text-amber-900 border-4 border-yellow-100 hover:bg-yellow-200 transition-all font-bold text-lg uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Start Your Free Trial</span>
            </button>
            <button className="px-8 py-4 border-4 border-yellow-100 text-yellow-100 hover:bg-amber-800 transition-colors font-bold text-lg uppercase">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 border-t-4 border-yellow-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-300 border-2 border-yellow-100 flex items-center justify-center transform -rotate-45">
                  <span className="text-xl font-bold text-amber-900 transform rotate-45">L</span>
                </div>
                <span className="text-xl font-bold text-yellow-100 uppercase" style={{fontFamily: 'serif', letterSpacing: '1px'}}>Lumina</span>
              </div>
              <p className="text-yellow-200 text-sm font-semibold">
                Retro vibes, modern productivity. Building the future, yesterday's way.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-yellow-100 mb-4 uppercase text-sm tracking-widest">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Features</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Pricing</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Security</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-100 mb-4 uppercase text-sm tracking-widest">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">About</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Blog</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Careers</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-100 mb-4 uppercase text-sm tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Privacy</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Terms</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Cookies</a></li>
                <li><a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors font-semibold">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t-2 border-yellow-100 text-center text-sm text-yellow-200 font-semibold">
            <p>© 2026 Lumina. All rights reserved. Keep it retro.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
