import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Моля, въведете вашето име.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Моля, въведете имейл адрес.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Моля, въведете валиден имейл адрес.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Моля, напишете съобщение.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear specific error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate successful submission
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Контакти</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Готови ли сте за следващата си татуировка? Пишете ни.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-charcoal p-8 border border-gray-800 rounded-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-500 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Телефон</p>
                    <p className="text-gray-400 hover:text-red-500 transition-colors">+359 88 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-500 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Имейл</p>
                    <p className="text-gray-400 hover:text-red-500 transition-colors">booking@atanasovart.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-500 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Работно Време</p>
                    <p className="text-gray-400">Пон - Съб: 11:00 - 19:00</p>
                    <p className="text-gray-400">Неделя: Почивен ден</p>
                  </div>
                </div>

                 <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-500 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-white font-medium">Локация</p>
                    <p className="text-gray-400">Варна, България</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="h-64 w-full rounded-sm overflow-hidden border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Studio Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=43.1816388,27.8989189&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal p-8 border border-gray-800 rounded-sm relative">
             {submitStatus === 'success' ? (
              <div className="absolute inset-0 z-10 bg-charcoal/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center rounded-sm border border-red-500/30">
                <CheckCircle className="h-16 w-16 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Благодарим ви!</h3>
                <p className="text-gray-300">Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 text-red-500 hover:text-white underline"
                >
                  Изпрати ново съобщение
                </button>
              </div>
            ) : null}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">
                  Име <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border rounded-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
                  placeholder="Вашето Име"
                />
                {errors.name && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">
                  Имейл <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border rounded-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">
                  Съобщение <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border rounded-sm py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                  placeholder="Опишете идеята си, място, размер..."
                ></textarea>
                {errors.message && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-sm uppercase tracking-wider transition-colors duration-300 shadow-lg hover:shadow-red-600/20"
              >
                Изпрати
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;