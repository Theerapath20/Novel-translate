import { useState } from 'react'
import './App.css'
import Story from './component/story'

function App() {
   const text = `Once in a forest, there was a speedy hare who liked to brag about how fast he could run. One day he saw a sluggish tortoise slowly crawling along. So, he laughed out loud and said to the tortoise, “Tortoise! You move very slowly. When will you ever reach your destination?”

“Though my pace is slow, I can get back home every day. Should we have a race and see if you could beat me?” challenged the tortoise.

The hare was confident that he could never be outraced by the tortoise so he accepted the challenge. The next day all the forest animals came along to watch the race.

After the signal to start the race, the hare rushed off with great speed while the tortoise plodded very slowly behind. Having almost reached the goal, the hare was confident that he would surely win the race. “I could even take a little nap since Tortoise will never catch up with me,” thought the hare as he decided to lay down under a tree and fell fast asleep.

The tortoise, meanwhile, continued to plod on slowly and steadily until he finally approached the finish line.

The hare suddenly woke up. After realizing how long he’d slept, he quickly looked around in panic. The hare decided to speed to the finish line as fast as possible. However, it was too late because all the forest animals were gathering to congratulate the tortoise on his triumph.`;


  return (
    <div className='app'>
     <Story text={text} />
     <p className='footer'>
      copyright@Theerapath 
     </p>
    </div>
  )
}

export default App
