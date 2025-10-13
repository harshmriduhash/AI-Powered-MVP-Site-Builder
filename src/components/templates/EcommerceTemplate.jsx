import { 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Star,
  ShoppingBag,
  Truck,
  RefreshCw,
  Heart,
  Users,
  TrendingUp 
} from "lucide-react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { getFunctions , httpsCallable } from 'firebase/functions';
import { app } from '../../firebase';
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function EcommerceTemplate({
  showsidebar,
  isMobile,
  preview,
  setPreview,
  editmaintitle,
  editsubtitle,
  handleGoogleSignup,
  benefits,
  parsedResponse,
  productName,
  features,
  featuresexplanation,
  whyuseline,
  whyusepoints,
  pageid,
  isPreview,
}) {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(()=>{
    console.log("page id from ecommerce template:", pageid);
  },[pageid])

  const handleSubscribeConnectedAccount = async () => { 
    try {
      const functions = getFunctions(app);
      const createConnectedAccountCheckout = httpsCallable(functions, "createConnectedAccountCheckout");
      const result = await createConnectedAccountCheckout(pageid);
      window.location.href = result.data.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <main className={`flex-1 overflow-hidden ${showsidebar&&!isMobile ? 'ml-[250px]':''}`}>
      {/* Hero Section */}
      <section className={`relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden`}>
        {!showsidebar && preview && (
          <div
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-500 hover:text-gray-700 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 z-50 border border-gray-200"
            onClick={() => setPreview(false)}
          >
            <EyeOff className="w-5 h-5" />
          </div>
        )}

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-red-200/50 shadow-xs mb-8 hover:shadow-sm transition-shadow duration-200">
                <span className="text-sm font-medium text-red-700 tracking-wider">🔥 LIMITED TIME OFFER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  {editmaintitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                {editsubtitle}
              </p>

              {/* Price Display */}
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <span className="text-4xl font-bold text-red-600">$29</span>
                  <span className="text-2xl text-gray-400 line-through">$49</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save 40%
                  </span>
                </div>
                <p className="text-gray-600 mt-2">Limited time offer - Don't miss out!</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <button 
                  onClick={handleGoogleSignup}
                  className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Pre-Order Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={handleSubscribeConnectedAccount}
                  className="w-full lg:w-auto px-8 py-3 bg-white border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Join Waitlist for Updates</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-green-600" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-blue-600" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>

            {/* Right - Product Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{productName}</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                Best Seller!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ⚡ Fast Shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {!user && isPreview && (
        <div className="bg-[#FEF3F2] border border-[#FECACA] text-center py-8 px-6 mb-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-[#991B1B]">
            Your product launch is ready — start selling today!
          </h2>
          <p className="text-red-700 mt-3 text-lg">
            Sign up to preview your full store and start collecting pre-orders.
          </p>

          <div className="mt-6 flex flex-col justify-center items-center gap-4">
            <button
              className="bg-red-600 text-white w-64 px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
              onClick={() => navigate("/register")}
            >
              Create Store Account
            </button>

            <p className="text-red-700">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-red-800 font-medium hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Product Features Section */}
      <section className={`py-20 bg-white ${(!showsidebar && user) ? "section1" : ""} ${
        !user && isPreview ? "blur-md pointer-events-none select-none" : ""
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {productName}?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {whyuseline || "Quality products that deliver exceptional value"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features?.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-red-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  index % 6 === 0 ? 'bg-red-50 text-red-600' :
                  index % 6 === 1 ? 'bg-orange-50 text-orange-600' :
                  index % 6 === 2 ? 'bg-yellow-50 text-yellow-600' :
                  index % 6 === 3 ? 'bg-green-50 text-green-600' :
                  index % 6 === 4 ? 'bg-blue-50 text-blue-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  {index % 6 === 0 && <ShoppingBag className="w-6 h-6" />}
                  {index % 6 === 1 && <Star className="w-6 h-6" />}
                  {index % 6 === 2 && <Truck className="w-6 h-6" />}
                  {index % 6 === 3 && <ShieldCheck className="w-6 h-6" />}
                  {index % 6 === 4 && <Heart className="w-6 h-6" />}
                  {index % 6 === 5 && <Users className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {featuresexplanation[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`w-full bg-gradient-to-br from-red-50 to-orange-50 py-20 px-6 md:px-20 ${(!showsidebar && user) ? "section1" : ""} ${
        !user && isPreview ? "blur-md pointer-events-none select-none" : ""
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 leading-tight">
            What Makes Us{" "}
            <span className="text-red-600 font-medium">Different</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-left max-w-7xl mx-auto">
            {whyusepoints.map((point, index) => {
              const icons = [
                { icon: Star, color: "text-yellow-600" },
                { icon: Truck, color: "text-green-600" },
                { icon: ShieldCheck, color: "text-blue-600" },
                { icon: Heart, color: "text-red-600" },
              ];
              const IconComponent = icons[index % icons.length].icon;
              const iconColor = icons[index % icons.length].color;

              return (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <IconComponent className={`${iconColor} w-5 h-5 mt-1`} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {point || ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`w-full bg-gradient-to-br from-red-600 to-orange-600 py-20 px-4 sm:px-6 ${(!showsidebar && user) ? "section1" : ""} ${
        !user && isPreview ? "blur-md pointer-events-none select-none" : ""
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't Miss Out on This Limited Offer
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose quality and value
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleGoogleSignup}
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Pre-Order Now - $29</span>
            </button>
            
            <button 
              onClick={handleSubscribeConnectedAccount}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              <span>Join Waitlist</span>
            </button>
          </div>

          <div className="mt-8 text-red-100 text-sm">
            <p>✓ Free shipping worldwide • ✓ 30-day money-back guarantee • ✓ Secure payment</p>
          </div>
        </div>
      </section>
    </main>
  );
}
