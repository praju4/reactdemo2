import React from 'react';
import './Header.css';
import Image from "./images/2.jpg"


const Header = () => {
  return (
    <header>
      <h1>Leonardo Di Caprio AUTO BIOGRAPHY</h1>
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <img src={Image} width="700px" height="400px" alt="Not found/"></img>
      <p><i><h3>Leonardo Wilhelm DiCaprio (/diˈkæprioʊ, dɪ-/; Italian: [diˈkaːprjo]; born November 11, 1974) is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.

Born in Los Angeles, DiCaprio began his career in the late 1980s by appearing in television commercials. In the early 1990s, he had recurring roles in various television shows, such as the sitcom Parenthood, and had his first major film part as author Tobias Wolff in This Boy's Life (1993). He received critical acclaim and his first Academy Award and Golden Globe Award nominations for his performance as a developmentally disabled boy in What's Eating Gilbert Grape (1993). DiCaprio achieved international stardom with the star-crossed romances Romeo + Juliet (1996) and Titanic (1997). After the latter became the highest-grossing film in the world at the time, he reduced his workload for a few years. In an attempt to shed his image of a romantic hero, DiCaprio sought roles in other genres, including the 2002 crime dramas Catch Me If You Can and Gangs of New York; the latter marked the first of his many successful collaborations with director Martin Scorsese.

DiCaprio continued to gain acclaim for his performances in the biopic The Aviator (2004), the political thriller Blood Diamond (2006), the crime drama The Departed (2006) and the romantic drama Revolutionary Road (2008). He later made environmental documentaries and starred in several high-profile directors' successful projects, including the action thriller Inception (2010), the western Django Unchained (2012), the biopic The Wolf of Wall Street (2013), the survival drama The Revenant (2015)—for which he won the Academy Award for Best Actor— the comedy-dramas Once Upon a Time in Hollywood (2019) and Don't Look Up (2021), and the crime drama Killers of the Flower Moon (2023).

DiCaprio is the founder of Appian Way Productions—a production company that has made some of his films and the documentary series Greensburg (2008–2010)—and the Leonardo DiCaprio Foundation, a nonprofit organization devoted to promoting environmental awareness. A United Nations Messenger of Peace, he regularly supports charitable causes. In 2005, he was named a Commander of the Ordre des Arts et des Lettres for his contributions to the arts, and in 2016, he appeared in Time magazine's 100 most influential people in the world. DiCaprio was voted one of the 50 greatest actors of all time in a 2022 readers' poll by Empire.</h3></i></p>
        <p> This is A demo Webpage</p>
    </main>
  );
};


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
     
    </div>
  );
}

export default App;