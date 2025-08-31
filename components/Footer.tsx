
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: 'fab fa-instagram', label: 'Instagram', href: '#' },
        { icon: 'fab fa-facebook', label: 'Facebook', href: '#' },
        { icon: 'fab fa-linkedin', label: 'LinkedIn', href: '#' },
        { icon: 'fab fa-whatsapp', label: 'WhatsApp', href: '#' },
    ];

    const footerLinks = {
        Services: [
            { label: 'Corporate Events', href: '#services' },
            { label: 'Weddings', href: '#services' },
            { label: 'Private Parties', href: '#services' },
        ],
        Company: [
            { label: 'About', href: '#home' },
            { label: 'Packages', href: '#packages' },
            { label: 'Contact', href: '#contact' },
        ]
    };

    return (
        <footer className="bg-dark-secondary border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                            <i className="fas fa-crown text-3xl text-gold-primary"></i>
                            <span className="text-2xl font-bold uppercase tracking-widest">Crown Shisha</span>
                        </div>
                        <p className="text-text-muted mb-6">Redefining luxury event experiences with premium catering across the Greater Toronto Area.</p>
                        <div className="flex space-x-4">
                            {socialLinks.map(link => (
                                <a key={link.label} href={link.href} aria-label={link.label} className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-text-light hover:bg-gold-primary hover:text-dark-primary hover:scale-110 hover:rotate-[360deg] transition-all duration-500">
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.Services.map(link => (
                                <li key={link.label}><a href={link.href} className="text-text-muted hover:text-gold-primary transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-3">
                             {footerLinks.Company.map(link => (
                                <li key={link.label}><a href={link.href} className="text-text-muted hover:text-gold-primary transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                         <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Contact Info</h4>
                        <ul className="space-y-3 text-text-muted">
                            <li className="flex items-center gap-3"><i className="fas fa-phone-alt text-gold-primary"></i><a href="tel:+16479069995" className="hover:text-gold-primary transition-colors">+1 (647) 906-9995</a></li>
                            <li className="flex items-center gap-3"><i className="fas fa-envelope text-gold-primary"></i><a href="mailto:book@crownshisha.ca" className="hover:text-gold-primary transition-colors">book@crownshisha.ca</a></li>
                            <li className="flex items-center gap-3"><i className="fas fa-map-marker-alt text-gold-primary"></i><span>Toronto GTA</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center text-text-muted">
                    <p>&copy; {currentYear} Crown Shisha Catering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
