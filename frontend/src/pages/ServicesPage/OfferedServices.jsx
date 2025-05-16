import React from 'react';
import './OfferedServices.css';

const services = [
  {
    title: 'Mobile Development',
    description: 'Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers',
    icon: 'MobileDevelopment.png',
  },
  {
    title: 'Web Development',
    description: 'Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.',
    icon: 'WebDevelopment.png',
  },
  {
    title: 'Cloud Services',
    description: 'Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers',
    icon: 'CloudServices.png',
  },
  {
    title: 'Quality Assurance',
    description: 'Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.',
    icon: 'QualityAssurance.png',
  },
  {
    title: 'SalesForce Solution ',
    description: 'Mobile apps offer a wide range of benefits to customers, enhancing their overall experience and providing convenience, accessibility, and value. Here are some key benefits that mobile apps bring to customers',
    icon: 'SalesForceSolution.png',
  },
  {
    title: 'CI/CD Devops ',
    description: 'Web apps offer customers a flexible, accessible, and user-friendly platform for accessing services, information, and functionality over the internet. By leveraging the capabilities of web technologies.',
    icon: 'Devops.png',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className='offered-services-header'>
      <h2 className="section-title">Services We Offer</h2>
      <p className="section-subtitle">
      We work together with our client to execute impactful product.
      </p>
      </div>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="icon-wrapper">
              <div className="icon-bg" />
              <img src={service.icon} alt={service.title} className="service-icon" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
