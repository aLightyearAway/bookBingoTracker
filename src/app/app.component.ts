import { Component } from '@angular/core';
import { Card } from './models/card';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'r/fantasy Book Bingo Tracker';
  madeBy = 'u/aLightyearAway';

  
  board: {};
  
  card1 : Card = {
    id: 1, 
    title: 'Slice of Life / Small Scale Fantasy', 
    description: 'the term "slice of life" refers to a storytelling technique that presents a seemingly arbitrary sample of a character´s life, which often lacks a coherent plot, conflict, or ending. The story may have little plot progress and often has no exposition, conflict, or dénouement. A good example of this would be Becky Chambers novel Record of a Spaceborn Few. HARD MODE: Read something other than Record of a Spaceborn Few.', 
    done: false
  };
  card2 : Card = {
    id: 2, 
    title: 'A SFF Novel Featuring a Character With a Disability', 
    description: 'I think this one should be fairly self-explanatory. Anything considered a disability would count whether it´s a physical disability or a mental health disability. HARD MODE: The character has to be a main protagonist, not a side character.', 
    done: false
  };
  card3 : Card = {
    id: 3, 
    title: 'SFF Novella', 
    description: 'works of fiction of between 17,500 and 40,000 words. HARD MODE: Novella is NOT published by Tor.com Publishing.', 
    done: false
  };
  card4 : Card = {
    id: 4, 
    title: 'Self-Published SFF Novel', 
    description: 'Only self-published novels will count for this square. If the novel has been picked up by a publisher as long as you read it when it was self-pubbed it will still count. HARD MODE: Self-pubbed and has fewer than 50 ratings on goodreads.', 
    done: false
  };
  card5 : Card = {
    id: 5, 
    title: 'SFF Novel Featuring Twins', 
    description: 'Self-explanatory. HARD MODE: At least one of the twins has to be a main protagonist. (extra hard mode just for funsies - the twin thing has to be plot relevant)', 
    done: false
  };

  card6 : Card = {
    id: 6, 
    title: 'Novel Featuring Vampires', 
    description: 'This one is pretty self-explanatory. HARD MODE: At least one main protagonist is a vampire.', 
    done: false
  };
  card7 : Card = {
    id: 7, 
    title: 'Format: Graphic Novel OR Audiobook', 
    description: 'this is a format, not a genre however, please stick to something within speculative fiction. If you are reading individual comics for this square please read a volume’s worth. You can also use a manga volume for this square (again, please keep it to speculative fiction genres). You may also choose to listen to an audiobook OR an audio drama for this square - any speculative fiction audiobook / audio drama will count (novel length). HARD MODE: Graphic Novel - Start a new to you graphic novel. Audiobook / audio drama - has to be over 25 hours long.', 
    done: false
  };
  card8 : Card = {
    id: 8, 
    title: 'SFF Novel by a Local to You Author', 
    description: 'if SFF authors are scarce in your immediate area then you can widen the area a bit even if it´s (for example, for some folks in Europe) a neighboring country. FAQ - What counts as local? Lives nearby, lived a significant portion of their life nearby. Like Anne Rice I´d count both New Orleans and San Francisco, for example. HARD MODE: Find the closest local to you author you can for this square.', 
    done: false
  };
  card9 : Card = {
    id: 9, 
    title: 'SFF Novel Featuring an Ocean Setting', 
    description: 'Got a mermaid or selkie story in mind? Works perfect here! On top of the ocean or under the ocean all works for this square. HARD MODE: Over 50% of the book has to take place in or on an ocean setting.', 
    done: false
  };
  card10 : Card = {
    id: 10, 
    title: 'Cyberpunk', 
    description: 'Cyberpunk is defined as " a genre of science fiction set in a lawless subculture of an oppressive society dominated by computer technology. HARD MODE: Not Neuromancer by William Gibson nor Snow Crash by Neal Stephenson.', 
    done: false
  };

  card11 : Card = {
    id: 11, 
    title: '2nd Chance', 
    description: 'This is sort of a multi-use square. Tried an author once and you didn´t like the book? Give a 2nd chance and try another book! Tried a format once (like a manga, graphic novel, or audiobook) and it didn´t jive? Try again here! Tried a specific book and didn´t get through it for whatever reason? Try again here! HARD MODE: There is no hard mode for this square as it´s already hard enough. ', 
    done: false
  };
  card12 : Card = {
    id: 12, 
    title: 'Afrofuturism', 
    description: 'Afrofuturism is a cultural aesthetic, philosophy of science, and philosophy of history that explores the developing intersection of African Diaspora culture with technology. Self-explanatory. HARD MODE: The book has less than 1000 ratings on goodreads.', 
    done: false
  };
  card13 : Card = {
    id: 13, 
    title: 'SFF Novel Published in 2019', 
    description: 'Pretty self explanatory - the card says Fantasy but any speculative fiction will work. HARD MODE: It´s also a Debut Novel.', 
    done: false
  };
  card14 : Card = {
    id: 14, 
    title: 'Middle Grade SFF Novel', 
    description: 'So many SFF authors are writing Middle Grade these days, thought this would be fun! Middle Grade works are typically written with an readership of 8-12 year olds in mind. HARD MODE: You can NOT use your ´reread´ for this square.', 
    done: false
  };
  card15 : Card = {
    id: 15, 
    title: 'A Personal Recommendation from r/Fantasy', 
    description: 'You ask the community for recommendations and choose one of those recommendations to read for this square. HARD MODE: Do not use the most frequently recommended book.', 
    done: false
  };

  card16 : Card = {
    id: 16, 
    title: 'r/Fantasy Book Club Book of the Month OR Read-along Book', 
    description: 'Any past or still active book clubs count, as well as past or current read-alongs. HARD MODE: Must read a current selection of either a book club or read-along and participate in the discussion.', 
    done: false
  };
  card17 : Card = {
    id: 17, 
    title: 'Media Tie-In Novel', 
    description: 'Books based on existing film, television, or game franchises are used for this square. HARD MODE: NOT a Star Wars novel.', 
    done: false
  };
  card18 : Card = {
    id: 18, 
    title: 'Novel Featuring an AI Character', 
    description: 'Pretty self-explanatory, but let me know if you have questions about this. HARD MODE: The AI is a main protagonist.', 
    done: false
  };
  card19 : Card = {
    id: 19, 
    title: 'SFF Novel That Has a Title of Four or More Words', 
    description: 'Self-explanatory. HARD MODE: Has 7 or more words in the title.', 
    done: false
  };
  card20 : Card = {
    id: 20, 
    title: 'Retelling!', 
    description: 'Any retellings would work for this square - fairytale retellings, myth retellings, retellings of previous literature, etc. HARD MODE: The retelling must be of a previous published work, not a fairytale or myth. For example, Jacqueline Carey´s book Miranda and Caliban is a retelling of The Tempest, so that would work, but Madeline Miller´s Circe, a retelling of Circe´s stories from Greek Mytholgy, would not.', 
    done: false
  };

  card21 : Card = {
    id: 21, 
    title: 'SFF Novel by an Australian Author', 
    description: 'Australia has a fantastic SFF scene, let´s explore some of the authors there using this square. HARD MODE: Book from an Australian small press OR self-published Australian author.', 
    done: false
  };
  card22 : Card = {
    id: 22, 
    title: 'The Final Book of a Series', 
    description: 'The last book in a series which actually completes that series (not the latest book out but it´s a middle book). HARD MODE: The last book in the series was published more than a decade ago.', 
    done: false
  };
  card23 : Card = {
    id: 23, 
    title: '#OwnVoices', 
    description: 'From the creator of the #ownvoices hashtag - "...the protagonist and the author share a marginalized identity." HARD MODE: Author and protagonist share 2+ marginalized identities.', 
    done: false
  };
  card24 : Card = {
    id: 24, 
    title: 'LitRPG', 
    description: 'Definition from Wikipedia: a literary genre combining the conventions of RPGs with science-fiction fantasy novels. LitRPG is a literary genre where games or game-like challenges form an essential part of the story and where visible RPG statistics (for example strength, intelligence, damage) are a significant part of this world. This in contrast to GameLit, which involves game-like worlds but does not typically provide visible statistics. At least some of the characters in a LitRPG novel may understand that they are playing a game or are in a game-like world: they are ´meta-aware´. HARD MODE: LitRPG written by a female author.', 
    done: false
  };
  card25 : Card = {
    id: 25, 
    title: 'Five SFF Short Stories', 
    description: 'Self explanatory. HARD MODE: Read an entire SFF anthology or collection', 
    done: false
  };


  row1 : Card[] = [this.card1, this.card2, this.card3, this.card4, this.card5];
  row2 : Card[] = [this.card6, this.card7, this.card8, this.card9, this.card10];
  row3 : Card[] = [this.card11, this.card12, this.card13, this.card14, this.card15];
  row4 : Card[] = [this.card16, this.card17, this.card18, this.card19, this.card20];
  row5 : Card[] = [this.card21, this.card22, this.card23, this.card24, this.card25];

  constructor() {}

  ngOnInit() {
    this.board = JSON.parse(localStorage.getItem("bbt_board"));
    if (!this.board){
      this.board = {
        card1:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card2:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card3:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card4:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card5:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card6:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card7:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card8:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card9:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card10:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card11:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card12:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card13:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card14:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card15:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card16:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card17:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card18:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card19:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card20:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card21:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card22:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card23:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card24:{bookTitle:null, bookSeries:null,bookAuthor:null},
        card25:{bookTitle:null, bookSeries:null,bookAuthor:null}
      };
      let key = "bbt_board";
      localStorage.setItem(key, JSON.stringify(this.board));
    }
  }

  
}
