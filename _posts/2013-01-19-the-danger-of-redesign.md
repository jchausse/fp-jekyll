---
layout: post
title:  "The Danger of Redesign"
date:   2013-01-13
---

![Image of Burning Matches](/assets/img/posts/danger.jpg){:class="post-image"}

I just got back from [An Event Apart Boston](http://archive.aneventapart.com/2012/boston/?/2012/boston/) – an amazing experience every year. The presentation that wound up sticking in my head the most was Jared Spool’s – in which he talked about “intuitive experiences”. The intuitiveness of a system is not an absolute property of that system – it is variable based upon the experiences of the system’s user. And if you're not careful, a redesign intended to make things better for everyone can be a disaster for your bottom line.

Complex systems can be intuitive to the right user. My mother certainly couldn’t develop a Ruby on Rails site – but talk to anyone who’s been doing it for a while, and they’ll say Rails is *incredibly* intuitive. It’s all a matter of experience.

**The intuitiveness of a system is the inverse of the distance between the user’s “current knowledge” (what they already know how to do) and the “target knowledge” needed to use that system.**

There are two ways to narrow that distance: You can *increase* the user’s current knowledge via training (never a good approach on the public web – *no one* ever reads instructions on how to use a website), or you can *decrease* the target knowledge required to use the system.

So, simplifying systems is a good thing, right? Well, maybe. Simplification changes the nature of the “target knowledge” needed to use a system, but doesn’t linearly move it closer to the user’s knowledge. Simplification invariably introduces change, and change invariably requires adaptation by people familiar with the system being simplified. A system *can* be redesigned to be more usable (and intuitive) to brand new users, but with a website, that is never the full picture.

Because here’s the kicker. **A system is, by definition, intuitive to the people who are already using it effectively.** This is why people get so up in arms when sites like Facebook and Twitter change their design. Outsiders may think the changes are good, or at least barely noticeable – but people who use those sites **constantly** have to change *highly-ingrained* behavior. The reason Facebook gets so much attention for “constantly changing for the worse” is because it has the most *highly efficient* users of any site in the world.

So, here’s where it gets really interesting. In Jared’s talk, he discussed a large eCommerce site with over $1,000,000,000 in annual revenue. Like all eCommerce sites, only a small fraction of people visiting the site actually make a purchase. In this company’s case, their “conversion rate” was 1.6% – out of every 1,000,000 visitors, 16,000 people made a purchase. But out of that 1.6 percent, 20% of those users (heavy, active users) accounted for 80% of all revenue.

So, if you’re this company, and you want to generate more revenue with your site, what would you do? Well, what most companies try to do is get more people into the heavy group (or at least the "actually made a purchase" group) – and they’ll do this by redesigning their system to be easier to use. But, again, **any redesign makes a system less intuitive to its most active current users.**

Let’s say frustration from these changes causes the heavy users to spend 13% less money on the site. That means a loss of over 10% overall revenue for the company – in this company’s case, over $100,000,000 per year! Now, if things went according to plan, this loss will be buffered a bit by new customers, or possibly “light” customers who buy a little bit more.

But you are taking a *huge* gamble that you’ll make up this difference. In one real world case Jared discusses, a major retailer made a $100,000,000 major site redesign and lost 20% of its site revenue – from which it took three and a half years to recover!

Ever wonder why online flight-booking systems never seem to get easier to use? Why they’re always so complex? Well, even moreso than most companies, airline profits are driven by “power users”. Any change will have a major ripple effect in their profits.

**The harder your site is to use, the more invested your power users are in having it stay just the way it is.**

It’s a weird, counterintuitive fact - **the harder your site is to use, the more you risk by changing it!**

What are the takeaways?

1. The best thing to do is make your site easy to use out of the gate. Hopefully, that’s a no-brainer.

2. Risk is just that – risk. Risk is taken with the hope of reward. You may take this type of gamble and come out ahead. But, you should go into a redesign asking yourself – if we lost *all* of our current customers, would the customers attracted by this redesign make up for it (and then some?) If you can confidently say yes, then you’re probably in a good place to give a major redesign a shot (because in reality, you’ll never lose *all* your existing customers due to “change frustration”)

3. The safest approach to take is to do slow, gradual redesigns – which incrementally make things easier for light or non-users, but don’t risk significant frustration from heavy users (and you can easily A/B test your ideas to quantitatively measure the actual effect each change on your revenue). This is the approach Amazon.com has always taken. Look at today’s Amazon vs. the Amazon of 5 years ago, and you’ll see a very different site, but you’ll be hard-pressed to think of any point at which it made a radical redesign – the closest change which comes to mind is when they abandoned the top navigation “tabs” – which they were forced to do because they ran out of room. Even in that case, they approached the change very cautiously, and with a large amount of testing.
