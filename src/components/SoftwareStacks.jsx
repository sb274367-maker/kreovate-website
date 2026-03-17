import React from 'react';
import { Terminal, Network, ShieldAlert, Cpu, Activity, Globe } from 'lucide-react';
import './SoftwareStacks.css';
import imgCan from '../assets/stack_can.png';
import imgLin from '../assets/stack_lin.png';
import imgEthernet from '../assets/stack_ethernet.png';
import imgUds from '../assets/stack_uds.png';
import imgFota from '../assets/stack_fota.png';
import imgCyber from '../assets/stack_cybersecurity.png';

const SoftwareStacks = () => {
  const stacks = [
    {
      icon: <Cpu size={28} />,
      image: imgCan,
      title: 'CAN Stack',
      description: 'Robust and deterministic Controller Area Network protocol implementation for seamless high-speed vehicle communication.',
    },
    {
      icon: <Activity size={28} />,
      image: imgLin,
      title: 'LIN Stack',
      description: 'Efficient Local Interconnect Network protocol designed for reliable and cost-effective communication with smart sensors and actuators.',
    },
    {
      icon: <Globe size={28} />,
      image: imgEthernet,
      title: 'Ethernet Stack',
      description: 'High-bandwidth automotive Ethernet stack enabling rapid data transfer for advanced driver-assistance systems and infotainment.',
    },
    {
      icon: <Terminal size={28} />,
      image: imgUds,
      title: 'UDS Bootloader Stack',
      description: 'A robust, ISO 14229 compliant Bootloader engineered to securely receive and execute over-the-air firmware updates via the CAN bus interface.',
    },
    {
      icon: <Network size={28} />,
      image: imgFota,
      title: 'FOTA Stack',
      description: 'State-of-the-art Firmware-Over-The-Air architecture delivering secure, reliable, and differential updates over 4G/5G networks to edge ECUs.',
    },
    {
      icon: <ShieldAlert size={28} />,
      image: imgCyber,
      title: 'Automotive Cybersecurity Stack',
      description: 'Advanced cybersecurity framework featuring secure boot and ISO 21434 compliance, incorporating robust cryptographic protocols to protect connected vehicles.',
    },
  ];

  return (
    <section id="ip-stacks" className="section software-stacks bg-pattern">
      <div className="container">
        <h2 className="section-title">Software Stacks <span className="text-gradient">(IP)</span></h2>

        <div className="stacks-grid">
          {stacks.map((stack, index) => (
            <div key={index} className="stack-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stack-image-wrapper">
                <img src={stack.image} alt={stack.title} className="stack-image" />
                <div className="stack-image-overlay"></div>
                <div className="stack-icon">
                  {stack.icon}
                </div>
              </div>
              <div className="stack-body">
                <h3 className="stack-title">{stack.title}</h3>
                <p className="stack-description">{stack.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareStacks;
