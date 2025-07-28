import { Mail, Phone, MapPin, Send, Upload, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useState } from 'react';

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  video: z.any().optional()
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    if (uploadedVideo) {
      console.log("Video file:", uploadedVideo);
    }
    // Handle form submission logic here
  };

  const handleVideoUpload = (file: File) => {
    const maxSize = 50 * 1024 * 1024; // 50MB
    const allowedTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/webm'];
    
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid video file (MP4, MOV, AVI, WEBM)');
      return;
    }
    
    if (file.size > maxSize) {
      alert('Video file must be less than 50MB');
      return;
    }
    
    setUploadedVideo(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleVideoUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeVideo = () => {
    setUploadedVideo(null);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@infinitewater.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+61 3 9999 0000',
      description: 'Mon-Fri from 8am to 6pm AEST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Melbourne, Australia',
      description: 'Come say hello at our office headquarters'
    }
  ];

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
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking to upgrade existing systems or implement new water treatment solutions, our team of experts is here to help. We provide comprehensive consultation and custom engineering services.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
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

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Emergency Support</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For urgent technical support and emergency situations, our 24/7 response team is available.
              </p>
              <Button variant="outline" size="sm">
                Emergency Contact
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-large">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your water treatment requirements..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Video Upload Section */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-foreground">
                      Upload Video (Optional)
                    </label>
                    
                    {!uploadedVideo ? (
                      <div
                        className={`border-2 border-dashed rounded-lg p-8 text-center transition-smooth ${
                          isDragging 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted-foreground/25 hover:border-primary/50'
                        }`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                      >
                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">
                          Drag and drop your video here, or{' '}
                          <label className="text-primary hover:text-primary/80 cursor-pointer underline">
                            browse files
                            <input
                              type="file"
                              accept="video/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleVideoUpload(file);
                              }}
                            />
                          </label>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Supports MP4, MOV, AVI, WEBM (max 50MB)
                        </p>
                      </div>
                    ) : (
                      <div className="border rounded-lg p-4 bg-muted/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Play className="h-8 w-8 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">{uploadedVideo.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(uploadedVideo.size / (1024 * 1024)).toFixed(1)} MB
                              </p>
                            </div>
                          </div>
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="sm"
                            onClick={removeVideo}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full shadow-medium">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;