import { MiniHeaderWrapper, Name, ProfilePicture } from './MiniHeader.elements';

export default function MiniHeader() {
  return (
    <MiniHeaderWrapper>
      <ProfilePicture src='/images/profile.jpg' />
      <Name>Tiago Dias</Name>
    </MiniHeaderWrapper>
  );
}
