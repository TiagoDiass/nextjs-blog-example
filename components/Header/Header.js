import { HeaderWrapper, ProfileImage, Name, Bio } from './Header.elements';

export default function Header() {
  return (
    <HeaderWrapper>
      <ProfileImage src='/images/profile.jpg' />
      <Name>Tiago Dias</Name>
      <Bio>
        Olá, meu nome é <strong>Tiago</strong>. Sou um desenvolvedor fullstack
        com foco em front-end, amante de tecnologia e disposto a ajudar quem
        está iniciando no incrível mundo do desenvolvimento! <br />
        <a
          href='https://github.com/TiagoDiass'
          className='contact-link'
          rel='noreferrer noopener'
          target='_blank'
        >
          Github
        </a>{' '}
        <a
          href='https://www.linkedin.com/in/tiagodiass/'
          rel='noreferrer noopener'
          className='contact-link'
          target='_blank'
        >
          Linkedin
        </a>
      </Bio>
    </HeaderWrapper>
  );
}
