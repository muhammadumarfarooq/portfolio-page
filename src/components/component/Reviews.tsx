export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Umar consistently delivered high-quality frontend code, even under tight deadlines.",
      name: "John Doe, Product Manager at TechStart",
    },
    {
      quote:
        "An outstanding developer — great communication, attention to detail, and technical skills.",
      name: "Sarah Smith, Founder of StartupFlow",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container m-auto max-w-4xl px-4 text-center space-y-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Testimonials
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-lg shadow">
              <p className="text-muted-foreground text-lg">
                “{testimonial.quote}”
              </p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
