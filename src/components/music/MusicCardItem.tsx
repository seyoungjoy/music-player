import MOCK_THUMB from '../../assets/images/mock_thumbnail.jpg';

import S from './MusicCardItem.styled';
const MusicCardItem = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={MOCK_THUMB} alt="mock-thumbnail" />
      </S.ImageWrapper>
      <S.CardTitle>New Music</S.CardTitle>
      <S.CardDescription>
        매주 업데이트 되는 국내의 신곡들을 만나보세요.
      </S.CardDescription>
    </S.Wrapper>
  );
};

export default MusicCardItem;
