	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "..depression is a kind of quantum physics of thought and emotion. It reveals what is normally hidden. It unravels you, and everything you have known. It turns out that we are not only made of the universe, of ‘star-stuff’ to borrow Carl Sagan’s phrase, but we are as vast and complicated as it too.",
			name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"To say how I was feeling would lead to feeling more of what I was feeling. To act normal would be to feel a bit more normal. I acted normal.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"You are continually on guard. You are on guard to the point of collapse every single moment, while desperately trying to keep afloat, to breathe the air that the people on the bank all around you are breathing as easily as anything.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"So if you are having another bad day you can say, Well, this feels bad, but there have been worse. And even when you can think of no worse day – when the one you are living is the very worst there has ever been – you at least know the bank exists and that you have made a deposit.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"I worried all the time. The only thing that didn’t worry me was the thing that probably should have: worry itself.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"Things you think during your first panic attack:<br>\n\
	    	1. I am going to die.<br>\n\
	    	2. I am going to go so mad there will be no coming back.<br>\n\
	    	3. This won’t end.<br>\n\
	    	4. Everything is going to get worse.<br>\n\
	    	5. No one’s heart is meant to beat this fast.<br>\n\
	    	6. I am thinking far too fast.<br>\n\
	    	7. I am trapped.<br>\n\
	    	8. No one has felt this way before. Ever. In the whole of human history.<br>\n\
	    	9. Why are my arms numb?<br>\n\
	    	10. I will never get over this.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"‘Your mind is a galaxy. More dark than light. But the light makes it worthwhile. Which is to say, don’t kill yourself. Even when the darkness is total. Always know that life is not still. Time is space. You are moving through that galaxy. Wait for the stars.’",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"How to be there for someone with depression or anxiety:<br>\n\
	    	<br>1. Know that you are needed, and appreciated, even if it seems you are not.<br>\n\
	    	<br>2. Listen.<br>\n\
	    	<br>3. Never say ‘pull yourself together’ or ‘cheer up’ unless you’re also going to provide detailed, foolproof instructions. (Tough love doesn’t work. Turns out that just good old ‘love’ is enough.)<br>\n\
	    	<br>4. Appreciate that it is an illness. Things will be said that aren’t meant.<br>\n\
	    	<br>5. Educate yourself. Understand, above all, that what might seem easy to you – going to a shop, for instance – might be an impossible challenge for a depressive.<br>\n\
	    	<br>6. Don’t take anything personally, any more than you would take someone suffering with the flu or chronic fatigue syndrome or arthritis personally. None of this is your fault.<br>\n\
	    	<br>7. Be patient. Understand it isn’t going to be easy. Depression ebbs and flows and moves up and down. It doesn’t stay still. Do not take one happy/bad moment as proof of recovery/relapse. Play the long game.<br>\n\
	    	<br>8. Meet them where they are. Ask what you can do. The main thing you can do is just be there.<br>\n\
	    	<br>9. Relieve any work/life pressure if that is doable.<br>\n\
	    	<br>10. Where possible, don’t make the depressive feel weirder than they already feel. Three days on the sofa? Haven’t opened the curtains? Crying over difficult decisions like which pair of socks to wear? So what. No biggie. There is no standard normal. Normal is subjective. There are seven billion versions of normal on this planet.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"If there is a way out, a way that isn’t death itself, then the exit route is through words. But rather than leave the mind entirely, words help us leave a mind, and give us the building blocks to build another one, similar but better, nearby to the old one but with firmer foundations, and very often a better view.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"As the Persian poet Rumi wrote in the twelfth century, <i>‘The wound is the place where the light enters you.’</i> (He also wrote: <i>‘Forget safety. Live where you fear to live.’</i>)",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"So if you are having another bad day you can say, <i> Well, this feels bad, but there have been worse </i>. And even when you can think of no worse day – when the one you are living is the very worst there has ever been – you at least know the bank exists and that you have made a deposit.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"Depression is also . . .<br>\n\
	    	<br>Smaller than you.<br>\n\
	    	<br>Always, it is smaller than you, even when it feels vast. It operates within you, you do not operate within it. It may be a dark cloud passing across the sky, but – if that is the metaphor – you are the sky.<br>\n\
	    	<br>You were there before it. And the cloud can’t exist without the sky, but the sky can exist without the cloud.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"People place so much value on thought, but feeling is as essential. I want to read books that make me laugh and cry and fear and hope and punch the air in triumph. I want a book to hug me or grab me by the scruff of my neck. I don’t even mind if it punches me in the gut. Because we are here to feel.<br>\n\
	    	<br>I want life.<br>\n\
	    	<br>I want to read it and write it and feel it and live it.<br>\n\
	    	<br>I want, for as much of the time as possible in this blink-of-an-eye existence we have, to feel all that can be felt.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"How to stop time: kiss.<br>\n\
	    	How to travel in time: read.<br>\n\
	    	How to escape time: music.<br>\n\
	    	How to feel time: write.<br>\n\
	    	How to release time: breathe.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"...the key to happiness – or that even more desired thing, calmness – lies not in always thinking happy thoughts. No. That is impossible. No mind on earth with any kind of intelligence could spend a lifetime enjoying only happy thoughts. The key is in accepting your thoughts, all of them, even the bad ones. Accept thoughts, but don’t become them.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"I am you and you are me. We are alone, but not alone. We are trapped by time, but also infinite. Made of flesh, but also stars.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"<h3> How to live, Part 1 (forty pieces of advice I feel to be helpful but which I don’t always follow): </h3>\n\
	    	1.	Appreciate happiness when it is there.<br>\n\
	    	<br>2.	Sip, don’t gulp.<br>\n\
	    	<br>3.	Be gentle with yourself. Work less. Sleep more.<br>\n\
	    	<br>4.	There is absolutely nothing in the past that you can change. That’s basic physics.<br>\n\
	    	<br>5.	Beware of Tuesdays. And Octobers.<br>\n\
	    	<br>6.	Kurt Vonnegut was right. ‘Reading and writing are the most nourishing forms of meditation anyone has so far found.’<br>\n\
	    	<br>7.	Listen more than you talk.<br>\n\
	    	<br>8.	Don’t feel guilty about being idle. More harm is probably done to the world through work than idleness. But perfect your idleness. Make it mindful.<br>\n\
	    	<br>9.	Be aware that you are breathing.<br>\n\
	    	<br>10.	Wherever you are, at any moment, try and find something beautiful. A face, a line out of a poem, the clouds out of a window, some graffiti, a wind farm. Beauty cleans the mind.<br>\n\ ",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"<h3> How to live, Part 2 (forty pieces of advice I feel to be helpful but which I don’t always follow): </h3>\n\
	    	11.	Hate is a pointless emotion to have inside you. It is like eating a scorpion to punish it for stinging you.<br>\n\
	    	<br>12.	Go for a run. Then do some yoga.<br>\n\
	    	<br>13.	Shower before noon.<br>\n\
	    	<br>14.	Look at the sky. Remind yourself of the cosmos. Seek vastness at every opportunity, in order to see the smallness of yourself.<br>\n\
	    	<br>15.	Be kind.<br>\n\
	    	<br>16.	Understand that thoughts are thoughts. If they are unreasonable, reason with them, even if you have no reason left. You are the observer of your mind, not its victim.<br>\n\
	    	<br>17.	Do not watch TV aimlessly. Do not go on social media aimlessly. Always be aware of what you are doing, and why you are doing it. Don’t value TV less. Value it more. Then you will watch it less. Unchecked distractions will lead you to distraction.<br>\n\
	    	<br>18.	Sit down. Lie down. Be still. Do nothing. Observe. Listen to your mind. Let it do what it does without judging it. Let it go, like the Snow Queen in <i> Frozen </i>.<br>\n\
	    	<br>19.	Don’t worry about things that probably won’t happen.<br>\n\
	    	<br>20.	Look at trees. Be near trees. Plant trees. (Trees are great.)",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"<h3> How to live, Part 3 (forty pieces of advice I feel to be helpful but which I don’t always follow): </h3>\n\
	    	21.	Listen to that yoga instructor on YouTube, and ‘walk as if you are kissing the Earth with your feet’.<br>\n\
	    	<br>22.	Live. Love. Let go. The three Ls.<br>\n\
	    	<br>23.	Alcohol maths. Wine multiplies itself by itself. The more you have, the more you are likely to have. And if it’s hard to stop at one glass, it will be impossible at three. Addition is multiplication.<br>\n\
	    	<br>24.	Beware of the gap. The gap between where you are and where you want to be. Simply thinking of the gap widens it. And you end up falling through.<br>\n\
	    	<br>25.	Read a book without thinking about finishing it. Just read it. Enjoy every word, sentence, and paragraph. Don’t wish for it to end, or for it to never end.<br>\n\
	    	<br>26.	No drug in the universe will make you feel better, at the deepest level, than being kind to other people.<br>\n\
	    	<br>27.	Listen to what Hamlet – literature’s most famous depressive – told Rosencrantz and Guildenstern. ‘There is nothing either good or bad, but thinking makes it so.’<br>\n\
	    	<br>28.	If someone loves you, let them. Believe in that love. Live for them, even when you feel there is no point.<br>\n\
	    	<br>29.	You don’t need the world to understand you. It’s fine. Some people will never really understand things they haven’t experienced. Some will. Be grateful.<br>\n\
	    	<br>30.	Jules Verne wrote of the ‘Living Infinite’. This is the world of love and emotion that is like a ‘sea’. If we can submerge ourselves in it, we find infinity in ourselves, and the space we need to survive.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	    },
	    {
	    	quote:"<h3> How to live, Part 4 (forty pieces of advice I feel to be helpful but which I don’t always follow): </h3>\n\
	    	31.	Three in the morning is never the time to try and sort out your life.<br>\n\
	    	<br>32.	Remember that there is nothing weird about you. You are just a human, and everything you do and feel is a natural thing, because we are natural animals. You are nature. You are a hominid ape. You are in the world and the world is in you. Everything connects.<br>\n\
	    	<br>33.	Don’t believe in good or bad, or winning and losing, or victory and defeat, or up and down. At your lowest and at your highest, whether you are happy or despairing or calm or angry, there is a kernel of you that stays the same. That is the you that matters.<br>\n\
	    	<br>34.	Don’t worry about the time you lose to despair. The time you will have afterwards has just doubled its value.<br>\n\
	    	<br>35.	Be transparent to yourself. Make a greenhouse for your mind. Observe.<br>\n\
	    	<br>36.	Read Emily Dickinson. Read Graham Greene. Read Italo Calvino. Read Maya Angelou. Read anything you want. Just read. Books are possibilities. They are escape routes. They give you options when you have none. Each one can be a home for an uprooted mind.<br>\n\
	    	<br>37.	If the sun is shining, and you can be outside, <i> be outside </i>.<br>\n\
	    	<br>38.	Remember that the key thing about life on earth is change. Cars rust. Paper yellows. Technology dates. Caterpillars become butterflies. Nights morph into days. Depression lifts.<br>\n\
	    	<br>39.	Just when you feel you have no time to relax, know that this is the moment you most need to make time to relax.<br>\n\
	    	<br>40.	Be brave. Be strong. Breathe, and keep going. You will thank yourself later.",
	    	name:"Matt Haig",
			book:"Reasons to Stay Alive"
	  //   },
	  //   {
	  //   	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	  //   	name:"George Carlin"
	  //   },
	  //   {
	  //   	quote:"Always do whatever's next.",
	  //   	name:"George Carlin"
	  //   },
	  //   {
	  //   	quote:"Atheism is a non-prophet organization.",
	  //   	name:"George Carlin"
	  //   },
	  //   {
	  //   	quote:"Hapiness is not something ready made. It comes from your own actions.",
	  //   	name:"Dalai Lama"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			var quoteBook = $('#quoteBook').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			var newQuoteBook = quoteSource[randomNumber].book;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>'+'<p id="quoteBook">'+newQuoteBook+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready