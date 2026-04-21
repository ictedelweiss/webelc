export default function KontakEN() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <main className="relative">
        {/* Hero Section */}
        <div className="relative pb-20">
          <div className="absolute right-0 top-20 w-[60px] md:w-[150px] h-[160px] md:h-[280px] bg-[#FED700] -z-10" />

          <div className="max-w-screen-xl mx-auto px-6 pt-8">
            {/* Breadcrumb */}
            <p className="text-sm font-poppins text-[#FED700]">
              Homepage <span className="text-[#868686]">|</span> Contact Us
            </p>

            {/* Title Section */}
            <div className="mt-12">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#293C88] mb-4">
                Contact Us
              </h1>
              <p className="text-[#868686] font-poppins text-base md:text-lg max-w-[700px] leading-relaxed">
                We are ready to help answer your questions about the programs and services of Edelweiss Learning Center.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          {/* Contact Info & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-[32px] font-bold text-[#293C88] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#293C88] mb-2">
                      Office Location
                    </h3>
                    <p className="text-[#868686] font-poppins text-sm leading-relaxed">
                      Jatibening Estate, Jl. Ratna Jatibening,<br />
                      Kec. Pondok Gede, Kota Bekasi,<br />
                      West Java, 17142
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#293C88] mb-2">
                      Phone
                    </h3>
                    <p className="text-[#868686] font-poppins text-sm">
                      <a href="https://wa.me/628118817757" className="hover:text-[#FED700] transition-colors">
                        +62 811-8817-757
                      </a>
                    </p>
                    <p className="text-[#868686] font-poppins text-sm">
                      (Monday - Friday, 08:00 - 17:00)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#293C88] mb-2">
                      Email
                    </h3>
                    <p className="text-[#868686] font-poppins text-sm">
                      <a href="mailto:cs@edelweiss.sch.id" className="hover:text-[#FED700] transition-colors">
                        cs@edelweiss.sch.id
                      </a>
                    </p>

                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FED700] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#293C88]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 5V1h-1v4H8.98v2h4.03V5h-1zm6.93 0v4h4.05V5h-4.05zm0 6h4.05v-2h-4.05v2zm0 6h4.05v-2h-4.05v2zM11.99 7H8.98v2h3.01V7zm0 6H8.98v2h3.01v-2zm0 6H8.98v2h3.01v-2zM4 5v14h14V5H4zm12 12H6V8h10v9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#293C88] mb-2">
                      Operating Hours
                    </h3>
                    <ul className="space-y-1 text-[#868686] font-poppins text-sm">
                      <li>Monday - Friday: 08:00 - 17:00</li>
                      <li>Saturday: 08:00 - 12:00</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-[18px] font-bold text-[#293C88] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-[#293C88] rounded-full flex items-center justify-center text-white hover:bg-[#FED700] hover:text-[#293C88] transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.5c1.93 0 3.5 1.57 3.5 3.5S13.93 12.5 12 12.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 9.5c2.33 0 7 1.17 7 3.5V19H5v-2.5c0-2.33 4.67-3.5 7-3.5z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#293C88] rounded-full flex items-center justify-center text-white hover:bg-[#FED700] hover:text-[#293C88] transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9h-4v4h4v-4zm4-4h-4v4h4V8zm0 9h-4v4h4v-4zM8 8H4v4h4V8z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#293C88] rounded-full flex items-center justify-center text-white hover:bg-[#FED700] hover:text-[#293C88] transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}

          </div>

          {/* Map Section */}
          <div className="mb-20">
            <h2 className="text-[32px] font-bold text-[#293C88] mb-8 text-center">
              Our Location
            </h2>
            <div className="w-full h-[400px] bg-[#E0E0E0] rounded-[15px] overflow-hidden">
              <iframe
                title="Edelweiss Learning Center Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.998557662383!2d106.9510884018424!3d-6.263918357921127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d05859a48d5%3A0x427dc1fc4ce74b69!2sEdelweiss%20School!5e0!3m2!1sen!2sid!4v1776048872135!5m2!1sen!2sid"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#F5F5F5] rounded-[20px] p-6 md:p-12">
            <h2 className="text-[32px] font-bold text-[#293C88] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How much is the registration fee?',
                  a: 'The registration fee varies depending on the chosen program. Please contact us for detailed information.'
                },
                {
                  q: 'When does registration open?',
                  a: 'Registration is open all year round with student admission based on seat availability.'
                },
                {
                  q: 'What are the admission requirements?',
                  a: 'Requirements vary by program. For complete information, contact our admissions team.'
                },
                {
                  q: 'Are there any scholarships?',
                  a: 'We provide scholarship programs for high-achieving students. Contact us for more information.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-[12px] p-6">
                  <h3 className="text-[16px] font-bold text-[#293C88] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-[#868686] font-poppins text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
