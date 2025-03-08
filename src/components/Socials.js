import React from 'react';
import {ImFacebook, ImTwitter, ImInstagram, ImGithub} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="https://www.facebook.com/hidycoal" target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/hidycoal" target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/hidycoal" target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href="https://www.github.com/hidycoal" target='_blank'>
          <ImGithub />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
