
import { VscGithub } from "react-icons/vsc";
import { RiTelegramLine, RiWhatsappLine } from 'react-icons/ri';
import { motion } from "framer-motion";
import Tooltip from "./Tooltip/Tooltip";

function SocialIcon() {
  const socialIcons = [
    {
      href: 'https://wa.me/919720040143?text=Hello...',
      icon: <RiWhatsappLine />,
      tooltip: 'Whatsapp',
    },
    {
      href: 'https://github.com/golagaurav',
      icon: <VscGithub />,
      tooltip: 'Github',
    },
    {
      href: 'https://t.me/Gauravgola',
      icon: <RiTelegramLine />,
      tooltip: 'Telegram',
    }
  ];

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-center gap-x-8 text-[32px] text-black dark:text-white mb-4'>
        {socialIcons.map(({ href, icon, tooltip }) => (
          <a href={href} target='_blank' rel='noopener noreferrer' key={href}>
            <motion.div whileHover={{ scale: 1.2 }}>
            <Tooltip interactive={false} tipChildren={tooltip}>
              {icon}
            </Tooltip>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
      </>
  );
}

export default SocialIcon;