import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const contactInfo = {
  email: 'info@infinitewater.com',
  phone: '+61 450 984 519',
  phoneDescription: 'Mon-Fri from 9am to 6pm AEST',
  address: 'Building G 22 Powers Road, SEVEN HILLS New South Wales 2147, Australia',
  
  companyDescription: 'Infinite Water is a leading provider of advanced water treatment solutions, specializing in innovative technologies that transform water treatment operations across municipal, industrial, and commercial sectors.',
  
  contactDetails: [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@infinitewater.com',
      description: ''
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+61 450 984 519',
      description: 'Mon-Fri from 9am to 6pm AEST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Building G 22 Powers Road, SEVEN HILLS New South Wales 2147, Australia',
      description: ' '
    }
  ],

  socialLinks: [
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook'
    }
  ]
};