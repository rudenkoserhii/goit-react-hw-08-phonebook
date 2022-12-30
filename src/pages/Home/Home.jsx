import { Wrapper, Img } from "./Home.styled";
import phoneBook from './phone-book.png';

export default function Home() {
  return (
    <Wrapper>
      <Img src={phoneBook}/>
    </Wrapper>
  );
}
