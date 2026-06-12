import {
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from 'react-icons/fa6'

export const siteConfig = {
  name: 'ImproxData',
  domain: 'ImproxData.com',
  phone: '+91 9370992910',
  phoneRaw: '919370992910',
  email: 'info@improxdata.com',
  address: 'India',
  tagline: 'Your Trusted Partner in Data & Administrative Outsourcing',
}

export const socialLinks = [
  {
    name: 'Pinterest',
    url: 'https://in.pinterest.com/improxtechinc/',
    icon: FaPinterestP,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/improxtechinc/',
    icon: FaLinkedinIn,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/improxtechinc/',
    icon: FaInstagram,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/improxtechinc',
    icon: FaXTwitter,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/improxtechinc/',
    icon: FaFacebookF,
  },
]

export const contactIcons = {
  phone: FaPhone,
  email: FaEnvelope,
  location: FaLocationDot,
}
