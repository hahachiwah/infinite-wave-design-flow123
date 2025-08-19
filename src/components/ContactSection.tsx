import { Card, CardContent } from '@/components/ui/card';
import { contactInfo } from '@/data/contactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your water treatment operations? Let's discuss how our solutions can meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking to upgrade existing systems or implement new water treatment solutions, our team of experts is here to help. We provide comprehensive consultation and custom engineering services.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.contactDetails.map((info, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;