type Props = {
  mood: string;
};
const MusicMood = ({ mood }: Props) => {
  return <span>{`#${mood} `}</span>;
};

export default MusicMood;
