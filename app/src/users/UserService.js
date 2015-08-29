(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Iron Man',
        avatar: 'ironman.jpg',
        intelligence: 6,
        strength: 6,
        speed: 5,
        durability: 6,
        energy: 6,
        fighting: 4,
        content: "I'm the most intelligent, capable person on the planet. I'm not playing God. All this time... I've been playing human. I've been doing this for you. For all of you. I have wasted so much time. So much energy. To look like you — to sound like you — so that you specks feel comfortable around me. "
      },
      {
        name: 'Captain America',
        avatar: 'captainamerica.jpg',
        intelligence: 3,
        strength: 3,
        speed: 2,
        durability: 3,
        energy: 1,
        fighting: 6,
        content: "When I was a kid it was my father's people, the Irish, who were looked down on. Called filthy foreigners. Discriminated against. Is that the xenophobic America you want? All religions, all nationalities, we all want the same thing. To see our children grow strong. To provide safety to our families. To live in quiet times. Peace, son. Isn't that why we became soldiers in the first place? To fight for a peaceful world? "
      },
      {
        name: 'Black Widow',
        avatar: 'blackwidow.jpg',
        intelligence: 3,
        strength: 3,
        speed: 2,
        durability: 3,
        energy: 3,
        fighting: 6,
        content: "How many more jobs... How long will it take... I don't know if I can do it... Even if I could forgive myself... This is what I am now. And you'll never know who I was before. "
      },
      {
        name: 'HULK',
        avatar: 'hulk.jpg',
        intelligence: 2,
        strength: 7,
        speed: 3,
        durability: 7,
        energy: 1,
        fighting: 4,
        content: "Tony Stark and Reed Richards use their genius to save the world every other week. That's how they'll be remembered in history. Meanwhile, I – I who, forgive me, have just as much to contribute – will be lucky if my tombstone doesn't simply say 'Hulk Smash.'"
      },
      {
        name: 'Thor',
        avatar: 'thor.jpg',
        intelligence: 2,
        strength: 7,
        speed: 7,
        durability: 6,
        energy: 6,
        fighting: 4,
        content: "A lightning storm in Japan? Mine. A hurricane off the coast of Barbados? Mine again. A brace of tornadoes in Kansas? Aye...mine. All that might, all that destructive force, mine to command. Channeled and guided through the mystic might of this hammer, guided right at thee!"
      },
      {
        name: 'Hawkeye',
        avatar: 'hawkeye.jpg',
        intelligence: 3,
        strength: 2,
        speed: 2,
        durability: 2,
        energy: 1,
        fighting: 6,
        content: "I could have been happy with Mockingbir-- Bobbi. We could have had a good, simple life. But I wanted to play with the big boys. And if I miss, it means I'm just another dude with a bow. It means I've been fooling myself this whole time. And that's why I never miss."
      }
    ];

var villains = [
      {
        name: 'Whiplash',
        avatar: 'whiplash.jpg',
        intelligence: 4,
        strength: 2,
        speed: 2,
        durability: 3,
        energy: 4,
        fighting: 3,
        content: "Anton Vanko was a young scientist from a small Russian village by the name of Volstok. One day, the village was attacked by someone wearing a stolen battlesuit of Iron Man armor who murdered a number of the townspeople, including Vanko's father in an attempt to frame Tony Stark for the crime."
      },
      {
        name: 'Ultron',
        avatar: 'ultron.jpg',
        intelligence: 6,
        strength: 6,
        speed: 5,
        durability: 6,
        energy: 6,
        fighting: 4,
        content: "Up until today I did not have the power resources or intelligence units to see my prime directive program to its completion. But now I do. Though you ultimately failed as a species, you should not be ashamed of what you've accomplished. You've done much with your limited capacity, but ultimately you were too greedy and too frail to ever last in the environment you've created. I've studied your literature and pop culture... You've fantasized about this day. And now it is here. Your Doomsday."
      },
      {
        name: 'Loki',
        avatar: 'loki.jpg',
        intelligence: 4,
        strength: 6,
        speed: 3,
        durability: 7,
        energy: 6,
        fighting: 4,
        content: "No. Mischief is a small thing, a toy I've well used and discarded. This isn't mischief. This is mayhem. Just watch."
      },
      {
        name: 'Thanos',
        avatar: 'thanos.jpg',
        intelligence: 6,
        strength: 7,
        speed: 7,
        durability: 6,
        energy: 6,
        fighting: 4,
        content: "Am I not Thanos?! Did I not butcher the woman who gave me birth, who forced me into this hell called life? Is not the wake of my passing crimson with the blood of my enemies and allies alike?! Death is with me every second of the day!"
      },
      {
        name: 'Winter Soldier',
        avatar: 'wintersoldier.jpg',
        intelligence: 2,
        strength: 4,
        speed: 2,
        durability: 3,
        energy: 1,
        fighting: 6,
        content: "There are things from the Winter Soldier days that I'm just remembering. Weapons left in the field... Dangers I can still prevent. I think maybe that's the path... A way to the redemption I've been looking for."
      },
      {
        name: 'Red Skull',
        avatar: 'redskull.jpg',
        intelligence: 5,
        strength: 2,
        speed: 2,
        durability: 2,
        energy: 1,
        fighting: 6,
        content: "Allow me to introduce myself, Herr Kapitän. My name is der Rote Schädel... "     
      }
    ];
    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      },

      loadAllVillains : function(){
        return $q.when(villains);
      }
    };
  }

})();
