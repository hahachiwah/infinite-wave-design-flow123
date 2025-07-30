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
            <div className="text-center">
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

            {/* <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Emergency Support</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For urgent technical support and emergency situations, our 24/7 response team is available.
              </p>
              <Button variant="outline" size="sm">
                Emergency Contact
              </Button>
            </div> */}
          </div>

          {/* Contact Form */}
          {/* <Card className="shadow-large">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your water treatment requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full shadow-medium">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;